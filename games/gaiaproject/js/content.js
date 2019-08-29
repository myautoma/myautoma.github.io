var startContent = [
    {
        name: 'Setup',
        id: 'setup',
        content: '<p>Set up a 1-player game as described in the base game rulebook. You take the first player marker.</p><p>Take space sector tiles 01&ndash;07 and return the rest to the box. Randomly place one sector tile in the center of the table, then starting adjacent to that tile and moving clockwise, randomly place the other tiles to create the same board shape as shown in the base game rules. As you place each tile, you may rotate it as you see fit, as long as it does not violate the setup rules from the base game.</p><p>Rotate the whole board so that the spaces of the board form horizontal rows, as seen here under the <a class="helpLink helpLink-directionalSelection" href="#">"Directional Selection"</a> help section.</p>'
    },
    {
        name: 'Gameplay',
        id: 'gameplay',
        content: '<p>You always take the first turn of the game, and the Automa has its place in the turn order just as a human player would.</p><p>The Automa takes its turn by doing the following:</p><ol><li>Draw an Automa decision card (draw two in the first turn of a round).</li><li>Take the action shown on the action card.</li><li>Gain the number of VP shown in the <span class="bold">VP section</span> of the decision card. If the Automa took a faction action, it instead gains the VP shown next to the action on the faction card.</li></ol>'
    }

    // Add any more starting information in the same syntax
    
]

var helpContent = [
    {
        name: 'Setup',
        id: 'setup',
        classes: ['setup'],
        content: '<p>Set up a 1-player game as described in the base game rulebook. You take the first player marker.</p><p>Take space sector tiles 01&ndash;07 and return the rest to the box. Randomly place one sector tile in the center of the table, then starting adjacent to that tile and moving clockwise, randomly place the other tiles to create the same board shape as shown in the base game rules. As you place each tile, you may rotate it as you see fit, as long as it does not violate the setup rules from the base game.</p><p>Rotate the whole board so that the spaces of the board form horizontal rows, as seen here under the <a class="helpLink helpLink-directionalSelection" href="#">"Directional Selection"</a> help section.</p>'
    },
    {
        name: 'Gameplay',
        id: 'gameplay',
        classes: ['gameplay'],
        content: '<p>You always take the first turn of the game, and the Automa has its place in the turn order just as a human player would.</p><p>The Automa takes its turn by doing the following:</p><ol><li>Draw an Automa decision card (draw two in the first turn of a round).</li><li>Take the action shown on the action card.</li><li>Gain the number of VP shown in the <span class="bold">VP section</span> of the decision card. If the Automa took a faction action, it instead gains the VP shown next to the action on the faction card.</li></ol>'
    },
    {
        name: 'Selection and Tiebreaking',
        id: 'selectionAndTiebreaking',
        content: '',
        subsections: [
            {
                name: 'Final Scoring',
                id: 'finalScoring',
                classes: ['finalScoring'],
                content: '<img class="helpMainActionImg" src="img/support/goal-0-1.png" /><p>The table below shows the tiebreakers added to the "Build a Mine" action by final scoring tiles.</p><p>To determine which final scoring tile to use for the tiebreaker, check the top of the support card for one of the icons shown to the right. Based on the icon shown, resolve the tiebreaker based on the bottom final scoring tile (left icon), top tile (middle icon), or no tile (right icon).</p><table class="endScoringTable"><tr><th class="endScoringTable-yla0">Final Scoring Tile</th><th class="endScoringTable-yla0">Final Scoring Tiebreaker</th></tr><tr><td class="endScoringTable-yla0">Most sectors</td><td class="endScoringTable-cly1"><span style="font-weight:bold">TIEBREAKER 3b</span>:<br>Planets in a sector without<br>Automa planets.</td></tr><tr><td class="endScoringTable-yla0">Most planet types</td><td class="endScoringTable-cly1"><span style="font-weight:bold">TIEBREAKER 3b:</span><br>Planets of a type the Automa has not<br>colonized yet.</td></tr><tr><td class="endScoringTable-1wig">Most Gaia Planets</td><td class="endScoringTable-0lax"><span style="font-weight:bold">TIEBREAKER 3b:</span> Gaia or<br>Transdim Planets.</td></tr></table>'
            },
            {
                name: 'Automa Range',
                id: 'automaRange',
                classes: ['automaRange'],
                content: '<img class="automaRangeHelpImg" src="img/help/automaRange-2.png" /><p>The <span class="bold">Automa\'s range</span> is not determined by research. Instead, the support card or the faction card will specify the Automa\'s range for the turn, depending on the Automa\'s action.</p>'
            },
            {
                name: 'Directional Selection',
                id: 'directionalSelection',
                classes: ['directionalSelection'],
                content: '<p>During the game, some actions will require the Automa to select one planet from among a set of valid planets. This is often done via directional selection.</p><p>Imagine that all planets on the board are numbered using the patterns established here:</p><img class="threeFourWidth" src="img/help/directionalSelection.jpg" /><p>To resolve <span class="bold">directional selection</span>, look at the zigzag arrow icon in the support column of the appropriate card. Select the lowest-numbered planet in the indicated direction that matches all given conditions. See the example of directional selection here.</p><img class="directionHelpImg" src="img/help/directionLeftToRight.png" /><p>If the arrow points to the right, the Automa chooses the lowest <span class="bold">yellow</span>-numbered planet from the set of valid planets (normal English reading direction).</p><img class="directionHelpImg" src="img/help/directionRightToLeft.png" /><p>If the arrow points to the left, the Automa chooses the lowest <span class="bold">blue</span>-numbered planet from the set of valid planets (reverse English reading direction).</p>'
            },
            {
                name: 'Numbered Selection',
                id: 'numberedSelection',
                classes: ['numberedSelection'],
                content: '<img class="numberedHelpImg" src="img/support/numArrowRight3.png" /><p>When the Automa must select a power/Q.I.C. action or research area, use <span class="bold">numbered selection</span>: look at the numbered arrow in the support column of the current Automa support card.</p><img class="numberedHelpImg" src="img/support/numArrowRight3.png" /><p>If the arrow points right, start at the leftmost valid option and count out each of the options moving toward the right. If a power/Q.I.C. action is covered by an action token, or if there is a token on level 5 of the research area (and no advanced tech tile on it), skip that option. If you move past the last option, continue counting from the first one. Stop when you have counted the number of options that corresponds to the number shown above the arrow. The Automa chooses that option.</p><img class="numberedHelpImg" src="img/support/numArrowLeft3.png" /><p>If the arrow points to the left, start at the rightmost option and count moving left instead.</p><p>Choosing a power/Q.I.C. action using a <img  class="icon" src="img/help/numArrowLeft5.png" /> icon where six actions are already taken. The rightmost action (the circled one) is selected becaus you wrap around when counting.</p><img class="threeFourWidth" src="img/help/numberedSelection.jpg" />'
            },
            
        ]
    },
    {
        name: 'Automa Actions',
        id: 'automaActions',
        content: '',
        subsections: [
            {
                name: 'Advance Highest Research Area',
                id: 'advanceHighestResearchArea',
                classes: ['advanceHighestResearchArea'],
                content: '<img class="helpMainActionImg" src="img/main/advanceHighestResearchArea.png" /><ol><li><span class="bold">Valid Options:</span> Any research area in which the Automa can advance or an advanced tech tile is available.</li><li><span class="bold">Tiebreaker:</span></li><ol type="a"><li>The highest research level the Automa has reached in any valid research area.</li><li>Numbered selection.</li></ol><li><span class="bold">Execute action:</span></li><ol type="a"><li>If the Automa is at level 4 in a research area with an advanced tech tile, return that tile to the box instead of advancing to level 5.</li><li>Otherwise, advance the Automa one level in the selected research area.</li></ol></ol><p>Note that the Automa does not need a federation token to take this action.</p>'
            },
            {
                name: 'Advance Random Research Area',
                id: 'advanceRandomResearchArea',
                classes: ['advanceRandomResearchArea'],
                content: '<img class="helpMainActionImg" src="img/main/advanceRandomResearchArea.png" /><ol><li><span class="bold">Valid Options:</span> Any research area in which the Automa can advance or an advanced tech tile is available.</li><li><span class="bold">Tiebreaker:</span>Numbered selection.</li><li><span class="bold">Execute action:</span></li><ol type="a"><li>If the Automa is at level 4 in the selected research area with an advanced tech tile, return that tile to the box instead of advancing to level 5.</li><li>Otherwise, advance the Automa one level in the selected research area..</li></ol></ol><p>Note that the Automa does not need a federation token to take this action.</p>'
            },
            {
                name: 'Build a Mine',
                id: 'buildMine',
                classes: ['buildMine'],
                content: '<img class="helpMainActionImg" src="img/main/buildMine.png" /><ol><li><span class="bold">Condition:</span> The Automa has at least one mine in its supply.</li><li><span class="bold">Valid Options:</span> Any empty planet (including Transdim Planets) within the Automa\'s range of a planet the Automa has colonized.</li><li><span class="bold">Tiebreaker:</span></li><ol type="a"><li>Faction action tiebreaker, if built by a faction action.</li><li>See the final scoring tile tiebreaker table (below), if applicable.</li><li>Planet type requiring the fewest terraforming steps for the Automa\'s faction. For this purpose, Gaia Planets require 1 terraforming step and Transdim Planets require 2 steps.</li><li>Planet closest to any of <span class="bold">your</span> planets.</li><li>Directional selection.</li></ol><li><span class="bold">Execute action:</span></li><ol type="a"><li>Place one mine from the Automa\'s supply on the selected planet. Place a Gaia tile on the planet if it is a Transdim Planet (the Automa does not use Gaiaformers).</li><li>If the mine was placed on a planet not adjacent to an Automa structure, place a satellite on any non-planet space you choose next to the new mine. (The satellite matters only for the "Most Satellites" final scoring tile.)</li><ul><li>Remember that <span class="bold">you</span> can charge power when the Automa builds a mine just as you do when playing against a human opponent.</li></ul></ol></ol><p>If the "Build a Mine" action cannot be resolved because the condition is not met or there are no valid planets, take an <a class="helpLink helpLink-upgrade" href="#">"Upgrade"</a> action instead.</p>'
            },
            {
                name: 'Build a Mine (example)',
                id: 'buildMineExample',
                classes: ['buildMineExample'],
                content: '<p>You are playing the Taklons (brown) against the Automa, playing the Geodens (orange). The initial situation looks like this:</p><img class="halfWidth" src="img/help/buildMine1.jpg" /><p>The Automa draws a card showing the "Build a Mine" action. The Automa has a mine left in its supply, so the action can be taken.</p><img class="halfWidth" src="img/help/buildMine2.jpg" /><img class="buildMineExampleTiebreaker" src="img/help/automaTiebreakersHelpImg.jpg" /><p>This "Build a Mine" action is not part of a faction action, so there is no faction action tiebreaker (3a).</p><p>There is no final scoring category tiebreaker (3b).</p><p>The Automa\'s range is 2.</p><p>Planets within range of the Automa\'s colonized planets are valid (the brown planet on the right is occupied by one of <span class="bold">your</span> mines, so it is not valid).</p><img class="halfWidth" src="img/help/buildMine3.jpg" /><p>No planets of the Geodens\' home planet type are within range (0 terraforming steps), so planets that require 1 terraforming step are valid (red, yellow, and Gaia planets).</p><img class="threeFourWidth" src="img/help/buildMine4b.jpg" /><p>Tiebreaker 3d is the shortest distance to any of your planets. Planets A and B have a distance of 2 and planet C has a distance of 4; there is a tie between A and B.</p><img class="halfWidth" src="img/help/buildMine5a.jpg" /><img class="buildMineExampleDirectionTiebreaker" src="img/help/directionRightToLeft.png" /><p>Tiebreaker 3e is directional selection. The support card indicates to resolve directional selection from right to left, bottom to top.</p><p>Directional selection encounters the Gaia Planet first...</p><img class="halfWidth" src="img/help/buildMine6a.jpg" /><p>...so the Automa builds a mine on that planet. Since you have a mine in the neighboring area, you may charge 1 power with the passive action.</p><img class="quarterWidth" src="img/help/buildMine7a.jpg" />'
            },
            {
                name: 'Power/Q.I.C. Action',
                id: 'powerQIC',
                classes: ['powerQIC'],
                content: '<img class="helpMainActionImg" src="img/main/powerQIC.png" /><ol><li><span class="bold">Valid Options:</span> Any power or Q.I.C. actions not covered by an action token.</li><li><span class="bold">Tiebreaker:</span> Numbered selection.</li><li><span class="bold">Execute action</span>: Place an action token on the selected action. The Automa gains no benefit.</li></ol>'
            },
            {
                name: 'Upgrade',
                id: 'upgrade',
                classes: ['upgrade'],
                content: '<img class="helpMainActionImg" src="img/main/upgrade.png" /><ol><li><span class="bold">Condition:</span> The Automa can resolve an upgrade.</li><li><span class="bold">Valid Options:</span> The Automa upgrades structures based on the following priority list (also shown on the "upgrade" icon). Move down the list until you reach an upgrade the Automa can resolve; planets with the necessary structure are valid. Note that there is no difference between the Automa\'s academies.</li><ol type="a"><li>Upgrade a trading station into a planetary institute.</li><li>Upgrade a mine into a trading station.</li><li>Upgrade a research lab into an academy.</li><li>Upgrade a trading station into a research lab.</li></ol><li><span class="bold">Tiebreaker:</span></li><ol type="a"><li>Closest to any of <span class="bold">your</span> planets.</li><li>Directional selection.</li></ol><li><span class="bold">Execute action:</span> Replace the structure on the chosen planet with the structure on the priority list.</li><ul><li>Remember that <span class="bold">you</span> can charge power when the Automa upgrades just as you do when playing against a human opponent.</li></ul></ol><p>Important: The Automa <span class="bold">does not</span> gain a standard tech tile whenupgrading to a research lab or academy.</p>'
            },
        ]
    },
    {
        name: 'Factions Actions',
        id: 'factionActions',
        content: '',
        subsections: [
            {
                name: 'Firaks',
                id: 'firaksAction',
                classes: ['firaksAction'],
                content: '<img class="helpFactionImg" src="img/factions/firaks.jpg" />'
            },
            {
                name: 'Geodens',
                id: 'geodensAction',
                classes: ['geodensAction'],
                content: '<img class="helpFactionImg" src="img/factions/geodens.jpg" />'
            },
            {
                name: 'Hadsch Hallas',
                id: 'hadschHallasAction',
                classes: ['hadschHallasAction'],
                content: '<img class="helpFactionImg" src="img/factions/hadschHallas.jpg" />'
            },
            {
                name: 'Itars',
                id: 'itarsAction',
                classes: ['itarsAction'],
                content: '<img class="helpFactionImg" src="img/factions/itars.jpg" />'
            },
            {
                name: 'Taklons',
                id: 'taklonsAction',
                classes: ['taklonsAction'],
                content: '<img class="helpFactionImg" src="img/factions/taklons.jpg" />'
            },
            {
                name: 'Terrans',
                id: 'terransAction',
                classes: ['terransAction'],
                content: '<img class="helpFactionImg" src="img/factions/terrans.jpg" />'
            },
            {
                name: 'Xenos',
                id: 'xenosAction',
                classes: ['xenosAction'],
                content: '<img class="helpFactionImg" src="img/factions/xenos.jpg" />'
            },
        ]
    },
    {
        name: 'Credit',
        id: 'credit',
        content: '<p>This is not an official <a target="_blank" rel="noopener" href="http://www.feuerland-spiele.de">Feuerland Spiele</a> product and has no affiliation with <a target="_blank" rel="noopener" href="http://www.feuerland-spiele.de">Feuerland Spiele</a>.</p><p>All digital rights for <a target="_blank" rel="noopener" href="http://www.feuerland-spiele.de/spiele/gaia_project.php">Gaia Project</a> belongs to <a target="_blank" rel="noopener" href="https://digidiced.com/">Digidiced</a>. This is not an official <a target="_blank" rel="noopener" href="https://digidiced.com/">Digidiced</a> product and has no affiliation with <a target="_blank" rel="noopener" href="https://digidiced.com/">Digidiced</a>.</p><p><a target="_blank" rel="noopener" href="http://www.feuerland-spiele.de/spiele/gaia_project.php">Gaia Project</a> was designed by <a target="_blank" rel="noopener" href="https://boardgamegeek.com/boardgamedesigner/4300/jens-drogemuller">Jens Dr&ouml;gem&uuml;ller</a> and <a target="_blank" rel="noopener" href="https://boardgamegeek.com/boardgamedesigner/4407/helge-ostertag">Helge Ostertag</a>, with art by <a target="_blank" rel="noopener" href="https://boardgamegeek.com/boardgamedesigner/12484/dennis-lohausen">Dennis Lohausen</a>.</p><p>All art in this app is from <a target="_blank" rel="noopener" href="http://www.feuerland-spiele.de/spiele/gaia_project.php">Gaia Project</a>.</p><p>The Automa for Gaia Project was designed by <a href="https://boardgamegeek.com/user/mortenmdk" target="_blank" rel="noopener" rel="noopener">Morten Monrad Pedersen</a>, <a href="https://boardgamegeek.com/user/Lines42" target="_blank" rel="noopener" rel="noopener">Lines J. Hutter</a>, <a href="https://boardgamegeek.com/user/DJStudley" target="_blank" rel="noopener" rel="noopener">David J. Studley</a> who represent <a href="http://www.automafactory.com/" target="_blank" rel="noopener" rel="noopener">Automa Factory</a>, with <a target="_blank" rel="noopener" href="https://boardgamegeek.com/user/schroederjan">Jan Schr&ouml;der</a> as consultant.</p>'

    },
    {
        name: 'Contact',
        id: 'contact',
        content: '<p>Feel free to <a href="mailto:gavin.mcgruddy@gmail.com?subject=Gaia%20Project%20Online%20Automa" rel="noopener">email me</a>, or send a BGG message to <a href="https://boardgamegeek.com/geekmail/compose?touser=Gavmastaphlex" rel="noopener">Gavmastaphlex</a> with any feedbacks / suggestions.</p>'
    }
]