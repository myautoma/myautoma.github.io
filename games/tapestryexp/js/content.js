var startContent = [
    {
        name: 'Setup',
        id: 'setup',
        content: `
            <p>The Tapestry Automa introduces a system for adding two artificial players, the Automa and the Shadow Empire. They take the place of human players and are collectively known as bots.</p>
            <p>You can use the Automa and the Shadow Empire together to play a solo game <span class="bold">(Full Automa)</span> or you can play against the Shadow Empire with 2 or more human players <span class="bold">(Shadow Empire)</span>.</p>
            <p>Make sure to remove the civilizations and tapestry cards listed <a class="helpLink helpLink-removeComponents" href="#">here</a>.</p>
        `
    },
    {
        name: 'Gameplay',
        id: 'gameplay',
        content: `
            <p><span class="bold">Shadow Empire</span> - The Shadow Empire does nothing except advance on the advancement tracks (without gaining any benefits or bonuses) to potentially gain landmarks, as well as the "End of Track" achievement.</p>
            <p><span class="bold">Full Automa</span> - Two artificial players (the Automa and the Shadow Empire) are added to the game. To streamline the game, the Automa and Shadow Empire play by their own simpler rules.</p>
            <p><span class="bold">Quick Start</span> - An interface that skips explanations and allows you to get playing faster. Also saves your previous choices for an even quicker game next time.</p>
            <p>Make sure to remove the civilizations and tapestry cards listed <a class="helpLink helpLink-removeComponents" href="#">here</a>.</p>
        `
    }

    // Add any more starting information in the same syntax
    
]

var helpContent = [
    {
        name: 'Full Automa Setup',
        id: 'setup',
        classes: ['setup'],
        content: `
        <p>Set up as you would for a 3-player game except that you always start on the territory labeled &ldquo;2/4&rdquo; no matter which capital city mat you&rsquo;re using.</p>
        <p>Set up for yourself following the normal rules, then for the bots:</p>
        <ol>
            <li>Choose a color for the Automa. Give it the following components and nothing else:</li>
            <ol>
                <li>The Automa income mat with the normal side up.</li>
                <li>All outposts of its color. Place 2 of them on the territory labeled &ldquo;3/5&rdquo;.</li>
                <li>All player tokens of its color: Place 1 on 0 VP and 1 on the starting space of each advancement track.</li>
            </ol>
            <li>Choose a color for the Shadow Empire. Give it the following components and nothing else:</li>
            <ol>
                <li>All outposts of its color.</li>
                <li>Five player tokens. Place 1 on the starting space of each advancement track. Set 1 aside.</li>
                <li>Roll the science die until you get a track different than the Automa&rsquo;s favorite track. Place 1 of its outposts by this track. This is the Shadow Empire&rsquo;s favorite track.</li>
            </ol>
            <p class="italic">The Automa deck is managed automatically by this app.</p>
        </ol>
        `
    },
    {
        name: 'Gameplay',
        id: 'gameplay',
        classes: ['gameplay'],
        content: `
            <p><span class="bold">Shadow Empire</span> - The Shadow Empire does nothing except advance on the advancement tracks (without gaining any benefits or bonuses) to potentially gain landmarks.</p>
            <p><span class="bold">Full Automa</span> - Two artificial players (the Automa and the Shadow Empire) are added to the game. To streamline the game, the Automa and Shadow Empire play by their own simpler rules.</p>
            <p><span class="bold">Quick Start</span> - A basic interface that skips explanations and allows you to get playing faster. Also saves your previous choices for an even quicker game next time.</p>
        `
    },
    {
        name: 'Components to remove',
        id: 'removeComponents',
        classes: ['removeComponents'],
        content: `
        <p>Remove the following tapestries from the game:</p>
        <ul>
            <li>Age of Sail</li>
            <li>Alliance</li>
            <li>Coal Baron</li>
            <li>Dictatorship</li>
            <li>Diplomacy</li>
            <li>Espionage</li>
            <li>Marriage of State</li>
            <li>Oil Magnate</li>
            <li>Olympic Host</li>
            <li>Steam Tycoon</li>
            <li>Trade Economy</li>
            <li>2 traps cards <span class="bold">(If you\'re playing with the Plans & Ploys, do not remove any of the new trap-like tapestry cards.)</span></li>
            <li>Granges <span class="bold">(Arts & Architecture)</span></li>
        </ul>
        <p>Remove these civilizations from the game:</p>
        <ul>
            <li>Futurists</li>
            <li>Heralds</li>
            <li>Inventors</li>
            <li>Traders</li>
            <li>Advisors <span class="bold">(Plans & Ploys)</span></li>
            <li>Spies <span class="bold">(Plans & Ploys)</span></li>
        </ul>
        `
    },
    {
        name: 'Bot Restrictions',
        id: 'botRestrictions',
        classes: ['botRestrictions'],
        content: `
            <p>The bots only gain what&rsquo;s explicitly mentioned in this rulebook (e.g., they never gain income buildings or resources, and the Shadow Empire also never gains VP).</p>
        `
    },
    {
        name: 'Automa Benefits',
        id: 'automaBenefits',
        classes: ['automaBenefits'],
        content: `
            <p>When advancing to a new space the Automa only gains benefits from icons that are listed in this chart. Benefits and text not shown here are ignored.</p>
            <p>If a benefit is granted multiple times on a space, the Automa <span class="bold">only gains it once</span>.</p>
            <p>The Shadow Empire never gains benefits.</p>
            <p>Neither bot gains bonuses.</p>
            <table class="automaBenefits">
            <tr>
                <th>Normal Benefit</th>
                <th>Automa Benefit</th>
            </tr>
            <tr>
                <td>
                    <img class="automaBenefitTableIcon" src="img/help/diceBenefits.png" /> or <img class="automaBenefitTableIcon" src="img/help/diceNoBenefits.png" />
                </td>
                <td>Roll and advance on the indicated track (with or without the<br>benefit).</td>
            </tr>
            <tr>
                <td>
                    <img class="automaBenefitTableIcon" src="img/help/techCard.png" />
                </td>
                <td>Discard all 3 face-up tech cards and replace them.</td>
            </tr>
            <tr>
                <td>
                    <img class="automaBenefitTableIcon" src="img/help/conquer.png" /> or <img class="automaBenefitTableIcon" src="img/help/conquerAnywhere.png" />
                </td>
                <td>
                    See <a class="helpLink helpLink-conquer" href="#">Conquer</a>.
                </td>
            </tr>
            <tr>
                <td>
                    <img class="automaBenefitTableIcon" src="img/help/explore.png" /> or <img class="automaBenefitTableIcon" src="img/help/exploreAnywhere.png" />
                </td>
                <td>
                    See <a class="helpLink helpLink-explore" href="#">Explore</a>.
                </td>
            </tr>
            <tr>
                <td>
                    <img class="automaBenefitTableIcon" src="img/help/advanceMilitaryExplorationTechnology.png" /><br /><img class="automaBenefitTableIcon" src="img/help/regressMilitaryTechnology.png" />
                </td>
                <td>
                    Roll <img class="inlineHelpIcon" src="img/help/diceBenefits.png" /> until it selects one of the indicated tracks. Carry out the<br />corresponding advancement/regression.
                </td>
            </tr>
            <tr>
                <td>
                    <img class="automaBenefitTableIcon" src="img/help/tapestryCard.png" />
                </td>
                <td>
                    Give the Automa a tapestry card face down next to its mat.
                </td>
            </tr>
            </table>
            <p>The following benefits are only gained when using the Arts track from the <span class="bold">Arts and Architecture Expansion</span>.</p>
            <table class="artsArchitectureAutomaBenefits">
                <tr>
                    <th>Normal Benefit</th>
                    <th>Automa Benefit</th>
                </tr>
                <tr>
                    <td>
                        <img class="automaBenefitTableIcon" src="img/help/advanceMilitaryTechnologyExplorationScience.png" />
                    </td>
                    <td>
                        Roll and advance on the indicated track, carrying out the corresponding advancement (if applicable).
                    </td>
                </tr>
                <tr>
                    <td>
                        <img class="automaBenefitTableIcon" src="img/help/masterpiece.png" />
                    </td>
                    <td>
                        Discard all 3 face-up masterpiece cards and replace them.
                    </td>
                </tr>
            </table>
        `
    },
    {
        name: 'Landmarks',
        id: 'landmarks',
        classes: ['landmarks'],
        content: `
            <p>If <span class="bold">either bot</span> gains a landmark, it&rsquo;s assigned to the Automa.</p>
        `
    },
    {
        name: 'Hex Tiebreakers',
        id: 'hexTiebreakers',
        classes: ['hexTiebreakers'],
        content: `
            <p>All procedures for placing tiles and outposts on the board use the hex tiebreaker to choose 1 hex among a set of valid hexes.</p>
            
            <p>Using the hex tiebreaker icon on the tiebreaker card, start with the hex that the black arrow points to. Look at the hexes in order along the row in the direction indicated by that arrow.</p>
            
            <p>If you don&rsquo;t reach a valid hex, go on to the row pointed at by the gray arrow, then the row beyond that, etc. Continue until you reach a valid hex. The Automa chooses this hex.</p>
            
            <p class="italic">Example: The hexes with purple borders are the valid hexes for an explore action. Using the hex tiebreaker icon on the left you go through the hexes in the numbered order.</p>
            
            <img class="halfWidth" src="img/help/mapExample.jpg" /><p class="italic">The first valid hex you reach is the one labeled 9, so the Automa places a territory tile there.</p>
        `
    },
    {
        name: 'Conquer',
        id: 'conquer',
        classes: ['conquer'],
        content: `
            <img class="conquerHelpIcons" src="img/help/conquerAnywhere.png" />
            <img class="conquerHelpIcons" src="img/help/conquer.png" />
            <p>The Automa&rsquo;s conquer actions are divided into 2 different procedures:</p>
            <ol>
                <li>If the Automa can legally conquer a territory you control, carry out the <a class="helpLink helpLink-conquerOpponent" href="#">Conquer Opponent</a> procedure.</li>
                <li>Otherwise carry out the <a class="helpLink helpLink-conquerNeutral" href="#">Conquer Neutral</a> procedure.</li>
            </ol>
        `,
        subsections: [
            {
                name: 'Conquer Opponent',
                id: 'conquerOpponent',
                classes: ['conquerOpponent'],
                content: `
                    <p><span class="bold">Valid territories:</span> All territories you control, which the Automa can legally conquer, are valid.</p>
                    <p class="bold">Tiebreakers:</p>
                    <ol>
                        <li>If the Automa can still gain the middle island achievement, only the valid territories closest to the middle island remain valid.</li>
                        <li>Use the <a class="helpLink helpLink-hexTiebreakers" href="#">hex tiebreaker</a> to pick one territory among the valid ones.</li>
                    </ol>
                    
                    <p><span class="bold">Action:</span> Place an outpost from the Automa&rsquo;s supply on the chosen territory and topple your outpost, or the Automa&rsquo;s outpost if you play a trap.</p>
                `
            },
            {
                name: 'Conquer Neutral',
                id: 'conquerNeutral',
                classes: ['conquerNeutral'],
                content: `
                    <p class="bold">Valid territories:</p>
                    <ol>
                        <li>All hexes that can legally be conquered or explored by the Automa are valid.</li>
                        <li>Hexes adjacent to territories you control are only valid if a <img class="inlineHelpIcon" src="img/help/topple.png" /> icon is on the tiebreaker card.</li>
                    </ol>
                    <p>If there are no valid hexes, skip the action.</p>
                    <p class="bold">Tiebreakers:</p>
                    <ol>
                        <li>If the Automa can still gain the "middle island" achievement, only the valid hexes closest to the middle island remain valid.</li>
                        <li>If you control any territories that have a single token on them, only valid hexes closest to such territories remain valid.</li>
                        <li>If you don&rsquo;t control a territory with a single token on it, only valid hexes closest to any territory you control remain valid.</li>
                        <li>Use the <a class="helpLink helpLink-hexTiebreakers" href="#">hex tiebreaker</a> to pick one hex among the valid ones.</li>
                    </ol>
                    
                    <p class="bold">Actions:</p>
                    <ol>
                        <li>If the Automa is conquering an empty hex: Draw a territory tile and place it face-up with a random orientation on the chosen hex.</li>
                        <li>Place an outpost from the Automa&rsquo;s supply (of its own color) on the conquered territory.</li>
                        <li>If the <img class="inlineHelpIcon" src="img/help/topple.png" /> icon is on the tiebreaker card and the conquered terrain isn&rsquo;t the middle island, place one of the Shadow Empire&rsquo;s outposts toppled on the territory.</li>
                    </ol>
                `
            }
        ]
    },
    {
        name: 'Explore',
        id: 'explore',
        classes: ['explore'],
        content: `
            <img class="exploreHelpIcons" src="img/help/exploreAnywhere.png" />
            <img class="exploreHelpIcons" src="img/help/explore.png" />
            <p><span class="bold">Valid territories:</span> All hexes that the Automa can legally explore are valid. If there are none, skip this action.</p>
            <p class="bold">Tiebreakers:</p>
            <ol>
                <li>If the Automa doesn&rsquo;t have military as its favorite track, then only the valid hexes furthest from territories you control remain valid.</li>
                <li>Use the hex tiebreaker to pick one hex among the valid ones.</li>
            </ol>
            <p><span class="bold">Action:</span> Draw a territory tile and place it face up with a random orientation on the chosen hex.</p>
        `,
    },
    {
        name: 'Trap Cards',
        id: 'trapCards',
        classes: ['trapCards'],
        content: `
            <p>If you conquer a territory controlled by the Automa and it has any tapestry cards next to its mat:</p>
            <ol>
                <li>Discard one of its tapestry cards at random.</li>
                <li>If that card was a trap, the Automa retains control of the territory and your outpost enters play toppled.</li>
                <li>Repeat this procedure until the Automa either discards a trap or runs out of tapestry cards.</li>
            </ol>
        `
    },
    {
        name: 'Trap-like Cards (Plans & Ploys)',
        id: 'trapLikeCards',
        classes: ['trapLikeCards'],
        content: `
        <p>There are 5 new trap-like tapestry cards in the expansion. When removing trap cards during setup, do not remove any of these.</p>
        <p class="bold">Double Cross, Stolen Plans, and Surrender</p>
        
        <p>When drawing tapestry cards from the Automa&rsquo;s deck, these 3 cards function as any other <span class="bold underline">non-trap</span> cards.</p>
        <p class="bold">Retreat and Surprise Party</p>
        <ul>
            <li>If the Automa fulfills the conditions, these cards work as written. If there are multiple options for Retreat, use the territory tiebreaker.</li>
            <li>If the Automa does not fulfill the conditions, discard the card and continue drawing tapestry cards from its deck as usual.</li>
        </ul>
        `
    },
    {
        name: 'Achievement',
        id: 'achievements',
        classes: ['achievements'],
        content: `
            <p>The Automa earns achievements and the VP from them in the same way as you, except that only your outposts count towards the &ldquo;topple 2 opponent outposts&rdquo; achievement.</p>
            <p>The Shadow Empire can only earn the &ldquo;complete any advancement track&rdquo; achievement but gains no VP from doing so.</p>
        `
    },
    {
        name: 'Income Turn',
        id: 'incomeTurn',
        classes: ['incomeTurn'],
        content: `
            <p>The Automa gains what&rsquo;s listed on the income chart on its mat, top to bottom, left column first.</p>
            <p>If the Automa takes an action during an income turn that requires tiebreaking, draw and use the top card of the progress deck in turn 1 (reshuffle afterwards) and the latest tiebreaker card in income turns 2-5.</p>
            <img class="incomeTurnHelpIcon" src="img/help/advanceOnFavoriteTracks.png" /><p>If a bot&rsquo;s token has reached the end of its favorite track or if there&rsquo;s a further advanced token there, then its favorite track becomes the track that would be chosen by or . Move its &ldquo;favorite&rdquo; outpost there (it could be the same track or the favorite of the other bot).</p>
            <div class="clearDiv"></div>
            
            <img class="incomeTurnHelpIcon" src="img/help/advanceTrackTokens.png" /><p>Advance track tokens of both bots using the most recent decision card pair. The Automa gains the benefits (if any). This means that the Automa will do an advance and gain income during a single turn. It also means that the most recent card pair is sometimes used twice.</p>
            <div class="clearDiv"></div>
            
            <img class="incomeTurnHelpIcon" src="img/help/civBonus.png" />
            
            <p>The Automa gains the income turn bonus (if any) from its civilization card.</p>
            <div class="clearDiv"></div>
            
            <img class="incomeTurnHelpIcon" src="img/help/vpPointsScoring.png" />
            
            <p>The Automa gains VP for each landmark on its mat and for each controlled territory.</p>
            <div class="clearDiv"></div>
            
            <img class="incomeTurnHelpIcon" src="img/help/technology.png" />
            
            <p>The Automa gains VP for each space advanced on each of the indicated tracks.</p>
            <div class="clearDiv"></div>
            
            <p>For each of the VP icons, multiply the number of advancements/landmarks/territories by the leftmost multiplier not covered by a tapestry card.</p>
            <p>Note that contrary to human players, the Automa gains VP before playing a tapestry card and it almost exclusively gains VP during income turns.</p>
            <p>If the Automa is the first to start a new era, it gains the VP shown.</p>
            <p>Example: During income turn 3, the multipliers are x2, x1, and x1, respectively. This means that the Automa gains 2 VP per territory it controls, 2 VP per landmark on its mat, 1 VP for each advance on the military and science tracks, and 1 VP for each advance on the exploration and technology tracks. If it was the first to start a new era, it also gains 3 VP.</p>
            <img class="incomeTurnHelpIcon" src="img/help/addTwoExtraCards.png" />
            
            <p>Add the 2 topmost cards from the progress-deck to the decision deck discard pile.</p>
            <div class="clearDiv"></div>
            
            <img class="incomeTurnHelpIcon" src="img/help/tapestryCardToAutomaMat.png" />
            
            <p><span class="italic bold">Note: The app makes this step obsolete.</span>Place a card from the tapestry deck (not from the Automa&rsquo;s tapestry cards) face down on the leftmost empty tapestry space on the Automa&rsquo;s income mat.</p>
            <div class="clearDiv"></div>
            
            <img class="incomeTurnHelpIcon" src="img/help/shuffleAutomaDeck.png" />
            
            <p>All the decision deck cards (including any gained this income turn) are shuffled .</p>
        `
    },
    {
        name: 'Game End',
        id: 'gameEnd',
        classes: ['gameEnd'],
        content: `
            <p>Determine the winner following the instructions in the normal rulebook. The Shadow Empire doesn&rsquo;t participate in determining the winner at the end of the game. Only you or the Automa can win.</p>
        `
    },
    {
        name: 'Map',
        id: 'map',
        classes: ['map'],
        content: `
            <p>To replicate the physical Tapestry map into this digital app, first select either \'Human\' or \'Automa\' and then keep clicking/tapping on a tile to update its state. Keep doing this until the digital board matches the physical boards state. Then click the \'Next\' button to see where the Automa will Explore/Conquer.</p>
            <p class="italic"><span class="bold">Nomads Civ:</span> Use a single human outpost to represent any single buildings on the board (since these are able to be conquered exactly as a single human outpost). If two buildings are on a hex (or an outpost + building) then use the human outpost + toppled Automa outpost to represent this hex, since this will signify a hex that the Automa cannot conquer.</p>
            <p class="italic"><span class="bold">Isolationists Civ:</span> For any hexes that have an outpost and a player cube on it, then use the human outpost + toppled Automa outpost to represent this hex, since this will signify a hex that the Automa cannot conquer.</p>
        `
    },
    {
        name: 'Historians Clarification',
        id: 'historiansClarification',
        classes: ['historiansClarification'],
        content: `
            <p>For the special ability of the Historians, the Automa and Shadow Empire are considered separate players. Therefore, if only the Automa has one of your player tokens, the ability is not triggered when the Shadow Empire gains a landmark.</p>
        `
    },
    {
        name: 'Credit',
        id: 'credit',
        content: `
            <p>This is not an official <a href="https://stonemaiergames.com/games/tapestry/" target="_blank" rel="noopener">Stonemaier Games</a> product and has no affiliation with <a href="https://stonemaiergames.com/games/tapestry/" target="_blank" rel="noopener">Stonemaier Games</a>. Tapestry was designed by <a href="https://boardgamegeek.com/user/jameystegmaier" target="_blank" rel="noopener">Jamey Stegmaier</a>, with art by <a href="https://www.bosleyart.com/" target="_blank" rel="noopener">Andrew Bosley</a> and sculpts by <a href="http://cultofgame.blogspot.com/" target="_blank" rel="noopener">Rom Brown</a>. All art in this app is from <a href="https://stonemaiergames.com/games/tapestry/" target="_blank" rel="noopener">Tapestry</a>. The Automa for Tapestry was designed by <a href="https://boardgamegeek.com/user/mortenmdk" target="_blank" rel="noopener">Morten Monrad Pedersen</a> with <a href="https://boardgamegeek.com/user/elephantgirl" target="_blank" rel="noopener">Lieve Teugels</a> and <a href="https://boardgamegeek.com/user/njshaw2" target="_blank" rel="noopener">Nick Shaw</a> who represent <a href="http://www.automafactory.com/" target="_blank" rel="noopener">Automa Factory</a>.</p>
        `
    }
]

var adjCivDate = 'Nov 2021';

var adjCivs = {
    alchemists: 'Gain <img class="gameIcon" src="img/icons/resource.png"> <img class="gameIcon" src="img/icons/resource.png"> + 10 VP',
    aliens: false,
    architects: 'Gain 10 VP per opponent',
    craftsmen: 'Lose <img class="gameIcon" src="img/icons/resource.png">',
    entertainers: 'Gain <img class="gameIcon" src="img/icons/resource.png">',
    historians: 'If playing with the Arts track, lose 5 VP per opponent',
    infiltrators: 'Lose <img class="gameIcon" src="img/icons/resource.png">',
    islanders: false,
    isolationists: false,
    leaders: false,
    merrymakers: 'Gain <img class="gameIcon" src="img/icons/resource.png">',
    militants: false,
    mystics: 'Gain <img class="gameIcon" src="img/icons/resource.png">',
    nomads: false,
    recyclers: false,
    riverfolk: false,
    theChosen: 'Gain 15 VP per opponent',
    tinkerers: 'Lose <img class="gameIcon" src="img/icons/resource.png"> <img class="gameIcon" src="img/icons/resource.png">',
    treasureHunters: 'Lose <img class="gameIcon" src="img/icons/resource.png"> <img class="gameIcon" src="img/icons/resource.png">',
    utilitarians: 'Lose <img class="gameIcon" src="img/icons/resource.png">',
    collectors: false,
    gamblers: false,
    relentless: false,
    renegades: false,
    urbanPlanners: false
};


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
    },
    {
        track:'arts',
        details: [
            {                
                actionClass: 'tapestryCard',
                trackNum: 1
            },
            {                
                actionClass: 'masterpieceAction',
                trackNum: 3
            },
            {                
                actionClass: 'masterpieceAction',
                trackNum: 7
            },
            {                
                actionClass: 'advanceMilitaryTechnologyExplorationScienceAction',
                trackNum: 9
            },
            {                
                actionClass: 'advanceMilitaryTechnologyExplorationScienceAction',
                trackNum: 11
            },
        ]
    }
]

var actionInfo = [
    {
        actionName: 'Explore',
        actionClass: 'exploreAction',		
        actionDesc: `
            <div class="mainActionArea">
                <a href="#" id="goToMapBtn" class="btn blueBtn func-showLayer-map func-showMapScreen-explore func-buildMap">Map - Explore</a></div>
                <div class="exploreExtraTiebreakers extraTiebreakers">
                    <div class="mapTiebreaker"></div>
                    <div class="favTrackDecider"></div>
                <div class="clearDiv"></div>
            </div>
        `
    },
    {
        actionName: 'Explore Anywhere',
        actionClass: 'exploreAnywhereAction',
        actionDesc: `
            <div class="mainActionArea">
                <img class="actionImage" src="img/actions/exploreAnywhere.png" />
                <p class="actionDescription">
                <a class="helpLink helpLink-explore" href="#">Explore Anywhere</a> (no map functionality).</p>
                <div class="clearDiv"></div>
            </div>
            <div class="exploreExtraTiebreakers extraTiebreakers">
                <div class="mapTiebreaker"></div>
                <div class="favTrackDecider"></div>
                <div class="clearDiv"></div>
            </div>
        `
    },
    {
        actionName: 'Conquer',
        actionClass: 'conquerAction',
        actionDesc: `
            <div class="mainActionArea">
                <a href="#" id="goToMapBtn" class="btn blueBtn func-showLayer-map func-showMapScreen-conquer func-buildMap">Map - Conquer</a>
            </div>
            <div class="militaryExtraTiebreakers extraTiebreakers">
                <div class="mapTiebreaker"></div>
                <div class="toppleIndicator"></div>
                <div class="clearDiv"></div>
            </div>
        `
    },
    {
        actionName: 'Conquer Anywhere',
        actionClass: 'conquerAnywhereAction',
        actionDesc: `
            <div class="mainActionArea">
                <a href="#" id="goToMapBtn" class="btn blueBtn func-showLayer-map func-showMapScreen-conquerAnywhere func-buildMap">Map - Conquer</a>
            </div>
            <div class="militaryExtraTiebreakers extraTiebreakers">
                <div class="mapTiebreaker"></div>
                <div class="toppleIndicator"></div>
                <div class="clearDiv"></div>
            </div>
        `
    },
    {
        actionName: 'Tapestry Card',
        actionClass: 'tapestryCard',
        actionDesc: `
            <div class="mainActionArea">
                <img class="actionImage" src="img/actions/tapestryCard.png" />
                <p class="actionDescription">Give the Automa a face down tapestry card.</p>
            </div>
        `
    },
    {
        actionName: 'Conquer and Tapestry Card',
        actionClass: 'conquerAndTapestryAction',
        actionDesc: `
            <div class="mainActionArea">
                <div class="conquerAndTapestryDivider-1">
                    <img class="actionImage" src="img/actions/tapestryCard.png" />
                    <p class="actionDescription">Give the Automa a face down tapestry card.</p>
                </div>
                <div class="clearDiv"></div>
                <div class="conquerAndTapestryDivider-2">
                    <a href="#" id="goToMapBtn" class="btn blueBtn func-showLayer-map func-showMapScreen-conquer func-buildMap">Map - Conquer</a>
                </div>
                <div class="militaryExtraTiebreakers extraTiebreakers">
                    <div class="mapTiebreaker"></div>
                    <div class="toppleIndicator"></div>
                    <div class="clearDiv"></div>
                </div>
            </div>
        `
    },
    {
        actionName: 'Science Dice (No Benefits)',   
        actionClass: 'scienceDiceNoBenefitsAction',
        actionDesc: `
            <div class="mainActionArea">
                <div class="scienceDieToRoll activeScienceDie">
                    <img class="dice-face scienceDie noBenefitsRoll" src="img/actions/diceNoBenefits.png" />
                    <div class="diceResults">
                        <img class="dice-face noResult" src="img/dice/blank.png" />
                        <img class="dice-face explorationResult" src="img/dice/exploration.png" />
                        <img class="dice-face militaryResult" src="img/dice/military.png" />
                        <img class="dice-face technologyResult" src="img/dice/technology.png" />
                        <img class="dice-face scienceResult" src="img/dice/science.png" />
                        <img class="dice-face artsResult" src="img/dice/arts.png" />
                    </div>
                </div>
                <p class="actionDescription">The Automa rolls and advances on the indicated track, <span class="bold">without</span> receiving any benefits.</p>
                <div class="clearDiv"></div>
                <a href="#" tracks="all" class="btn greenBtn actionScienceDice func-scienceDieActionSelection-scienceDieNoBenefits+advance+false">Roll Die</a>
            </div>
        `
    },
    {
        actionName: 'Science Dice (Benefits)',
        actionClass: 'scienceDiceBenefitsAction',
        actionDesc: `
            <div class="mainActionArea">
                <div class="scienceDieToRoll activeScienceDie">
                    <img class="dice-face scienceDie benefitsRoll" src="img/dice/blank.png" />
                    <div class="diceResults">
                        <img class="dice-face noResult" src="img/dice/blank.png" />
                        <img class="dice-face explorationResult" src="img/dice/exploration.png" />
                        <img class="dice-face militaryResult" src="img/dice/military.png" />
                        <img class="dice-face technologyResult" src="img/dice/technology.png" />
                        <img class="dice-face scienceResult" src="img/dice/science.png" />
                        <img class="dice-face artsResult" src="img/dice/arts.png" />
                    </div>
                </div>
                <p class="actionDescription">The Automa rolls and advances on the indicated track, receiving any benefits.</p>
            </div>
            <div class="clearDiv"></div>
            <a href="#" tracks="all" class="btn greenBtn actionScienceDice func-scienceDieActionSelection-scienceDieBenefits+advance+true">Roll Die</a>
            `
    },
    {
        actionName: 'Advance (Military / Technology / Exploration)',
        actionClass: 'advanceMilitaryTechnologyExplorationAction',
        actionDesc: `
            <div class="mainActionArea">
                <div class="scienceDieToRoll activeScienceDie">
                    <img class="advanceIcon scienceDie benefitsRoll" src="img/actions/advanceMilitaryExplorationTechnology.png" />
                    <div class="diceResults">
                        <img class="dice-face noResult" src="img/dice/blank.png" />
                        <img class="dice-face explorationResult" src="img/dice/exploration.png" />
                        <img class="dice-face militaryResult" src="img/dice/military.png" />
                        <img class="dice-face technologyResult" src="img/dice/technology.png" />
                        <img class="dice-face scienceResult" src="img/dice/science.png" />
                        <img class="dice-face artsResult" src="img/dice/arts.png" />
                    </div>
                </div>
                <p class="actionDescription">The Automa rolls the science die to select one of the indicated tracks, and then advances on that track.</p>
                <div class="clearDiv"></div>
                <a href="#" tracks="military technology exploration" class="btn greenBtn actionScienceDice func-scienceDieActionSelection-advanceMilitaryTechnologyExploration+advance+true">Roll Die</a>
            </div>
        `
    },
    {
        actionName: 'Regress (Military / Technology)',
        actionClass: 'regressMilitaryTechnologyAction',
        actionDesc: `
            <div class="mainActionArea">
                <div class="scienceDieToRoll activeScienceDie">
                    <img class="advanceIcon scienceDie benefitsRoll" src="img/actions/regressMilitaryTechnology.png" />
                    <div class="diceResults">
                        <img class="dice-face noResult" src="img/dice/blank.png" />
                        <img class="dice-face explorationResult" src="img/dice/exploration.png" />
                        <img class="dice-face militaryResult" src="img/dice/military.png" />
                        <img class="dice-face technologyResult" src="img/dice/technology.png" />
                        <img class="dice-face scienceResult" src="img/dice/science.png" />
                        <img class="dice-face artsResult" src="img/dice/arts.png" />
                    </div>
                </div>
                <p class="actionDescription">The Automa rolls the science die to select one of the indicated tracks, and then regresses on that track.</p>
                <div class="clearDiv"></div>
                <a href="#" class="btn greenBtn actionScienceDice func-scienceDieActionSelection-advanceMilitaryTechnology+regress+true" tracks="military technology">Roll Die</a>
            </div>
        `
    },
    {
        actionName: 'Advance Twice (Military / Technology / Exploration)',
        actionClass: 'advanceTwiceMilitaryTechnologyExplorationAction',	
        actionDesc: `
            <div class="mainActionArea">
                <div class="scienceDieToRoll activeScienceDie">
                    <img class="advanceIcon scienceDie benefitsRoll" src="img/actions/advanceMilitaryExplorationTechnology.png" />
                    <div class="diceResults">
                        <img class="dice-face noResult" src="img/dice/blank.png" />
                        <img class="dice-face explorationResult" src="img/dice/exploration.png" />
                        <img class="dice-face militaryResult" src="img/dice/military.png" />
                        <img class="dice-face technologyResult" src="img/dice/technology.png" />
                        <img class="dice-face scienceResult" src="img/dice/science.png" />
                        <img class="dice-face artsResult" src="img/dice/arts.png" />
                    </div>
                </div>
                <p class="actionDescription">The Automa rolls the science die to select one of the indicated tracks, and then advances on that track.</p>
                <div class="clearDiv"></div>
                <a href="#" tracks="military technology exploration" class="btn greenBtn actionScienceDice func-scienceDieActionSelection-advanceMilitaryTechnologyExploration+advance+true">Roll Die</a>
            </div>
        `
    },
    {
        actionName: 'Technology Card',
        actionClass: 'technologyCardAction',
        actionDesc: `
            <div class="mainActionArea">
                <img class="actionImage" src="img/actions/techCard.png" />
                <p class="actionDescription">Discard all 3 face-up tech cards and replace them.</p>
            </div>
        `
    },
    {
        actionName: 'Masterpiece',
        actionClass: 'masterpieceAction',
        actionDesc: `
            <div class="mainActionArea">
                <img class="actionImage" src="img/actions/masterpiece.png" />
                <p class="actionDescription">Discard all 3 face-up masterpiece cards and replace them.</p>
            </div>
        `
    },
    {
        actionName: 'Advance (Military / Technology / Exploration / Science)',
        actionClass: 'advanceMilitaryTechnologyExplorationScienceAction',
        actionDesc: `
            <div class="mainActionArea">
                <div class="scienceDieToRoll activeScienceDie">
                    <img class="advanceIcon scienceDie benefitsRoll" src="img/actions/advanceMilitaryTechnologyExplorationScience.png" />
                    <div class="diceResults">
                        <img class="dice-face noResult" src="img/dice/blank.png" />
                        <img class="dice-face explorationResult" src="img/dice/exploration.png" />
                        <img class="dice-face militaryResult" src="img/dice/military.png" />
                        <img class="dice-face technologyResult" src="img/dice/technology.png" />
                        <img class="dice-face scienceResult" src="img/dice/science.png" />
                        <img class="dice-face artsResult" src="img/dice/arts.png" />
                    </div>
                </div>
                <p class="actionDescription">The Automa rolls the science die and then advances on that track.</p>
                <div class="clearDiv"></div>
                <a href="#" tracks="military technology exploration science" class="btn greenBtn actionScienceDice func-scienceDieActionSelection-advanceMilitaryTechnologyExplorationScience+advance+true">Roll Die</a>
            </div>
        `
    }

]

var difficultyLevels = [
    {
        level: '1',
        name: 'Automa the Underachiever',
        class: 'automaUnderachiever',
        income1Instructions: '',
        automaMat: 'normal',
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
        automaMat: 'normal',
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
                action: 'tapestryCardToAutomaSupplySetup',
                type: 'incomeScreen4',
                eras: [1]
            },
            {
                action: 'tapestryCardToAutomaSupply',
                type: 'incomeScreen4',
                eras: [2, 3, 4]
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
        automaMat: 'normal',
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
                action: 'tapestryCardToAutomaSupplySetup',
                type: 'incomeScreen5',
                eras: [1]
            },
            {
                action: 'tapestryCardToAutomaSupply',
                type: 'incomeScreen5',
                eras: [2, 3, 4]
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
        automaMat: 'normal',
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
                action: 'tapestryCardToAutomaSupplySetup',
                type: 'incomeScreen5',
                eras: [1]
            },
            {
                action: 'tapestryCardToAutomaSupply',
                type: 'incomeScreen5',
                eras: [2, 3, 4]
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
        automaMat: 'hard',
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
                action: 'tapestryCardToAutomaSupplySetup',
                type: 'incomeScreen6',
                eras: [1]
            },
            {
                action: 'tapestryCardToAutomaSupply',
                type: 'incomeScreen6',
                eras: [2, 3, 4]
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
        automaMat: 'hard',
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
                action: 'tapestryCardToAutomaSupplySetup',
                type: 'incomeScreen7',
                eras: [1]
            },
            {
                action: 'tapestryCardToAutomaSupply',
                type: 'incomeScreen7',
                eras: [2, 3, 4]
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

var aaDifficultyLevels = [
    {
        level: '1',
        name: 'Automa the Underachiever',
        class: 'automaUnderachiever',
        income1Instructions: '',
        automaMat: 'normal',
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
                eras: [2]
            },
            {
                action: 'addFourExtraCards',
                type: 'incomeScreen4',
                eras: [3, 4]
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
        automaMat: 'normal',
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
                action: 'tapestryCardToAutomaSupplySetup',
                type: 'incomeScreen4',
                eras: [1]
            },
            {
                action: 'tapestryCardToAutomaSupply',
                type: 'incomeScreen4',
                eras: [2, 3, 4]
            },
            {
                action: 'addTwoExtraCards',
                type: 'incomeScreen4',
                eras: [2]
            },
            {
                action: 'addFourExtraCards',
                type: 'incomeScreen4',
                eras: [3, 4]
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
        automaMat: 'normal',
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
                action: 'tapestryCardToAutomaSupplySetup',
                type: 'incomeScreen5',
                eras: [1]
            },
            {
                action: 'tapestryCardToAutomaSupply',
                type: 'incomeScreen5',
                eras: [2, 3, 4]
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
        level: '4',
        name: 'Automa the Somewhat Awesome',
        class: 'automaSomewhatAwesome',
        income1Instructions: '',
        automaMat: 'normal',
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
                action: 'tapestryCardToAutomaSupplySetup',
                type: 'incomeScreen5',
                eras: [1]
            },
            {
                action: 'tapestryCardToAutomaSupply',
                type: 'incomeScreen5',
                eras: [2, 3, 4]
            },
            {
                action: 'addTwoExtraCards',
                type: 'incomeScreen5',
                eras: [2]
            },
            {
                action: 'addSixExtraCards',
                type: 'incomeScreen5',
                eras: [3, 4]
            },
            {
                action: 'shuffleAutomaDeck',
                type: 'incomeScreen5',
                eras: [2, 3, 4]
            }
        ]
    }
]

var automaMatMultipliers = {
    normal: {
        eraBonuses: [
            {
                startEraFirstVPs: 2,
                landmarks: 1,
                controlledTerritories: 1,
                military: 0,
                science: 0,
                technology: 1,
                exploration: 1,
                arts: 1
            },
            {
                startEraFirstVPs: 3,
                landmarks: 2,
                controlledTerritories: 2,
                military: 1,
                science: 1,
                technology: 1,
                exploration: 1,
                arts: 1
            },
            {
                startEraFirstVPs: 4,
                landmarks: 2,
                controlledTerritories: 2,
                military: 1,
                science: 1,
                technology: 2,
                exploration: 2,
                arts: 2
            },
            {
                startEraFirstVPs: 0,
                landmarks: 3,
                controlledTerritories: 3,
                military: 2,
                science: 2,
                technology: 3,
                exploration: 3,
                arts: 3
            }
        ]
    },
    hard: {
        eraBonuses: [
            {
                startEraFirstVPs: 2,
                landmarks: 1,
                controlledTerritories: 1,
                military: 0,
                science: 0,
                technology: 1,
                exploration: 1,
                arts: 1
            },
            {
                startEraFirstVPs: 3,
                landmarks: 2,
                controlledTerritories: 2,
                military: 1,
                science: 1,
                technology: 2,
                exploration: 2,
                arts: 2
            },
            {
                startEraFirstVPs: 4,
                landmarks: 2,
                controlledTerritories: 2,
                military: 2,
                science: 2,
                technology: 2,
                exploration: 2,
                arts: 2
            },
            {
                startEraFirstVPs: 0,
                landmarks: 3,
                controlledTerritories: 3,
                military: 3,
                science: 3,
                technology: 4,
                exploration: 4,
                arts: 4
            }
        ]
    }  
}


var incomeStepActions = [
    {
        actionName: 'Human Advance',
        actionClass: 'humanAdvanceTracks',
        functionRequired: 'false',
        actionRequired: 'false',
        dynamicContent: 'false',
        content: `
            <p>For their first income turn, the human player advances one space on all 4 tracks (in whichever order they choose), receiving the benefits.</p>
            <img src="img/difficulty/level1ExtraInfo.jpg" />
        `
    },
    {
        actionName: 'Favorite Tracks Advance',
        actionClass: 'advanceOnFavoriteTracks',
        functionRequired: 'true',
        actionRequired: 'true',
        dynamicContent: 'true'
    },
    {
        actionName: 'Trailblazers Setup',
        actionClass: 'trailblazersSetup',
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
        content: `
            <img src="img/income/addNoExtraCards.png" />
            <p class="italic">No cards are added to the decision deck this era.</p>
        `
    },{
        actionName: 'Add Two Extra Cards',
        actionClass: 'addTwoExtraCards',
        functionRequired: 'true',
        actionRequired: 'false',
        dynamicContent: 'false',
        content: `
            <img src="img/income/addTwoExtraCards.png" />
            <p class="italic">Two cards are <span class="underline">automatically</span> added to the decision deck.</p>
        `
    },
    {
        actionName: 'Add Four Extra Cards',
        actionClass: 'addFourExtraCards',
        functionRequired: 'true',
        actionRequired: 'false',
        dynamicContent: 'false',
        content: `
            <img src="img/income/addFourExtraCards.png" />
            <p class="italic">Four cards are <span class="underline">automatically</span> added to the decision deck.</p>
        `
    },
    {
        actionName: 'Add Six Extra Cards',
        actionClass: 'addSixExtraCards',
        functionRequired: 'true',
        actionRequired: 'false',
        dynamicContent: 'false',
        content: `
            <img src="img/income/addSixExtraCards.png" />
            <p class="italic">Six cards are <span class="underline">automatically</span> added to the decision deck.</p>
        `
    },
    {
        actionName: 'Tapestry Card To Automa Supply',
        actionClass: 'tapestryCardToAutomaSupplySetup',
        functionRequired: 'false',
        actionRequired: 'false',
        dynamicContent: 'false',
        content: `
            <img src="img/income/tapestryCardToAutomaSupply.png" />
            <p>Give the Automa a face down tapestry card.</p>
        `
    },
    {
        actionName: 'Tapestry Card To Automa Supply',
        actionClass: 'tapestryCardToAutomaSupply',
        functionRequired: 'false',
        actionRequired: 'false',
        dynamicContent: 'false',
        content: `
            <img src="img/income/tapestryCardToAutomaSupply.png" />
            <p class="bold">Give the Automa a face down tapestry card.</p>
        `
    },
    {
        actionName: 'Shuffle Automa Deck',
        actionClass: 'shuffleAutomaDeck',
        functionRequired: 'false',
        actionRequired: 'false',
        dynamicContent: 'false',
        content: `
            <img src="img/income/shuffleAutomaDeck.png" />
            <p class="italic">The decision deck is <span class="underline">automatically</span> shuffled.</p>
        `
    }

];


var civAbilities = {
    explorers: {
        gameType: 'base',
        civName: 'Explorers',
        civID: 'explorers',
        trackName: 'Exploration',
        trackID: 'exploration',
        allIncomeTurns: [2, 3, 4, 5],
        actionRequired: 'true'
    },
    conquerors: {
        gameType: 'base',
        civName: 'Conquerors',
        civID: 'conquerors',
        trackName: 'Military',
        trackID: 'military',
        allIncomeTurns: [2, 3, 4, 5],
        actionRequired: 'false'
    },
    scientists: {
        gameType: 'base',
        civName: 'Scientists',
        civID: 'scientists',
        trackName: 'Science',
        trackID: 'science',
        allIncomeTurns: [3, 4, 5],
        actionRequired: 'true'
    },
    engineers: {
        gameType: 'base',
        civName: 'Engineers',
        civID: 'engineers',
        trackName: 'Technology',
        trackID: 'technology',
        allIncomeTurns: [2, 3, 4, 5],
        actionRequired: 'false'
    },
    equalizers: {
        gameType: 'plansPloys',
        civName: 'Equalizers',
        civID: 'equalizers',
        trackName: 'Random',
        trackID: 'random',
        allIncomeTurns: [2, 3, 4, 5],
        actionRequired: 'true'
    },
    hucksters: {
        gameType: 'plansPloys',
        civName: 'Hucksters',
        civID: 'hucksters',
        trackName: 'Random',
        trackID: 'random',
        allIncomeTurns: [2, 3, 4, 5],
        actionRequired: 'false'
    },
    iconoclasts: {
        gameType: 'plansPloys',
        civName: 'Iconoclasts',
        civID: 'iconoclasts',
        trackName: 'Random',
        trackID: 'random',
        allIncomeTurns: [2, 3, 4, 5],
        actionRequired: 'true'
    },
    trailblazers: {
        gameType: 'plansPloys',
        civName: 'Trailblazers',
        civID: 'trailblazers',
        trackName: 'Random',
        trackID: 'random',
        allIncomeTurns: [2, 3, 4, 5],
        actionRequired: 'false'
    }
}