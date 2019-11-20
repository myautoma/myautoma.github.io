var startContent = [
    {
        name: 'Setup',
        id: 'setup',
        content: '<p>Perform the normal steps of setup with the following changes:</p><ul><li>Set up all components for the AI as if they were a player.</li><li>After choosing your character, choose a character to play against. It must be a character that starts the game with databank card #91 or #92.</li><li>You are the first player. You gain 4,000 credits and the AI gains 6,000 credits as normal during step 5.</li><li>Follow the setup instructions on the AI player\'s character card. Then place a goal token on the destination listed on their cargo or job.</li></ul>'
    },
    {
        name: 'Gameplay',
        id: 'gameplay',
        content: '<p>During the game, resolve your turn as normal. At the end of each of your turns, the AI player will take a turn. To resolve the AI player\'s turn, simply draw the top card of the AI deck and resolve it, starting at the top and proceeding downward.</p><p>If instructed to "do the first that applies," resolve the top bullet in that section, if possible. If this bullet would have no effect or cannot be resolved (for example, the AI player has no damage to recover), resolve the next bullet instead and so forth.</p><p>If instructed to "do all that apply," resolve each bullet in that section from top to bottom. Skip any bullets that would have no effect or cannot be resolved.</p><p>The first player to acquire 10 fame wins the game.</p>'
    }

    // Add any more starting information in the same syntax
    
]



var helpContent = [
    {
        name: 'Setup',
        id: 'setup',
        classes: ['setup'],
        content: '<p>Perform the normal steps of setup with the following changes:</p><ul><li>Set up all components for the AI as if they were a player.</li><li>After choosing your character, choose a character to play against. It must be a character that starts the game with databank card #91 or #92.</li><li>You are the first player. You gain 4,000 credits and the AI gains 6,000 credits as normal during step 5.</li><li>Follow the setup instructions on the AI player\'s character card. Then place a goal token on the destination listed on their cargo or job.</li></ul>'
    },
    {
        name: 'Gameplay',
        id: 'gameplay',
        classes: ['gameplay'],
        content: '<p>During the game, resolve your turn as normal. At the end of each of your turns, the AI player will take a turn. To resolve the AI player\'s turn, simply draw the top card of the AI deck and resolve it, starting at the top and proceeding downward.</p><p>If instructed to "do the first that applies," resolve the top bullet in that section, if possible. If this bullet would have no effect or cannot be resolved (for example, the AI player has no damage to recover), resolve the next bullet instead and so forth.</p><p>If instructed to "do all that apply," resolve each bullet in that section from top to bottom. Skip any bullets that would have no effect or cannot be resolved.</p><p>After resolving the card, discard it facedown to the bottom of the AI deck. You then resolve your turn as normal.</p><p>The first player to acquire 10 fame wins the game.</p>'
    },
    {
        name: 'AI Player&rsquo;s Cards and Credits',
        id: 'cardsAndCredits',
        classes: ['cardsAndCredits'],
        content: '<p>Keep track of the AI player&rsquo;s fame, credits, and cards as if they were a real player (for example, place their cargo cards in &ldquo;Cargo&rdquo; slots on their ship).</p><p>The AI player does not use abilities on cards, except for abilities that increase the values on their ship or character (for example, &ldquo;Gain +1 <img class="icon" src="img/gun.jpg" /> &rdquo;). The AI player also cannot complete personal goals or ship goals.</p>'
    },
    {
        name: 'AI Goals',
        id: 'aiGoals',
        classes: ['aiGoals'],
        content: '<p>The AI player uses goal tokens to mark which planets it can deliver cargo to or complete jobs on. These tokens are used to determine where the <a class="helpLink helpLink-moving" href="#">AI moves</a> during its turn.</p><p>During setup, place a goal token on the destination planet of the AI player&rsquo;s starting cargo or job.</p><p>When the AI player delivers cargo or completes a job on a planet, remove one goal token from that planet.</p>'
    },
    {
        name: 'Moving',
        id: 'moving',
        classes: ['moving'],
        content: '<p>When the AI player is instructed to move, move their standee a number of spaces equal to their ship&rsquo;s hyperdrive (<img class="icon" src="img/ship.jpg" />) value. They always move toward the nearest goal token on the map. If their space contains a goal token, they do not move.</p><p>If there are multiple paths by which the AI player could move toward a goal, they move in the direction that leaves them the fewest number of spaces from their goal as possible. Like a normal player, they must stop moving if they move into a patrol&rsquo;s space and they do not have positive (<img class="icon" src="img/plus.jpg" />) reputation with that patrol.</p><ul><li>Unlike a normal player, the AI player can move through the Maelstrom as if it were a navpoint space.</li><li>The AI player will not choose a longer path to avoid patrols. If the space nearest their goal contains a patrol, they will still move in that direction, even if they have negative (<img class="icon" src="img/minus.jpg" />) reputation with the patrol.</li><li>If the AI player could move along two different paths, and both leave them equidistant from their goal, the AI prefers: 1) the path that has no patrol to stop their movement and 2) if no patrol would interrupt their movement, they prefer to end their movement on the equidistant space that is a planet. If both are planets, decide randomly (such as by flipping a coin).</li></ul><p><span class="bold">Important:</span> If the AI player would end their movement on a navpoint space after moving a number of spaces equal to their hyperdrive (<img class="icon" src="img/ship.jpg" />) value, they will move one or two fewer spaces if doing so allows them to end their movement on a planet instead.</p><ul><li>If the AI could end their movement on a planet by moving one fewer space and could also end their movement on a planet by moving two fewer spaces, they will move one fewer space</li></ul>'
    },
    {
        name: 'Buying',
        id: 'buying',
        classes: ['buying'],
        content: '<p>Most AI cards allow the AI player to buy a card. The market deck that the AI buys from is always specified (for example, &ldquo;Buy <img class="icon" src="img/cube.jpg" />.&rdquo;). The AI player can only buy when it is on a planet.</p><p>When buying, the AI player resolves the following steps:</p><ol><li>Before buying, the AI player will discard the top (faceup) card of the specified deck if any of the following apply:<ul><li>The top card cannot be bought on the AI player&rsquo;s current planet.</li><li>The AI player does not have enough credits to buy the top card. They will discard the top card regardless of how many credits they have, even if they do not have enough credits to afford any card in the deck.</li><li>The AI player does not have any empty slots matching the top card. They will discard the top card regardless of whether that deck has any cards that can be placed in different slots.</li><li>The AI player is buying from the <img class="icon" src="img/alien.jpg" /> market deck and the top card <span class="bold">does not</span> cost more than the AI player&rsquo;s current ship.</li></ul></li><li>It will buy the top card of that deck. The AI player will spend the required credits, and then place the card in an open slot.<ul><li>The AI player will not buy a card if they do not have an empty slot matching the top card of the deck. They will not discard cards from slots to make space for new cards.</li><li>The AI player must obey buy restrictions on market cards, such as &ldquo;Cannot buy on Kessel&rdquo; and &ldquo;Limit 1 <span class="bold">Armor</span> per character.&rdquo;</li><li>The AI player will buy an asset that it cannot use (for example, a &ldquo;Hired Help&rdquo; crew card from the <img class="icon" src="img/goldBars.jpg" /> market deck).</li><li>The AI player will never buy a ship unless that ship costs more than their current ship. The AI player always barters using its ship, but never barters with assets.</li><li>If the AI buys the &ldquo;Used Ship for Sale&rdquo; card from the <img class="icon" src="img/alien.jpg" /> market deck, it will follow all abilities on the card, and chooses to buy the most expensive ship it can afford. If there are multiple ships it can afford, choose one randomly.</li></ul></li><li>After buying a card, reveal the top card of that market deck and resolve patrol movement icons on the revealed card, moving the patrol toward the AI player.<ul><li>Unlike when a player moves a patrol, the AI will always move the patrol toward their space along the shortest path possible.</li></ul></li></ol>'
    },
    {
        name: 'Jobs and Cargo',
        id: 'jobsAndCargo',
        classes: ['jobsAndCargo'],
        content: '<p>Some AI cards allow the AI player to complete jobs. To do so, the AI player simply resolves the reward section of the job card (gaining or losing the reputation, fame, and credits listed). The AI player does not draw a databank card and does not perform any tests.</p><p>Some AI cards allow the AI player to deliver cargo when at the cargo&rsquo;s destination. The AI player simply resolves the reward section of the cargo and then discards the card. If the AI player has multiple cargo with the same destination, they will deliver all of them at the same time.</p><p>When the AI player delivers <span class="bold">ILLEGAL</span> cargo, they do not roll a die (like specified on the card). However, some AI cards will have the AI player suffer damage when they deliver <span class="bold">ILLEGAL</span> cargo.</p>'
    },
    {
        name: 'Gaining Crew',
        id: 'gainingCrew',
        classes: ['gainingCrew'],
        content: '<p>Some cards allow the AI player to gain crew from contact tokens. It follows all normal rules for crew, except it does not fully resolve the contact token&rsquo;s databank cards. Instead, draw the databank card and if there is a crew asset on the card, place the crew in an empty crew slot on the AI player&rsquo;s ship.</p><ul><li>The AI player does not spend any credits, perform any tests, or otherwise resolve the abilities on the databank card.</li><ul><li>If the AI player does not have any empty crew slots, it randomly discards one of its crew to make room for the new crew. (Follow normal rules for discarding crew.)</li></ul><li>If the databank card does not have crew on it, discard the card back to the deck.</li><li>AI cards always instruct the player to reveal <span class="bold">facedown</span> contact tokens. However, if there are no facedown contact tokens on the planet, the AI player resolves the lowest class (fewest pips) faceup contact token on the planet.</li><ul><li>If there are two facedown or two faceup contact tokens of the same class on the planet, the AI player will resolve the leftmost token.</li></ul><li>The AI player does not protect crew from bounties</li></ul>'
    },
    {
        name: 'AI Decisions',
        id: 'aiDecisions',
        classes: ['aiDecisions'],
        content: '<p>If one of your card abilities forces the AI player to make a decision (such as some encounter cards that allow players to gamble), the AI always chooses not to participate when possible. If the AI is forced to make a mandatory decision (such as Lando&rsquo;s setup instructions), randomly determine the outcome (for example, by randomly drawing a token out of a hat).</p>'
    },
    {
        name: 'Clarifications',
        id: 'clarifications',
        classes: ['clarifications'],
        content: '<ul><li>The AI player must obey all rules that apply to normal players, unless specified otherwise in this appendix.</li><li>If the AI player is defeated during their turn, they do not resolve any subsequent bullets on their AI card. Instead, they finish resolving the bullet on the AI card that they were resolving when they were defeated, and then their turn ends.</li><li>During combat, you roll dice for your opponent (since there is no other player present). Be sure to tally damage for each roll separately and follow all normal timing steps for combat.</li><li>If a job lets you resolve databank card #40, the AI player may be forced to perform a skill test. To do so, roll the dice for the AI player and resolve the skill test following normal rules.</li><ul><li>If the AI is forced to make a decision on one of these cards, choose randomly as explained in &ldquo;AI Decisions&rdquo; above.</li></ul></ul>'
    },
    {
        name: 'Expert Mode',
        id: 'expertMode',
        classes: ['expertMode'],
        content: '<p>If you are an experienced player, you may find the AI to be too easy. To address this, you can increase the challenge by having the AI player start with some fame. The more fame you start the AI with, the more prestigious your victory!</p><p>You can play the extended game with the AI (by playing to 12 fame). This generally does not make the game any more difficult, but may make the game easier.</p>'
    },
    {
        name: 'Credit',
        id: 'credit',
        content: '<p>All <a href="https://boardgamegeek.com/filepage/183058/modified-solo-ai-decks-each-character" target="_blank">Automa mechanics and information</a> credited to BGG user <a href="https://boardgamegeek.com/user/game%20green" target="_blank">game green</a>, and are based off the AI cards from <a href="https://www.fantasyflightgames.com/en/products/star-wars-outer-rim/" target="_blank" rel="noopener">Star War: Outer Rim</a>, published by <a href="https://www.fantasyflightgames.com/en/products/star-wars-outer-rim/" target="_blank" rel="noopener">Fantasy Flight Games</a>.</p><p>This is not an official <a href="https://www.fantasyflightgames.com/en/products/star-wars-outer-rim/" target="_blank" rel="noopener">Fantasy Flight Games</a> product and has no affiliation with <a href="https://www.fantasyflightgames.com/en/products/star-wars-outer-rim/" target="_blank" rel="noopener">Fantasy Flight Games</a>.</p>'

    },
    {
        name: 'Contact',
        id: 'contact',
        content: '<p>Feel free to <a href="mailto:gavin.mcgruddy@gmail.com?subject=Star%20Wars%20Outer%20Rim%20Automa" rel="noopener">email me</a>, or send a BGG message to <a href="https://boardgamegeek.com/geekmail/compose?touser=Gavmastaphlex"  target="_blank" rel="noopener">Gavmastaphlex</a> with any feedback / suggestions.</p>'
    }
]
