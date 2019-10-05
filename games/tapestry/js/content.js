var startContent = [
    {
        name: 'Setup',
        id: 'setup',
        content: '<p>The Tapestry Automa introduces a system for adding two artificial players, the Automa and the Shadow Empire. They take the place of human players and are collectively known as bots.</p><p>You can use the Automa and the Shadow Empire together to play by yourself <span class="bold">(Full Automa)</span> or you can use just the Shadow Empire with 2 human players.</p><p>Click a button to find out more setup details for each game type.</p><p>Make sure to remove the civilizations and tapestry cards listed <a class="helpLink helpLink-removeComponents" href="#">here</a>.</p>'
    },
    {
        name: 'Gameplay',
        id: 'gameplay',
        content: '<p><span class="bold">Shadow Empire</span> - The Shadow Empire does nothing except advance on the advancement tracks (without gaining any benefits or bonuses) to potentially gain landmarks.</p><p><span class="bold">Full Automa</span> - Two artificial players (the Automa and the Shadow Empire) are added to the game. To streamline the game, the Automa and Shadow Empire play by their own simpler rules.</p><p><span class="bold">Quick Start</span> - A basic interface that skips explanations and allows you to get playing faster. Also saves your previous choices for an even quicker game next time.</p><p>Make sure to remove the civilizations and tapestry cards listed <a class="helpLink helpLink-removeComponents" href="#">here</a>.</p'
    }

    // Add any more starting information in the same syntax
    
]

var helpContent = [
    {
        name: 'Full Automa Setup',
        id: 'setup',
        classes: ['setup'],
        content: '<p>Set up as you would for a 3-player game except that you always start on the territory labeled &ldquo;2/4&rdquo; no matter which capital city mat you&rsquo;re using.</p><p>Set up for yourself following the normal rules, then for the bots:</p><ol><li>Choose a color for the Automa. Give it the following components and nothing else:</li><ol><li>The Automa income mat with the normal side up.</li><li>All outposts of its color. Place 2 of them on the territory labeled &ldquo;3/5&rdquo;.</li><li>All player tokens of its color: Place 1 on 0 VP and 1 on the starting space of each advancement track.</li><li>Roll the science die and place the Automa civilization card side with the corresponding icon face-up on the Automa&rsquo;s income mat.</li><li>Place 1 of the Automa&rsquo;s outposts next to the track indicated by the heart icon on its civilization card. This is the Automa&rsquo;s favorite track.</li></ol><li>Choose a color for the Shadow Empire. Give it the following components and nothing else:</li><ol><li>All outposts of its color.</li><li>Five player tokens. Place 1 on the starting space of each advancement track. Set 1 aside.</li><li>Roll the science die until you get a track different than the Automa&rsquo;s favorite track. Place 1 of its outposts by this track. This is the Shadow Empire&rsquo;s favorite track.</li></ol><p class="italic">The Automa deck is managed automatically by this app.</p></ol>'
    },
    {
        name: 'Gameplay',
        id: 'gameplay',
        classes: ['gameplay'],
        content: '<p><span class="bold">Shadow Empire</span> - The Shadow Empire does nothing except advance on the advancement tracks (without gaining any benefits or bonuses) to potentially gain landmarks.</p><p><span class="bold">Full Automa</span> - Two artificial players (the Automa and the Shadow Empire) are added to the game. To streamline the game, the Automa and Shadow Empire play by their own simpler rules.</p><p><span class="bold">Quick Start</span> - A basic interface that skips explanations and allows you to get playing faster. Also saves your previous choices for an even quicker game next time.</p>'
    },
    {
        name: 'Components to remove',
        id: 'removeComponents',
        classes: ['removeComponents'],
        content: '<p>Remove the following tapestries from the game:</p><ul><li>Age of Sail<span class="bold">*</span></li><li>Alliance</li><li>Coal Baron<span class="bold">*</span></li><li>Dictatorship</li><li>Diplomacy<span class="bold">*</span></li><li>Espionage<span class="bold">*</span></li><li>Marriage of State</li><li>Oil Magnate</li><li>Olympic Host</li><li>Steam Tycoon<span class="bold">*</span></li><li>Trade Economy<span class="bold">*</span></li><li>2 traps cards</li></ul><p>Remove these civilizations from the game:</p><ul><li>Futurists<span class="bold">*</span></li><li>Heralds<span class="bold">*</span></li><li>Inventors<span class="bold">*</span></li><li>Traders</p></li></ul><p class="bold italic">* These components may be used but they will either unfairly benefit or hurt you.</p>'
    },
    {
        name: 'Bot Restrictions',
        id: 'botRestrictions',
        classes: ['botRestrictions'],
        content: '<p>The bots only gain what&rsquo;s explicitly mentioned in this rulebook (e.g., they never gain income buildings or resources, and the Shadow Empire also never gains VP).</p>'
    },
    {
        name: 'Automa Benefits',
        id: 'automaBenefits',
        classes: ['automaBenefits'],
        content: '<p><p>When advancing to a new space the Automa only gains benefits from icons that are listed in this chart. Benefits and text not shown here are ignored.</p><p>If a benefit is granted multiple times on a space, the Automa <span class="bold">only gains it once</span>.</p><p>The Shadow Empire never gains benefits.</p><p>Neither bot gains bonuses.</p><table class="automaBenefits"><tr><th>Normal Benefit</th><th>Automa Benefit</th></tr><tr><td><img class="automaBenefitTableIcon" src="img/help/diceBenefits.png" /> or <img class="automaBenefitTableIcon" src="img/help/diceNoBenefits.png" /></td><td>Roll and advance on the indicated track (with or without the<br>benefit).</td></tr><tr><td><img class="automaBenefitTableIcon" src="img/help/techCard.png" /></td><td>Discard all 3 face-up tech cards and replace them.</td></tr><tr><td><img class="automaBenefitTableIcon" src="img/help/conquer.png" /> or <img class="automaBenefitTableIcon" src="img/help/conquerAnywhere.png" /></td><td>See <a class="helpLink helpLink-conquer" href="#">Conquer</a>.</td></tr><tr><td><img class="automaBenefitTableIcon" src="img/help/explore.png" /> or <img class="automaBenefitTableIcon" src="img/help/exploreAnywhere.png" /></td><td>See <a class="helpLink helpLink-explore" href="#">Explore</a>.</td></tr><tr><td><img class="automaBenefitTableIcon" src="img/help/advanceMilitaryExplorationTechnology.png" /><br /><img class="automaBenefitTableIcon" src="img/help/regressMilitaryTechnology.png" /></td><td>Roll <img class="inlineHelpIcon" src="img/help/diceBenefits.png" /> until it selects one of the indicated tracks. Carry out the<br>corresponding advancement/regression.</td></tr><tr><td><img class="automaBenefitTableIcon" src="img/help/tapestryCard.png" /></td><td>Give the Automa a tapestry card face down next to its mat.</td></tr></table></p>'
    },
    {
        name: 'Landmarks',
        id: 'landmarks',
        classes: ['landmarks'],
        content: '<p>If <span class="bold">either bot</span> gains a landmark, it&rsquo;s assigned to the Automa.</p>'
    },
    {
        name: 'Hex Tiebreakers',
        id: 'hexTiebreakers',
        classes: ['hexTiebreakers'],
        content: '<p>All procedures for placing tiles and outposts on the board use the hex tiebreaker to choose 1 hex among a set of valid hexes.</p><p>Using the hex tiebreaker icon on the tiebreaker card, start with the hex that the black arrow points to. Look at the hexes in order along the row in the direction indicated by that arrow.</p><p>If you don&rsquo;t reach a valid hex, go on to the row pointed at by the gray arrow, then the row beyond that, etc. Continue until you reach a valid hex. The Automa chooses this hex.</p><p class="italic">Example: The hexes with purple borders are the valid hexes for an explore action. Using the hex tiebreaker icon on the left you go through the hexes in the numbered order.</p><img class="halfWidth" src="img/help/mapExample.jpg" /><p class="italic">The first valid hex you reach is the one labeled 9, so the Automa places a territory tile there.</p>'
    },
    {
        name: 'Conquer',
        id: 'conquer',
        classes: ['conquer'],
        content: '<img class="conquerHelpIcons" src="img/help/conquerAnywhere.png" /><img class="conquerHelpIcons" src="img/help/conquer.png" /><p>The Automa&rsquo;s conquer actions are divided into 2 different procedures:</p><ol><li>If the Automa can legally conquer a territory you control, carry out the <a class="helpLink helpLink-conquerOpponent" href="#">Conquer Opponent</a> procedure.</li><li>Otherwise carry out the <a class="helpLink helpLink-conquerNeutral" href="#">Conquer Neutral</a> procedure.</li></ol>',
        subsections: [
            {
                name: 'Conquer Opponent',
                id: 'conquerOpponent',
                classes: ['conquerOpponent'],
                content: '<p><span class="bold">Valid territories:</span> All territories you control, which the Automa can legally conquer, are valid.</p><p class="bold">Tiebreakers:</p><ol><li>If the Automa can still gain the middle island achievement, only the valid territories closest to the middle island remain valid.</li><li>Use the <a class="helpLink helpLink-hexTiebreakers" href="#">hex tiebreaker</a> to pick one territory among the valid ones.</li></ol><p><span class="bold">Action:</span> Place an outpost from the Automa&rsquo;s supply on the chosen territory and topple your outpost, or the Automa&rsquo;s outpost if you play a trap.</p>'
            },
            {
                name: 'Conquer Neutral',
                id: 'conquerNeutral',
                classes: ['conquerNeutral'],
                content: '<p class="bold">Valid territories:</p><ol><li>All hexes that can legally be conquered or explored by the Automa are valid.</li><li>Hexes adjacent to territories you control are only valid if a <img class="inlineHelpIcon" src="img/help/topple.png" /> icon is on the tiebreaker card.</li></ol><p>If there are no valid hexes, skip the action.</p><p class="bold">Tiebreakers:</p><ol><li>If the Automa can still gain the "middle island" achievement, only the valid hexes closest to the middle island remain valid.</li><li>If you control any territories that have a single token on them, only valid hexes closest to such territories remain valid.</li><li>If you don&rsquo;t control a territory with a single token on it, only valid hexes closest to any territory you control remain valid.</li><li>Use the <a class="helpLink helpLink-hexTiebreakers" href="#">hex tiebreaker</a> to pick one hex among the valid ones.</li></ol><p class="bold">Actions:</p><ol><li>If the Automa is conquering an empty hex: Draw a territory tile and place it face-up with a random orientation on the chosen hex.</li><li>Place an outpost from the Automa&rsquo;s supply (of its own color) on the conquered territory.</li><li>If the <img class="inlineHelpIcon" src="img/help/topple.png" /> icon is on the tiebreaker card and the conquered terrain isn&rsquo;t the middle island, place one of the Shadow Empire&rsquo;s outposts toppled on the territory.</li></ol>'
            }
        ]
    },
    {
        name: 'Explore',
        id: 'explore',
        classes: ['explore'],
        content: '<img class="exploreHelpIcons" src="img/help/exploreAnywhere.png" /><img class="exploreHelpIcons" src="img/help/explore.png" /><p><span class="bold">Valid territories:</span> All hexes that the Automa can legally explore are valid. If there are none, skip this action.</p><p class="bold">Tiebreakers:</p><ol><li>If the Automa doesn&rsquo;t have military as its favorite track, then only the valid hexes furthest from territories you control remain valid.</li><li>Use the hex tiebreaker to pick one hex among the valid ones.</li></ol><p><span class="bold">Action:</span> Draw a territory tile and place it face up with a random orientation on the chosen hex.</p>',
    },
    {
        name: 'Trap Cards',
        id: 'trapCards',
        classes: ['trapCards'],
        content: '<p>If you conquer a territory controlled by the Automa and it has any tapestry cards next to its mat:</p><ol><li>Discard one of its tapestry cards at random.</li><li>If that card was a trap, the Automa retains control of the territory and your outpost enters play toppled.</li><li>Repeat this procedure until the Automa either discards a trap or runs out of tapestry cards.</li></ol>'
    },
    {
        name: 'Achievement',
        id: 'achievements',
        classes: ['achievements'],
        content: '<p>The Automa earns achievements and the VP from them in the same way as you, except that only your outposts count towards the &ldquo;topple 2 opponent outposts&rdquo; achievement.</p><p>The Shadow Empire can only earn the &ldquo;complete any advancement track&rdquo; achievement but gains no VP from doing so.</p>'
    },
    {
        name: 'Income Turn',
        id: 'incomeTurn',
        classes: ['incomeTurn'],
        content: '<p>The Automa gains what&rsquo;s listed on the income chart on its mat, top to bottom, left column first.</p><p>If the Automa takes an action during an income turn that requires tiebreaking, draw and use the top card of the progress deck in turn 1 (reshuffle afterwards) and the latest tiebreaker card in income turns 2-5.</p><img class="incomeTurnHelpIcon" src="img/help/advanceOnFavoriteTracks.png" /><p>If a bot&rsquo;s token has reached the end of its favorite track or if there&rsquo;s a further advanced token there, then its favorite track becomes the track that would be chosen by or . Move its &ldquo;favorite&rdquo; outpost there (it could be the same track or the favorite of the other bot).</p><div class="clearDiv"></div><img class="incomeTurnHelpIcon" src="img/help/advanceTrackTokens.png" /><p>Advance track tokens of both bots using the most recent decision card pair. The Automa gains the benefits (if any). This means that the Automa will do an advance and gain income during a single turn. It also means that the most recent card pair is sometimes used twice.</p><div class="clearDiv"></div> <img class="incomeTurnHelpIcon" src="img/help/civBonus.png" /> <p>The Automa gains the income turn bonus (if any) from its civilization card.</p><div class="clearDiv"></div> <img class="incomeTurnHelpIcon" src="img/help/vpPointsScoring.png" /> <p>The Automa gains VP for each landmark on its mat and for each controlled territory.</p><div class="clearDiv"></div><img class="incomeTurnHelpIcon" src="img/help/technology.png" /><p>The Automa gains VP for each space advanced on each of the indicated tracks.</p><div class="clearDiv"></div><p>For each of the VP icons, multiply the number of advancements/landmarks/territories by the leftmost multiplier not covered by a tapestry card.</p><p>Note that contrary to human players, the Automa gains VP before playing a tapestry card and it almost exclusively gains VP during income turns.</p><p>If the Automa is the first to start a new era, it gains the VP shown.</p><p>Example: During income turn 3, the multipliers are x2, x1, and x1, respectively. This means that the Automa gains 2 VP per territory it controls, 2 VP per landmark on its mat, 1 VP for each advance on the military and science tracks, and 1 VP for each advance on the exploration and technology tracks. If it was the first to start a new era, it also gains 3 VP.</p><img class="incomeTurnHelpIcon" src="img/help/addTwoExtraCards.png" /><p>Add the 2 topmost cards from the progress-deck to the decision deck discard pile.</p><div class="clearDiv"></div><img class="incomeTurnHelpIcon" src="img/help/tapestryCardToAutomaMat.png" /><p><span class="italic bold">Note: The app makes this step obsolete.</span>Place a card from the tapestry deck (not from the Automa&rsquo;s tapestry cards) face down on the leftmost empty tapestry space on the Automa&rsquo;s income mat.</p><div class="clearDiv"></div><img class="incomeTurnHelpIcon" src="img/help/shuffleAutomaDeck.png" /><p>Shuffle all the decision deck cards from the most recent era (including any gained this income turn) to form a new face-down decision deck.</p>'
    },
    {
        name: 'Game End',
        id: 'gameEnd',
        classes: ['gameEnd'],
        content: '<p>Determine the winner following the instructions in the normal rulebook. The Shadow Empire doesn&rsquo;t participate in determining the winner at the end of the game. Only you or the Automa can win.</p>'
    },
    {
        name: 'Credit',
        id: 'credit',
        content: '<p>This is not an official <a href="https://stonemaiergames.com/games/tapestry/" target="_blank" rel="noopener">Stonemaier Games</a> product and has no affiliation with <a href="https://stonemaiergames.com/games/tapestry/" target="_blank" rel="noopener">Stonemaier Games</a>. Tapestry was designed by <a href="https://boardgamegeek.com/user/jameystegmaier" target="_blank" rel="noopener">Jamey Stegmaier</a>, with art by <a href="https://www.bosleyart.com/" target="_blank" rel="noopener">Andrew Bosley</a> and sculpts by <a href="http://cultofgame.blogspot.com/" target="_blank" rel="noopener">Rom Brown</a>. All art in this app is from <a href="https://stonemaiergames.com/games/tapestry/" target="_blank" rel="noopener">Tapestry</a>. The Automa for Tapestry was designed by <a href="https://boardgamegeek.com/user/mortenmdk" target="_blank" rel="noopener">Morten Monrad Pedersen</a> with <a href="https://boardgamegeek.com/user/elephantgirl" target="_blank" rel="noopener">Lieve Teugels</a> and <a href="https://boardgamegeek.com/user/njshaw2" target="_blank" rel="noopener">Nick Shaw</a> who represent <a href="http://www.automafactory.com/" target="_blank" rel="noopener">Automa Factory</a>.</p>'

    },
    {
        name: 'Contact',
        id: 'contact',
        content: '<p>Feel free to <a href="mailto:gavin.mcgruddy@gmail.com?subject=Tapestry%20Online%20Automa" rel="noopener">email me</a>, or send a BGG message to <a href="https://boardgamegeek.com/geekmail/compose?touser=Gavmastaphlex"  target="_blank" rel="noopener">Gavmastaphlex</a> with any feedbacks / suggestions.</p>'
    }
]

var actionSpaces = [
    {
        track:'exploration',
        details: [
            {                
                actionClass: 'exploreAction',					
                trackNum: 2
            },
            {                
                actionClass: 'exploreAction',					
                trackNum: 3
            },
            {                
                actionClass: 'exploreAction',					
                trackNum: 4
            },
            {                
                actionClass: 'exploreAction',					
                trackNum: 7
            },
            {                
                actionClass: 'exploreAnywhereAction',					
                trackNum: 9
            }
        ]
    },
    {
        track:'military',
        details: [
            {                
                actionClass: 'conquerAction',					
                trackNum: 1
            },
            {                
                actionClass: 'tapestryCard',					
                trackNum: 2
            },
            {                
                actionClass: 'conquerAction',					
                trackNum: 3
            },
            {                
                actionClass: 'conquerAction',					
                trackNum: 5
            },
            {                
                actionClass: 'conquerAndTapestryAction',
                trackNum: 6
            },
            {                
                actionClass: 'conquerAction',					
                trackNum: 7
            },
            {                
                actionClass: 'conquerAnywhereAction',					
                trackNum: 8
            },
            {                
                actionClass: 'conquerAction',					
                trackNum: 12
            },
        ]
    },
    {
        track:'science',
        details: [
            {                
                actionClass: 'scienceDiceNoBenefitsAction',					
                trackNum: 1
            },
            {                
                actionClass: 'tapestryCard',					
                trackNum: 2
            },
            {                
                actionClass: 'scienceDiceNoBenefitsAction',					
                trackNum: 3
            },
            {                
                actionClass: 'tapestryCard',					
                trackNum: 4
            },
            {                
                actionClass: 'scienceDiceBenefitsAction',					
                trackNum: 5
            },
            {                
                actionClass: 'scienceDiceBenefitsAction',					
                trackNum: 6
            },
            {                
                actionClass: 'advanceMilitaryTechnologyExplorationAction',					
                trackNum: 9
            },
            {                
                actionClass: 'regressMilitaryTechnologyAction',					
                trackNum: 10
            },
            {                
                actionClass: 'advanceTwiceMilitaryTechnologyExplorationAction',					
                trackNum: 11
            },
            {                
                actionClass: 'scienceDiceNoBenefitsAction',					
                trackNum: 12
            },
        ]
    },
    {
        track:'technology',
        details: [
            {                
                actionClass: 'technologyCardAction',					
                trackNum: 1
            },
            {                
                actionClass: 'tapestryCard',					
                trackNum: 2
            },
            {                
                actionClass: 'technologyCardAction',					
                trackNum: 3
            },
            {                
                actionClass: 'technologyCardAction',					
                trackNum: 4
            },
            {                
                actionClass: 'technologyCardAction',					
                trackNum: 7
            }
        ]
    }
]

var actionInfo = [
    {
        actionName: 'Explore',
        actionClass: 'exploreAction',		
        actionDesc: '<div class="mainActionArea"><img class="actionImage" src="img/actions/explore.png" /><p class="actionDescription">See <a class="helpLink helpLink-explore" href="#">Explore</a> action.</p><div class="clearDiv"></div></div><div class="exploreExtraTiebreakers extraTiebreakers"><div class="mapTiebreaker"></div><div class="favTrackDecider"></div><div class="clearDiv"></div></div>'
    },
    {
        actionName: 'Explore Anywhere',
        actionClass: 'exploreAnywhereAction',	
        actionDesc: '<div class="mainActionArea"><img class="actionImage" src="img/actions/exploreAnywhere.png" /><p class="actionDescription">See <a class="helpLink helpLink-explore" href="#">Explore</a> action.</p><div class="clearDiv"></div></div><div class="exploreExtraTiebreakers extraTiebreakers"><div class="mapTiebreaker"></div><div class="favTrackDecider"></div><div class="clearDiv"></div></div>'
    },
    {
        actionName: 'Conquer',
        actionClass: 'conquerAction',
        actionDesc: '<div class="mainActionArea"><img class="actionImage" src="img/actions/conquer.png" /><p class="actionDescription">See <a class="helpLink helpLink-conquer" href="#">Conquer</a> action.</p><div class="clearDiv"></div></div><div class="militaryExtraTiebreakers extraTiebreakers"><div class="mapTiebreaker"></div><div class="toppleIndicator"></div><div class="clearDiv"></div></div>'
    },
    {
        actionName: 'Conquer Anywhere',
        actionClass: 'conquerAnywhereAction',
        actionDesc: '<div class="mainActionArea"><img class="actionImage" src="img/actions/conquerAnywhere.png" /><p class="actionDescription">See <a class="helpLink helpLink-conquer" href="#">Conquer</a> action.</p><div class="clearDiv"></div></div><div class="militaryExtraTiebreakers extraTiebreakers"><div class="mapTiebreaker"></div><div class="toppleIndicator"></div><div class="clearDiv"></div></div>'
    },
    {
        actionName: 'Tapestry Card',
        actionClass: 'tapestryCard',
        actionDesc: '<div class="mainActionArea"><img class="actionImage" src="img/actions/tapestryCard.png" /><p class="actionDescription">Give the Automa a face down tapestry card.</p></div>'
    },
    {
        actionName: 'Conquer and Tapestry Card',
        actionClass: 'conquerAndTapestryAction',
        actionDesc: '<div class="mainActionArea"><div class="conquerAndTapestryDivider-1"><img class="actionImage" src="img/actions/tapestryCard.png" /><p class="actionDescription">Give the Automa a face down tapestry card.</p></div><div class="clearDiv"></div><div class="conquerAndTapestryDivider-2"><img class="actionImage" src="img/actions/conquer.png" /><p class="actionDescription">See <a class="helpLink helpLink-conquer" href="#">Conquer</a> action.</p><div class="clearDiv"></div></div><div class="militaryExtraTiebreakers extraTiebreakers"><div class="mapTiebreaker"></div><div class="toppleIndicator"></div><div class="clearDiv"></div></div>'
    },
    {
        actionName: 'Science Dice (No Benefits)',   
        actionClass: 'scienceDiceNoBenefitsAction',
        actionDesc: '<div class="mainActionArea"><img class="actionImage" src="img/actions/diceNoBenefits.png" /><p class="actionDescription">The Automa rolls and advances on the indicated track, <span class="bold">without</span> receiving any benefits.</p><div class="clearDiv"></div><a href="#" tracks="all" class="btn greenBtn actionScienceDice func-scienceDieActionSelection-advance+false">Roll Die</a></div>'
    },
    {
        actionName: 'Science Dice (Benefits)',
        actionClass: 'scienceDiceBenefitsAction',
        actionDesc: '<div class="mainActionArea"><img class="actionImage" src="img/actions/diceBenefits.png" /><p class="actionDescription">The Automa rolls and advances on the indicated track, receiving any benefits.</p></div><div class="clearDiv"></div><a href="#" tracks="all" class="btn greenBtn actionScienceDice func-scienceDieActionSelection-advance+true">Roll Die</a>'
    },
    {
        actionName: 'Advance (Military / Technology / Exploration)',
        actionClass: 'advanceMilitaryTechnologyExplorationAction',
        actionDesc: '<div class="mainActionArea"><img class="actionImage" src="img/actions/advanceMilitaryExplorationTechnology.png" /><p class="actionDescription">The Automa rolls the science die to select one of the indicated tracks, and then advances on that track.</p><div class="clearDiv"></div><a href="#" tracks="military technology exploration" class="btn greenBtn actionScienceDice func-scienceDieActionSelection-advance+true">Roll Die</a></div>'
    },
    {
        actionName: 'Regress (Military / Technology)',
        actionClass: 'regressMilitaryTechnologyAction',
        actionDesc: '<div class="mainActionArea"><img class="actionImage" src="img/actions/regressMilitaryTechnology.png" /><p class="actionDescription">The Automa rolls the science die to select one of the indicated tracks, and then regresses on that track.</p><div class="clearDiv"></div><a href="#" class="btn greenBtn actionScienceDice func-scienceDieActionSelection-regress+true" tracks="military technology">Roll Die</a></div>'
    },
    {
        actionName: 'Advance Twice (Military / Technology / Exploration)',
        actionClass: 'advanceTwiceMilitaryTechnologyExplorationAction',	
        actionDesc: '<div class="mainActionArea"><img class="actionImage" src="img/actions/advanceMilitaryExplorationTechnology.png" /><p class="actionDescription">The Automa rolls the science die to select one of the indicated tracks, and then advances on that track.</p><div class="clearDiv"></div><a href="#" tracks="military technology exploration" class="btn greenBtn actionScienceDice func-scienceDieActionSelection-advance+true">Roll Die</a></div>'
    },
    {
        actionName: 'Technology Card',
        actionClass: 'technologyCardAction',
        actionDesc: '<div class="mainActionArea"><img class="actionImage" src="img/actions/techCard.png" /><p class="actionDescription">Discard all 3 face-up tech cards and replace them.</p></div>'
    }

]

var difficultyLevels = [
    {
        level: '1',
        name: 'Automa the Underachiever',
        class: 'automaUnderachiever',
        income1Instructions: '',
        automaMat: 'Normal',
        extraInfo: 'true',
        incomeScreens: 4,
        incomeTurnSteps: [
            {
                action: 'humanAdvanceTracks',
                type: 'incomeScreen1',
                eras: [1]
            },
            {
                action: 'favoriteTrackAssessment',
                type: 'incomeScreen2',
                eras: [2, 3, 4, 5]
            },
            {
                action: 'vpPointsScoring',
                type: 'incomeScreen3',
                eras: [2, 3, 4, 5]
            },
            {
                action: 'addTwoExtraCards',
                type: 'incomeScreen4',
                eras: [2, 3, 4]
            },
            {
                action: 'shuffleAutomaDeck',
                type: 'incomeScreen4',
                eras: [2, 3, 4]
            }
        ]
    },
    {  
        level: '2',
        name: 'Automa the Average',
        class: 'automaAverage',
        income1Instructions: '',
        automaMat: 'Normal',
        extraInfo: 'false',
        incomeScreens: 4,
        incomeTurnSteps: [
            {
                action: 'favoriteTrackAssessment',
                type: 'incomeScreen1',
                eras: [2, 3, 4, 5]
            },
            {
                action: 'civBonus',
                type: 'incomeScreen2',
                eras: []
            },
            {
                action: 'vpPointsScoring',
                type: 'incomeScreen3',
                eras: [2, 3, 4, 5]
            },
            {
                action: 'tapestryCardToAutomaSupply',
                type: 'incomeScreen4',
                eras: [1, 2, 3, 4]
            },
            {
                action: 'addTwoExtraCards',
                type: 'incomeScreen4',
                eras: [2, 3, 4]
            },
            {
                action: 'shuffleAutomaDeck',
                type: 'incomeScreen4',
                eras: [2, 3, 4]
            }
        ]
    },
    {
        level: '3',
        name: 'Automa the Slightly Intimidating',
        class: 'automaSlightlyIntimidating',
        income1Instructions: '',
        automaMat: 'Normal',
        extraInfo: 'false',
        incomeScreens: 5,
        incomeTurnSteps: [
            {
                action: 'favoriteTrackAssessment',
                type: 'incomeScreen1',
                eras: [2, 3, 4, 5]
            },
            {
                action: 'advanceTrackTokens',
                type: 'incomeScreen2',
                eras: [2, 3, 4, 5]
            },
            {
                action: 'civBonus',
                type: 'incomeScreen3',
                eras: []
            },
            {
                action: 'vpPointsScoring',
                type: 'incomeScreen4',
                eras: [2, 3, 4, 5]
            },
            {
                action: 'tapestryCardToAutomaSupply',
                type: 'incomeScreen5',
                eras: [1, 2, 3, 4]
            },
            {
                action: 'addNoExtraCards',
                type: 'incomeScreen5',
                eras: [2]
            },
            {
                action: 'addTwoExtraCards',
                type: 'incomeScreen5',
                eras: [3, 4]
            },
            {
                action: 'shuffleAutomaDeck',
                type: 'incomeScreen5',
                eras: [2, 3, 4]
            }
        ]
    },
    {
        level: '4',
        name: 'Automa the Somewhat Awesome',
        class: 'automaSomewhatAwesome',
        income1Instructions: '',
        automaMat: 'Normal',
        extraInfo: 'false',
        incomeScreens: 5,
        incomeTurnSteps: [
            {
                action: 'favoriteTrackAssessment',
                type: 'incomeScreen1',
                eras: [2, 3, 4, 5]
            },
            {
                action: 'advanceTrackTokens',
                type: 'incomeScreen2',
                eras: [2, 3, 4, 5]
            },
            {
                action: 'civBonus',
                type: 'incomeScreen3',
                eras: []
            },
            {
                action: 'vpPointsScoring',
                type: 'incomeScreen4',
                eras: [2, 3, 4, 5]
            },
            {
                action: 'tapestryCardToAutomaSupply',
                type: 'incomeScreen5',
                eras: [1, 2, 3, 4]
            },
            {
                action: 'addTwoExtraCards',
                type: 'incomeScreen5',
                eras: [2]
            },
            {
                action: 'addFourExtraCards',
                type: 'incomeScreen5',
                eras: [3, 4]
            },
            {
                action: 'shuffleAutomaDeck',
                type: 'incomeScreen5',
                eras: [2, 3, 4]
            }
        ]
    },
    {
        level: '5',
        name: 'Automa the Definitely Awesome',
        class: 'automaDefinitelyAwesome',
        income1Instructions: 'The bots advance on their respective favorite tracks.',
        automaMat: 'Hard',
        extraInfo: 'true',
        incomeScreens: 6,
        incomeTurnSteps: [
            {
                action: 'advanceOnFavoriteTracks',
                type: 'incomeScreen1',
                eras: [1]
            },
            {
                action: 'favoriteTrackAssessment',
                type: 'incomeScreen2',
                eras: [2, 3, 4, 5]
            },
            {
                action: 'advanceTrackTokens',
                type: 'incomeScreen3',
                eras: [2, 3, 4, 5]
            },
            {
                action: 'civBonus',
                type: 'incomeScreen4',
                eras: []
            },
            {
                action: 'vpPointsScoring',
                type: 'incomeScreen5',
                eras: [2, 3, 4, 5]
            },
            {
                action: 'tapestryCardToAutomaSupply',
                type: 'incomeScreen6',
                eras: [1, 2, 3, 4]
            },
            {
                action: 'addTwoExtraCards',
                type: 'incomeScreen6',
                eras: [2]
            },
            {
                action: 'addSixExtraCards',
                type: 'incomeScreen6',
                eras: [3, 4]
            },
            {
                action: 'shuffleAutomaDeck',
                type: 'incomeScreen6',
                eras: [2, 3, 4]
            }
        ]
    },
    {
        level: '6',
        name: 'Automa the Crusher of Dreams',
        class: 'automaCrusherDreams',
        income1Instructions: 'The bots advance on all tracks once.',
        automaMat: 'Hard',
        extraInfo: 'true',
        incomeScreens: 7,
        incomeTurnSteps: [
            {
                action: 'advanceOnAllTracks',
                type: 'incomeScreen1',
                eras: [1]
            },
            {
                action: 'favoriteTrackAssessment',
                type: 'incomeScreen2',
                eras: [2, 3, 4, 5]
            },
            {
                action: 'advanceTrackTokens',
                type: 'incomeScreen3',
                eras: [2, 3, 4, 5]
            },
            {
                action: 'civBonus',
                type: 'incomeScreen4',
                eras: []
            },
            {
                action: 'dualCivBonus',
                type: 'incomeScreen5',
                eras: []
            },
            {
                action: 'vpPointsScoring',
                type: 'incomeScreen6',
                eras: [2, 3, 4, 5]
            },
            {
                action: 'tapestryCardToAutomaSupply',
                type: 'incomeScreen7',
                eras: [1, 2, 3, 4]
            },
            {
                action: 'addTwoExtraCards',
                type: 'incomeScreen7',
                eras: [2]
            },
            {
                action: 'addSixExtraCards',
                type: 'incomeScreen7',
                eras: [3, 4]
            },
            {
                action: 'shuffleAutomaDeck',
                type: 'incomeScreen7',
                eras: [2, 3, 4]
            }
        ]
    }
]

var automaMatMultipliers = [
    {
        matLevel: 'Normal',
        eraBonuses: [
            {
                startEraFirstVPs: 3,
                landmarks: 1,
                controlledTerritories: 1,
                military: 0,
                science: 0,
                technology: 1,
                exploration: 1
            },
            {
                startEraFirstVPs: 3,
                landmarks: 2,
                controlledTerritories: 2,
                military: 1,
                science: 1,
                technology: 1,
                exploration: 1
            },
            {
                startEraFirstVPs: 4,
                landmarks: 2,
                controlledTerritories: 2,
                military: 1,
                science: 1,
                technology: 2,
                exploration: 2
            },
            {
                startEraFirstVPs: 0,
                landmarks: 3,
                controlledTerritories: 3,
                military: 2,
                science: 2,
                technology: 3,
                exploration: 3
            }
        ]
    },
    {
        matLevel: 'Hard',
        eraBonuses: [
            {
                startEraFirstVPs: 4,
                landmarks: 2,
                controlledTerritories: 2,
                military: 1,
                science: 1,
                technology: 2,
                exploration: 2
            },
            {
                startEraFirstVPs: 4,
                landmarks: 3,
                controlledTerritories: 3,
                military: 2,
                science: 2,
                technology: 2,
                exploration: 2
            },
            {
                startEraFirstVPs: 5,
                landmarks: 3,
                controlledTerritories: 3,
                military: 2,
                science: 2,
                technology: 3,
                exploration: 3
            },
            {
                startEraFirstVPs: 0,
                landmarks: 4,
                controlledTerritories: 4,
                military: 3,
                science: 3,
                technology: 4,
                exploration: 4
            }
        ]
    }
]

var incomeStepActions = [
    {
        actionName: 'Human Advance',
        actionClass: 'humanAdvanceTracks',
        functionRequired: 'false',
        actionRequired: 'false',
        dynamicContent: 'false',
        content: '<p class="italic">For their first income turn, the human player advances one space on all 4 tracks (in whichever order they choose), receiving the benefits.</p><img src="img/difficulty/level1ExtraInfo.jpg" />'
    },
    {
        actionName: 'Favorite Tracks Advance',
        actionClass: 'advanceOnFavoriteTracks',
        functionRequired: 'true',
        actionRequired: 'true',
        dynamicContent: 'true'
    },
    {
        actionName: 'All Tracks Advance',
        actionClass: 'advanceOnAllTracks',
        functionRequired: 'true',
        actionRequired: 'true',
        dynamicContent: 'true'
    },
    {
        actionName: 'Favorite Track Assessment',
        actionClass: 'favoriteTrackAssessment',
        functionRequired: 'true',
        actionRequired: 'true',
        dynamicContent: 'true'
    },
    {
        actionName: 'Advance Track Tokens',
        actionClass: 'advanceTrackTokens',
        functionRequired: 'true',
        actionRequired: 'true',
        dynamicContent: 'true'
    },
    
    {
        actionName: 'Civ Bonus',
        actionClass: 'civBonus',
        functionRequired: 'true',
        actionRequired: 'true',
        dynamicContent: 'true'
    },
    {
        actionName: '2 Civ Bonus',
        actionClass: 'dualCivBonus',
        functionRequired: 'true',
        actionRequired: 'true',
        dynamicContent: 'true'
    },
    {
        actionName: 'VP Points Scoring',
        actionClass: 'vpPointsScoring',
        functionRequired: 'true',
        actionRequired: 'true',
        dynamicContent: 'true'
    },
    {
        actionName: 'Add No Extra Cards',
        actionClass: 'addNoExtraCards',
        functionRequired: 'true',
        actionRequired: 'false',
        dynamicContent: 'false',
        content: '<img src="img/income/addNoExtraCards.png" /><p class="italic">No cards are added to the progress deck this era.</p>'
    },{
        actionName: 'Add Two Extra Cards',
        actionClass: 'addTwoExtraCards',
        functionRequired: 'true',
        actionRequired: 'false',
        dynamicContent: 'false',
        content: '<img src="img/income/addTwoExtraCards.png" /><p class="italic">Two cards are automatically added from the progress deck to the decision-deck.</p>'
    },
    {
        actionName: 'Add Four Extra Cards',
        actionClass: 'addFourExtraCards',
        functionRequired: 'true',
        actionRequired: 'false',
        dynamicContent: 'false',
        content: '<img src="img/income/addFourExtraCards.png" /><p class="italic">Four cards are automatically added from the progress deck to the decision-deck.</p>'
    },
    {
        actionName: 'Add Six Extra Cards',
        actionClass: 'addSixExtraCards',
        functionRequired: 'true',
        actionRequired: 'false',
        dynamicContent: 'false',
        content: '<img src="img/income/addSixExtraCards.png" /><p class="italic">Six cards are automatically added from the progress deck to the decision-deck.</p>'
    },
    {
        actionName: 'Tapestry Card To Automa Supply',
        actionClass: 'tapestryCardToAutomaSupply',
        functionRequired: 'false',
        actionRequired: 'false',
        dynamicContent: 'false',
        content: '<img src="img/income/tapestryCardToAutomaSupply.png" /><p class="bold">Give the Automa a face down tapestry card.</p>'
    },
    {
        actionName: 'Shuffle Automa Deck',
        actionClass: 'shuffleAutomaDeck',
        functionRequired: 'false',
        actionRequired: 'false',
        dynamicContent: 'false',
        content: '<img src="img/income/shuffleAutomaDeck.png" /><p class="italic">The decision deck is automatically shuffled.</p>'
    }

]

var civAbilities = [
    {
        civName: 'Explorers',
        trackName: 'exploration',
        allIncomeTurns: [2, 3, 4, 5],
        actionRequired: 'true'
    },
    {
        civName: 'Conquerors',
        trackName: 'military',
        allIncomeTurns: [2, 3, 4, 5],
        actionRequired: 'false'
    },
    {
        civName: 'Scientists',
        trackName: 'science',
        allIncomeTurns: [3, 4, 5],
        actionRequired: 'true'
    },
    {
        civName: 'Engineers',
        trackName: 'technology',
        allIncomeTurns: [2, 3, 4, 5],
        actionRequired: 'false'
    }
]
