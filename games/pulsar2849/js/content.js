var startContent = [
    {
        name: 'Setup',
        id: 'setup',
        content: '<p>Setup the game for a 2 Player game. SIDs research ship will be placed on the opposite side of the human player.</p><p>This digital version handles all dice rolling and marker placement/movement on the initiative and engineering tracks, so if you want you can leave all of those components in the box.</p>'
    },
    {
        name: 'Gameplay',
        id: 'gameplay',
        content: '<p><span class="bold underline">Dice Phase</span> - When it\'s your turn, click one of the available dice to see the effect it will have on your marker position. Alternate between markers with the "Marker" button, and the click "Confirm" to finalize your selection.</p><p>SID is programmed to automatically choose a dice and a marker to move.</p><p><span class="bold underline">Action Phase</span> - SID doesn\'t use the silver dice it chose in the previous phase. Instead three actions will be displayed in priority order (from top to bottom). SID will action <span class="bold underline">ONLY THE FIRST ONE</span> that it is able to, and once resolved, it\'ll either take its next turn or start the next round.</p>'
    }
    // Add any more starting information in the same syntax
]

var helpContent = [
    {
        name: 'Setup',
        id: 'setup',
        classes: ['setup'],
        content: '<p>Setup the game for a 2 Player game. SIDs research ship will be placed on the opposite side of the human player.</p><p>This digital version handles all dice rolling and marker placement/movement on the initiative and engineering tracks, so if you want you can leave all of those components in the box.</p>'
    },
    {
        name: 'Gameplay',
        id: 'gameplay',
        classes: ['gameplay'],
        content: '<p><span class="bold underline">Dice Phase</span> - When it\'s your turn, click one of the available dice to see the effect it will have on your marker position. Alternate between markers with the "Marker" button, and the click "Confirm" to finalize your selection.</p><p>SID is programmed to automatically choose a dice and a marker to move.</p><p><span class="bold underline">Action Phase</span> - SID doesn\'t use the silver dice it chose in the previous phase. Instead three actions will be displayed in priority order (from top to bottom). SID will action <span class="bold underline">ONLY THE FIRST ONE</span> that it is able to, and once resolved, it\'ll either take its next turn or start the next round.</p>'
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
                content: '<img class="quarterWidth" src="img/actions/takeGyrodone.png"><p>If SID has an empty Pulsar Ring, it takes a Gyrodyne and places it inside its Pulsar Ring.</p><p>In taking a Gyrodyne, SID will choose the highest value Gyrodyne that the human player has NOT activated and that SID has not already earned the Gyrodyne Bonus for.</p><p>If the human player has all three types of Gyrodynes activated, then SID will take the highest value Gyrodyne for which it has not already earned the Gyrodyne Bonus.</p>'
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
                        content: '<img class="quarterWidth" src="img/actions/flyShipPlanet.png"><p>SID travels to the next system and places a token on blue planet.</p><p>If there are multiple routes that meet this criteria, <a class="helpLink helpLink-flyShipTieBreaker" href="#">click here to access the tie breaker function</a>.</p><img class="halfWidth" src="img/help/flyNextPlanet.jpg">'
                    },
                    {
                        name: 'Ship -> Planet -> Pulsar / Planet',
                        id: 'flyShipPlanetandPlanetOrPulsar',
                        classes: ['flyShipPlanetandPlanetOrPulsar'],
                        content: '<img class="halfWidth" src="img/actions/flyShipPlanetandPlanetOrPulsar.png"><p>SID travels to the next system and afterwards either to another system or a pulsar.</p><p>Whether a pulsar or a system is navigated to depends on distance. If there is a tie, occupy the pulsar.</p><p>If there are multiple routes that meet this criteria, <a class="helpLink helpLink-flyShipTieBreaker" href="#">click here to access the tie breaker function</a>.</p><img class="halfWidth" src="img/help/flyTwoSystemsClaimPlanet.jpg">'
                    },
                    {
                        name: 'Ship -> Planet -> Planet -> Pulsar',
                        id: 'flyShipPlanetandPlanetPlanetPulsar',
                        classes: ['flyShipPlanetandPlanetPlanetPulsar'],
                        content: '<img class="halfWidth" src="img/actions/flyShipPlanetandPlanetPlanetPulsar.png"><p>SID travels through two systems and claims a pulsar after.</p><p>If SID can\'t reach a pulsar, it stays on the second system and claims one of the isolated pulsars (if possible).</p><p>If there are multiple routes that meet this criteria, <a class="helpLink helpLink-flyShipTieBreaker" href="#">click here to access the tie breaker function</a>.</p><img class="halfWidth" src="img/help/flyTwoSystemsClaimPulsar.jpg">'
                    },
                    {
                        name: 'Fly Ship Tie Breaker',
                        id: 'flyShipTieBreaker',
                        classes: ['flyShipTieBreaker'],
                        content: '<p>If there\'s a tie for routes, input the number below to choose one.</p><div id="tiedRoutesContainer"><select id="tiedRoutesSelect" name="tiedRoutesList" class="tiedRoutes"><option value="" disabled selected>Number of Routes</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select><p id="chosenRouteText" class="bold italic">SID takes the <span class="chosenRoute underline"></span> route.</p></div>'

                    }
                ]
            },
            {
                name: 'Take Transmitter',
                id: 'takeTransmitter',
                classes: ['takeTransmitter'],
                content: '<p>When SID claims a transmitter, simply take it from among the available transmitters and set it aside to signify it\'s not available for the human player to acquire.</p><p>The number below the transmitter shows that if there is that many transmitters present, SID will take the left / middle / right transmitter from the available collection.</p><p>If there is only 1 transmitter currently present, then SID claims that one.</p><img class="quarterWidth" src="img/help/3-transmitters-example.png"><p>In the above example, if there are 3 transmitters currently present, then SID will take the middle one.</p><img class="halfWidth" src="img/help/3-transmitters-middle.jpg">'
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
