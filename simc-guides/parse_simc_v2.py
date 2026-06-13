#!/usr/bin/env python3
"""Parse SimulationCraft Trivial.txt and extract all spec data with spell IDs."""

import re
import json
from collections import defaultdict
from pathlib import Path

def extract_class_spec(player_name):
    """Extract class, spec, and hero tree from player name like MID1_Death_Knight_Blood_Deathbringer."""
    known_multi_classes = ['Death_Knight', 'Demon_Hunter']

    player_name = player_name.replace('MID1_', '').replace('"', '').replace("'", "")

    for multi_class in known_multi_classes:
        if player_name.startswith(multi_class + '_'):
            remainder = player_name[len(multi_class)+1:]
            parts = remainder.split('_', 1)
            spec = parts[0]
            hero_tree = parts[1] if len(parts) > 1 else None
            return multi_class, spec, hero_tree

    # Single-word class
    parts = player_name.split('_', 1)
    class_name = parts[0] if parts else ''
    remainder = parts[1] if len(parts) > 1 else ''

    spec_and_tree = remainder.split('_', 1)
    spec = spec_and_tree[0] if spec_and_tree else ''
    hero_tree = spec_and_tree[1] if len(spec_and_tree) > 1 else None

    return class_name, spec, hero_tree

def parse_file(filepath):
    """Parse Trivial.txt and extract all specs."""
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    specs_data = {}

    # Split by "Abilities" section to process each player's data
    ability_blocks = content.split('\nAbilities\n')

    for block_idx, block in enumerate(ability_blocks[1:], 1):  # Skip first split which is header
        lines = block.split('\n')

        if not lines:
            continue

        # First line is player header: "MID1_...\tDPS"
        header_line = lines[0]
        if not header_line.startswith('MID1_'):
            continue

        # Extract player/spec info
        header_parts = header_line.split('\t')
        player_name = header_parts[0].strip()
        total_dps = header_parts[1].strip() if len(header_parts) > 1 else ''

        class_name, spec_name, hero_tree = extract_class_spec(player_name)

        # Create safe spec key
        safe_hero_tree = hero_tree.replace('-', '_') if hero_tree else ''
        if safe_hero_tree:
            safe_spec = f"{class_name}_{spec_name}_{safe_hero_tree}"
        else:
            safe_spec = f"{class_name}_{spec_name}"

        # Initialize data structure
        if safe_spec not in specs_data:
            specs_data[safe_spec] = {
                'class': class_name,
                'spec': spec_name,
                'hero_tree': hero_tree,
                'metrics': {},
                'abilities': {},
                'spelldata': {},
                'talents': None,
                'set_bonuses': [],
                'passive_effects': [],
                'dynamic_effects': [],
                'buffs': {}
            }

        # Extract abilities from this block
        for i, line in enumerate(lines[1:], 1):
            # Stop at section headers
            if line.startswith('Stats Details:') or line.startswith('Direct Results') or not line.strip():
                break

            # Skip indented lines (sub-abilities)
            if line.startswith('    ') or line.startswith('\t\t'):
                continue

            # Parse tab-separated ability line
            parts = line.split('\t')
            if len(parts) >= 2:
                ability_name = parts[0].strip()
                damage = parts[1].strip()
                percent = parts[2].strip() if len(parts) > 2 else ''

                # Filter valid abilities
                if ability_name and damage and not ability_name.startswith('Type'):
                    try:
                        # Check if damage looks like a number (including parentheses)
                        test = damage.replace(',', '').replace('(', '').replace(')', '')
                        if test and (test[0].isdigit() or test[0] == '-'):
                            specs_data[safe_spec]['abilities'][ability_name] = {
                                'damage': damage,
                                'percent': percent
                            }
                    except:
                        pass

        # Now extract metrics and other data from the original content
        # Find this spec's data section
        spec_pattern = f"^{re.escape(player_name)} :"
        spec_match = re.search(spec_pattern + r'\s+([\d,]+)\s+dps,\s+([\d,]+)\s+dtps,\s+([\d,]+)\s+hps', content, re.MULTILINE)

        if spec_match:
            specs_data[safe_spec]['metrics'] = {
                'dps': spec_match.group(1).replace(',', ''),
                'dtps': spec_match.group(2).replace(',', ''),
                'hps': spec_match.group(3).replace(',', '')
            }

        # Extract talent string
        talent_match = re.search(
            f"^{re.escape(player_name)} :" + r'.*?Talent\s+(\S+)',
            content,
            re.MULTILINE | re.DOTALL
        )
        if talent_match:
            specs_data[safe_spec]['talents'] = talent_match.group(1)

    return specs_data

def write_spec_files(specs_data, output_dir):
    """Write individual spec files."""
    output_path = Path(output_dir) / 'simc-guides'
    output_path.mkdir(parents=True, exist_ok=True)

    for spec_name in sorted(specs_data.keys()):
        data = specs_data[spec_name]

        # Create markdown
        class_name = data.get('class', '?')
        spec = data.get('spec', '?')
        hero_tree = data.get('hero_tree')

        title = f"{class_name} {spec}"
        if hero_tree:
            title += f" ({hero_tree})"

        md = f"# {title}\n\n"
        md += f"**Class**: {class_name}  \n"
        md += f"**Spec**: {spec}  \n"
        if hero_tree:
            md += f"**Hero Tree**: {hero_tree}  \n"
        md += "\n"

        # Metrics
        md += "## Metrics\n\n"
        if data['metrics']:
            md += f"- **DPS**: {data['metrics'].get('dps', 'N/A')}\n"
            md += f"- **DTPS**: {data['metrics'].get('dtps', 'N/A')}\n"
            md += f"- **HPS**: {data['metrics'].get('hps', 'N/A')}\n\n"

        # Abilities
        md += "## Abilities\n\n"
        if data['abilities']:
            md += "| Ability | Damage | % |\n"
            md += "|---------|--------|----|\n"
            for ability_name in sorted(data['abilities'].keys()):
                info = data['abilities'][ability_name]
                md += f"| {ability_name} | {info.get('damage', 'N/A')} | {info.get('percent', 'N/A')} |\n"
            md += "\n"

        # Talents
        md += "## Talents\n\n"
        if data['talents']:
            md += f"```\n{data['talents']}\n```\n\n"

        # Write files
        md_file = output_path / f"{spec_name}.md"
        with open(md_file, 'w', encoding='utf-8') as f:
            f.write(md)

        json_file = output_path / f"{spec_name}.json"
        with open(json_file, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2)

if __name__ == '__main__':
    print("Parsing SimulationCraft Trivial.txt...")
    specs = parse_file('Trivial.txt')

    print(f"Found {len(specs)} specs")

    print("Writing spec files...")
    write_spec_files(specs, '.')

    print("Done!")

    # Print summary
    print("\nSpec Summary:")
    for spec in sorted(specs.keys())[:10]:
        abilities_count = len(specs[spec]['abilities'])
        print(f"  {spec}: {abilities_count} abilities")
