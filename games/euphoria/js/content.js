var startContent = [
    {
        name: 'Setup',
        id: 'setup',
        content: '<p>The 2 Automas take the place of human players and contribute to the player count. Therefore, with 1 human player set up a 3 player game. With 2 human players set up a 4 player game.</p><p>Set up the game as normal, except for the Automas that are handled differently as described in the following sections.</p><p><a class="helpLink helpLink-automaComponents" href="#">1. Give the Automas their components.</a><br /><a class="helpLink helpLink-removeRecruitsMarkets" href="#">2. Remove the specified recruits and markets.</a><br /><a class="helpLink helpLink-automaRestrictions" href="#">3. Review the Automas restrictions. (optional)</a></p><p>The choosing of the Automas factions and building of the Automa deck is handled in the next screens.</p>'
    },
    {
        name: 'Gameplay',
        id: 'gameplay',
        content: '<p>Both Automas&rsquo; turns are handled by the same Automa card pair.</p><p>When Automas take their turn (remember that they do so after all humans) go through the following steps:</p><ol><li>Draw an Automa card.</li><li>The New Antiques Bazaar (if applicable): Discard 1 artifact (and refill the Bazaar as usual).</li><li>Black Automa&rsquo;s turn: Retrieve workers or place a single worker.</li><li>White Automa&rsquo;s turn: Retrieve workers or place a single worker.</li></ol>'
    }

    // Add any more starting information in the same syntax
    
]

var helpContent = [
    {
        name: 'Setup',
        id: 'setup',
        classes: ['setup'],
        content: '<p>The 2 Automas take the place of human players and contribute to the player count. Therefore, with 1 human player set up a 3 player game. With 2 human players set up a 4 player game.</p><p>Set up the game as normal, except for the Automas that are handled differently as described in the following sections.</p><p><a class="helpLink helpLink-automaComponents" href="#">1. Give the Automas their components.</a><br /><a class="helpLink helpLink-automaFactionSelection" href="#">2. Select the Automas Factions.</a><br /><a class="helpLink helpLink-removeRecruitsMarkets" href="#">3. Remove the specified recruits and markets.</a><br /><a class="helpLink helpLink-automaRestrictions" href="#">4. Review the Automas restrictions. (optional)</a></p>'
    },
    {
        name: 'Gameplay',
        id: 'gameplay',
        classes: ['gameplay'],
        content: '<p>Both Automas&rsquo; turns are handled by the same Automa card pair.</p><p>When Automas take their turn (remember that they do so after all humans) go through the following steps:</p><ol><li>Draw an Automa card.</li><li>The New Antiques Bazaar (if applicable): Discard 1 artifact (and refill the Bazaar as usual).</li><li>Black Automa&rsquo;s turn: Retrieve workers or place a single worker.</li><li>White Automa&rsquo;s turn: Retrieve workers or place a single worker.</li></ol>'
    },
    {
        name: 'Automa Components',
        id: 'automaComponents',
        classes: ['automaComponents'],
        content: '<p>One Automa is called the Black Automa; the other is called the White Automa. Set aside space on the table for each Automa and give them 4 workers (roll them) and 10 Authority tokens corresponding to their color.</p><p>The Automas always take their place in the turn order after the human player(s), black first, then white. It&rsquo;s a good idea to choose a spot for the Automa components that will help you remember this.</p><img class="threeFourWidth" src="img/help/automaComponents.jpg" />'
    },
    {
        name: 'Automa Faction Selection',
        id: 'automaFactionSelection',
        classes: ['automaFactionSelection'],
        content: '<p>After you&rsquo;ve chosen your own recruits:</p><ol><li>Shuffle the <span class="bold">faction/penalty</span> cards.</li><li>In a game with 1 human player:</li><ol type="a"><li>Draw faction/penalty cards one at a time for the black Automa until it has a card with a faction that is different than either of your two recruits.</li><li>Draw cards in the same way for the white Automa with the additional constraint that the faction must also be different than that drawn by the black Automa.</li></ol><li>In a game with 2 human players: Draw a faction/ penalty card for each Automa. Unlike a game with 1 human player, the factions don&rsquo;t need to be different from those of other players.</li><li>Place the drawn faction/penalty cards next to each Automa&rsquo;s other components with the <span class="bold">non-penalty</span> side up.</li><ol type="a"><li>The side with the <img class="icon" src="img/help/penalty.png" /> is called the <span class="bold">penalty</span> side.</li></ol><li>Return unused faction/penalty cards to the box.</li><li>The Automas&rsquo; factions count towards determining which factions have the most active recruits.</li></ol>'
    },
    {
        name: 'Remove Recruits & Markets',
        id: 'removeRecruitsMarkets',
        classes: ['removeRecruitsMarkets'],
        content: '<p>If you use the <span class="bold">expansion</span> markets and recruits, remove the recruits and markets listed below from the game:</p><ul><li>Dilemma&rsquo;s Prison (market)</li><li>Khaleef the Bruiser (Subterran recruit)</li></ul><p>If you use the <span class="bold">base game</span> markets and recruits, instead remove:</p><ul><li>Fountain of Youthful Thinking (market)</li><li>Amanda the Broker (Icarite recruit)</li><li>Ben the Ludologist (Euphorian recruit)</li><li>Josiah the Hacker (Subterran recruit)</li><li>Lee the Gossip (Icarite recruit)</li><li>Maxime the Ambassador (Icarite recruit)</li><li>Phil the Spy (Subterran recruit)</li><li>Rebecca the Peddler (Icarite recruit)</li></ul>'
    },
    {
        name: 'Automa Restrictions',
        id: 'automaRestrictions',
        classes: ['automaRestrictions'],
        content: '<ul><li>Automas have no morale, knowledge, or ethical dilemmas, which makes sense as they&rsquo;re just stacks of cardboard.</li><li>They also have no recruits.</li><li>They never pay the costs of using action spaces and the only benefits they gain from such spaces are:</li><ul style="list-style-type:none;"><li>&raquo; Placing authority tokens.</li><li>&raquo; Advancing miners.</li><li>&raquo; Advancing allegiance tracks.</li></ul><li>They never perform knowledge checks.</li><li>They never place more than 1 worker per turn.</li></ul>'
    },
    {
        name: 'Automa Cards',
        id: 'automaCards',
        classes: ['automaCards'],
        content: '<p>Automa cards are used to decide what the Automas do on their turn.</p><img class="halfWidth" src="img/help/automaCardDiagram.jpg" /><p class="italic">An Automa card with its various sections highlighted.</p><p>The card ID has no gameplay effect.</p><p>Automa cards are always used in pairs. These are placed horizontally next to each other and only the center area formed by the two combined cards is used in the current turn.</p><p>The left card is called the <span class="bold">Action card</span> and only its right half is used. The right card is the <span class="bold">Support card</span> and only its left half is used.</p><p>For placing workers, the black Automa uses the black section at the middle of the card and the white Automa uses the white section just below it.</p><img class="halfWidth" src="img/help/automaCardDiagram2.jpg" /><p class="italic">Two Automa cards next to each other. The left card acts as the action card and the right card acts as the support card.</p><p>The blue box (bottom middle) is called the <span class="bold">worker placement box</span> and the icons in there are used for the two Automas&rsquo; worker placements: black area for the black Automa, white area for the white Automa.</p><p>The icon in the purple box is used to determine the artifact card to be removed from the New Antiques Bazaar (if any) and the icon in the green box (if any) is used to determine whether an Automa will leave a worker on the board if retrieving workers.</p>'
    },
    {
        name: 'Penalizing Market',
        id: 'penalizingMarket',
        classes: ['penalizingMarket'],
        content: '<p>On an Automa&rsquo;s turn, any constructed market that doesn&rsquo;t have that Automa&rsquo;s authority token on it is a <span class="bold">Penalizing market</span> (i.e., the Automa is affected by a penalty because of that market).</p><p>Any time the Automa has any penalizing markets, the penalty side of its faction/penalty card must be face up (the side with the <img class="icon" src="img/help/penalty.png" />). Otherwise, the non-penalty side must be face up.</p><p class="bold underline">Market penalties</p><p>When the penalty side (with a <img class="icon" src="img/help/penalty.png" />) of the Automa&rsquo;s factions/penalty card is face up:</p><ul><li>Every time the Automa rolls a <img class="icon" src="img/help/penalty.png" />, that worker is immediately placed on the faction/penalty card. Workers on the card are unavailable to place. It&rsquo;s possible for ALL the Automa&rsquo;s workers to be on the card.</li><li>Workers that already have knowledge 6 when the card is turned to the penalty side (with a <im class="icon"g src="img/help/penalty.png" />) are not moved to the card.</li></ul><p>When the Automa retrieves workers, these unavailable workers are retrieved and rolled along with its other retrieved workers. This means that it is possible for the Automa to need to retrieve workers for two (or more) consecutive turns (if it rolls all 6s and the workers all become unavailable immediately).</p><ul><li>If the card is returned to the non-penalty side, any workers on it remain there until the Automa retrieves its workers.</li></ul>'
    },
    {
        name: 'Automa Allegiance',
        id: 'automaAllegiance',
        content: '<p>The faction icon on an Automa&rsquo;s faction/penalty card shows that <span class="bold">Automa&rsquo;s Faction</span>. The Automas will get to place up to 2 authority tokens for that faction.</p><ul><li>The first time that recruits of an Automa faction would be activated, either through the allegiance track or via a tunnel, place 1 of that Automa&rsquo;s authority tokens next to the allegiance track.</li><li>When an Automa&rsquo;s faction reaches the last tier of the allegiance track, place 1 more of that Automa&rsquo;s authority tokens next to the allegiance track.</li></ul>'
    },
    {
        name: 'Automa Actions',
        id: 'automaActions',
        content: '',
        subsections: [
            {
                name: 'Place a Worker',
                id: 'placeWorker',
                classes: ['placeWorker'],
                content: '<p>If an Automa has at least 1 available worker and doesn&rsquo;t retrieve, it places a worker. Look at its row in the worker placement box of the current card pair.</p><p>Placement is based both on the action icon (on the current action card) and the faction icon (on the support card). The latter can either be the icon of one of the four factions or it can be <img class="icon" src="img/help/factionAutoma.png" /> which indicates the Automa&rsquo;s faction.</p><p>The action icon will show what kind of action space the Automa will place its worker on. Refer to the corresponding action section below (see “Actions” section) and carry out the instructions there.</p><p>The Automa always places its available worker with the highest knowledge, except when it&rsquo;s placing in its own commodity area (<img class="icon" src="img/help/commodityArea.png" />). In this case, it selects its available worker with the lowest knowledge.</p><p>It does this whether the <img class="icon" src="img/help/factionAutoma.png" /> icon is shown or if it is the specific icon of its faction.</p><img class="halfWidth floatHelpImage" src="img/help/placeWorker.jpg" /><p class="italic"><span class="bold">Example:</span> The black Automa&rsquo;s faction is Icarus and it has workers with knowledge 2 and 6 available. The worker placement box for the current card pair looks like the illustration above.</p><p class="italic">You start by looking up the icon <img class="icon" src="img/help/commodityArea.png" /> in the appropriate subsection and find that this symbol means the Automa will place a worker on a commodity area. Since the faction icon next to the <img class="icon" src="img/help/commodityArea.png" /> icon is <img class="icon" src="img/help/factionAutoma.png" /> the Automa will place its knowledge 2 worker on the Icarus commodity area.</p><p class="italic">Had the faction icon been <img class="icon" src="img/help/factionWastelander.png" />, the Automa would have placed its knowledge 6 worker on the commodity area in the Wastelands.</p>'
            },
            {
                name: 'Tiebreakers',
                id: 'tiebreakers',
                classes: ['tiebreakers'],
                content: '<p>When placing a worker on either artifact markets or constructed markets/construction sites, the Automa will often have multiple spaces&ndash;possibly in multiple faction areas&ndash;that it considers for placement. These are called valid spaces.</p><p class="bold underline">The Faction Area Tiebreaker</p><p>In such situations, the Automa will first select the faction area to consider. A faction area is all the action spaces belonging to a specific faction.</p><img class="halfWidth" src="img/help/tiebreaker.jpg" /><p>Starting in the faction area corresponding to the icon shown on the current support card, it assesses the factions in the order shown below, until it finds one with a valid space:</p><p class="bold underline">The Construct(ed) Market Tiebreaker</p><p>When choosing a construction site or constructed market, and having applied the appropriate faction area tiebreaker, there&rsquo;ll often still be multiple valid spaces left.</p><p>In such situations, the Automa will select the space on the bottommost location of the board.</p><p>Examples of using these tiebreakers are included in the descriptions of the actions where these are relevant.</p>'
            },
            {
                name: 'The New Antiques Bazaar <img src="img/help/bazaarCard2.png" class="menuIcon" />',
                id: 'bazaarCard',
                classes: ['bazaarCard1', 'bazaarCard2', 'bazaarCard3'],
                content: '<p class="bold">Ignore this section if you&rsquo;re playing without the New Antiques Bazaar.</p><img class="quarterWidth floatHelpImage" src="img/help/bazaarCard2.png" /><p>If an icon like the one to the right is present, discard the highlighted artifact from the bazaar. Only one artifact is removed, not one per Automa.</p>'
            },
            {
                name: 'Commodity Area <img src="img/help/commodityArea.png" class="menuIcon" />',
                id: 'commodityArea',
                classes: ['commodityArea'],
                content: '<img class="floatHelpImage breezeBarSkyLoungeIcon" src="img/help/commodityArea.png" /><p>For this action, the Automa places a worker on the commodity area of the faction indicated on the current Automa card.</p><p>Remember: If the Automa must place a worker on the commodity area of its own faction, it will (contrary to all other situations) place the worker with the lowest knowledge.</p><p class="bold italic underline">Note: If the Automa has exactly 1 worker available when this action is triggered, retrieve that Automas workers following the <a class="helpLink helpLink-retrieveWorkers" href="#">Retrieve Workers instructions</a>.</p>'
            },
            {
                name: 'Tunnel + Breeze Bar <img src="img/help/breezeBar.png" class="menuIcon" />',
                id: 'breezeBar',
                classes: ['breezeBar'],
                content: '<img class="floatHelpImage breezeBarSkyLoungeIcon" src="img/help/breezeBar.png" /><p>If the Automas faction is Wastelander, Subterran or Euphorian it will place a die the corresponding tunnel.</p><p>If the Automas faction is Icarite it will place a die in the Breeze Bar (icon with artifact cards).</p><p>This is due the Icarites having no tunnel but having two worker placements (the sky lounge and the breeze bar) that have a similar function.</p><p class="bold italic underline">Note: If the Automa has exactly 1 worker available when this action is triggered, retrieve that Automas workers following the <a class="helpLink helpLink-retrieveWorkers" href="#">Retrieve Workers instructions</a>.</p>'
            },
            {
                name: 'Tunnel + Sky Lounge <img src="img/help/skyLounge.png" class="menuIcon" />',
                id: 'skyLounge',
                classes: ['skyLounge'],
                content: '<img class="floatHelpImage breezeBarSkyLoungeIcon" src="img/help/skyLounge.png" /><p>If the Automas faction is Wastelander, Subterran or Euphorian it will place a die the corresponding tunnel.</p><p>If the Automas faction is Icarite it will place a die in the Sky Lounge (icon with construction resources).</p><p>This is due the Icarites having no tunnel but having two worker placements (the sky lounge and the breeze bar) that have a similar function.</p><p class="bold italic underline">Note: If the Automa has exactly 1 worker available when this action is triggered, retrieve that Automas workers following the <a class="helpLink helpLink-retrieveWorkers" href="#">Retrieve Workers instructions</a>.</p>'
            },
            {
                name: 'Artifact Market <img src="img/help/artifactMarket.png" class="menuIcon" />',
                id: 'artifactMarket',
                classes: ['artifactMarket'],
                content: '<img class="floatHelpImage breezeBarSkyLoungeIcon" src="img/help/artifactMarket.png" /><p>Go through the rows of the table below, from top to bottom, until you find a row that gives the Automa at least 1 valid space in any faction area. If multiple faction areas have valid spaces use the <a class="helpLink helpLink-tiebreakers" href="#">tiebreakers</a>. The Automa places a worker and possibly an authority token, as specified.</p><img class="halfWidth floatHelpImage" src="img/help/artifactMarket.jpg" /><p class="italic"><span class="bold">Designer&rsquo;s Note:</span> As seen in the table, the Automa starts by seeking a construction that&rsquo;s already taking place, which might sound counterintuitive for an action called &ldquo;artifact market action,&rdquo; but this simulates how human players often do everything they can to join a market that&rsquo;s being constructed.</p><p class="italic">Automas can place authority tokens on territories that are already full. In such a situation, an Automa places the authority token next to the territory.</p><p class="italic"><span class="bold">Example</span> The white Automa has drawn an artifact market action and the faction icon is Icarus.</p><p class="italic">No construction is in progress in any faction area so the Automa skips the first row of the table.</p><p class="italic">Next, it checks whether there are any penalizing markets (markets where that Automa doesn&rsquo;t already have an <img class="icon" src="img/help/star.png" />. Lo and behold, there are 3 such markets: 2 in Subterra and 1 in Euphoria.</p><p class="italic">So, the Automa uses the <a class="helpLink helpLink-tiebreakers" href="#">faction area tiebreaker</a>&ndash; starting in Icarus and following the faction circle until it meets the first faction area containing a penalizing market. That faction area is Subterra. (It skips Icarus and Wastelands because neither have a penalizing market.)</p><p class="italic">Therefore, the Automa must place a worker on the Subterran artifact market.</p><p class="italic">Since there are 2 penalizing markets in Subterra, the construct(ed) market tiebreaker tells you to place the Automa&rsquo;s authority token on the bottommost of the 2 Subterran constructed markets.</p>'
            },
            {
                name: 'Construct(ed) Market <img src="img/help/constructMarkets.png" class="menuIcon" />',
                id: 'constructMarkets',
                classes: ['constructMarkets'],
                content: '<img class="floatHelpImage breezeBarSkyLoungeIcon" src="img/help/constructMarkets.png" /><p>Go through the rows of the table below, from top to bottom, until you find a row that gives the Automa at least 1 valid space, using the <a class="helpLink helpLink-tiebreakers" href="#">tiebreakers</a> as needed. The Automa places a worker and possibly an authority token, as specified.</p><img class="halfWidth floatHelpImage" src="img/help/constructMarket.jpg" /><p class="italic"><span class="bold">Designer&rsquo;s Note:</span> In this action the Automa wants to construct markets, if possible. The next priority is eliminating market penalties. If those strategies fail, it&rsquo;ll use a constructed market to place <img class="icon" src="img/help/star.png" /> on a territory</p><p class="italic">Automas can place authority tokens on territories that are already full. In such a situation, an Automa places the authority token next to the territory.</p><p class="italic"><span class="bold">Example:</span> The black Automa has drawn a construct(ed) market action and the faction icon is Subterra.</p><p class="italic">No construction is in progress in any faction area, so the Automa skips the first row of the table.</p><p class="italic">Next, it checks whether there are any construction sites without any workers and find that only the 2 markets in Euphoria are unconstructed and have no workers on their construction sites.</p><p class="italic">Therefore, row 2 of the action table applies. The 4 spaces on the construction sites for each of those 2 markets in Euphoria are valid spaces for worker placement.</p><p class="italic">Since only Euphoria has valid spaces, the faction area tiebreaker isn&rsquo;t needed. The construct(ed) market tiebreaker means that the Automa places its worker on the bottommost Euphorian construction space on the board.</p>'
            },
            {
                name: 'Retrieve Automa Workers',
                id: 'retrieveWorkers',
                classes: ['retrieveWorkers'],
                content: '<p>When an Automa has no workers to place, it will retrieve its workers.</p><p>An Automa will also retrieve workers when it has exactly 1 available worker and its action for the turn is <img class="icon" src="img/help/commodityArea.png" />, <img class="icon" src="img/help/skyLounge.png" />, or <img class="icon" src="img/help/breezeBar.png" />.</p><p>Whenever an Automa retrieves workers:</p><ul><li>It will leave behind workers on construction sites.</li><li>If there&rsquo;s a <img class="icon" src="img/help/camping.png" /> icon on the support card, it will also leave 1 worker behind on a commodity area not belonging to its faction (if there is one). It will only do this, however, if it will still retrieve at least 1 worker.</li><li>If there are multiple such workers, it will leave behind 1 worker with the highest knowledge. Use the Faction area tiebreaker <a class="helpLink helpLink-tiebreakers" href="#">(see Tiebreakers section)</a> if there are more than one of those workers.</li></ul><p>Remember, Automas never do knowledge checks. Other than that, they bump and retrieve workers as normal, including rolling retrieved workers.</p><p>Remember to check whether retrieved workers with knowledge 6 should be placed on the faction/penalty card. <a class="helpLink helpLink-penalizingMarket" href="#">(See the Market Penalties section.)</a></p>'
            }
        ]
    },
    {
        name: 'Optional Solo Variant',
        id: 'variant',
        content: '<p>When setting up the game to play solo, you can draw faction/penalty cards for the Automas without regard for the factions of your recruits and the faction of the other Automa.</p><p class="italic"><span class="bold">Designer&rsquo;s Note:</span> This variant can lead to interesting match-ups against the Automa, but makes the game swingier.</p>'
    },
    {
        name: 'Credit',
        id: 'credit',
        content: '<p>This is not an official <a href="https://stonemaiergames.com/games/euphoria/" target="_blank" rel="noopener">Stonemaier Games</a> product and has no affiliation with <a href="https://stonemaiergames.com/games/euphoria/" target="_blank" rel="noopener">Stonemaier Games</a>.</p><p>Euphoria was designed by <a href="https://boardgamegeek.com/user/jameystegmaier" target="_blank" rel="noopener">Jamey Stegmaier</a> and <a href="https://boardgamegeek.com/boardgamedesigner/62641/alan-stone" target="_blank" rel="noopener">Alan Stone</a>, with art by <a href="https://jacquidavis.com/" target="_blank" rel="noopener">Jacqui Davis</a>.</p><p>All art in this app is from <a href="https://stonemaiergames.com/games/euphoria/" target="_blank" rel="noopener">Euphoria</a>.</p><p>The Automa for Euphoria was designed by <a href="https://boardgamegeek.com/user/mortenmdk" target="_blank" rel="noopener">Morten Monrad Pedersen</a>, <a href="https://boardgamegeek.com/user/DJStudley" target="_blank" rel="noopener">David J. Studley</a> with <a href="https://boardgamegeek.com/user/njshaw2" target="_blank" rel="noopener">Nick Shaw</a> who represent <a href="http://www.automafactory.com/" target="_blank" rel="noopener">Automa Factory</a>.</p>'

    },
    {
        name: 'Contact',
        id: 'contact',
        content: '<p>Feel free to <a href="mailto:gavin.mcgruddy@gmail.com?subject=Euphoria%20Online%20Automa" rel="noopener">email me</a>, or send a BGG message to <a href="https://boardgamegeek.com/geekmail/compose?touser=Gavmastaphlex" rel="noopener">Gavmastaphlex</a> with any feedbacks / suggestions.</p>'
    }
]
