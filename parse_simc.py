#!/usr/bin/env python3
"""Parse SimulationCraft output and extract spec data with all spell IDs."""

import re
import json
from collections import defaultdict
from pathlib import Path

def parse_simc_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    specs_data = {}

    # Known multi-word class names
    multi_word_classes = ['Death_Knight', 'Demon_Hunter']

    # Split by player character to process each one
    player_blocks = re.split(r'^(MID1_[^\s]+)', content, flags=re.MULTILINE)

    i = 1
    while i < len(player_blocks):
        player_name = player_blocks[i]
        block = player_blocks[i+1] if i+1 < len(player_blocks) else ""

        # Extract class/spec from player name
        # Try multi-word classes first
        class_name = None
        spec_name = None
        hero_tree = None

        for multi_class in multi_word_classes:
            if player_name.startswith(f'MID1_{multi_class}_'):
                class_name = multi_class
                remainder = player_name[len(f'MID1_{multi_class}_'):]
                parts = remainder.split('_', 1)
                spec_name = parts[0]
                hero_tree = parts[1] if len(parts) > 1 else None
                break

        if not class_name:
            # Single-word class
            match = re.match(r'MID1_([^_]+)_([^_]+)(?:_(.+))?', player_name)
            if not match:
                i += 2
                continue
            class_name = match.group(1)
            spec_name = match.group(2)
            hero_tree = match.group(3) if match.group(3) else None

        # Sanitize spec name for filename - include hero tree if present
        safe_hero_tree = hero_tree.replace("'", "").replace("-", "_") if hero_tree else ""
        if safe_hero_tree:
            safe_spec = f"{class_name}_{spec_name}_{safe_hero_tree}"
        else:
            safe_spec = f"{class_name}_{spec_name}"

        # Initialize if not seen before
        if safe_spec not in specs_data:
            specs_data[safe_spec] = {
                'metrics': {},
                'abilities': {},
                'talents': None,
                'set_bonuses': [],
                'passive_effects': [],
                'dynamic_effects': [],
                'buffs': {},
                'stats': {},
                'spelldata': {},
                'class': class_name,
                'spec': spec_name,
                'hero_tree': hero_tree or None,
            }

        # Extract DPS/HPS metrics
        metrics_match = re.search(r':\s+([\d,]+)\s+dps,\s+([\d,]+)\s+dtps,\s+([\d,]+)\s+hps', block)
        if metrics_match:
            specs_data[safe_spec]['metrics'] = {
                'dps': metrics_match.group(1).replace(',', ''),
                'dtps': metrics_match.group(2).replace(',', ''),
                'hps': metrics_match.group(3).replace(',', ''),
            }

        # Extract abilities with damage/healing data from Abilities section
        ability_match = re.search(r'Abilities\s+MID1_[^\t]+\t[\d,]+\t(.*?)(?=Stats Details|Action Details|\nStats Results|$)', block, re.DOTALL)
        if ability_match:
            ability_text = ability_match.group(1)
            # Parse ability lines - format is: name TAB damage TAB % TAB other_data
            for line in ability_text.split('\n'):
                if not line.strip():
                    continue

                # Skip lines that are headers or continuations
                if line.strip().startswith('Stats') or line.strip().startswith('Direct') or line.strip().startswith('Periodic'):
                    break

                # Extract ability name and damage
                # Abilities have tabs as separators
                parts = line.split('\t')
                if len(parts) >= 2:
                    ability_name = parts[0].strip()
                    damage_str = parts[1].strip()

                    # Valid ability line: name is not empty, not starting with stats keywords
                    if ability_name and damage_str and not any(ability_name.startswith(x) for x in ['Type', 'Percent', 'damage', 'Stats']):
                        specs_data[safe_spec]['abilities'][ability_name] = {
                            'damage': damage_str,
                            'percent': parts[2].strip() if len(parts) > 2 else ''
                        }

        # Extract spell data (ID, school, etc.) - look for all "Action Details:" sections
        spelldata_matches = re.finditer(r'Action Details: ([^\n]+)\n(.*?)(?=Action Priority|Affected By|pet -|^[A-Z]|\n\n[A-Z])', block, re.DOTALL | re.MULTILINE)
        for spelldata_section in spelldata_matches:
            action_name = spelldata_section.group(1).strip()
            spelldata_text = spelldata_section.group(2)

            spell_id = None
            school = None
            spell_info = {}

            # Split into lines and process
            lines = spelldata_text.split('\n')
            for i, line in enumerate(lines):
                line_stripped = line.strip()
                if not line_stripped:
                    continue

                # Look for id:, school:, etc.
                if line_stripped.startswith('id:'):
                    spell_id = line_stripped[3:].strip()
                    spell_info['id'] = spell_id
                elif line_stripped.startswith('school:'):
                    school = line_stripped[7:].strip()
                    spell_info['school'] = school
                elif line_stripped.startswith('range:'):
                    spell_info['range'] = line_stripped[6:].strip()
                elif line_stripped.startswith('name:'):
                    spell_info['name'] = line_stripped[5:].strip()
                elif line_stripped.startswith('harmful:'):
                    spell_info['harmful'] = line_stripped[8:].strip()

            if spell_id:
                specs_data[safe_spec]['spelldata'][action_name] = spell_info

        # Extract talent string
        talent_match = re.search(r'Talent\s+(\S+)', block)
        if talent_match:
            specs_data[safe_spec]['talents'] = talent_match.group(1)

        # Extract set bonuses
        set_bonus_match = re.search(r'Set Bonus\s+(.+?)(?:\n|Charts)', block)
        if set_bonus_match:
            set_text = set_bonus_match.group(1)
            bonuses = [b.strip() for b in set_text.split('\n') if b.strip()]
            specs_data[safe_spec]['set_bonuses'] = bonuses

        # Extract passive effects
        passive_section = re.search(r'Passive Effects.*?(?=Passive Modified Spell|Dynamic Effects|$)', block, re.DOTALL)
        if passive_section:
            passive_text = passive_section.group(0)
            for line in passive_text.split('\n'):
                if line.strip() and not line.startswith('Type') and not line.startswith('Passive'):
                    specs_data[safe_spec]['passive_effects'].append(line.strip())

        # Extract dynamic effects
        dynamic_section = re.search(r'Dynamic Effects.*?(?=Rune waste|$)', block, re.DOTALL)
        if dynamic_section:
            dynamic_text = dynamic_section.group(0)
            for line in dynamic_text.split('\n'):
                if line.strip() and not line.startswith('Type') and not line.startswith('Dynamic'):
                    specs_data[safe_spec]['dynamic_effects'].append(line.strip())

        # Extract buffs/uptime
        buffs_section = re.search(r'Buffs.*?(?=Constant Buffs|Procs|$)', block, re.DOTALL)
        if buffs_section:
            buffs_text = buffs_section.group(0)
            for line in buffs_text.split('\n')[1:]:  # Skip header
                if line.strip() and not line.startswith('Buffs') and not line.startswith('Trigger'):
                    parts = line.split()
                    if len(parts) >= 2:
                        buff_name = parts[0]
                        specs_data[safe_spec]['buffs'][buff_name] = line.strip()

        i += 2

    return specs_data

def write_spec_files(specs_data, output_dir):
    output_path = Path(output_dir) / 'simc-guides'
    output_path.mkdir(parents=True, exist_ok=True)

    for spec_name, data in sorted(specs_data.items()):
        # Create markdown file
        class_name = data.get('class', '?')
        spec = data.get('spec', '?')
        hero_tree = data.get('hero_tree')

        title = f"{class_name} {spec}"
        if hero_tree:
            title += f" ({hero_tree})"

        md_content = f"# {title}\n\n"
        md_content += f"**Class**: {class_name}  \n"
        md_content += f"**Spec**: {spec}  \n"
        if hero_tree:
            md_content += f"**Hero Tree**: {hero_tree}  \n"
        md_content += "\n"

        md_content += "## Metrics\n\n"
        if data['metrics']:
            md_content += f"- **DPS**: {data['metrics'].get('dps', 'N/A')}\n"
            md_content += f"- **DTPS**: {data['metrics'].get('dtps', 'N/A')}\n"
            md_content += f"- **HPS**: {data['metrics'].get('hps', 'N/A')}\n\n"

        md_content += "## Spell IDs & Abilities\n\n"
        if data['spelldata']:
            md_content += "| Ability | Spell ID | School |\n"
            md_content += "|---------|----------|--------|\n"
            for ability, info in sorted(data['spelldata'].items()):
                spell_id = info.get('id', 'N/A')
                school = info.get('school', 'N/A')
                md_content += f"| {ability} | {spell_id} | {school} |\n"
            md_content += "\n"

        md_content += "## Talents\n\n"
        if data['talents']:
            md_content += f"```\n{data['talents']}\n```\n\n"

        md_content += "## Set Bonuses\n\n"
        if data['set_bonuses']:
            for bonus in data['set_bonuses']:
                md_content += f"- {bonus}\n"
            md_content += "\n"

        md_content += "## Passive Effects\n\n"
        if data['passive_effects']:
            for effect in data['passive_effects'][:30]:  # Increased limit
                md_content += f"- {effect}\n"
            if len(data['passive_effects']) > 30:
                md_content += f"- ... and {len(data['passive_effects']) - 30} more\n"
            md_content += "\n"

        md_content += "## Dynamic Effects\n\n"
        if data['dynamic_effects']:
            for effect in data['dynamic_effects'][:30]:  # Increased limit
                md_content += f"- {effect}\n"
            if len(data['dynamic_effects']) > 30:
                md_content += f"- ... and {len(data['dynamic_effects']) - 30} more\n"
            md_content += "\n"

        # Write markdown
        md_file = output_path / f"{spec_name}.md"
        with open(md_file, 'w', encoding='utf-8') as f:
            f.write(md_content)

        # Write JSON for programmatic access
        json_file = output_path / f"{spec_name}.json"
        with open(json_file, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2)

if __name__ == '__main__':
    input_file = 'Trivial.txt'
    output_dir = '.'

    print("Parsing SimulationCraft data...")
    specs_data = parse_simc_file(input_file)

    print(f"Found {len(specs_data)} specs")

    print("Writing spec files...")
    write_spec_files(specs_data, output_dir)

    print("Done!")
