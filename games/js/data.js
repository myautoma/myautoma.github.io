var catPoints = {
    coconut: 7,
    millie: 3,
    tibbit: 5
}

var goalTilesScoring = {
    1: [0, 10, 15],
    2: [0, 7, 11],
    3: [0, 8, 13]
}

var scenarios = [
    {
        //Scenario 1
        scoreGoal: 58,
        otherGoals: [
            'Collect a rainbow button'
        ],
        goalTiles: [1, 2, 3],
        cats: ['millie', 'tibbit', 'coconut']
    }

]

var boardStates = {
    blue: [
        // row 1
        [
            {
                borderTile: true,
                patternNum: 6,
                color: 'pink',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 5,
                color: 'yellow',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 6,
                color: 'lightBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 2,
                color: 'pink',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 4,
                color: 'purple',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 3,
                color: 'yellow',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 5,
                color: 'green',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 2
        [
            {
                borderTile: true,
                patternNum: 3,
                color: 'green',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 1,
                color: 'darkBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 3
        [
            {
                borderTile: true,
                patternNum: 4,
                color: 'darkBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 6,
                color: 'purple',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 4
        [
            {
                borderTile: true,
                patternNum: 2,
                color: 'lightBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 2,
                color: 'yellow',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 5
        [
            {
                borderTile: true,
                patternNum: 5,
                color: 'purple',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 4,
                color: 'green',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 6
        [
            {
                borderTile: true,
                patternNum: 1,
                color: 'yellow',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 3,
                color: 'darkBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 7
        [
            {
                borderTile: true,
                patternNum: 3,
                color: 'purple',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 4,
                color: 'lightBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 3,
                color: 'pink',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 2,
                color: 'darkBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 6,
                color: 'green',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 1,
                color: 'pink',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 5,
                color: 'lightBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ]

    ],
    green: [
        // row 1
        [
            {
                borderTile: true,
                patternNum: 2,
                color: 'darkBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 6,
                color: 'yellow',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 2,
                color: 'green',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 5,
                color: 'darkBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 4,
                color: 'purple',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 1,
                color: 'yellow',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 6,
                color: 'lightBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 2
        [
            {
                borderTile: true,
                patternNum: 1,
                color: 'purple',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 3,
                color: 'pink',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 3
        [
            {
                borderTile: true,
                patternNum: 4,
                color: 'pink',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 2,
                color: 'purple',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 4
        [
            {
                borderTile: true,
                patternNum: 5,
                color: 'lightBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 5,
                color: 'yellow',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 5
        [
            {
                borderTile: true,
                patternNum: 3,
                color: 'yellow',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 4,
                color: 'lightBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 6
        [
            {
                borderTile: true,
                patternNum: 6,
                color: 'purple',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 1,
                color: 'pink',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 7
        [
            {
                borderTile: true,
                patternNum: 5,
                color: 'green',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 1,
                color: 'darkBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 4,
                color: 'green',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 5,
                color: 'pink',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 2,
                color: 'lightBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 3,
                color: 'darkBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 6,
                color: 'green',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ]

    ],
    purple: [
        // row 1
        [
            {
                borderTile: true,
                patternNum: 3,
                color: 'yellow',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 1,
                color: 'pink',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 3,
                color: 'purple',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 2,
                color: 'yellow',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 5,
                color: 'lightBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 4,
                color: 'pink',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 1,
                color: 'green',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 2
        [
            {
                borderTile: true,
                patternNum: 4,
                color: 'lightBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 6,
                color: 'darkBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 3
        [
            {
                borderTile: true,
                patternNum: 5,
                color: 'darkBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 3,
                color: 'lightBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 4
        [
            {
                borderTile: true,
                patternNum: 2,
                color: 'green',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 2,
                color: 'pink',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 5
        [
            {
                borderTile: true,
                patternNum: 6,
                color: 'pink',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 5,
                color: 'green',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 6
        [
            {
                borderTile: true,
                patternNum: 1,
                color: 'lightBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 4,
                color: 'darkBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 7
        [
            {
                borderTile: true,
                patternNum: 2,
                color: 'purple',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 4,
                color: 'yellow',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 5,
                color: 'purple',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 2,
                color: 'darkBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 3,
                color: 'green',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 6,
                color: 'yellow',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 1,
                color: 'purple',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ]

    ],
    yellow: [
        // row 1
        [
            {
                borderTile: true,
                patternNum: 4,
                color: 'green',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 3,
                color: 'darkBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 5,
                color: 'yellow',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 1,
                color: 'purple',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 6,
                color: 'darkBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 2,
                color: 'green',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 4,
                color: 'pink',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 2
        [
            {
                borderTile: true,
                patternNum: 2,
                color: 'pink',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 3,
                color: 'lightBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 3
        [
            {
                borderTile: true,
                patternNum: 6,
                color: 'purple',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 5,
                color: 'darkBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 4
        [
            {
                borderTile: true,
                patternNum: 1,
                color: 'yellow',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 1,
                color: 'green',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 5
        [
            {
                borderTile: true,
                patternNum: 3,
                color: 'green',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 6,
                color: 'pink',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 6
        [
            {
                borderTile: true,
                patternNum: 4,
                color: 'darkBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: false,
                patternNum: 0,
                color: 'none',
                available: true,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 2,
                color: 'lightBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ],
        // row 7
        [
            {
                borderTile: true,
                patternNum: 6,
                color: 'lightBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 2,
                color: 'purple',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 6,
                color: 'yellow',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 1,
                color: 'lightBlue',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 5,
                color: 'pink',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 3,
                color: 'purple',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            },
            {
                borderTile: true,
                patternNum: 4,
                color: 'yellow',
                available: false,
                goalTile: false,
                colorButton: false,
                catButton: false
            }
        ]

    ]
    
}