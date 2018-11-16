module.exports = {
  Config: {
    Language: 'English'
  },
  Interface: {
    Lang: 'Language 语言',
    Menu: 'Menu',
    New_file: 'New',
    Open_file: 'Open',
    Open_Success: 'File is open',
    Open_Failure: 'File failed to open',
    Save_file: 'Save',
    Save_Success: 'Save successfully',
    Save_Failure: 'Save failed',
    About: 'About',
    Setting: 'Settings',
    Elimination_unknown_weapons: 'Exclude unknown weapons',
    Raw_data_comparison: 'raw data comparison',
    Binary_mode: 'binary mode',
    Dark_theme: 'Dark theme',
    Data_version: 'data version',
    Original_file_version: 'original file version',
    Extract_from: 'Extract from',
    Current_file: 'current file',
    Read: 'OK',
    Refuse: 'Reject',
    Loading: 'Loading, please wait a moment',
    Instructions: 'Instructions for use',
    No_file_opened: 'Unopened file',
    No_data: 'No data available',
    Original: 'Original',
    Old_version: 'Compatibility mode',
    Version_update: 'Version update',
    Update_description: 'Update description',
    Old_version_save: 'Do not save compatibility mode.',
    Weapon: 'Weapon',
    Weaponsmiscellaneous: 'Weapons miscellaneous'
  },
  Explanatory: {
    Elimination_unknown_weapons: 'Exclude undocumented weapon data from the weapon information list',
    Raw_data_comparison: 'Compare with the original weapon information recorded in the system',
    Binary_mode: 'Display the file mode of the binary data of the file, the binary data is displayed according to the weapon type',
    Dark_theme: 'Switch UI to dark theme',
    About_content: 'This software can view and modify the weapon data files in Monster Hunter World. The modified file will be placed under Monster Hunter World\\nativePC\\common\\equip\\. Modified files will affect game balance and should not be used online. ',
    About_edition: 'Software version: 0.9.6',
    Instructions: '<h3>The tool can read the unwrapped weapon data, built in the current version of the weapon data file, and directly create a new mod file. Partial value modification will be automatically corrected according to the inherent coefficient. The weapon information is manually entered, which may be different from the current version data. Do not use the modified file for online use.</h3><br><h4>Usage:</h4><br><span>&nbsp;&nbsp;1. Open the unpacked mod file or click New to select the desired weapon file.</span><br><span>&nbsp;&nbsp;2, search or manually find the weapon to be modified.</span><br><span>&nbsp;&nbsp;3. Change the corresponding attribute to the value you want.</span><br><span>&nbsp;&nbsp;4.Click Save to save the file to the (Your game\\nativePC\\common\\equip\\).</span><br><br><h4>The tool source code is posted on Github: https://github.com/HalcyonAlcedo/MHW-Weaponeditor</h4>',
    Old_version: 'The data file will be opened in the 154766 version file format.',
    Old_version_open: 'Compatibility mode is ON. Please re-open the data file.',
    Old_version_close: 'Compatibility mode is OFF. Please re-open the data file.',
    Version_update: 'Update the currently open file to the new version',
    Version_update_true: 'The version data is updated. Don\'t forget to save the data file.',
    Free_model: 'modify the model only if you know what your doing',
    Have_model: 'to close the model, change it to 65535',
    Update_description: '<ul><li>Repair skills to modify bug</li><li>Weapon skill description</li><li>Adding custom models can be an option.</li><li>Add description interface language switch</li><li>Adding traditional Chinese</li><li>Add English</li><li>Modify the default language for traditional Chinese</li></ul>'
  },
  Weaponsmiscellaneous: {
    Sharpness: 'Sharpness',
    Wswordattribute: 'Double attribute',
    Saxebottle: 'Saxe bottle',
    Bombardment: 'Bombardment'
  },
  Sharpness: {
    Number: 'Sharpness Id',
    Weaponlist: 'List of weapons affected',
    Red: 'Red Sharpness',
    Orange: 'Orange Sharpness',
    Yellow: 'Yellow Sharpness',
    green: 'Green Sharpness',
    blue: 'Blue Sharpness',
    white: 'White Sharpness',
    purple: 'Purple Sharpness'
  },
  Wswordattribute: {
    Number: 'Double knife Double attribute Id',
    First_attribute: 'The first attribute',
    First_attribute_values: 'The first attribute values',
    Second_attribute: 'The second attribute',
    Second_attribute_values: 'The second attribute values'
  },
  Saxebottle: {
    Number: 'Saxe bottle Id',
    Bottle_type: 'Bottle type',
    Attribute_values: 'Attribute values'
  },
  Bombardment: {
    Number: 'Bombardment Id',
    Bombard_type: 'Bombardment type',
    Bombard_level: 'Bombardment level'
  },
  Weapon: {
    Charge_blade: 'Charge Blade',
    Gunlance: 'Gunlance',
    Hammer: 'Hammer',
    Greatsword: 'Greatsword',
    Lance: 'Lance',
    Insect_glaive: 'Insect Glaive',
    Switch_axe: 'Switch Axe',
    Blade: 'Sword and Shield',
    Longsword: 'Longsword',
    Dual_blade: 'Dual Blade',
    Hunting_horn: 'Hunting Horn',
    Light_crossbow: 'Light Bowgun',
    Heavy_crossbow: 'Heavy Bowgun',
    Hunting_bow: 'Bow',
    Unknown: 'Unknown'
  },
  WeaponExplain: {
    Describe: 'Description',
    Address: 'address',
    Edit_data: 'Modify data',
    Sequence_number: 'weapon serial number',
    Independent_model: 'Independent model',
    Weapon_model: 'Weapon Model',
    Weapon_secondary_model: 'Secondary model',
    Manufacturing_costs: 'Crafting Cost',
    Production_expenses: 'Rarity',
    Chopping_value: 'Sharpness Matching',
    Chopping_grade: 'Sharpness',
    Chopping_grade_quick1: 'Short White',
    Chopping_grade_quick2: 'Medium White',
    Chopping_grade_quick3: 'Long White',
    Reset: 'Reset',
    Damage: 'Damage (Visible Value)',
    Defense: 'Defense Bonus',
    Heart: 'Affinity',
    Visible_attributes: 'Element',
    Visible_attribute_values: 'Elemental Damage (Visible Value)',
    Hidden_attributes: 'Hidden Element',
    Hidden_attribute_values: 'Hidden Elemental Damage (Visible Value)',
    Match_projectile: 'Ammo Table',
    Ballistic_offset: 'Deviation',
    Seal_Dragon: 'Elderseal',
    Slot_grade_Number: 'Number of slots',
    Slot_grade_Number1: 'Level 1',
    Slot_grade_Number2: 'Level 2',
    Slot_grade_Number3: 'Level 3',
    Special_attributes: 'Special attribute',
    Weapon_skills: 'Weapon skills',
    Unknown: 'Unknown',
    Nothing: 'None',
    Big: 'High',
    Inside: 'Average',
    Small: 'Low',
    NoGroove: '0 Decoration slot',
    OneGroove: '1 Decoration slot',
    TwoGroove: '2 Decoration slot',
    ThreeGroove: '3 Decoration slot',
    OneGroovel: 'Level 1',
    TwoGroovel: 'Level 2',
    ThreeGroovel: 'Level 3',
    Specialprojectile: 'Special Ammo',
    Setbomb: 'Wyvernblast',
    Gatling: 'Wyvernheart',
    Snipe: 'Wyvernsnipe',
    Error: 'Error',
    Fire: 'Fire',
    Water: 'Water',
    Ice: 'Ice',
    Electricity: 'Lightning',
    Dragon: 'Dragon',
    Poison: 'Poison',
    Hemp: 'Paralysis',
    Sleep: 'Sleep',
    Burst: 'Blast',
    Cut: 'Sever Boost',
    Strike: 'Blunt Boost',
    Attribute: 'Elemental Boost',
    Speed: 'Speed Boost',
    Endurance: 'Endurance Boost',
    Restores: 'Heal Boost',
    Extinguish_dragon: 'Dragon Phial',
    Reduce_breath: 'Exhaust Phial',
    Strong_exocet_bottle: 'Power/Impact Phial',
    Strong_attribute_bottle: 'Power Elemental/Elemental Phial',
    Normal_type: 'Normal type',
    Diffusion_type: 'Diffusion type',
    Radiological_type: 'Radiological type'
  },
  Skill: {
    0: 'None',
    1: 'Poison Resistance',
    2: 'Paralysis Resistance',
    3: 'Sleep Resistance',
    4: 'Stun Resistance',
    5: 'Muck Resistance',
    6: 'Blast Resistance',
    7: 'Bleeding Resistance',
    8: 'Iron Skin',
    9: 'Res Down Resistance',
    11: 'Earplugs',
    12: 'Wind Proof',
    13: 'Tremor Resistance',
    14: 'Dung Master',
    16: 'Effluvial Expert',
    17: 'Heat Guard',
    19: 'Attack Boost',
    20: 'Defense Boost',
    21: 'Health Boost',
    22: 'Recovery Up',
    23: 'Recovery Speed',
    24: 'Fire Resistance',
    25: 'Water Resistance',
    26: 'Ice Resistance',
    27: 'Thunder Resistance',
    28: 'Dragon Resistance',
    29: 'Blight Resistance',
    30: 'Fire Attack',
    31: 'Water Attack',
    32: 'Ice Attack',
    33: 'Thunder Attack',
    34: 'Dragon Attack',
    35: 'Poison Attack',
    36: 'Paralyzed Attack',
    37: 'Sleep Attack',
    38: 'Blasting Attack',
    39: 'Normal Shotss',
    40: 'Piercing Shots',
    41: 'Spread/Power Shots',
    42: 'Poison Functionality',
    43: 'Para Functionality',
    44: 'Sleep Functionality',
    46: 'Blasting Functionality',
    47: 'Free Elem/Ammo Up',
    48: 'Critical Eye',
    49: 'Critical Boost',
    50: 'Weakness Exploit',
    51: 'Repeat Offender (Unused content)',
    52: 'Focus',
    53: 'Power Prolonger',
    54: 'Handicraft',
    55: 'Critical Draw',
    56: 'Partbreaker',
    57: 'Slugger',
    58: 'Stamina Thief',
    59: 'Master Mounter',
    60: 'Airborne',
    61: 'Latent Power',
    62: 'Agitator',
    63: 'Peak Performance',
    64: 'Heroics',
    65: 'Fortify',
    66: 'Resentment',
    67: 'Resuscitate',
    68: 'Horn Maestro',
    69: 'Capacity Boost',
    70: 'Special Ammo Boost',
    71: 'Artillery',
    72: 'heavy Artillery',
    73: 'Marathon Runner',
    74: 'Constitution',
    75: 'Leap of Faith',
    76: 'Stamina Surge',
    77: 'Hunger Resistance',
    78: 'Evade Window',
    79: 'Evade Extender',
    80: 'Guard',
    81: 'Quick Sheath',
    82: 'Wide Range',
    83: 'Item Prolonger',
    84: 'Free Meal',
    85: 'Speed Eating',
    86: 'Speed Sharpening',
    88: 'Bombardier',
    90: 'Mushroomancer',
    91: 'Master Fisher',
    92: 'BBQ Master',
    93: 'Pro Transporter',
    94: 'Master Gatherer',
    95: 'Honey Hunter',
    96: 'Carving Pro',
    97: 'Divine Blessing',
    98: 'Palico Rally',
    99: 'Bontanist',
    100: 'Geologist',
    101: 'Maximum Might',
    102: 'Slinger Capacity',
    103: 'Stealth',
    104: 'Flinch Free',
    105: 'Scoutfly Range Up',
    106: 'Speed Crawler',
    107: 'Jump Master',
    108: 'Sporepuff Expert',
    109: 'Aquatic Expert',
    111: 'Cliffhanger',
    112: 'Blindsider',
    114: 'Scholar',
    115: 'Entomologist',
    116: 'Effluvia Resistance',
    117: 'Scenthound',
    118: 'Foragers Luck',
    119: 'Detector',
    120: 'Tool Specialist',
    122: 'Affinity Sliding',
    123: 'Elderseal Boost',
    124: 'Intimidator',
    125: 'Anjanath Power',
    126: 'Nergigante Hunter',
    127: 'Vaal Hazak Vitality',
    128: 'Ratholos Power',
    129: 'Diablos Power',
    130: 'Kirin Blessing',
    131: 'Pink Rathian Mastery',
    132: 'Anjanath Will',
    135: 'Ratholos Mastery',
    136: 'Diablos Mastery',
    137: 'Kirin Favor',
    138: 'Uragaan Protection',
    142: 'B-52 Protection',
    143: 'Theostra Technique',
    144: 'Kushala Daora Flight',
    145: 'Xeno Jiiva Divinity',
    147: 'Zora Magdaros Mastery',
    149: 'Guild Guidiance',
    150: 'Commission Guidance',
    151: 'Legiana Blessing',
    152: 'Legiana Favor',
    153: 'Big Red Dog Clifford Power',
    154: 'Big Red Dog Clifford Mastery',
    155: 'Bow Charge Plus',
    156: 'Minds Eye/Ballistics',
    157: 'Guard Up',
    158: 'Protective Polish',
    159: 'Non-elemental Boost',
    160: 'Guts',
    161: 'Hasten Recovery',
    162: 'Razor Sharp/Spare Shot',
    163: 'Lunastra Favor',
    164: 'Soul of the Dragoon'
  }
}
