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
                image: 'technology1'
            },
            {
                diceTrigger: [2],
                fullDesc: '<p>SID takes the first available technology from left to right, highest to lowest.</p><p>Do not count any technologies which you have already claimed, but skip over these instead.</p>',
                image: 'technology2'
            },
            {
                diceTrigger: [3],
                fullDesc: '<p>SID takes the first available technology from left to right, highest to lowest.</p><p>Do not count any technologies which you have already claimed, but skip over these instead.</p>',
                image: 'technology3'
            },
            {
                diceTrigger: [4],
                fullDesc: '<p>SID takes the first available technology from left to right, highest to lowest.</p><p>Do not count any technologies which you have already claimed, but skip over these instead.</p>',
                image: 'technology4'
            },
            {
                diceTrigger: [5],
                fullDesc: '<p>SID takes the first available technology from left to right, highest to lowest.</p><p>Do not count any technologies which you have already claimed, but skip over these instead.</p>',
                image: 'technology5'
            },
            {
                diceTrigger: [6],
                fullDesc: '<p>SID takes the first available technology from left to right, highest to lowest.</p><p>Do not count any technologies which you have already claimed, but skip over these instead.</p>',
                image: 'technology6'
            },

        ]
    },
    fly: {
        actionType: 'Fly Ship',
        desc: 'Fly Ship',
        actionBreakdown: [
            {
                diceTrigger: [1, 2],
                fullDesc: '<p>SID travels to the next system and places a token on blue planet.</p>',
                image: 'flyShipPlanet'
            },
            {
                diceTrigger: [3, 4],
                fullDesc: '<p>SID travels to the next system and afterwards either to another system or a pulsar.</p><p>Whether a pulsar or a system is navigated to depends on distance. If there is a tie, occupy the pulsar.</p>',
                image: 'flyShipPlanetandPlanetOrPulsar'
            },
            {
                diceTrigger: [5, 6],
                fullDesc: '<p>SID travels through two systems and claims a pulsar after.</p><p>If SID can\'t reach a pulsar, it stays on the second system and claims one of the isolated pulsars (if possible).</p>',
                image: 'flyShipPlanetandPlanetPlanetPulsar'
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
                    image: '3-transmitters-left'
                },
                {
                    diceTrigger: [3, 4],
                    fullDesc: 'SID takes the middle transmitter.',
                    image: '3-transmitters-middle'
                },
                {
                    diceTrigger: [5, 6],
                    fullDesc: 'SID takes the right transmitter.',
                    image: '3-transmitters-right'
                }
            ], 
            [
                {
                    diceTrigger: [1, 2, 3],
                    fullDesc: 'SID takes the left transmitter.',
                    image: '2-transmitters-left'
                },
                {
                    diceTrigger: [4, 5, 6],
                    fullDesc: 'SID takes the right transmitter.',
                    image: '2-transmitters-right'
                }
            ], 
            [
                {
                    diceTrigger: [1, 2, 3, 4, 5, 6],
                    fullDesc: 'SID takes the last remaining transmitter.'
                }
            ]
        ]
    }
}


var bonusTiles = [

	{
        goal: 0,
        img: 'goal-1-front',		
		goalNum: 1
	},
	{
        goal: 1,
        img: 'goal-1-back',		
		goalNum: 1
	},
	{
        goal: 2,
        img: 'goal-2-front',	
		goalNum: 2
	},
	{
        goal: 3,
        img: 'goal-2-front',
		goalNum: 2
	},
	{
        goal: 4,
        img: 'goal-3-front',
		goalNum: 3
	},
	{
        goal: 5,
        img: 'goal-3-front',
		goalNum: 3
	},
	{
        goal: 6,
        img: 'goal-4-front',
		goalNum: 4
	},
	{
        goal: 7,
        img: 'goal-4-front',
		goalNum: 4
	},
	{
        goal: 8,
        img: 'goal-5-front',
		goalNum: 5
	},
	{
        goal: 9,
        img: 'goal-5-front',
		goalNum: 5
	},
	{
        goal: 10,
        img: 'goal-6-front',
		goalNum: 6
	},
	{
        goal: 11,
        img: 'goal-6-front',
		goalNum: 6
	}
]

var techs = [
    ['AI', 'BI', 'CI', 'DI'],
    ['AII', 'BII', 'CII', 'DII'],
    ['AIII', 'BIII', 'CIII', 'DIII']
]

var hq = ['A1/A2', 'B1/B2', 'C1/C2', 'D1/D2'];
