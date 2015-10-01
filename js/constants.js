import { toOrderedImmutable } from './util'

const constants = toOrderedImmutable({
    lang: "en",
    none: Symbol("none"),
    jobs: {
        "pld": {
            "id": "pld",
            "name": {
                "en": "Paladin"
            },
            "primary_stats": ["vit", "str"],
            "secondary_stats": ["par", "acc", "crt", "det", "skl"]
        },
        "war": {
            "id": "war",
            "name": {
                "en": "Warrior"
            },
            "primary_stats": ["vit", "str"],
            "secondary_stats": ["par", "acc", "crt", "det", "skl"]
        },
        "drk": {
            "id": "drk",
            "name": {
                "en": "Dark Knight"
            },
            "primary_stats": ["vit", "str"],
            "secondary_stats": ["par", "acc", "crt", "det", "skl"]
        },
        "mnk": {
            "id": "mnk",
            "name": {
                "en": "Monk"
            },
            "primary_stats": ["str"],
            "secondary_stats": ["acc", "crt", "det", "skl"]
        },
        "drg": {
            "id": "drg",
            "name": {
                "en": "Dragoon"
            },
            "primary_stats": ["str"],
            "secondary_stats": ["acc", "crt", "det", "skl"]
        },
        "nin": {
            "id": "nin",
            "name": {
                "en": "Ninja"
            },
            "primary_stats": ["dex"],
            "secondary_stats": ["acc", "crt", "det", "skl"]
        },
        "brd": {
            "id": "brd",
            "name": {
                "en": "Bard"
            },
            "primary_stats": ["dex"],
            "secondary_stats": ["acc", "crt", "det", "skl"]
        },
        "mch": {
            "id": "mch",
            "name": {
                "en": "Machinist"
            },
            "primary_stats": ["dex"],
            "secondary_stats": ["acc", "crt", "det", "skl"]
        },
        "blm": {
            "id": "blm",
            "name": {
                "en": "Black Mage"
            },
            "primary_stats": ["int"],
            "secondary_stats": ["acc", "crt", "det", "spl"]
        },
        "smn": {
            "id": "smn",
            "name": {
                "en": "Summoner"
            },
            "primary_stats": ["int"],
            "secondary_stats": ["acc", "crt", "det", "spl"]
        },
        "whm": {
            "id": "whm",
            "name": {
                "en": "White Mage"
            },
            "primary_stats": ["mnd"],
            "secondary_stats": ["pie", "crt", "det", "spl"]
        },
        "sch": {
            "id": "sch",
            "name": {
                "en": "Scholar"
            },
            "primary_stats": ["mnd"],
            "secondary_stats": ["pie", "crt", "det", "spl"]
        },
        "ast": {
            "id": "ast",
            "name": {
                "en": "Astrologian"
            },
            "primary_stats": ["mnd"],
            "secondary_stats": ["pie", "crt", "det", "spl"]
        }
    },
    stats: {
        "str": {
            "id": "str",
            "name": {
                "en": "Strength"
            },
            "type": "primary"
        },
        "dex": {
            "id": "dex",
            "name": {
                "en": "Dexterity"
            },
            "type": "primary"
        },
        "vit": {
            "id": "vit",
            "name": {
                "en": "Vitality"
            },
            "type": "primary"
        },
        "int": {
            "id": "int",
            "name": {
                "en": "Intelligence"
            },
            "type": "primary"
        },
        "mnd": {
            "id": "mnd",
            "name": {
                "en": "Mind"
            },
            "type": "primary"
        },
        "pie": {
            "id": "pie",
            "name": {
                "en": "Piety"
            },
            "type": "secondary"
        },
        "par": {
            "id": "par",
            "name": {
                "en": "Parry"
            },
            "type": "secondary"
        },
        "acc": {
            "id": "acc",
            "name": {
                "en": "Accuracy"
            },
            "type": "secondary"
        },
        "crt": {
            "id": "crt",
            "name": {
                "en": "Critical Hit Rate"
            },
            "type": "secondary"
        },
        "det": {
            "id": "det",
            "name": {
                "en": "Determination"
            },
            "type": "secondary"
        },
        "skl": {
            "id": "skl",
            "name": {
                "en": "Skill Speed"
            },
            "type": "secondary"
        },
        "spl": {
            "id": "spl",
            "name": {
                "en": "Spell Speed"
            },
            "type": "secondary"
        }
    },
    slots: {
        "main_hand": {
            "id": "main_hand",
            "name": {
                "en": "Weapon"
            }
        },
        "off_hand": {
            "id": "off_hand",
            "name": {
                "en": "Shield"
            }
        },
        "head": {
            "id": "head",
            "name": {
                "en": "Head"
            }
        },
        "body": {
            "id": "body",
            "name": {
                "en": "Body"
            }
        },
        "hands": {
            "id": "hands",
            "name": {
                "en": "Hands"
            }
        },
        "waist": {
            "id": "waist",
            "name": {
                "en": "Waist"
            }
        },
        "legs": {
            "id": "legs",
            "name": {
                "en": "Legs"
            }
        },
        "feet": {
            "id": "feet",
            "name": {
                "en": "Feet"
            }
        },
        "neck": {
            "id": "neck",
            "name": {
                "en": "Necklace"
            }
        },
        "ears": {
            "id": "ears",
            "name": {
                "en": "Earrings"
            }
        },
        "wrist": {
            "id": "wrist",
            "name": {
                "en": "Bracelets"
            }
        },
        "left_ring": {
            "id": "left_ring",
            "name": {
                "en": "Left Ring"
            },
            "compatibility": "ring"
        },
        "right_ring": {
            "id": "right_ring",
            "name": {
                "en": "Right Ring"
            },
            "compatibility": "ring"
        },
        "meal": {
            "id": "meal",
            "name": {
                "en": "Meal"
            }
        }
    }
})

export default constants
