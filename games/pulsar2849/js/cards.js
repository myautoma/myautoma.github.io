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
                fullDesc: 'Technology x1',
                image: 'technology1'
            },
            {
                diceTrigger: [2],
                fullDesc: 'Technology x2',
                image: 'technology2'
            },
            {
                diceTrigger: [3],
                fullDesc: 'Technology x3',
                image: 'technology3'
            },
            {
                diceTrigger: [4],
                fullDesc: 'Technology x4',
                image: 'technology4'
            },
            {
                diceTrigger: [5],
                fullDesc: 'Technology x5',
                image: 'technology5'
            },
            {
                diceTrigger: [6],
                fullDesc: 'Technology x6',
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
                fullDesc: 'Ship -> Planet',
                image: 'flyShipPlanet'
            },
            {
                diceTrigger: [3, 4],
                fullDesc: 'Ship -> Planet -> Pulsar / Planet',
                image: 'flyShipPlanetandPlanetOrPulsar'
            },
            {
                diceTrigger: [5, 6],
                fullDesc: 'Ship -> Planet -> Planet -> Pulsar',
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
                    fullDesc: '3 Transmitters - Remove Left',
                    image: '3-transmitters-left'
                },
                {
                    diceTrigger: [3, 4],
                    fullDesc: '3 Transmitters - Remove Middle',
                    image: '3-transmitters-middle'
                },
                {
                    diceTrigger: [5, 6],
                    fullDesc: '3 Transmitters - Remove Right',
                    image: '3-transmitters-right'
                }
            ], 
            [
                {
                    diceTrigger: [1, 2, 3],
                    fullDesc: '2 Transmitters - Remove Left',
                    image: '2-transmitters-left'
                },
                {
                    diceTrigger: [4, 5, 6],
                    fullDesc: '2 Transmitters - Remove Right',
                    image: '2-transmitters-right'
                }
            ], 
            [
                {
                    diceTrigger: [1, 2, 3, 4, 5, 6],
                    fullDesc: '1 Transmitter - Remove'
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
