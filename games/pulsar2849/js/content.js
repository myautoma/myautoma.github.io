var startContent = [
    {
        name: 'Setup',
        id: 'setup',
        content: '<p>Setup the game for a 2 Player game. SIDs research ship will be placed on the opposite side of the human player.</p><p>This digital version handles all dice rolling and marker placement/movement on the initiative and engineering tracks, so if you want you can leave all of those components in the box.</p><p>All you need is two silver dice to set to the dice you select, as well as the red die for any bonus actions.</p>'
    },
    {
        name: 'Gameplay',
        id: 'gameplay',
        content: '<p>Gameplay instructions here.</p>'
    }

    // Add any more starting information in the same syntax
    
]

var helpContent = [
    {
        name: 'Setup',
        id: 'setup',
        classes: ['setup'],
        content: '<p>Setup the game for a 2 Player game. SIDs research ship will be placed on the opposite side of the human player.</p><p>This digital version handles all dice rolling and marker placement/movement on the initiative and engineering tracks, so if you want you can leave all of those components in the box.</p><p>All you need is two silver dice to set to the dice you select, as well as the red die for any bonus actions.</p>'
    },
    {
        name: 'Gameplay',
        id: 'gameplay',
        classes: ['gameplay'],
        content: '<p>Gameplay instructions here.</p>'
    },
    {
        name: 'Automa Actions',
        id: 'automaActions',
        content: '',
        subsections: [
            {
                name: 'Take Gyrodone',
                id: 'takeGyrodone',
                classes: ['takeGyrodone'],
                content: '<img class="quarterWidth" src="img/actions/takeGyrodone.png"><p>If SID has an empty Pulsar Ring, it takes a Gyrodyne and places it inside its Pulsar Ring.</p><p>In taking a Gyrodyne, SID will choose the highest value Gyrodyne that the human player has NOT activated and that SID has not already earned the Gyrodyne Bonus for. If the human player has all three types of Gyrodynes activated, then SID will take the highest value Gyrodyne for which it has not already earned the Gyrodyne Bonus.</p>'
            },
            {
                name: 'Activate Gyrodone',
                id: 'activateGyrodone',
                classes: ['activateGyrodone'],
                content: '<img class="quarterWidth" src="img/actions/activateGyrodone.png"><p>If SID currently has a Gyrodone that is currently under construction, it activates it.</p><p>If there are multiple choices, SID will choose the inactive Gyrodyne that earns the highest Gyrodyne Bonus available.</p>'
            },
            {
                name: 'Fly Ship',
                id: 'flyShip',
                classes: ['flyShip'],
                content: '',
                subsections: [
                    {
                        name: 'Ship -> Planet',
                        id: 'flyShipPlanet',
                        classes: ['flyShipPlanet'],
                        content: '<img class="quarterWidth" src="img/actions/flyShipPlanet.png"><p>SID travels to the next system and places a token on blue planet.</p>'
                    },
                    {
                        name: 'Ship -> Planet -> Pulsar / Planet',
                        id: 'flyShipPlanetandPlanetOrPulsar',
                        classes: ['flyShipPlanetandPlanetOrPulsar'],
                        content: '<img class="halfWidth" src="img/actions/flyShipPlanetandPlanetOrPulsar.png"><p>SID travels to the next system and afterwards either to another system or a pulsar.</p><p>Whether a pulsar or a system is navigated to depends on distance. If there is a tie, occupy the pulsar.</p>'
                    },
                    {
                        name: 'Ship -> Planet -> Planet -> Pulsar',
                        id: 'flyShipPlanetandPlanetPlanetPulsar',
                        classes: ['flyShipPlanetandPlanetPlanetPulsar'],
                        content: '<img class="halfWidth" src="img/actions/flyShipPlanetandPlanetPlanetPulsar.png"><p>SID travels through two systems and claims a pulsar after.</p><p>If SID can\'t reach a pulsar, it stays on the second system and claims one of the isolated pulsars (if possible).</p>'
                    }
                ]
            },
            {
                name: 'Take Transmitter',
                id: 'takeTransmitter',
                classes: ['takeTransmitter'],
                content: '<img class="quarterWidth" src="img/help/3-transmitters-example.png"><p>The number below the transmitter signifies how many transmitters are present, with left / middle / right signifying which transmitter out of the set that SID takes.</p><p>In the above example, if there are 3 transmitters currently present, then SID will take the middle one.</p><img class="halfWidth" src="img/help/3-transmitters-middle.jpg">'
            },
            {
                name: 'Take Technology',
                id: 'takeTechnology',
                classes: ['takeTechnology'],
                content: '<img class="halfWidth" src="img/actions/technology6.png"><p>Starting from the topmost + leftmost technology available in the current round, SID counts the specified amount of spaces left to right, highest to lowest.</p><p>Do not count any technologies which you / SID have already claimed, but skip over these instead.</p><p>If you reach the end of the currently available technologies, start counting again from the first available space again.</p>'
            }
        ]
    },
    {
        name: 'Credit',
        id: 'credit',
        content: '<p>This is not an official <a href="https://czechgames.com/" target="_blank" rel="noopener">CGE Games</a> product and has no affiliation with <a href="https://czechgames.com/" target="_blank" rel="noopener">CGE Games</a>. <a href="https://czechgames.com/en/pulsar-2849/" target="_blank" rel="noopener">Pulsar 2849</a> was designed by <a href="https://boardgamegeek.com/boardgamedesigner/9307/vladimir-suchy" target="_blank" rel="noopener">Vladim&iacute;r Such&yacute;</a>, with art by <a href="https://soeren-meding.com/" target="_blank" rel="noopener">S&ouml;ren Meding</a>. All art in this app is from <a href="https://czechgames.com/en/pulsar-2849/" target="_blank" rel="noopener">Pulsar 2849</a>.</p><p>All <a href="https://boardgamegeek.com/thread/2029397/sid-solo-intelligent-dice-pulsar-solo-play-attempt" target="_blank">Automa mechanics and information</a> credited to BGG user <a href="https://boardgamegeek.com/user/hellvet" target="_blank">hellvet (Peter Klocke)</a>.</p>'

    },
    {
        name: 'Contact',
        id: 'contact',
        content: '<p>Feel free to <a href="mailto:gavin.mcgruddy@gmail.com?subject=Pulsar%202849%20Automa" rel="noopener">email me</a>, or send a BGG message to <a href="https://boardgamegeek.com/geekmail/compose?touser=Gavmastaphlex" rel="noopener">Gavmastaphlex</a> with any feedbacks / suggestions.</p>'
    }
]
