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
                fullDesc: 'SID takes the first available technology from left to right, highest to lowest.'
            },
            {
                diceTrigger: [2, 3, 4, 5, 6],
                fullDesc: 'Count available techs from left to right, highest to lowest by <span class="bold"><span class="techNum"></span> spaces</span>.<br />SID claims this technology.'
            }
        ]
    },
    fly: {
        actionType: 'Fly Ship',
        desc: 'Fly Ship',
        actionBreakdown: [
            {
                diceTrigger: [1, 2],
                fullDesc: 'SID travels to next system and place token on blue planet.'
            },
            {
                diceTrigger: [3, 4],
                fullDesc: 'SID travels two systems away and if possible claim a pulsar > planet.'
            },
            {
                diceTrigger: [5, 6],
                fullDesc: 'SID travels through two systems and claim a pulsar after.<br />If all lane pulsars are claimed, then claim a free pulsar.'
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
                    fullDesc: 'SID takes the left transmitter.'
                },
                {
                    diceTrigger: [3, 4],
                    fullDesc: 'SID takes the middle transmitter.'
                },
                {
                    diceTrigger: [5, 6],
                    fullDesc: 'SID takes the right transmitter.'
                }
            ], 
            [
                {
                    diceTrigger: [1, 2, 3],
                    fullDesc: 'SID takes the left transmitter.'
                },
                {
                    diceTrigger: [4, 5, 6],
                    fullDesc: 'SID takes the right transmitter.'
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
