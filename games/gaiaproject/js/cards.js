var cards = [
    {
        card: '1',
        startingCard: 'true',
        initialRoundBooster: '1',
        passingRoundBooster: '1',
        victoryPoints: '1',
        passingIcon: 'red',
        actions: [
            {
                desc: 'Upgrade',
                class: 'upgrade'
            }
        ],
        supportActions: [
            {
                img: 'goal-1-0',
                help: '<span class="helpTickColor">Top Goal <span class="helpTick">&check;</span></span> / <span class="helpCrossColor">Bottom Goal <span class="helpCross">&cross;</span>',
                desc: 'Final Scoring Tiebreaker',
                class: 'finalScoringTiebreaker'
            },
            {
                img: 'automaRange-4',
                help: 'Range 4',
                desc: 'Automa Range Tiebreaker',
                class: 'automaRangeTiebreaker'
            },
            {
                img: 'directionLeftToRight',
                help: 'Left to Right',
                desc: 'Directional Tiebreaker',
                class: 'directionalTiebreaker'
            },
            {
                img: 'numArrowRight1',
                help: '1 <span class="helpArrow">&Rightarrow;</span>',
                desc: 'Numbered Tiebreaker',
                class: 'numberedTiebreaker'
            }
        ],
        supportActivator: ['false', 'false', 'true', 'false'],
    },
    {
        card: '2',
        startingCard: 'true',
        initialRoundBooster: '2',
        passingRoundBooster: '2',
        victoryPoints: '1',
        passingIcon: 'red',
        actions: [              
            {
                desc: 'Upgrade',
                class: 'upgrade'
            }
        ],
        supportActions: [
            {
                img: 'goal-0-1',
                help: '<span class="helpCrossColor">Top Goal <span class="helpCross">&cross;</span></span> / <span class="helpTickColor">Bottom Goal <span class="helpTick">&check;</span>',
                desc: 'Final Scoring Tiebreaker',
                class: 'finalScoringTiebreaker'
            },
            {
                img: 'automaRange-2',
                help: 'Range 2',
                desc: 'Automa Range Tiebreaker',
                class: 'automaRangeTiebreaker'
            },
            {
                img: 'directionLeftToRight',
                help: 'Left to Right',
                desc: 'Directional Tiebreaker',
                class: 'directionalTiebreaker'
            },
            {
                img: 'numArrowRight2',
                help: '2 <span class="helpArrow">&Rightarrow;</span>',
                desc: 'Numbered Tiebreaker',
                class: 'numberedTiebreaker'
            }
        ],
        supportActivator: ['false', 'false', 'true', 'false'],
    },
    {
        card: '3',
        startingCard: 'false',
        initialRoundBooster: '3',
        passingRoundBooster: '3',
        victoryPoints: '1',
        passingIcon: 'red',
        actions: [              
            {
                desc: 'Advance Highest Research Area',
                class: 'advanceHighestResearchArea'
            }
        ],
        supportActions: [
            {
                img: 'goal-1-0',
                help: '<span class="helpTickColor">Top Goal <span class="helpTick">&check;</span></span> / <span class="helpCrossColor">Bottom Goal <span class="helpCross">&cross;</span>',
                desc: 'Final Scoring Tiebreaker',
                class: 'finalScoringTiebreaker'
            },
            {
                img: 'automaRange-2',
                help: 'Range 2',
                desc: 'Automa Range Tiebreaker',
                class: 'automaRangeTiebreaker'
            },
            {
                img: 'directionLeftToRight',
                help: 'Left to Right',
                desc: 'Directional Tiebreaker',
                class: 'directionalTiebreaker'
            },
            {
                img: 'numArrowRight3',
                help: '3 <span class="helpArrow">&Rightarrow;</span>',
                desc: 'Numbered Tiebreaker',
                class: 'numberedTiebreaker'
            }
        ],
        supportActivator: ['false', 'false', 'false', 'true'],
    },
    {
        card: '4',
        startingCard: 'true',
        initialRoundBooster: '4',
        passingRoundBooster: '1',
        victoryPoints: '1',
        passingIcon: 'green',
        actions: [              
            {
                desc: 'Build Mine',
                class: 'buildMine'
            }
        ],
        supportActions: [
            {
                img: 'goal-0-0',
                help: '<span class="helpCrossColor">Top Goal <span class="helpCross">&cross;</span></span> / <span class="helpCrossColor">Bottom Goal <span class="helpCross">&cross;</span>',
                desc: 'Final Scoring Tiebreaker',
                class: 'finalScoringTiebreaker'
            },
            {
                img: 'automaRange-2',
                help: 'Range 2',
                desc: 'Automa Range Tiebreaker',
                class: 'automaRangeTiebreaker'
            },
            {
                img: 'directionRightToLeft',
                help: 'Right to Left',
                desc: 'Directional Tiebreaker',
                class: 'directionalTiebreaker'
            },
            {
                img: 'numArrowLeft4',
                help: '<span class="helpArrow">&Leftarrow;</span> 4',
                desc: 'Numbered Tiebreaker',
                class: 'numberedTiebreaker'
            }
        ],
        supportActivator: ['true', 'true', 'true', 'false'],
    },
    {
        card: '5',
        startingCard: 'true',
        initialRoundBooster: '5',
        passingRoundBooster: '2',
        victoryPoints: '1',
        passingIcon: 'red',
        actions: [
            {
                desc: 'Power / Q.I.C.',
                class: 'powerQIC'
            }
        ],
        supportActions: [
            {
                img: 'goal-0-1',
                help: '<span class="helpCrossColor">Top Goal <span class="helpCross">&cross;</span></span> / <span class="helpTickColor">Bottom Goal <span class="helpTick">&check;</span>',
                desc: 'Final Scoring Tiebreaker',
                class: 'finalScoringTiebreaker'
            },
            {
                img: 'automaRange-2',
                help: 'Range 2',
                desc: 'Automa Range Tiebreaker',
                class: 'automaRangeTiebreaker'
            },
            {
                img: 'directionRightToLeft',
                help: 'Right to Left',
                desc: 'Directional Tiebreaker',
                class: 'directionalTiebreaker'
            },
            {
                img: 'numArrowLeft5',
                help: '<span class="helpArrow">&Leftarrow;</span> 5',
                desc: 'Numbered Tiebreaker',
                class: 'numberedTiebreaker'
            }
        ],
        supportActivator: ['false', 'false', 'false', 'true'],
    },
    {
        card: '6',
        startingCard: 'false',
        initialRoundBooster: '1',
        passingRoundBooster: '3',
        victoryPoints: '3',
        passingIcon: 'green',
        actions: [
            {
                desc: 'Build Mine',
                class: 'buildMine'
            }
        ],
        supportActions: [
            {
                img: 'goal-1-0',
                help: '<span class="helpTickColor">Top Goal <span class="helpTick">&check;</span></span> / <span class="helpCrossColor">Bottom Goal <span class="helpCross">&cross;</span>',
                desc: 'Final Scoring Tiebreaker',
                class: 'finalScoringTiebreaker'
            },
            {
                img: 'automaRange-2',
                help: 'Range 2',
                desc: 'Automa Range Tiebreaker',
                class: 'automaRangeTiebreaker'
            },
            {
                img: 'directionLeftToRight',
                help: 'Left to Right',
                desc: 'Directional Tiebreaker',
                class: 'directionalTiebreaker'
            },
            {
                img: 'numArrowLeft1',
                help: '<span class="helpArrow">&Leftarrow;</span> 1',
                desc: 'Numbered Tiebreaker',
                class: 'numberedTiebreaker'
            }
        ],
        supportActivator: ['true', 'true', 'true', 'false'],
    },
    {
        card: '7',
        startingCard: 'true',
        initialRoundBooster: '2',
        passingRoundBooster: '3',
        victoryPoints: '0',
        passingIcon: 'green',
        actions: [              
            {
                desc: 'Advance Random Research Area',
                class: 'advanceRandomResearchArea'
            }
        ],
        supportActions: [
            {
                img: 'goal-1-0',
                help: '<span class="helpTickColor">Top Goal <span class="helpTick">&check;</span></span> / <span class="helpCrossColor">Bottom Goal <span class="helpCross">&cross;</span>',
                desc: 'Final Scoring Tiebreaker',
                class: 'finalScoringTiebreaker'
            },
            {
                img: 'automaRange-2',
                help: 'Range 2',
                desc: 'Automa Range Tiebreaker',
                class: 'automaRangeTiebreaker'
            },
            {
                img: 'directionLeftToRight',
                help: 'Left to Right',
                desc: 'Directional Tiebreaker',
                class: 'directionalTiebreaker'
            },
            {
                img: 'numArrowRight4',
                help: '4 <span class="helpArrow">&Rightarrow;</span>',
                desc: 'Numbered Tiebreaker',
                class: 'numberedTiebreaker'
            }
        ],
        supportActivator: ['false', 'false', 'false', 'true'],
    },
    {
        card: '8',
        startingCard: 'false',
        initialRoundBooster: '3',
        passingRoundBooster: '2',
        victoryPoints: '3',
        passingIcon: 'red',
        actions: [
            {
                desc: 'Build Mine',
                class: 'buildMine'
            }
        ],
        supportActions: [
            {
                img: 'goal-0-1',
                help: '<span class="helpCrossColor">Top Goal <span class="helpCross">&cross;</span></span> / <span class="helpTickColor">Bottom Goal <span class="helpTick">&check;</span>',
                desc: 'Final Scoring Tiebreaker',
                class: 'finalScoringTiebreaker'
            },
            {
                img: 'automaRange-4',
                help: 'Range 4',
                desc: 'Automa Range Tiebreaker',
                class: 'automaRangeTiebreaker'
            },
            {
                img: 'directionRightToLeft',
                help: 'Right to Left',
                desc: 'Directional Tiebreaker',
                class: 'directionalTiebreaker'
            },
            {
                img: 'numArrowLeft1',
                help: '<span class="helpArrow">&Leftarrow;</span> 1',
                desc: 'Numbered Tiebreaker',
                class: 'numberedTiebreaker'
            }
        ],
        supportActivator: ['true', 'true', 'true', 'false'],
    },
    {
        card: '9',
        startingCard: 'false',
        initialRoundBooster: '4',
        passingRoundBooster: '3',
        victoryPoints: '0+',
        passingIcon: 'green',
        actions: [
            {
                desc: 'Faction Action',
                class: 'factionAction'
            }
        ],
        supportActions: [
            {
                img: 'goal-0-1',
                help: '<span class="helpCrossColor">Top Goal <span class="helpCross">&cross;</span></span> / <span class="helpTickColor">Bottom Goal <span class="helpTick">&check;</span>',
                desc: 'Final Scoring Tiebreaker',
                class: 'finalScoringTiebreaker'
            },
            {
                img: 'automaRange-2',
                help: 'Range 2',
                desc: 'Automa Range Tiebreaker',
                class: 'automaRangeTiebreaker'
            },
            {
                img: 'directionRightToLeft',
                help: 'Right to Left',
                desc: 'Directional Tiebreaker',
                class: 'directionalTiebreaker'
            },
            {
                img: 'numArrowLeft2',
                help: '<span class="helpArrow">&Leftarrow;</span> 2',
                desc: 'Numbered Tiebreaker',
                class: 'numberedTiebreaker'
            }
        ],
        supportActivator: ['false', 'false', 'false', 'false'],
    },
    {
        card: '10',
        startingCard: 'false',
        initialRoundBooster: '5',
        passingRoundBooster: '1',
        victoryPoints: '3',
        passingIcon: 'red',
        actions: [              
            {
                desc: 'Upgrade',
                class: 'upgrade'
            }
        ],
        supportActions: [
            {
                img: 'goal-1-0',
                help: '<span class="helpTickColor">Top Goal <span class="helpTick">&check;</span></span> / <span class="helpCrossColor">Bottom Goal <span class="helpCross">&cross;</span>',
                desc: 'Final Scoring Tiebreaker',
                class: 'finalScoringTiebreaker'
            },
            {
                img: 'automaRange-2',
                help: 'Range 2',
                desc: 'Automa Range Tiebreaker',
                class: 'automaRangeTiebreaker'
            },
            {
                img: 'directionRightToLeft',
                help: 'Right to Left',
                desc: 'Directional Tiebreaker',
                class: 'directionalTiebreaker'
            },
            {
                img: 'numArrowLeft3',
                help: '<span class="helpArrow">&Leftarrow;</span> 3',
                desc: 'Numbered Tiebreaker',
                class: 'numberedTiebreaker'
            }
        ],
        supportActivator: ['false', 'false', 'true', 'false'],
    },
    {
        card: '11',
        startingCard: 'false',
        initialRoundBooster: '1',
        passingRoundBooster: '2',
        victoryPoints: '2',
        passingIcon: 'green',
        actions: [              
            {
                desc: 'Upgrade',
                class: 'upgrade'
            }
        ],
        supportActions: [
            {
                img: 'goal-0-1',
                help: '<span class="helpCrossColor">Top Goal <span class="helpCross">&cross;</span></span> / <span class="helpTickColor">Bottom Goal <span class="helpTick">&check;</span>',
                desc: 'Final Scoring Tiebreaker',
                class: 'finalScoringTiebreaker'
            },
            {
                img: 'automaRange-4',
                help: 'Range 4',
                desc: 'Automa Range Tiebreaker',
                class: 'automaRangeTiebreaker'
            },
            {
                img: 'directionLeftToRight',
                help: 'Left to Right',
                desc: 'Directional Tiebreaker',
                class: 'directionalTiebreaker'
            },
            {
                img: 'numArrowRight1',
                help: '1 <span class="helpArrow">&Rightarrow;</span>',
                desc: 'Numbered Tiebreaker',
                class: 'numberedTiebreaker'
            }
        ],
        supportActivator: ['false', 'false', 'true', 'false'],
    },
    {
        card: '12',
        startingCard: 'false',
        initialRoundBooster: '2',
        passingRoundBooster: '3',
        victoryPoints: '3',
        passingIcon: 'red',
        actions: [              
            {
                desc: 'Power / Q.I.C.',
                class: 'powerQIC'
            }
        ],
        supportActions: [
            {
                img: 'goal-1-0',
                help: '<span class="helpTickColor">Top Goal <span class="helpTick">&check;</span></span> / <span class="helpCrossColor">Bottom Goal <span class="helpCross">&cross;</span>',
                desc: 'Final Scoring Tiebreaker',
                class: 'finalScoringTiebreaker'
            },
            {
                img: 'automaRange-2',
                help: 'Range 2',
                desc: 'Automa Range Tiebreaker',
                class: 'automaRangeTiebreaker'
            },
            {
                img: 'directionRightToLeft',
                help: 'Right to Left',
                desc: 'Directional Tiebreaker',
                class: 'directionalTiebreaker'
            },
            {
                img: 'numArrowLeft1',
                help: '<span class="helpArrow">&Leftarrow;</span> 1',
                desc: 'Numbered Tiebreaker',
                class: 'numberedTiebreaker'
            }
        ],
        supportActivator: ['false', 'false', 'false', 'true'],
    },
    {
        card: '13',
        startingCard: 'true',
        initialRoundBooster: '3',
        passingRoundBooster: '3',
        victoryPoints: '0+',
        passingIcon: 'green',
        actions: [              
            {
                desc: 'Faction Action',
                class: 'factionAction'
            }
        ],
        supportActions: [
            {
                img: 'goal-0-0',
                help: '<span class="helpCrossColor">Top Goal <span class="helpCross">&cross;</span></span> / <span class="helpCrossColor">Bottom Goal <span class="helpCross">&cross;</span>',
                desc: 'Final Scoring Tiebreaker',
                class: 'finalScoringTiebreaker'
            },
            {
                img: 'automaRange-2',
                help: 'Range 2',
                desc: 'Automa Range Tiebreaker',
                class: 'automaRangeTiebreaker'
            },
            {
                img: 'directionRightToLeft',
                help: 'Right to Left',
                desc: 'Directional Tiebreaker',
                class: 'directionalTiebreaker'
            },
            {
                img: 'numArrowLeft2',
                help: '<span class="helpArrow">&Leftarrow;</span> 2',
                desc: 'Numbered Tiebreaker',
                class: 'numberedTiebreaker'
            }
        ],
        supportActivator: ['false', 'false', 'false', 'false'],
    },
    {
        card: '14',
        startingCard: 'false',
        initialRoundBooster: '4',
        passingRoundBooster: '2',
        victoryPoints: '3',
        passingIcon: 'green',
        actions: [              
            {
                desc: 'Power / Q.I.C.',
                class: 'powerQIC'
            }
        ],
        supportActions: [
            {
                img: 'goal-0-1',
                help: '<span class="helpCrossColor">Top Goal <span class="helpCross">&cross;</span></span> / <span class="helpTickColor">Bottom Goal <span class="helpTick">&check;</span>',
                desc: 'Final Scoring Tiebreaker',
                class: 'finalScoringTiebreaker'
            },
            {
                img: 'automaRange-2',
                help: 'Range 2',
                desc: 'Automa Range Tiebreaker',
                class: 'automaRangeTiebreaker'
            },
            {
                img: 'directionRightToLeft',
                help: 'Right to Left',
                desc: 'Directional Tiebreaker',
                class: 'directionalTiebreaker'
            },
            {
                img: 'numArrowLeft3',
                help: '<span class="helpArrow">&Leftarrow;</span> 3',
                desc: 'Numbered Tiebreaker',
                class: 'numberedTiebreaker'
            }
        ],
        supportActivator: ['false', 'false', 'false', 'true'],
    },
    {
        card: '15',
        startingCard: 'false',
        initialRoundBooster: '5',
        passingRoundBooster: '1',
        victoryPoints: '1',
        passingIcon: 'green',
        actions: [
            {
                desc: 'Advance Highest Research Area',
                class: 'advanceHighestResearchArea'
            }
        ],
        supportActions: [
            {
                img: 'goal-1-0',
                help: '<span class="helpTickColor">Top Goal <span class="helpTick">&check;</span></span> / <span class="helpCrossColor">Bottom Goal <span class="helpCross">&cross;</span>',
                desc: 'Final Scoring Tiebreaker',
                class: 'finalScoringTiebreaker'
            },
            {
                img: 'automaRange-2',
                help: 'Range 2',
                desc: 'Automa Range Tiebreaker',
                class: 'automaRangeTiebreaker'
            },
            {
                img: 'directionRightToLeft',
                help: 'Right to Left',
                desc: 'Directional Tiebreaker',
                class: 'directionalTiebreaker'
            },
            {
                img: 'numArrowRight2',
                help: '2 <span class="helpArrow">&Rightarrow;</span>',
                desc: 'Numbered Tiebreaker',
                class: 'numberedTiebreaker'
            }
        ],
        supportActivator: ['false', 'false', 'false', 'true'],
    },
    {
        card: '16',
        startingCard: 'false',
        initialRoundBooster: '1',
        passingRoundBooster: '1',
        victoryPoints: '3',
        passingIcon: 'red',
        actions: [              
            {
                desc: 'Power / Q.I.C.',
                class: 'powerQIC'
            }
        ],
        supportActions: [
            {
                img: 'goal-1-0',
                help: '<span class="helpTickColor">Top Goal <span class="helpTick">&check;</span></span> / <span class="helpCrossColor">Bottom Goal <span class="helpCross">&cross;</span>',
                desc: 'Final Scoring Tiebreaker',
                class: 'finalScoringTiebreaker'
            },
            {
                img: 'automaRange-2',
                help: 'Range 2',
                desc: 'Automa Range Tiebreaker',
                class: 'automaRangeTiebreaker'
            },
            {
                img: 'directionLeftToRight',
                help: 'Left to Right',
                desc: 'Directional Tiebreaker',
                class: 'directionalTiebreaker'
            },
            {
                img: 'numArrowRight3',
                help: '3 <span class="helpArrow">&Rightarrow;</span>',
                desc: 'Numbered Tiebreaker',
                class: 'numberedTiebreaker'
            }
        ],
        supportActivator: ['false', 'false', 'false', 'true'],
    },
    {
        card: '17',
        startingCard: 'false',
        initialRoundBooster: '2',
        passingRoundBooster: '1',
        victoryPoints: '2',
        passingIcon: 'green',
        actions: [
            {
                desc: 'Advance Random Research Area',
                class: 'advanceRandomResearchArea'
            }
        ],
        supportActions: [
            {
                img: 'goal-0-1',
                help: '<span class="helpCrossColor">Top Goal <span class="helpCross">&cross;</span></span> / <span class="helpTickColor">Bottom Goal <span class="helpTick">&check;</span>',
                desc: 'Final Scoring Tiebreaker',
                class: 'finalScoringTiebreaker'
            },
            {
                img: 'automaRange-2',
                help: 'Range 2',
                desc: 'Automa Range Tiebreaker',
                class: 'automaRangeTiebreaker'
            },
            {
                img: 'directionLeftToRight',
                help: 'Left to Right',
                desc: 'Directional Tiebreaker',
                class: 'directionalTiebreaker'
            },
            {
                img: 'numArrowRight5',
                help: '5 <span class="helpArrow">&Rightarrow;</span>',
                desc: 'Numbered Tiebreaker',
                class: 'numberedTiebreaker'
            }
        ],
        supportActivator: ['false', 'false', 'false', 'true'],
    }
]

var endOfRound = [
    {
        goal: '1',
        rounds123VP: 4,
        rounds456VP: 6
    },
    {
        goal: '2',
        rounds123VP: 2,
        rounds456VP: 4
    },
    {
        goal: '3',
        rounds123VP: 4,
        rounds456VP: 6
    },
    {
        goal: '4',
        rounds123VP: 0,
        rounds456VP: 5
    },
    {
        goal: '5',
        rounds123VP: 3,
        rounds456VP: 6
    },
    {
        goal: '6',
        rounds123VP: 3,
        rounds456VP: 6
    },
    {
        goal: '7',
        rounds123VP: 2,
        rounds456VP: 2
    },
    {
        goal: '8',
        rounds123VP: 2,
        rounds456VP: 2
    },
    {
        goal: '9',
        rounds123VP: 0,
        rounds456VP: 5
    },
    {
        goal: '10',
        rounds123VP: 0,
        rounds456VP: 5
    }
]


var allFactions = [
    {
        name: 'Firaks',
        class: 'firaks',
        factionVPs: 2,
        setup: 'false',
        factionMove: 'Upgrade',
        factionTiebreaker: '<li>Faction Tiebreaker: Downgrade from research lab to a trading station</li></li>',
        tiebreakers: ['false', 'false', 'true', 'false'],
        actionTrigger: {
            trigger: ['factionAction', 'upgrade', 'buildMine'],
            type: 'alert',
            info: '<p><span class="bold">If the "Upgrade" action was successful</span> (either from the "Faction" action, "Upgrade" action, or an unsuccessful "Build Mine" action) <span class="bold">and the Automa upgraded to a research lab</span>, then the Automa advances in a random research area according to the support card tiebreaker.</p>',
        },
    },
    {
        name: 'Geodens',
        class: 'geodens',
        factionVPs: 1,
        setup: 'true',
        factionMove: 'Advance Random Research Area <span class="bold">AND</span> Power / Q.I.C.',
        factionTiebreaker: 'false',
        tiebreakers: ['false', 'false', 'false', 'true'],
        setupDesc: '<p class="italic"><span class="bold">Setup:</span> The Automa starts on Level 1 of the Terraforming research area.</p>',
        actionTrigger: {
            trigger: ['buildMine'],
            type: 'confirm',
            info: '<p>If the "Build Mine" action was successful, did the Automa colonize a new planet type?</p>',
            success: 'func-gpVPs-2'
        },
    },
    {
        name: 'Hadsch Hallas',
        class: 'hadschHallas',
        factionVPs: 1,
        setup: 'true',
        factionMove: 'Upgrade <span class="bold">OR</span> build mine with range of 3',
        factionTiebreaker: 'false',
        tiebreakers: ['true', 'true', 'true', 'false'],
        setupDesc: '<p class="italic"><span class="bold">Setup:</span> The Automa starts on Level 1 of the Economy research area.</p>',
        actionTrigger: {
            trigger: ['factionAction', 'upgrade', 'buildMine'],
            type: 'confirm',
            info: '<p><span class="bold">If the "Upgrade" action was successful</span> (either from the "Faction" action, "Upgrade" action, or an unsuccessful "Build Mine" action), did the Automa <span class="bold">upgrade to a trading station?</span></p>',
            success: 'func-gpVPs-3'
        },
    },
    {
        name: 'Itars',
        class: 'itars',
        factionVPs: 4,
        setup: 'false',
        factionMove: 'Power / Q.I.C. <span class="bold">AND</span> Power / Q.I.C.',
        factionTiebreaker: 'false',
        tiebreakers: ['false', 'false', 'false', 'true'],
        actionTrigger: 'false'
    },
    {
        name: 'Taklons',
        class: 'taklons',
        factionVPs: 2,
        setup: 'false',
        factionMove: 'Build Mine <span class="bold">AND</span> Power / Q.I.C.',
        factionTiebreaker: '<li>Faction Tiebreaker: Automa Range 3 + Shortest distance to one of <span class="bold">your</span> planets</li>',
        tiebreakers: ['true', 'false', 'true', 'true'],
        actionTrigger: 'false'
    },
    {
        name: 'Terrans',
        class: 'terrans',
        factionVPs: 2,
        setup: 'true',
        factionMove: 'Advance Gaia Project research area by 1 <span class="bold">AND</span> Build Mine',
        factionTiebreaker: '<li>Faction Tiebreaker: Automa Range 4 + Transdim Planet</li>',
        tiebreakers: ['true', 'false', 'true', 'false'],
        setupDesc: '<p class="italic"><span class="bold">Setup:</span> The Automa starts on Level 1 of the Gaia Project research area.</p>',
        actionTrigger: 'false'
    },
    {
        name: 'Xenos',
        class: 'xenos',
        factionVPs: 2,
        setup: 'true',
        factionMove: 'Build Mine <span class="bold">AND</span> Power / Q.I.C.',
        factionTiebreaker: '<li>Faction Tiebreaker: Automa Range 4</li>',
        tiebreakers: ['true', 'false', 'true', 'true'],
        setupDesc: '<p class="italic"><span class="bold">Setup:</span> The Automa starts on Level 1 of the Artificial Intelligence research area, and places 3 initial mines instead of 2.</p>',
        actionTrigger: {
            trigger: ['powerQIC'],
            type: 'alert',
            info: '<p>When taking a power/Q.I.C. action, the Automa resolves the effect twice using the same support card.</p>',
            success: 'func-gpVPs-3'
        },
    }
]

var supportCategories = [
    {
        name: 'Final Scoring',
        class: 'finalScoring'
    },
    {
        name: 'Automa Range',
        class: 'automaRange'
    },
    {
        name: 'Directional Selection',
        class: 'directionalSelection'
    },
    {
        name: 'Numbered Selection',
        class: 'numberedSelection'
    },
]