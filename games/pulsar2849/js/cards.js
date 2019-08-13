var actions = {
    round1: [
        {   
            diceTrigger: [1, 2],
            action: 'technology'
        },
        {
            diceTrigger: [3, 4, 5, 6, 7, 8, 9],
            action: 'fly'
        },
        {
            diceTrigger: [10, 11, 12],
            action: 'transmitter'
        }
    ],
    round2: [
        {   
            diceTrigger: [1, 2],
            action: 'technology'
        },
        {
            diceTrigger: [3, 4, 5, 6, 7, 8, 9],
            action: 'fly'
        },
        {
            diceTrigger: [10, 11, 12],
            action: 'transmitter'
        }
    ],
    round3: [
        {   
            diceTrigger: [1, 2, 3, 4],
            action: 'technology'
        },
        {
            diceTrigger: [5, 6, 7, 8, 9],
            action: 'fly'
        },
        {
            diceTrigger: [10, 11, 12],
            action: 'transmitter'
        }
    ],
    round4: [
        {   
            diceTrigger: [1, 2, 3, 4],
            action: 'technology'
        },
        {
            diceTrigger: [5, 6, 7, 8, 9],
            action: 'fly'
        },
        {
            diceTrigger: [10, 11, 12],
            action: 'transmitter'
        }
    ],
    round5: [
        {   
            diceTrigger: [1, 2, 3, 4],
            action: 'technology'
        },
        {
            diceTrigger: [5, 6, 7, 8, 9],
            action: 'fly'
        },
        {
            diceTrigger: [10, 11, 12],
            action: 'transmitter'
        }
    ],
    round6: [
        {   
            diceTrigger: [1, 2, 3, 4, 5, 6],
            action: 'technology'
        },
        {
            diceTrigger: [7, 8, 9],
            action: 'fly'
        },
        {
            diceTrigger: [10, 11, 12],
            action: 'transmitter'
        }
    ],
    round7: [
        {   
            diceTrigger: [1, 2, 3, 4, 5, 6],
            action: 'technology'
        },
        {
            diceTrigger: [7, 8, 9],
            action: 'fly'
        },
        {
            diceTrigger: [10, 11, 12],
            action: 'transmitter'
        }
    ],
    round8: [
        {   
            diceTrigger: [1, 2, 3, 4, 5, 6],
            action: 'technology'
        },
        {
            diceTrigger: [7, 8, 9],
            action: 'fly'
        },
        {
            diceTrigger: [10, 11, 12],
            action: 'transmitter'
        }
    ],
}

var actionDesc = {
    technology: {
        actionType: 'Technology',
        desc: 'Patent Technology',
        actionBreakdown: [
            {
                diceTrigger: [1],
                fullDesc: '<p>SID takes the first available technology from left to right, highest to lowest.</p><p>Do not count any technologies which you have already claimed, but skip over these instead.</p>',
                image: 'takeTechnology.jpg'
            },
            {
                diceTrigger: [2, 3, 4, 5, 6],
                fullDesc: '<p>Count available technologies from left to right, highest to lowest by <span class="bold"><span class="techNum"></span> spaces</span>. SID claims this technology.</p><p>Do not count any technologies which already have you\'ve claimed, but skip over these instead.</p>',
                image: 'takeTechnology.jpg'
            }
        ]
    },
    fly: {
        actionType: 'Fly Ship',
        desc: 'Fly Ship',
        actionBreakdown: [
            {
                diceTrigger: [1, 2],
                fullDesc: '<p>SID travels to the next system and places a token on blue planet, ignoring the planetary system exploration bonus.</p>',
                image: 'flyNextPlanet.jpg'
            },
            {
                diceTrigger: [3, 4],
                fullDesc: '<p>SID travels to the next system and afterwards either to another system (ignoring the planetary system exploration bonus) or a pulsar.</p><p>Whether a pulsar or a system is navigated to depends on distance. If there is a tie, occupy the pulsar.</p>',
                image: 'flyTwoSystemsClaimPlanet.jpg'
            },
            {
                diceTrigger: [5, 6],
                fullDesc: '<p>SID travels through two systems and claims a pulsar after.</p><p>If SID can\'t reach a pulsar, it stays on the second system (ignoring the planetary system exploration bonus) and claims one of the isolated pulsars (if possible).</p>',
                image: 'flyTwoSystemsClaimPulsar.jpg'
            },
        ]
    },
    transmitter: {
        actionType: 'Transmitter',
        desc: 'Take Transmitter',
        actionBreakdown: [
            [
                {
                    diceTrigger: [1, 2],
                    fullDesc: 'SID takes the left transmitter.',
                    image: '3-transmitters-left.jpg'
                },
                {
                    diceTrigger: [3, 4],
                    fullDesc: 'SID takes the middle transmitter.',
                    image: '3-transmitters-middle.jpg'
                },
                {
                    diceTrigger: [5, 6],
                    fullDesc: 'SID takes the right transmitter.',
                    image: '3-transmitters-right.jpg'
                }
            ], 
            [
                {
                    diceTrigger: [1, 2, 3],
                    fullDesc: 'SID takes the left transmitter.',
                    image: '2-transmitters-left.jpg'
                },
                {
                    diceTrigger: [4, 5, 6],
                    fullDesc: 'SID takes the right transmitter.',
                    image: '2-transmitters-right.jpg'
                }
            ], 
            [
                {
                    diceTrigger: [1, 2, 3, 4, 5, 6],
                    fullDesc: 'SID takes the last remaining transmitter.'
                }
            ]
        ]
    },
    takeGyrodone: {
        actionType: 'Take Gyrodone',
        desc: 'Take Gyrodone',
        fullDesc: 'In taking a Gyrodyne, SID will choose the highest value Gyrodyne that the human player has NOT activated and that SID has not already earned the Gyrodyne Bonus for. If the human player has all three types of Gyrodynes activated, then SID will take the highest value Gyrodyne for which it has not already earned the Gyrodyne Bonus.'
    },
    activateGyrodone: {
        actionType: 'Activate Gyrodone',
        desc: 'Activate Gyrodone',
        fullDesc: 'In activating a Gyrodyne, SID will choose the inactive Gyrodyne it has that earns the highest Gyrodyne Bonus available.'
    }
}
