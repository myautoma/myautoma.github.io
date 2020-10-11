var cards = {
    bobaFett: [
        {
            card: '1',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is inactive. Check Personal Goal. If completed, gain reward & flip character card. Elimination bonus becomes active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 2 damage.</span>',
                'If all bounty slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise take a bounty.',
                'Boba Fett reveals a contact token matching a bounty color on nearest adjacent planet. If no matching bounty color, Boba Fett reveals the lowest class contact token.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If Boba Fett wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                '<span class="bold">&ldquo;Armor Upgrade.&rdquo;</span> Spend 8k & receive Mandalorian Armor from Luxury deck. <span class="red">Shuffle Luxury deck.</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'Boba Fett will not exchange crew.'
            ]
        },
        {
            card: '2',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is inactive. Check Personal Goal. If completed, gain reward & flip character card. Elimination bonus becomes active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 2 damage.</span>',
                'Buy a Ship if current ship is a starter ship. Otherwise take a Job. <span class="characterNotesLinkInContent" characterNotes="bobaFett">(See Rules 4 - 6 in Character Notes)</span>',
                'Boba Fett reveals a contact token matching a bounty color on nearest adjacent planet. If no matching bounty color, Boba Fett reveals the lowest class contact token.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'               
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If Boba Fett wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;No Good to me Dead!&rdquo;</span> Spend 8k & discard an uncaptured bounty to gain 1 fame. Then lose 1 reputation w/the planet\'s faction.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'Boba Fett will not exchange crew.',
                'If a crew slot is empty, take a bounty from the market. Otherwise discard 1 crew, then take a bounty.'
            ]
        },
        {
            card: '3',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is inactive. Check Personal Goal. If completed, gain reward & flip character card. Elimination bonus becomes active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 2 damage.</span>',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job.',
                'Boba Fett reveals a contact token matching a bounty color on nearest adjacent planet. If no matching bounty color, Boba Fett reveals the lowest class contact token.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'               
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If Boba Fett wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                '<span class="bold">&ldquo;Wanted.&rdquo;</span> Resolve combat against player. If combat is won do the following: If Boba has < 8k, then gain 8k. Otherwise spend 8k & gain 2 fame if player has more fame than Boba. Otherwise gain 1 fame.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'Boba Fett will not exchange crew.',
                'If a crew slot is empty, take a bounty from the market. Otherwise discard 1 crew, then take a bounty.'
            ]
        },
        {
            card: '4',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is inactive. Check Personal Goal. If completed, gain reward & flip character card. Elimination bonus becomes active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                'Take a bounty.',
                'Boba Fett reveals a contact token matching a bounty color on nearest adjacent planet. If no matching bounty color, Boba Fett reveals the lowest class contact token.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'               
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If Boba Fett wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                '<span class="bold">&ldquo;Armor Upgrade.&rdquo;</span> Spend 8k & receive Mandalorian Armor from Luxury deck. <span class="red">Shuffle Luxury deck.</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'Boba Fett will not exchange crew.'
            ]
        },
        {
            card: '5',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is inactive. Check Personal Goal. If completed, gain reward & flip character card. Elimination bonus becomes active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 3 damage.</span>',
                'Take a bounty.',
                'Boba Fett reveals a contact token matching a bounty color on nearest adjacent planet. If no matching bounty color, Boba Fett reveals the lowest class contact token.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'               
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If Boba Fett wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'Reveal the facedown contact token of the <span class="bold">lowest</span> class on this planet & gain the crew on its card <span class="bold">for free</span>.',
                '<span class="bold">&ldquo;Wanted.&rdquo;</span> Resolve combat against player. If combat is won do the following: If Boba has < 8k, then gain 8k. Otherwise spend 8k & gain 2 fame if player has more fame than Boba. Otherwise gain 1 fame.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'Boba Fett will not exchange crew.'
            ]
        },
        {
            card: '6',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is inactive. Check Personal Goal. If completed, gain reward & flip character card. Elimination bonus becomes active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">character suffers 2 damage.</span>',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Cargo.',
                'Boba Fett reveals a contact token matching a bounty color on nearest adjacent planet. If no matching bounty color, Boba Fett reveals the lowest class contact token.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'               
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If Boba Fett wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;No Good to me Dead!&rdquo;</span> Spend 8k & discard an uncaptured bounty to gain 1 fame. Then lose 1 reputation w/the planet\'s faction.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'Boba Fett will not exchange crew.',
                'If a crew slot is empty, take a bounty from the market. Otherwise discard 1 crew, then take a bounty.'
            ]
        },
        {
            card: '7',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is inactive. Check Personal Goal. If completed, gain reward & flip character card. Elimination bonus becomes active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red"> lose 1 reputation w/planet\'s faction</span> (if any).',
                'If all G/M slots are full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> G/M.',
                'Boba Fett reveals a contact token matching a bounty color on nearest adjacent planet. If no matching bounty color, Boba Fett reveals the lowest class contact token.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If Boba Fett wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                '<span class="bold">&ldquo;No Good to me Dead!&rdquo;</span> Spend 8k & discard an uncaptured bounty to gain 1 fame. Then lose 1 reputation w/the planet\'s faction.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'Boba Fett will not exchange crew.',
                'If a crew slot is empty, take a bounty from the market. Otherwise discard 1 crew, then take a bounty.'
            ]
        },
        {
            card: '8',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is inactive. Check Personal Goal. If completed, gain reward & flip character card. Elimination bonus becomes active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> G/M or any gear or mod shown on the luxury deck.',
                'Boba Fett reveals a contact token matching a bounty color on nearest adjacent planet. If no matching bounty color, Boba Fett reveals the lowest class contact token.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'            
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If Boba Fett wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;No Disintegrations&rdquo;</span> Eliminate the highest class contact on this planet & gain 1 fame. (Does not count towards personal goal)'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'Boba Fett will not exchange crew.'
            ]
        },
        {
            card: '9',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is inactive. Check Personal Goal. If completed, gain reward & flip character card. Elimination bonus becomes active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> a Ship. If Current ship is <span class="bold">Firespray</span>, upgrade to <span class="bold">Slave 1</span>. <span class="characterNotesLinkInContent" characterNotes="bobaFett">(See Rules 4 - 6 in Character Notes)</span>',
                'Boba Fett reveals a contact token matching a bounty color on nearest adjacent planet. If no matching bounty color, Boba Fett reveals the lowest class contact token.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If Boba Fett wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                'Gain 1 reputation w/this planet\'s faction (if any).'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'Boba Fett will not exchange crew.',
                'If ship is <span class="bold">Slave 1</span>, gain 1 fame. (1 time only)'
            ]
        },
        {
            card: '10',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is inactive. Check Personal Goal. If completed, gain reward & flip character card. Elimination bonus becomes active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                'If all bounty slots full, take a Cargo. Otherwise take a bounty.',
                'Boba Fett reveals a contact token matching a bounty color on nearest adjacent planet. If no matching bounty color, Boba Fett reveals the lowest class contact token.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
               
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If Boba Fett wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                '<span class="bold">&ldquo;No Disintegrations&rdquo;</span> Eliminate the highest class contact on this planet & gain 1 fame. (Does not count towards personal goal)',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>'

            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'Boba Fett will not exchange crew.',
                'Discard the top card of the <span class="red">Cargo</span>, <span class="red">Luxury</span> & <span class="red">Ship</span> decks. <span class="bold">All AI cards are then shuffled.</span>'
            ]
        },
    ],
    bossk: [
        {
            card: '1',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is active. Check Personal Goal. If completed, gain reward & flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 3 damage.</span>',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> a Job. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [

                '<span class="bold">&ldquo;Hunted.&rdquo;</span> If a revealed contact on this planet is a Wookie, engage in combat. If Bossk wins combat, Wookie contact is eliminated & Bossk gains 1 Fame. [Chewbacca (6d), Black Kyrrsantan (5d)]',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty. <span class="italic">(An active bounty refers to any bounty that is being hunted and/or delivered.)</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;Wanted.&rdquo;</span> Resolve combat against player. If combat is won do the following: If Bossk has < 8k, then gain 8k. Otherwise spend 8k & gain 2 fame if player has more fame than Bossk. Otherwise gain 1 fame.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or Hutt affiliation, gain as crew <span class="bold">for free</span>. Bossk will not exchange crew.',
                'Reveal contact token of  highest class on this planet.'
            ]
        },
        {
            card: '2',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is active. Check Personal Goal. If completed, gain reward & flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 3 damage.</span>',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> a Ship if current ship is a starter ship. Otherwise take a bounty. <span class="characterNotesLinkInContent" characterNotes="bossk">(See Rules 4 - 6 in Character Notes)</span>',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [

                '<span class="bold">&ldquo;Hunted.&rdquo;</span> If a revealed contact on this planet is a Wookie, engage in combat. If Bossk wins combat, Wookie contact is eliminated & Bossk gains 1 Fame. [Chewbacca (6d), Black Kyrrsantan (5d)]',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty. <span class="italic">(An active bounty refers to any bounty that is being hunted and/or delivered.)</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                'Reveal the facedown contact token of the <span class="bold">lowest</span> class on this planet & <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card <span class="bold">for free</span>.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or Hutt affiliation, gain as crew <span class="bold">for free</span>. Bossk will not exchange crew.',
                'If a crew slot is filled, take a bounty from the market.'
            ]
        },
        {
            card: '3',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is active. Check Personal Goal. If completed, gain reward & flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">character suffers 3 damage.</span>',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> G/M.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Hunted.&rdquo;</span> If a revealed contact on this planet is a Wookie, engage in combat. If Bossk wins combat, Wookie contact is eliminated & Bossk gains 1 Fame. [Chewbacca (6d), Black Kyrrsantan (5d)]',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty. <span class="italic">(An active bounty refers to any bounty that is being hunted and/or delivered.)</span>',
                '<span class="bold">&ldquo;Wanted.&rdquo;</span> Resolve combat against player. If combat is won do the following: If Bossk has < 8k, then gain 8k. Otherwise spend 8k & gain 2 fame if player has more fame than Bossk. Otherwise gain 1 fame.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or Hutt affiliation, gain as crew <span class="bold">for free</span>. Bossk will not exchange crew.',
                'If a crew slot is filled, take a bounty from the market.'
            ]
        },
        {
            card: '4',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is active. Check Personal Goal. If completed, gain reward & flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</span> it.',
                'If all bounty slots full, <a class="helpLink helpLink-buying" href="#">buy</a> G/M. Otherwise take a bounty.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Hunted.&rdquo;</span> If a revealed contact on this planet is a Wookie, engage in combat. If Bossk wins combat, Wookie contact is eliminated & Bossk gains 1 Fame. [Chewbacca (6d), Black Kyrrsantan (5d)]',
                'If (= or -) reputation matching closest (Level 3 or less) patrol within 3 spaces to Bossk, encounter patrol.',
                'If at bounty location, encounter bounty. <span class="italic">(An active bounty refers to any bounty that is being hunted and/or delivered.)</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                'Reveal the facedown contact token of the <span class="bold">lowest</span> class on this planet & <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card <span class="bold">for free</span>.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or Hutt affiliation, gain as crew <span class="bold">for free</span>. Bossk will not exchange crew.'
            ]
        },
        {
            card: '5',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is active. Check Personal Goal. If completed, gain reward & flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 3 damage.</span>',
                'If all bounty slots full, <a class="helpLink helpLink-buying" href="#">buy</a> G/M. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> a Job.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Hunted.&rdquo;</span> If a revealed contact on this planet is a Wookie, engage in combat. If Bossk wins combat, Wookie contact is eliminated & Bossk gains 1 Fame. [Chewbacca (6d), Black Kyrrsantan (5d)]',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty. <span class="italic">(An active bounty refers to any bounty that is being hunted and/or delivered.)</span>',
                'Reveal the facedown contact token of the <span class="bold">lowest</span> class on this planet & <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card <span class="bold">for free</span>.',
                '<span class="bold">&ldquo;Res luk ra\'auf.&rdquo;</span> Spend 8k & discard an uncaptured bounty to gain 1 fame.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or Hutt affiliation, gain as crew <span class="bold">for free</span>. Bossk will not exchange crew.',
                'If a crew slot is filled, take a bounty from the market.'
            ]
        },
        {
            card: '6',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is active. Check Personal Goal. If completed, gain reward & flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">character suffers 3 damage.</span>',
                'Take a bounty.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Hunted.&rdquo;</span> If a revealed contact on this planet is a Wookie, engage in combat. If Bossk wins combat, Wookie contact is eliminated & Bossk gains 1 Fame. [Chewbacca (6d), Black Kyrrsantan (5d)]',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty. <span class="italic">(An active bounty refers to any bounty that is being hunted and/or delivered.)</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;Res luk ra\'auf.&rdquo;</span> Spend 8k & discard an uncaptured bounty to gain 1 fame.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or Hutt affiliation, gain as crew <span class="bold">for free</span>. Bossk will not exchange crew.'
            ]
        },
        {
            card: '7',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is active. Check Personal Goal. If completed, gain reward & flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">lose 1 reputation w/planet\'s faction</span> (if any).',
                'If all G/M slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> G/M. ',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Hunted.&rdquo;</span> If a revealed contact on this planet is a Wookie, engage in combat. If Bossk wins combat, Wookie contact is eliminated & Bossk gains 1 Fame. [Chewbacca (6d), Black Kyrrsantan (5d)]',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty. <span class="italic">(An active bounty refers to any bounty that is being hunted and/or delivered.)</span>',
                '<span class="bold">&ldquo;Weapon Upgrade.&rdquo;</span> Spend 8k & receive MPL-57 Grenade Launcher from G/M deck. <span class="red">Shuffle G/M deck.</span>',
                '<span class="bold">&ldquo;Live for the Hunt.&rdquo;</span> Eliminate the highest class contact on this planet & gain 1 fame.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or Hutt affiliation, gain as crew <span class="bold">for free</span>. Bossk will not exchange crew.',
                'If a crew slot is filled, take a bounty from the market.'
            ]
        },
        {
            card: '8',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is active. Check Personal Goal. If completed, gain reward & flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> G/M.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Hunted.&rdquo;</span> If a revealed contact on this planet is a Wookie, engage in combat. If Bossk wins combat, Wookie contact is eliminated & Bossk gains 1 Fame. [Chewbacca (6d), Black Kyrrsantan (5d)]',
                'If (= or -) reputation matching closest (Level 3 or less) patrol within 3 spaces to Bossk, encounter patrol.',
                'If at bounty location, encounter bounty. <span class="italic">(An active bounty refers to any bounty that is being hunted and/or delivered.)</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                'Gain 1 reputation w/this planet\'s faction (if any).'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or Hutt affiliation, gain as crew <span class="bold">for free</span>. Bossk will not exchange crew.',
                'Reveal contact token of highest class on this planet.'
            ]
        },
        {
            card: '9',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is active. Check Personal Goal. If completed, gain reward & flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> a Ship. If current ship is <span class="bold">Hound\'s Tooth.</span> <span class="characterNotesLinkInContent" characterNotes="bossk">(See Rules 4 - 6 in Character Notes)</span>',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Hunted.&rdquo;</span> If a revealed contact on this planet is a Wookie, engage in combat. If Bossk wins combat, Wookie contact is eliminated & Bossk gains 1 Fame. [Chewbacca (6d), Black Kyrrsantan (5d)]',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty. <span class="italic">(An active bounty refers to any bounty that is being hunted and/or delivered.)</span>',
                '<span class="bold">&ldquo;Weapon Upgrade.&rdquo;</span> Spend 8k & receive MPL-57 Grenade Launcher from G/M deck. <span class="red">Shuffle G/M deck.</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or Hutt affiliation, gain as crew <span class="bold">for free</span>. Bossk will not exchange crew.',
                'If ship is <span class="bold">&ldquo;Hounds Tooth&rdquo;</span>, gain 1 fame. (1 time only)'
            ]
        },
        {
            card: '10',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Action text is active. Check Personal Goal. If completed, gain reward & flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                'If all bounty slots full, <a class="helpLink helpLink-buying" href="#">buy</a> a Cargo. Otherwise take a bounty.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Hunted.&rdquo;</span> If a revealed contact on this planet is a Wookie, engage in combat. If Bossk wins combat, Wookie contact is eliminated & Bossk gains 1 Fame. [Chewbacca (6d), Black Kyrrsantan (5d)]',
                'If (= or -) reputation matching closest (Level 3 or less) patrol within 3 spaces to Bossk, encounter patrol.',
                'If at bounty location, encounter bounty. <span class="italic">(An active bounty refers to any bounty that is being hunted and/or delivered.)</span>',
                '<span class="bold">&ldquo;Live for the Hunt.&rdquo;</span> Eliminate the highest class contact on this planet & gain 1 fame.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or Hutt affiliation, gain as crew <span class="bold">for free</span>. Bossk will not exchange crew.',
                'Discard the top card of the <span class="red">Bounty</span> & <span class="red">G/M</span> decks. <span class="bold">All AI cards are then shuffled.</span>'
            ]
        },
    ],
    doctorAphra: [
        {
            card: '1',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                'Take a market action & <a class="helpLink helpLink-buying" href="#">buy</a> Job if slot available. Then <a class="helpLink helpLink-moving" href="#">move</a> toward closest Job. If no Job, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Planning text is inactive.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 2 damage.</span>',
                'If all Job slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Job.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> Any time after Hera Syndulla is taken as a crew, if Doctor Aphra ends movement on an Imperial planet - Aphra discards Hera Syndulla & gains 1 fame. Place Hera on nearest open contact spot.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;I don\'t believe in sure things!&rdquo;</span> Spend 8k & discard all active jobs to gain 1 fame.',
                'Gain 1 reputation w/this planet\'s faction (if any).'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are droids, Black Kyrrsantan or Hera Syndulla, gain as crew <span class="bold">for free</span>. Black Kyrrsantan & Hera cannot be exchanged. Aphra will only exchange crew for either Black Kyrrsantan or Hera Syndulla regardless of color.',
                'Reveal facedown contact token of <span class="bold">highest</span> class on this planet.'
            ]
        },
        {
            card: '2',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest Job. If no Job, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal. If patrol in path is empire, ignore reputation & pass through the patrol.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Planning text is inactive.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 2 damage.</span>',
                'If all Job slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Job.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> Any time after Hera Syndulla is taken as a crew, if Doctor Aphra ends movement on an Imperial planet - Aphra discards Hera Syndulla & gains 1 fame. Place Hera on nearest open contact spot.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                'Reveal facedown contact token of the <span class="bold">lowest</span> class on this planet & gain the crew on its card <span class="bold">for free</span>.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are droids, Black Kyrrsantan or Hera Syndulla, gain as crew <span class="bold">for free</span>. Black Kyrrsantan & Hera cannot be exchanged. Aphra will only exchange crew for either Black Kyrrsantan or Hera Syndulla regardless of color.'
            ]
        },
        {
            card: '3',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest Job. If no Job, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal. If patrol in path is empire, ignore reputation & pass through the patrol.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Planning text is inactive.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">character suffers 2 damage.</span>',
                'Buy a Ship if current ship is a starter ship. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. <span class="characterNotesLinkInContent" characterNotes="doctorAphra">(See Rules 4 - 6 in Character Notes)</span>'
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> Any time after Hera Syndulla is taken as a crew, if Doctor Aphra ends movement on an Imperial planet - Aphra discards Hera Syndulla & gains 1 fame. Place Hera on nearest open contact spot.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                '<span class="bold">&ldquo;Serving the Sith.&rdquo;</span> Spend 8k & receive Job-Imperial Favor from Job deck. <span class="red">Shuffle Job deck.</span> Increase Imperial reputation to (+)',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are droids, Black Kyrrsantan or Hera Syndulla, gain as crew <span class="bold">for free</span>. Black Kyrrsantan & Hera cannot be exchanged. Aphra will only exchange crew for either Black Kyrrsantan or Hera Syndulla regardless of color.',
                'Reveal facedown contact token of <span class="bold">highest</span> class on this planet.'
            ]
        },
        {
            card: '4',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                'Take a market action & <a class="helpLink helpLink-buying" href="#">buy</a> Job if slot available. Then <a class="helpLink helpLink-moving" href="#">move</a> toward closest Job. If no Job, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Planning text is inactive.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Cargo.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> Any time after Hera Syndulla is taken as a crew, if Doctor Aphra ends movement on an Imperial planet - Aphra discards Hera Syndulla & gains 1 fame. Place Hera on nearest open contact spot.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                'Reveal facedown contact token of the <span class="bold">lowest</span> class on this planet & gain the crew on its card <span class="bold">for free</span>.',
                '<span class="bold">&ldquo;Imperial Agent&rdquo;</span> Resolve combat against player. If combat is won do the following: If Aphra has < 8k, then gain 8k. Otherwise spend 8k & gain 1 fame. Player loses 1 Imperial reputation.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are droids, Black Kyrrsantan or Hera Syndulla, gain as crew <span class="bold">for free</span>. Black Kyrrsantan & Hera cannot be exchanged. Aphra will only exchange crew for either Black Kyrrsantan or Hera Syndulla regardless of color.'
            ]
        },
        {
            card: '5',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                'Take a market action & <a class="helpLink helpLink-buying" href="#">buy</a> Job if slot available. Then <a class="helpLink helpLink-moving" href="#">move</a> toward closest Job. If no Job, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Planning text is inactive.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 3 damage.</span>',
                'Buy Job.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> Any time after Hera Syndulla is taken as a crew, if Doctor Aphra ends movement on an Imperial planet - Aphra discards Hera Syndulla & gains 1 fame. Place Hera on nearest open contact spot.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                '<span class="bold">&ldquo;I don\'t believe in sure things!&rdquo;</span> Spend 8k & discard all active jobs to gain 1 fame.',
                'Reveal facedown contact token of the <span class="bold">lowest</span> class on this planet & gain the crew on its card <span class="bold">for free</span>.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are droids, Black Kyrrsantan or Hera Syndulla, gain as crew <span class="bold">for free</span>. Black Kyrrsantan & Hera cannot be exchanged. Aphra will only exchange crew for either Black Kyrrsantan or Hera Syndulla regardless of color.'
            ]
        },
        {
            card: '6',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest Job. If no Job, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal. If patrol in path is empire, ignore reputation & pass through the patrol.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Planning text is inactive.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">character suffers 2 damage.</span>',
                'Buy Job.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> Any time after Hera Syndulla is taken as a crew, if Doctor Aphra ends movement on an Imperial planet - Aphra discards Hera Syndulla & gains 1 fame. Place Hera on nearest open contact spot.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                '<span class="bold">&ldquo;I don\'t believe in sure things!&rdquo;</span> Spend 8k & discard all active jobs to gain 1 fame.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are droids, Black Kyrrsantan or Hera Syndulla, gain as crew <span class="bold">for free</span>. Black Kyrrsantan & Hera cannot be exchanged. Aphra will only exchange crew for either Black Kyrrsantan or Hera Syndulla regardless of color.',
                'Reveal facedown contact token of <span class="bold">highest</span> class on this planet.'
            ]
        },
        {
            card: '7',
            planning: [
                'If defeated, recover all damage. Take a market action & <a class="helpLink helpLink-buying" href="#">buy</a> Job if slot available.',
                'Take a market action & <a class="helpLink helpLink-buying" href="#">buy</a> Job if slot available. Then <a class="helpLink helpLink-moving" href="#">move</a> toward closest Job. If no Job, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Planning text is inactive.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red"> lose 1 reputation w/planet\'s faction</span> (if any).',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> G/M. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> Any time after Hera Syndulla is taken as a crew, if Doctor Aphra ends movement on an Imperial planet - Aphra discards Hera Syndulla & gains 1 fame. Place Hera on nearest open contact spot.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;I don\'t believe in sure things!&rdquo;</span> Spend 8k & discard all active jobs to gain 1 fame.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are droids, Black Kyrrsantan or Hera Syndulla, gain as crew <span class="bold">for free</span>. Black Kyrrsantan & Hera cannot be exchanged. Aphra will only exchange crew for either Black Kyrrsantan or Hera Syndulla regardless of color.',
                'Reveal facedown contact token of <span class="bold">highest</span> class on this planet.'
            ]
        },
        {
            card: '8',
            planning: [
                'If defeated, recover all damage. Take a market action & <a class="helpLink helpLink-buying" href="#">buy</a> Job if slot available.',
                'Take a market action & <a class="helpLink helpLink-buying" href="#">buy</a> Job if slot available. Then <a class="helpLink helpLink-moving" href="#">move</a> toward closest Job. If no Job, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Planning text is inactive.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> G/M.',
                'Reveal facedown contact token of the <span class="bold">lowest</span> class on this planet.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> Any time after Hera Syndulla is taken as a crew, if Doctor Aphra ends movement on an Imperial planet - Aphra discards Hera Syndulla & gains 1 fame. Place Hera on nearest open contact spot.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;Serving the Sith.&rdquo;</span> Spend 8k & receive Job-Imperial Favor from Job deck. <span class="red">Shuffle Job deck.</span> Increase Imperial reputation to (+)',
                'Gain 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are droids, Black Kyrrsantan or Hera Syndulla, gain as crew <span class="bold">for free</span>. Black Kyrrsantan & Hera cannot be exchanged. Aphra will only exchange crew for either Black Kyrrsantan or Hera Syndulla regardless of color.',
                'Discard all non-droid crew members & gain 1 fame.'
            ]
        },
        {
            card: '9',
            planning: [
                'If defeated, recover all damage. Take a market action & <a class="helpLink helpLink-buying" href="#">buy</a> Job if slot available.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest Job. If no Job, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal. If patrol in path is empire, ignore reputation & pass through the patrol.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Planning text is inactive.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                'Buy a Ship. If current ship is <span class="bold">Heavy-Duty Lifter</span>, upgrade <span class="bold">Ark Angel</span>. <span class="characterNotesLinkInContent" characterNotes="doctorAphra">(See Rules 4 - 6 in Character Notes)</span>'
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> Any time after Hera Syndulla is taken as a crew, if Doctor Aphra ends movement on an Imperial planet - Aphra discards Hera Syndulla & gains 1 fame. Place Hera on nearest open contact spot.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                'Gain 4k. Then lose 1 reputation w/this planet\'s faction (if any).'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are droids, Black Kyrrsantan or Hera Syndulla, gain as crew <span class="bold">for free</span>. Black Kyrrsantan & Hera cannot be exchanged. Aphra will only exchange crew for either Black Kyrrsantan or Hera Syndulla regardless of color.',
                'If ship is <span class="bold">&ldquo;Ark Angel&rdquo;</span>, gain 1 fame. (1 time only)'
            ]
        },
        {
            card: '10',
            planning: [
                'If defeated, recover all damage. Take a market action & <a class="helpLink helpLink-buying" href="#">buy</a> Job if slot available.',
                'Take a market action & <a class="helpLink helpLink-buying" href="#">buy</a> Job if slot available. Then <a class="helpLink helpLink-moving" href="#">move</a> toward closest Job. If no Job, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Planning text is inactive.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Cargo.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Captured.&rdquo;</span> Any time after Hera Syndulla is taken as a crew, if Doctor Aphra ends movement on an Imperial planet - Aphra discards Hera Syndulla & gains 1 fame. Place Hera on nearest open contact spot.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;Imperial Agent&rdquo;</span> Resolve combat against player. If combat is won do the following: If Aphra has < 8k, then gain 8k. Otherwise spend 8k & gain 1 fame. Player loses 1 Imperial reputation.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are droids, Black Kyrrsantan or Hera Syndulla, gain as crew <span class="bold">for free</span>. Black Kyrrsantan & Hera cannot be exchanged. Aphra will only exchange crew for either Black Kyrrsantan or Hera Syndulla regardless of color.',
                'Discard the top card of the <span class="red">Bounty</span>, <span class="red">Luxury</span> & <span class="red">Ship</span> decks. <span class="bold">All AI cards are then shuffled.</span>'
            ]
        },
    ],
    hanSolo: [
        {
            card: '1',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal. If any patrol in path, ignore reputation & pass through the patrol(s).',
                '***+2 Movement bonus is active.',
                'Gain 2k.'
            ], action: [ 'Check Personal Goal. If completed, gain reward & flip character card. Only movement bonus is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 2 damage.</span>',
                'If all cargo slots full, buy Job. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo.'

            ],
            encounter: [
                '<span class="bold">&ldquo;Who Shot First...&rdquo;</span> If Solo ends movement on a planet where Greedo is already revealed, Solo must engage in combat with Greedo (4d). If Solo wins combat, eliminate Greedo & gain 1 fame. If unsuccessful, move Solo to nearest Hutt planet & lose 5k.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;Never tell me the odds!&rdquo;</span> Spend 8k & discard any legal cargo. Then discard cargo deck until <span class="bold">ILLEGAL</span> cargo is found. Take <span class="bold">ILLEGAL</span> Cargo.',
                'Gain 1 reputation w/this planet\'s faction (if any).'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Maz Katana or Chewbacca are revealed on this planet, gain as crew <span class="bold">for free</span>. If Chewbacca is taken as crew gain 1 fame as long as he is a crew. They cannot be exchanged once taken as crew. Han Solo will only exchange crew for either Maz Katana or Chewbacca regardless of color.',
                'Reveal all <span class="bold">green</span> contacts on this planet.'
            ]
        },
        {
            card: '2',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal.',
                '***+2 Movement bonus is active.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Only movement bonus is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 2 damage.</span>',
                'If all job slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Job.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Who Shot First...&rdquo;</span> If Solo ends movement on a planet where Greedo is already revealed, Solo must engage in combat with Greedo (4d). If Solo wins combat, eliminate Greedo & gain 1 fame. If unsuccessful, move Solo to nearest Hutt planet & lose 5k.',
                'If (-) reputation matching a patrol within 3 spaces, discard all cargo & gain 1 fame.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                'Reveal the facedown contact token of the <span class="bold">lowest</span> class on this planet & gain the crew on its card <span class="bold">for free</span>.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Maz Katana or Chewbacca are revealed on this planet, gain as crew <span class="bold">for free</span>. If Chewbacca is taken as crew gain 1 fame as long as he is a crew. They cannot be exchanged once taken as crew. Han Solo will only exchange crew for either Maz Katana or Chewbacca regardless of color.'
            ]
        },
        {
            card: '3',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal.',
                '***+2 Movement bonus is active.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Only movement bonus is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">character suffers 2 damage.</span>',
                'Buy a Ship if current ship is a starter ship. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. <span class="characterNotesLinkInContent" characterNotes="hanSolo">(See Rules 4 - 6 in Character Notes)</span>'
            ],
            encounter: [
                '<span class="bold">&ldquo;Who Shot First...&rdquo;</span> If Solo ends movement on a planet where Greedo is already revealed, Solo must engage in combat with Greedo (4d). If Solo wins combat, eliminate Greedo & gain 1 fame. If unsuccessful, move Solo to nearest Hutt planet & lose 5k.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                '<span class="bold">&ldquo;It\'s the ship that made the...&rdquo;</span> Spend 8k & receive Job-Kessel Run from Job deck. <span class="red">Shuffle Job deck.</span> Increase Syndicate reputation to (+)',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Maz Katana or Chewbacca are revealed on this planet, gain as crew <span class="bold">for free</span>. If Chewbacca is taken as crew gain 1 fame as long as he is a crew. They cannot be exchanged once taken as crew. Han Solo will only exchange crew for either Maz Katana or Chewbacca regardless of color.',
                'Reveal all <span class="bold">yellow</span> contacts on this planet.'
            ]
        },
        {
            card: '4',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal. If any patrol in path, ignore reputation & pass through the patrol(s).',
                '***+2 Movement bonus is active.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Only movement bonus is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                'Discard cargo deck until <span class="bold">ILLEGAL</span> cargo is found. Buy <span class="bold">ILLEGAL</span> Cargo.'

            ],
            encounter: [
                '<span class="bold">&ldquo;Who Shot First...&rdquo;</span> If Solo ends movement on a planet where Greedo is already revealed, Solo must engage in combat with Greedo (4d). If Solo wins combat, eliminate Greedo & gain 1 fame. If unsuccessful, move Solo to nearest Hutt planet & lose 5k.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                '<span class="bold">&ldquo;Ship Upgrade.&rdquo;</span> Spend 8k & receive Smuggling Compartment from Cargo deck. <span class="red">Shuffle Cargo deck.</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                'Reveal the facedown contact token of the <span class="bold">lowest</span> class on this planet & gain the crew on its card <span class="bold">for free</span>.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Maz Katana or Chewbacca are revealed on this planet, gain as crew <span class="bold">for free</span>. If Chewbacca is taken as crew gain 1 fame as long as he is a crew. They cannot be exchanged once taken as crew. Han Solo will only exchange crew for either Maz Katana or Chewbacca regardless of color.',
                'Reveal all <span class="bold">green</span> contacts on this planet.'
            ]
        },
        {
            card: '5',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal.',
                '***+2 Movement bonus is active.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Only movement bonus is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 3 damage.</span>',
                'Buy Job.'

            ],
            encounter: [
                '<span class="bold">&ldquo;Who Shot First...&rdquo;</span> If Solo ends movement on a planet where Greedo is already revealed, Solo must engage in combat with Greedo (4d). If Solo wins combat, eliminate Greedo & gain 1 fame. If unsuccessful, move Solo to nearest Hutt planet & lose 5k.',
                'If (-) reputation matching a patrol within 3 spaces, discard all cargo & gain 1 fame.',
                'Reveal the facedown contact token of the <span class="bold">lowest</span> class on this planet & gain the crew on its card <span class="bold">for free</span>.',
                'Gain 4k. Then lose 1 reputation w/this planet\'s faction (if any).'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Maz Katana or Chewbacca are revealed on this planet, gain as crew <span class="bold">for free</span>. If Chewbacca is taken as crew gain 1 fame as long as he is a crew. They cannot be exchanged once taken as crew. Han Solo will only exchange crew for either Maz Katana or Chewbacca regardless of color.'
            ]
        },
        {
            card: '6',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal.',
                '***+2 Movement bonus is active.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Only movement bonus is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">character suffers 2 damage.</span>',
                'Buy Job.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Who Shot First...&rdquo;</span> If Solo ends movement on a planet where Greedo is already revealed, Solo must engage in combat with Greedo (4d). If Solo wins combat, eliminate Greedo & gain 1 fame. If unsuccessful, move Solo to nearest Hutt planet & lose 5k.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                '<span class="bold">&ldquo;Never tell me the odds!&rdquo;</span> Spend 8k & discard any legal cargo. Then discard cargo deck until <span class="bold">ILLEGAL</span> cargo is found. Take <span class="bold">ILLEGAL</span> Cargo.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Maz Katana or Chewbacca are revealed on this planet, gain as crew <span class="bold">for free</span>. If Chewbacca is taken as crew gain 1 fame as long as he is a crew. They cannot be exchanged once taken as crew. Han Solo will only exchange crew for either Maz Katana or Chewbacca regardless of color.'
            ]
        },
        {
            card: '7',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal. If any patrol in path, ignore reputation & pass through the patrol(s).',
                '***+2 Movement bonus is active.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Only movement bonus is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">lose 1 reputation w/planet\'s faction</span> (if any).',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> G/M. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Who Shot First...&rdquo;</span> If Solo ends movement on a planet where Greedo is already revealed, Solo must engage in combat with Greedo (4d). If Solo wins combat, eliminate Greedo & gain 1 fame. If unsuccessful, move Solo to nearest Hutt planet & lose 5k.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                '<span class="bold">&ldquo;Never tell me the odds!&rdquo;</span> Spend 8k & discard any legal cargo. Then discard cargo deck until <span class="bold">ILLEGAL</span> cargo is found. Take <span class="bold">ILLEGAL</span> Cargo.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Maz Katana or Chewbacca are revealed on this planet, gain as crew <span class="bold">for free</span>. If Chewbacca is taken as crew gain 1 fame as long as he is a crew. They cannot be exchanged once taken as crew. Han Solo will only exchange crew for either Maz Katana or Chewbacca regardless of color.'
            ]
        },
        {
            card: '8',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal.',
                '***+2 Movement bonus is active.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Only movement bonus is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                'Discard cargo deck until <span class="bold">ILLEGAL</span> cargo is found. Buy <span class="bold">ILLEGAL</span> Cargo.',
                'Reveal the facedown contact token of the <span>lowest</span> class on this planet.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Who Shot First...&rdquo;</span> If Solo ends movement on a planet where Greedo is already revealed, Solo must engage in combat with Greedo (4d). If Solo wins combat, eliminate Greedo & gain 1 fame. If unsuccessful, move Solo to nearest Hutt planet & lose 5k.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;It\'s the ship that made the...&rdquo;</span> Spend 8k & receive Job-Kessel Run from Job deck. <span class="red">Shuffle Job deck.</span> Increase Syndicate reputation to (+)',
                'Gain 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Maz Katana or Chewbacca are revealed on this planet, gain as crew <span class="bold">for free</span>. If Chewbacca is taken as crew gain 1 fame as long as he is a crew. They cannot be exchanged once taken as crew. Han Solo will only exchange crew for either Maz Katana or Chewbacca regardless of color.',
                'Reveal all <span class="bold">yellow</span> contacts on this planet.'
            ]
        },
        {
            card: '9',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal.',
                '***+2 Movement bonus is active.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Only movement bonus is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                'Buy a Ship. If Current ship is <span class="bold">YT-1300</span>, upgrade to <span class="bold">Millennium Falcon</span>. <span class="characterNotesLinkInContent" characterNotes="hanSolo">(See Rules 4 - 6 in Character Notes)</span>'
            ],
            encounter: [
                '<span class="bold">&ldquo;Who Shot First...&rdquo;</span> If Solo ends movement on a planet where Greedo is already revealed, Solo must engage in combat with Greedo (4d). If Solo wins combat, eliminate Greedo & gain 1 fame. If unsuccessful, move Solo to nearest Hutt planet & lose 5k.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                'Gain 4k. Then lose 1 reputation w/this planet\'s faction (if any).'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Maz Katana or Chewbacca are revealed on this planet, gain as crew <span class="bold">for free</span>. If Chewbacca is taken as crew gain 1 fame as long as he is a crew. They cannot be exchanged once taken as crew. Han Solo will only exchange crew for either Maz Katana or Chewbacca regardless of color.',
                'If ship is Millennium Falcon, gain 1 fame. (1 time only)'
            ]
        },
        {
            card: '10',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal. If any patrol in path, ignore reputation & pass through the patrol(s).',
                '***+2 Movement bonus is active.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward & flip character card. Only movement bonus is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> G/M.'
            ],
            encounter: [
                '<span class="bold">&ldquo;Who Shot First...&rdquo;</span> If Solo ends movement on a planet where Greedo is already revealed, Solo must engage in combat with Greedo (4d). If Solo wins combat, eliminate Greedo & gain 1 fame. If unsuccessful, move Solo to nearest Hutt planet & lose 5k.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;Never tell me the odds!&rdquo;</span> Spend 8k & discard any legal cargo. Then discard cargo deck until <span class="bold">ILLEGAL</span> cargo is found. Take <span class="bold">ILLEGAL</span> Cargo.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Maz Katana or Chewbacca are revealed on this planet, gain as crew <span class="bold">for free</span>. If Chewbacca is taken as crew gain 1 fame as long as he is a crew. They cannot be exchanged once taken as crew. Han Solo will only exchange crew for either Maz Katana or Chewbacca regardless of color.',
                'Discard the top card of the <span class="red">Bounty</span> & <span class="red">Luxury</span> decks. <span class="bold">All AI cards are then shuffled.</span>'
            ]
        },
    ],
    ig88: [
        {
            card: '1',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will only take droids as crew & will take droid crew from any player in his space. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver it</a>. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 2 damage</span>.',
                'If all G/M slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> G/M.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Combat dice reroll text is active.',
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If IG-88 wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;Wanted.&rdquo;</span> Resolve combat against player. If combat is won do the following: If IG-88 has < 8k, then gain 8k. Otherwise spend 8k & gain 2 fame if player has more fame than IG-88. Otherwise gain 1 fame.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card. ',
                'If revealed contacts on this planet are droid(s), gain as crew <span class="bold">for free</span>. Droid(s) can only be exchanged if a new crew is a droid of a higher contact color.',
                'Reveal all <span class="bold">green</span> contact tokens on this planet.'
            ]
        },
        {
            card: '2',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will only take droids as crew & will take droid crew from any player in his space. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver it</a>. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 2 damage</span>.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> a Ship if current ship is a starter ship. Otherwise take a bounty. <span class="characterNotesLinkInContent" characterNotes="ig88">(See rules 4 - 6 in Character Notes)</span>',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Combat dice reroll text is active.',
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If IG-88 wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                '<span class="bold">&ldquo;Assassin Droid&rdquo;</span> Spend 8k to eliminate the highest class contact on this planet & gain 1 fame.',
                'Reveal the facedown contact token of the lowest class on this planet & gain the crew on its card <span class="bold">for free</span>.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card. ',
                'If revealed contacts on this planet are droid(s), gain as crew <span class="bold">for free</span>. Droid(s) can only be exchanged if a new crew is a droid of a higher contact color.'
            ]
        },
        {
            card: '3',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will only take droids as crew & will take droid crew from any player in his space. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver it</a>. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">character suffers 2 damage</span>.',
                'Take a bounty.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Combat dice reroll text is active.',
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If IG-88 wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (= or -) reputation matching a patrol within 3 spaces of IG-88, encounter that patrol (Up to level 3). ',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card. ',
                'If revealed contacts on this planet are droid(s), gain as crew <span class="bold">for free</span>. Droid(s) can only be exchanged if a new crew is a droid of a higher contact color.',
                'Reveal facedown contact token of <span class="bold">lowest</span> class on this planet.'
            ]
        },
        {
            card: '4',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will only take droids as crew & will take droid crew from any player in his space. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                'Take a bounty.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Combat dice reroll text is active.',
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If IG-88 wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (= or -) reputation matching a patrol within 3 spaces of IG-88, encounter that patrol (Up to level 3). ',
                'If at bounty location, encounter bounty.',
                '<span>Weapon Upgrade.</span> Spend 8k & receive IQA-11 Blaster Rifle from G/M deck. <span class="red">Shuffle G/M deck.</span>',
                'Reveal the facedown contact token of the <span class="bold">lowest</span> class on this planet & gain the crew on its card <span class="bold">for free</span>.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card. ',
                'If revealed contacts on this planet are droid(s), gain as crew <span class="bold">for free</span>. Droid(s) can only be exchanged if a new crew is a droid of a higher contact color.',
                'Reveal facedown contact token of <span class="bold">lowest</span> class on this planet.'
            ]
        },
        {
            card: '5',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will only take droids as crew & will take droid crew from any player in his space. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver it</a>. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 3 damage</span>.',
                'Take a bounty.',
                'If 2 crew are droids, gain 5k.'
            ],
            encounter: [
                'Combat dice reroll text is active.',
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If IG-88 wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (= or -) reputation matching a patrol within 3 spaces of IG-88, encounter that patrol (Up to level 3). ',
                'If at bounty location, encounter bounty.',
                '<span>Weapon Upgrade.</span> Spend 8k & receive IQA-11 Blaster Rifle from G/M deck. <span class="red">Shuffle G/M deck.</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card. ',
                'If revealed contacts on this planet are droid(s), gain as crew <span class="bold">for free</span>. Droid(s) can only be exchanged if a new crew is a droid of a higher contact color.',
                'Reveal facedown contact token of <span class="bold">lowest</span> class on this planet.'
            ]
        },
        {
            card: '6',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will only take droids as crew & will take droid crew from any player in his space. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver it</a>. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">character suffers 2 damage</span>.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Combat dice reroll text is active.',
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If IG-88 wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                '<span class="bold">&ldquo;Assassin Droid&rdquo;</span> Spend 8k to eliminate the highest class contact on this planet & gain 1 fame.',
                'Reveal the facedown contact token of the <span class="bold">lowest</span> class on this planet & gain the crew on its card <span class="bold">for free</span>.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card. ',
                'If revealed contacts on this planet are droid(s), gain as crew <span class="bold">for free</span>. Droid(s) can only be exchanged if a new crew is a droid of a higher contact color.'
            ]
        },
        {
            card: '7',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will only take droids as crew & will take droid crew from any player in his space. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver it</a>. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">lose 1 reputation w/planet\'s faction</span> (if any).',
                'If all Job slots full, <a class="helpLink helpLink-buying" href="#">buy</a> G/M. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Job.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Combat dice reroll text is active.',
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If IG-88 wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (= or -) reputation matching a patrol within 3 spaces of IG-88, encounter that patrol (Up to level 3). ',
                'If at bounty location, encounter bounty.',
                '<span class="bold">&ldquo;Wanted.&rdquo;</span> Resolve combat against player. If combat is won do the following: If IG-88 has < 8k, then gain 8k. Otherwise spend 8k & gain 2 fame if player has more fame than IG-88. Otherwise gain 1 fame.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card. ',
                'If revealed contacts on this planet are droid(s), gain as crew <span class="bold">for free</span>. Droid(s) can only be exchanged if a new crew is a droid of a higher contact color.',
                'Reveal facedown contact token of <span class="bold">highest</span> class on this planet.'
            ]
        },
        {
            card: '8',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will only take droids as crew & will take droid crew from any player in his space. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> G/M.',
                'If 2 crew are droids, gain 5k.'
            ],
            encounter: [
                'Combat dice reroll text is active.',
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If IG-88 wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (= or -) reputation matching a patrol within 3 spaces of IG-88, encounter that patrol (Up to level 3). ',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;Assassin Droid&rdquo;</span> Spend 8k to eliminate the highest class contact on this planet & gain 1 fame.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card. ',
                'If revealed contacts on this planet are droid(s), gain as crew <span class="bold">for free</span>. Droid(s) can only be exchanged if a new crew is a droid of a higher contact color.',
                'Reveal facedown contact token of <span class="bold">highest</span> class on this planet.'
            ]
        },
        {
            card: '9',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will only take droids as crew & will take droid crew from any player in his space. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> a Ship. If current ship is <span class="bold">Aggressor Assault Class Fighter</span>, upgrade to <span class="bold">IG-2000.</span> <span class="characterNotesLinkInContent" characterNotes="ig88">(See rules 4 - 6 in Character Notes)</span>',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Combat dice reroll text is active.',
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If IG-88 wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                'Gain 1 reputation w/this planet\'s faction (if any).'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card. ',
                'If revealed contacts on this planet are droid(s), gain as crew <span class="bold">for free</span>. Droid(s) can only be exchanged if a new crew is a droid of a higher contact color.',
                'If ship is <span class="bold">IG-2000</span>, gain 1 fame. (1 time only)'
            ]
        },
        {
            card: '10',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest bounty. If no bounty, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will only take droids as crew & will take droid crew from any player in his space. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                'Take a bounty.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Combat dice reroll text is active.',
                '<span class="bold">&ldquo;Captured.&rdquo;</span> If a revealed contact on this planet is Chewbacca (6d), engage in combat. If IG-88 wins combat, Chewbacca is captured. Deliver to Ring of Kafrene for 2 Fame.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;Assassin Droid&rdquo;</span> Spend 8k to eliminate the highest class contact on this planet & gain 1 fame.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card. ',
                'If revealed contacts on this planet are droid(s), gain as crew <span class="bold">for free</span>. Droid(s) can only be exchanged if a new crew is a droid of a higher contact color.',
                'Discard the top card of the <span class="red">Bounty</span> & <span class="red">G/M</span> decks. <span class="bold">All AI cards are then shuffled.</span>'
            ]
        },
    ],
    jynErso: [
        {
            card: '1',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If on a non-rebel planet, place 1 damage token on planet. (Max 1 tokens per planet)',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 2 damage.</span>',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Job. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                '<span class="bold">&ldquo;Rebellions Are Built On Hope.&rdquo;</span> Spend 8k & remove 2 damage tokens from any combination of planets to gain 1 fame.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it</a>.',
                'Gain 1 reputation w/this planet\'s faction (if any).'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Saw Gerrera or K-2S0 are revealed on this planet, gain as crew <span class="bold">for free</span>. If either is taken as crew gain a max of 1 fame as long as either are crew. They cannot be exchanged once taken as crew. Jyn Erso will aways exchange any crew for either Saw Gerrera or K-2S0 regardless of color. Jyn Erso will only exchange a current crew for any of the following [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera] unless they are already crew.',
                '<span class="bold">&ldquo;Rebel Alliance.&rdquo;</span> As long as all ship crew spots are filled with any of the following crew, Jyn Erso gains a max of 1 fame. [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera]',
                'Place a damage token on an imperial planets if it has no damage token.'
            ]
        },
        {
            card: '2',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If on a non-rebel planet, place 1 damage token on planet. (Max 1 tokens per planet)',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 2 damage.</span>',
                'Buy a Ship if current ship is a starter ship. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. (See rules 4-6)',
                'If (-) reputation matching a patrol within 3 spaces, move that patrol 3 spaces towards your ship.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it</a>.',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Saw Gerrera or K-2S0 are revealed on this planet, gain as crew <span class="bold">for free</span>. If either is taken as crew gain a max of 1 fame as long as either are crew. They cannot be exchanged once taken as crew. Jyn Erso will aways exchange any crew for either Saw Gerrera or K-2S0 regardless of color. Jyn Erso will only exchange a current crew for any of the following [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera] unless they are already crew.',
                '<span class="bold">&ldquo;Rebel Alliance.&rdquo;</span> As long as all ship crew spots are filled with any of the following crew, Jyn Erso gains a max of 1 fame. [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera]',
                'Place a damage token on an imperial planets if it has no damage token.'
            ]
        },
        {
            card: '3',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal. If patrol in path is rebel, ignore reputation & pass through the patrol.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If on a non-rebel planet, place 1 damage token on planet. (Max 1 tokens per planet)',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">character suffers 2 damage.</span>',
                'If all job slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Job.',
                'If (-) reputation matching a patrol within 3 spaces, move that patrol 3 spaces towards your ship.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                '<span class="bold">&ldquo;They\'ve no idea we\'re coming.&rdquo;</span> Spend 8k & receive Job-Rebel Favor from Job deck. <span class="red">Shuffle Job deck.</span> Increase rebel reputation to (+).',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Saw Gerrera or K-2S0 are revealed on this planet, gain as crew <span class="bold">for free</span>. If either is taken as crew gain a max of 1 fame as long as either are crew. They cannot be exchanged once taken as crew. Jyn Erso will aways exchange any crew for either Saw Gerrera or K-2S0 regardless of color. Jyn Erso will only exchange a current crew for any of the following [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera] unless they are already crew.',
                '<span class="bold">&ldquo;Rebel Alliance.&rdquo;</span> As long as all ship crew spots are filled with any of the following crew, Jyn Erso gains a max of 1 fame. [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera]',
                'Reveal all <span class="bold">green</span> & <span class="bold">yellow</span> contacts on this planet. '
            ]
        },
        {
            card: '4',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If on a non-rebel planet, place 1 damage token on planet. (Max 1 tokens per planet)',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it</a>.',
                'Reveal the facedown contact token of the <span class="bold">lowest</span> class on this planet & gain the crew on its card <span class="bold">for free</span>.',
                '<span class="bold">&ldquo;Rebellions Are Built On Hope.&rdquo;</span> Spend 8k & remove 2 damage tokens from any combination of planets to gain 1 fame.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Saw Gerrera or K-2S0 are revealed on this planet, gain as crew <span class="bold">for free</span>. If either is taken as crew gain a max of 1 fame as long as either are crew. They cannot be exchanged once taken as crew. Jyn Erso will aways exchange any crew for either Saw Gerrera or K-2S0 regardless of color. Jyn Erso will only exchange a current crew for any of the following [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera] unless they are already crew.',
                '<span class="bold">&ldquo;Rebel Alliance.&rdquo;</span> As long as all ship crew spots are filled with any of the following crew, Jyn Erso gains a max of 1 fame. [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera]',
                'Reveal all <span class="bold">green</span> & <span class="bold">yellow</span> contacts on this planet. '
            ]
        },
        {
            card: '5',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal. If patrol in path is rebel, ignore reputation & pass through the patrol.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If on a non-rebel planet, place 1 damage token on planet. (Max 1 tokens per planet)',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 3 damage.</span>',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                '<span class="bold">&ldquo;Rebellions Are Built On Hope.&rdquo;</span> Spend 8k & remove 2 damage tokens from any combination of planets to gain 1 fame.',
                'Reveal the facedown contact token of the <span class="bold">lowest</span> class on this planet & gain the crew on its card <span class="bold">for free</span>.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Saw Gerrera or K-2S0 are revealed on this planet, gain as crew <span class="bold">for free</span>. If either is taken as crew gain a max of 1 fame as long as either are crew. They cannot be exchanged once taken as crew. Jyn Erso will aways exchange any crew for either Saw Gerrera or K-2S0 regardless of color. Jyn Erso will only exchange a current crew for any of the following [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera] unless they are already crew.',
                '<span class="bold">&ldquo;Rebel Alliance.&rdquo;</span> As long as all ship crew spots are filled with any of the following crew, Jyn Erso gains a max of 1 fame. [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera]'
            ]
        },
        {
            card: '6',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If on a non-rebel planet, place 1 damage token on planet. (Max 1 tokens per planet)',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">character suffers 2 damage.</span>',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job.',
                'If (-) reputation matching a patrol within 3 spaces, move that patrol 3 spaces towards your ship.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                '<span class="bold">&ldquo;Ship Upgrade.&rdquo;</span> Spend 8k & receive Maneuvering Thrusters from G/M deck. <span class="red">Shuffle G/M deck.</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it</a>.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Saw Gerrera or K-2S0 are revealed on this planet, gain as crew <span class="bold">for free</span>. If either is taken as crew gain a max of 1 fame as long as either are crew. They cannot be exchanged once taken as crew. Jyn Erso will aways exchange any crew for either Saw Gerrera or K-2S0 regardless of color. Jyn Erso will only exchange a current crew for any of the following [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera] unless they are already crew.',
                '<span class="bold">&ldquo;Rebel Alliance.&rdquo;</span> As long as all ship crew spots are filled with any of the following crew, Jyn Erso gains a max of 1 fame. [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera]',
                'Place a damage token on an imperial planets if it has no damage token.'
            ]
        },
        {
            card: '7',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If on a non-rebel planet, place 1 damage token on planet. (Max 1 tokens per planet)',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red"> lose 1 reputation w/planet\'s faction</span> (if any).',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> G/M. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo.',
                'If (-) reputation matching a patrol within 3 spaces, move that patrol 3 spaces towards your ship.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it</a>.',
                '<span class="bold">&ldquo;Rebellions Are Built On Hope.&rdquo;</span> Spend 8k & remove 2 damage tokens from any combination of planets to gain 1 fame.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Saw Gerrera or K-2S0 are revealed on this planet, gain as crew <span class="bold">for free</span>. If either is taken as crew gain a max of 1 fame as long as either are crew. They cannot be exchanged once taken as crew. Jyn Erso will aways exchange any crew for either Saw Gerrera or K-2S0 regardless of color. Jyn Erso will only exchange a current crew for any of the following [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera] unless they are already crew.',
                '<span class="bold">&ldquo;Rebel Alliance.&rdquo;</span> As long as all ship crew spots are filled with any of the following crew, Jyn Erso gains a max of 1 fame. [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera]',
                'Place a damage token on an imperial planets if it has no damage token.'
            ]
        },
        {
            card: '8',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal. If patrol in path is rebel, ignore reputation & pass through the patrol.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If on a non-rebel planet, place 1 damage token on planet. (Max 1 tokens per planet)',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver it</a>.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> G/M.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it</a>.',
                '<span class="bold">&ldquo;They\'ve no idea we\'re coming.&rdquo;</span> Spend 8k & receive Job-Rebel Favor from Job deck. <span class="red">Shuffle Job deck.</span> Increase rebel reputation to (+).',
                'Gain 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Saw Gerrera or K-2S0 are revealed on this planet, gain as crew <span class="bold">for free</span>. If either is taken as crew gain a max of 1 fame as long as either are crew. They cannot be exchanged once taken as crew. Jyn Erso will aways exchange any crew for either Saw Gerrera or K-2S0 regardless of color. Jyn Erso will only exchange a current crew for any of the following [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera] unless they are already crew.',
                '<span class="bold">&ldquo;Rebel Alliance.&rdquo;</span> As long as all ship crew spots are filled with any of the following crew, Jyn Erso gains a max of 1 fame. [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera]',
                'Reveal all <span class="bold">green</span> & <span class="bold">yellow</span> contacts on this planet.'
            ]
        },
        {
            card: '9',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If on a non-rebel planet, place 1 damage token on planet. (Max 1 tokens per planet)',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver it</a>.',
                'Buy a Ship. If Current ship is <span class="bold">HWK-290 Freighter</span>, upgrade to <span class="bold">Moldy Crow</span>. <span class="characterNotesLinkInContent" characterNotes="jynErso">(See Rules 4 - 6 in Character Notes)</span>',
                'If (-) reputation matching a patrol within 3 spaces, move that patrol 3 spaces towards your ship.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it</a>.',
                'Reveal the facedown contact token of the <span class="bold">lowest</span> class on this planet & gain the crew on its card <span class="bold">for free</span>.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Saw Gerrera or K-2S0 are revealed on this planet, gain as crew <span class="bold">for free</span>. If either is taken as crew gain a max of 1 fame as long as either are crew. They cannot be exchanged once taken as crew. Jyn Erso will aways exchange any crew for either Saw Gerrera or K-2S0 regardless of color. Jyn Erso will only exchange a current crew for any of the following [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera] unless they are already crew.',
                '<span class="bold">&ldquo;Rebel Alliance.&rdquo;</span> As long as all ship crew spots are filled with any of the following crew, Jyn Erso gains a max of 1 fame. [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera]',
                'If ship is <span class="bold">Moldy Crow</span>, gain 1 fame. (1 time only)'
            ]
        },
        {
            card: '10',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward & flip character card. Only combat dice reroll text is active.',
                'If on a non-rebel planet, place 1 damage token on planet. (Max 1 tokens per planet)',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver it</a>.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> cargo.',
                'If (-) reputation matching a patrol within 3 spaces, move that patrol 3 spaces towards your ship.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                '<span class="bold">&ldquo;Rebellions Are Built On Hope.&rdquo;</span> Spend 8k & remove 2 damage tokens from any combination of planets to gain 1 fame.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it</a>.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Saw Gerrera or K-2S0 are revealed on this planet, gain as crew <span class="bold">for free</span>. If either is taken as crew gain a max of 1 fame as long as either are crew. They cannot be exchanged once taken as crew. Jyn Erso will aways exchange any crew for either Saw Gerrera or K-2S0 regardless of color. Jyn Erso will only exchange a current crew for any of the following [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera] unless they are already crew.',
                '<span class="bold">&ldquo;Rebel Alliance.&rdquo;</span> As long as all ship crew spots are filled with any of the following crew, Jyn Erso gains a max of 1 fame. [W1-LE, BoShek, Chewbacca, Hera Syndulla, K-2S0, Maz Kanata, Saw Gerrera]',
                'Discard the top card of the <span class="red">Bounty</span> & <span class="red">Ship</span> decks. <span class="bold">All AI cards are then shuffled.</span>'
            ]
        },
    ],
    ketsuOnyo: [
        {
            card: '1',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal. If no goal, <a class="helpLink helpLink-moving" href="#">move</a> towards closest ship Level 3 or less.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward & flip character card. Only combat credit text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 2 damage.</span>',
                'If all G/M slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> G/M.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Once Personal Goal is met, combat credit text is active.',
                'If at bounty location, encounter bounty.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;Liberating Lothal.&rdquo;</span> Spend 8k & discard all uncaptured bounties/jobs to gain 1 fame. Move Ketsu to Lothal.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or no affiliation, gain as crew <span class="bold">for free</span>. These crew can only be exchanged if a new crew offers a higher combat and/or defense value.'
            ]
        },
        {
            card: '2',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal. If no goal, <a class="helpLink helpLink-moving" href="#">move</a> towards closest ship Level 3 or less.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward & flip character card. Only combat credit text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 2 damage.</span>',
                'Buy a Ship if current ship is a starter ship. Otherwise take a bounty. <span class="characterNotesLinkInContent" characterNotes="ketsuOnyo">(See Rules 4 - 6 in Character Notes)</span>',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Once Personal Goal is met, combat credit text is active.',
                'If at bounty location, encounter bounty.',
                'Encounter a patrol within 3 spaces of Ketsu. (Up to Level 3)',
                '<span class="bold">Ship Upgrade.</span> Spend 8k & receive Targeting Computer from G/M deck. <span class="red">Shuffle G/M deck.</span>',
                'Reveal the facedown contact token of the <span class="bold">lowest</span> class on this planet & gain the crew on its card <span class="bold">for free</span>.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or no affiliation, gain as crew <span class="bold">for free</span>. These crew can only be exchanged if a new crew offers a higher combat and/or defense value.'
            ]
        },
        {
            card: '3',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal. If no goal, <a class="helpLink helpLink-moving" href="#">move</a> towards closest ship Level 3 or less.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward & flip character card. Only combat credit text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">character suffers 2 damage.</span>',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Once Personal Goal is met, combat credit text is active.',
                'If at bounty location, encounter bounty.',
                'Encounter a patrol within 3 spaces of Ketsu. (Up to Level 3)',
                '<span class="bold">&ldquo;Wanted.&rdquo;</span> Resolve combat against player. If combat is won do the following: If Ketsu has < 8k, then gain 8k. Otherwise spend 8k & gain 2 fame if player has more fame than Ketsu. Otherwise gain 1 fame.',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or no affiliation, gain as crew <span class="bold">for free</span>. These crew can only be exchanged if a new crew offers a higher combat and/or defense value.',
                'Reveal facedown contact token of <span class="bold">lowest</span> class contact on this planet.'
            ]
        },
        {
            card: '4',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal. If no goal, <a class="helpLink helpLink-moving" href="#">move</a> towards closest ship Level 3 or less.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward & flip character card. Only combat credit text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                'Take a bounty.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Once Personal Goal is met, combat credit text is active.',
                'If at bounty location, encounter bounty.',
                'Encounter a patrol within 3 spaces of Ketsu. (Up to Level 3)',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;Wanted.&rdquo;</span> Resolve combat against player. If combat is won do the following: If Ketsu has < 8k, then gain 8k. Otherwise spend 8k & gain 2 fame if player has more fame than Ketsu. Otherwise gain 1 fame.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or no affiliation, gain as crew <span class="bold">for free</span>. These crew can only be exchanged if a new crew offers a higher combat and/or defense value.',
                'Reveal facedown contact token of <span class="bold">lowest</span> class contact on this planet.'
            ]
        },
        {
            card: '5',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal. If no goal, <a class="helpLink helpLink-moving" href="#">move</a> towards closest ship Level 3 or less.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward & flip character card. Only combat credit text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 3 damage.</span>',
                'Take a bounty.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Once Personal Goal is met, combat credit text is active.',
                'If at bounty location, encounter bounty.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                '<span class="bold">&ldquo;Second Chance.&rdquo;</span> Spend 8k & discard all uncaptured bounties/jobs to gain 1 fame. Move Ketsu to Ring of Kafrene.',
                'Reveal the facedown contact token of the <span class="bold">lowest</span> class on this planet & gain the crew on its card <span class="bold">for free</span>.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or no affiliation, gain as crew <span class="bold">for free</span>. These crew can only be exchanged if a new crew offers a higher combat and/or defense value.'
            ]
        },
        {
            card: '6',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal. If no goal, <a class="helpLink helpLink-moving" href="#">move</a> towards closest ship Level 3 or less.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward & flip character card. Only combat credit text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">character suffers 2 damage.</span>',
                'Take a bounty.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Once Personal Goal is met, combat credit text is active.',
                'If at bounty location, encounter bounty.',
                'Encounter a patrol within 3 spaces of Ketsu. (Up to Level 3)',
                '<span class="bold">Ship Upgrade.</span> Spend 8k & receive Targeting Computer from G/M deck. <span class="red">Shuffle G/M deck.</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or no affiliation, gain as crew <span class="bold">for free</span>. These crew can only be exchanged if a new crew offers a higher combat and/or defense value.',
                'Reveal facedown contact token of <span class="bold">highest</span> class contact on this planet.'
            ]
        },
        {
            card: '7',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal. If no goal, <a class="helpLink helpLink-moving" href="#">move</a> towards closest ship Level 3 or less.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward & flip character card. Only combat credit text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">lose 1 reputation w/planet\'s faction</span> (if any).',
                'If all Job slots full, <a class="helpLink helpLink-buying" href="#">buy</a> G/M. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Job. ',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Once Personal Goal is met, combat credit text is active.',
                'If at bounty location, encounter bounty.',
                'Encounter a patrol within 3 spaces of Ketsu. (Up to Level 3)',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;Wanted.&rdquo;</span> Resolve combat against player. If combat is won do the following: If Ketsu has < 8k, then gain 8k. Otherwise spend 8k & gain 2 fame if player has more fame than Ketsu. Otherwise gain 1 fame.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or no affiliation, gain as crew <span class="bold">for free</span>. These crew can only be exchanged if a new crew offers a higher combat and/or defense value.',
                'Reveal facedown contact token of <span class="bold">highest</span> class contact on this planet.'
            ]
        },
        {
            card: '8',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal. If no goal, <a class="helpLink helpLink-moving" href="#">move</a> towards closest ship Level 3 or less.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward & flip character card. Only combat credit text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> G/M.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Once Personal Goal is met, combat credit text is active.',
                'If at bounty location, encounter bounty.',
                'Encounter a patrol within 3 spaces of Ketsu. (Up to Level 3)',
                '<span class="bold">&ldquo;Liberating Lothal.&rdquo;</span> Spend 8k & discard all uncaptured bounties/jobs to gain 1 fame. Move Ketsu to Lothal.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or no affiliation, gain as crew <span class="bold">for free</span>. These crew can only be exchanged if a new crew offers a higher combat and/or defense value.'
            ]
        },
        {
            card: '9',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal. If no goal, <a class="helpLink helpLink-moving" href="#">move</a> towards closest ship Level 3 or less.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, ga_in reward & flip character card. Only combat credit text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                'Buy a Ship. If current ship is <span class="bold">Lancer-Class Pursuit Craft</span>, upgrade to <span class="bold">Shadow Caster</span>. <span class="characterNotesLinkInContent" characterNotes="ketsuOnyo">(See Rules 4 - 6 in Character Notes)</span>',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Once Personal Goal is met, combat credit text is active.',
                'If at bounty location, encounter bounty.',
                'Encounter a patrol within 3 spaces of Ketsu. (Up to Level 3)',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                'Gain 1 reputation w/this planet\'s faction (if any).'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or no affiliation, gain as crew <span class="bold">for free</span>. These crew can only be exchanged if a new crew offers a higher combat and/or defense value.',
                'If ship is <span class="bold">Shadow Caster</span>, gain 1 fame. (1 time only)'
            ]
        },
        {
            card: '10',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest goal. If no goal, <a class="helpLink helpLink-moving" href="#">move</a> towards closest ship Level 3 or less.',
                '***When pursuing a bounty, if location is not revealed, head towards closest planet with matching bounty contact color. Reveal all matching contact colors of bounties on the planet that movement ends at, until bounty is found.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward & flip character card. Only combat credit text is active.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                'Take a bounty.',
                'If at bounty destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Once Personal Goal is met, combat credit text is active.',
                'If at bounty location, encounter bounty.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">Second Chance.</span> Spend 8k & discard all uncaptured bounties/jobs to gain 1 fame. Move Ketsu to Ring of Kafrene.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If revealed contacts on this planet are Syndicate or no affiliation, gain as crew <span class="bold">for free</span>. These crew can only be exchanged if a new crew offers a higher combat and/or defense value.',
                'Discard the top card of the <span class="red">Cargo</span>, <span class="red">G/M</span> & <span class="red">Luxury</span> decks. <span class="bold">All AI cards are then shuffled.</span>'
            ]
        },
    ],
    landoCalrissian: [
        {
            card: '1',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest cargo delivery destination. If no cargo, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***<span class="bold">&ldquo;You might want to buckle up...&rdquo;</span> If Lando Calrissian would end movement on a navpoint, move up to an additional 1 space if it allows Lando to land on a planet.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If personal goal completed, gain reward & flip character card. All text is active as follows - Reroll any 1 blank die; After personal goal is completed, at the start of each turn\'s action step Lando always pays 1k to gain 1 reputation with the current planet faction (if any).',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 2 damage. Receive no credits for delivery.</span> Instead gain additional 1 fame.',
                'If all cargo slots full, buy Job. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo.'
            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                'Gain 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Chewbacca or a droid are revealed on this planet, gain as crew <span class="bold">for free</span>. Chewbacca & droids cannot be exchanged once taken as crew. Lando will only exchange crew for either Chewbacca or a droid regardless of color.',
                'Reveal all <span class="bold">green</span> & <span class="bold">yellow</span> contacts on this planet.'
            ]
        },
        {
            card: '2',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest cargo delivery destination. If no cargo, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***<span class="bold">&ldquo;You might want to buckle up...&rdquo;</span> If Lando Calrissian would end movement on a navpoint, move up to an additional 1 space if it allows Lando to land on a planet.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward & flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 2 damage.</span>',
                'If all job slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Job.',

            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                'Reveal the facedown contact token of the <span class="bold">lowest</span> class on this planet & gain the crew on its card <span class="bold">for free</span>.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Chewbacca or a droid are revealed on this planet, gain as crew <span class="bold">for free</span>. Chewbacca & droids cannot be exchanged once taken as crew. Lando will only exchange crew for either Chewbacca or a droid regardless of color.'
            ]
        },
        {
            card: '3',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest cargo delivery destination. If no cargo, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***<span class="bold">&ldquo;You might want to buckle up...&rdquo;</span> If Lando Calrissian would end movement on a navpoint, move up to an additional 1 space if it allows Lando to land on a planet.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward & flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">character suffers 2 damage.</span>',
                'Buy a Ship if current ship is a starter ship. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. <span class="characterNotesLinkInContent" characterNotes="landoCalrissian">(See Rules 5 - 7 in Character Notes)</span>',
                'Take a 2nd market action. Buy a Cargo if slot is available.'
            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;This deal is getting worse all the time.&rdquo;</span> Spend 8k & discard all cargo to gain 1 fame. Change Rebel reputation to (-)'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Chewbacca or a droid are revealed on this planet, gain as crew <span class="bold">for free</span>. Chewbacca & droids cannot be exchanged once taken as crew. Lando will only exchange crew for either Chewbacca or a droid regardless of color.'
            ]
        },
        {
            card: '4',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest cargo delivery destination. If no cargo, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***<span class="bold">&ldquo;You might want to buckle up...&rdquo;</span> If Lando Calrissian would end movement on a navpoint, move up to an additional 1 space if it allows Lando to land on a planet.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward & flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                'Discard cargo deck until <span class="bold">ILLEGAL</span> cargo is found. Buy <span class="bold">ILLEGAL</span> Cargo.',
                'Take a 2nd market action. Buy a Cargo if slot is available.'
            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'Reveal the facedown contact token of the <span class="bold">lowest</span> class on this planet & gain the crew on its card <span class="bold">for free</span>.',
                'Gain 1 reputation w/the nearest patrol\'s faction.',
                '<span class="bold">&ldquo;Tamtel Skreej&rdquo;</span> Spend 8k, & receive Job-Syndicate Favor from Job deck. <span class="red">Shuffle Job deck.</span>'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Chewbacca or a droid are revealed on this planet, gain as crew <span class="bold">for free</span>. Chewbacca & droids cannot be exchanged once taken as crew. Lando will only exchange crew for either Chewbacca or a droid regardless of color.'
            ]
        },
        {
            card: '5',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest cargo delivery destination. If no cargo, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***<span class="bold">&ldquo;You might want to buckle up...&rdquo;</span> If Lando Calrissian would end movement on a navpoint, move up to an additional 1 space if it allows Lando to land on a planet.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward & flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 3 damage.</span>',
                'Discard cargo deck until <span class="bold">ILLEGAL</span> cargo is found. Buy <span class="bold">ILLEGAL</span> Cargo.'

            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                'Gain 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Chewbacca or a droid are revealed on this planet, gain as crew <span class="bold">for free</span>. Chewbacca & droids cannot be exchanged once taken as crew. Lando will only exchange crew for either Chewbacca or a droid regardless of color.'
            ]
        },
        {
            card: '6',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest cargo delivery destination. If no cargo, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***<span class="bold">&ldquo;You might want to buckle up...&rdquo;</span> If Lando Calrissian would end movement on a navpoint, move up to an additional 1 space if it allows Lando to land on a planet.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward & flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">character suffers 2 damage.</span>',
                '<span class="bold">&ldquo;Sabacc Skills!&rdquo;</span> Receive Luxury item <span class="bold">for free</span>.'

            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;This deal is getting worse all the time.&rdquo;</span> Spend 8k & discard all cargo to gain 1 fame. Change Rebel reputation to (-)'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Chewbacca or a droid are revealed on this planet, gain as crew <span class="bold">for free</span>. Chewbacca & droids cannot be exchanged once taken as crew. Lando will only exchange crew for either Chewbacca or a droid regardless of color.'
            ]
        },
        {
            card: '7',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest cargo delivery destination. If no cargo, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***<span class="bold">&ldquo;You might want to buckle up...&rdquo;</span> If Lando Calrissian would end movement on a navpoint, move up to an additional 1 space if it allows Lando to land on a planet.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward & flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">lose 1 reputation w/planet\'s faction</span> (if any).',
                'If all G/M slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> G/M.'
            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;This deal is getting worse all the time.&rdquo;</span> Spend 8k & discard all cargo to gain 1 fame. Change Rebel reputation to (-)'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Chewbacca or a droid are revealed on this planet, gain as crew <span class="bold">for free</span>. Chewbacca & droids cannot be exchanged once taken as crew. Lando will only exchange crew for either Chewbacca or a droid regardless of color.',
                'Reveal all <span class="bold">green</span> & <span class="bold">yellow</span> contacts on this planet.'
            ]
        },
        {
            card: '8',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest cargo delivery destination. If no cargo, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***<span class="bold">&ldquo;You might want to buckle up...&rdquo;</span> If Lando Calrissian would end movement on a navpoint, move up to an additional 1 space if it allows Lando to land on a planet.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward & flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, <span class="red">ship suffers 2 damage. Receive no credits for delivery.</span> Instead gain additional 1 fame.',
                'Discard cargo deck until Illegal cargo is found. Buy Illegal Cargo.',
                'Reveal the facedown contact token of the <span>lowest</span> class on this planet.'
            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                'Gain 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Chewbacca or a droid are revealed on this planet, gain as crew <span class="bold">for free</span>. Chewbacca & droids cannot be exchanged once taken as crew. Lando will only exchange crew for either Chewbacca or a droid regardless of color.',
                'Reveal all <span class="bold">green</span> & <span class="bold">yellow</span> contacts on this planet.'
            ]
        },
        {
            card: '9',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest cargo delivery destination. If no cargo, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***<span class="bold">&ldquo;You might want to buckle up...&rdquo;</span> If Lando Calrissian would end movement on a navpoint, move up to an additional 1 space if it allows Lando to land on a planet.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward & flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> a Ship. If Current ship is <span class="bold">GX-1 Short Hauler</span>, upgrade to <span class="bold">YT-1300</span>. <span class="characterNotesLinkInContent" characterNotes="landoCalrissian">(See Rules 5 - 7 in Character Notes)</span>'
            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                'Gain 4k. Then lose 1 reputation w/this planet\'s faction (if any).'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Chewbacca or a droid are revealed on this planet, gain as crew <span class="bold">for free</span>. Chewbacca & droids cannot be exchanged once taken as crew. Lando will only exchange crew for either Chewbacca or a droid regardless of color.',
                'If ship is <span class="bold">YT-1300</span>, gain 1 fame. (1 time only)'
            ]
        },
        {
            card: '10',
            planning: [
                '<span class="underline italic">If defeated</span>, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move</a> toward closest cargo delivery destination. If no cargo, <a class="helpLink helpLink-moving" href="#">move</a> towards closest goal.',
                '***<span class="bold">&ldquo;You might want to buckle up...&rdquo;</span> If Lando Calrissian would end movement on a navpoint, move up to an additional 1 space if it allows Lando to land on a planet.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward & flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination, <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> G/M.'

            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete it.</a>',
                '<span class="bold">&ldquo;This deal is getting worse all the time.&rdquo;</span> Spend 8k & discard all cargo to gain 1 fame. Change Rebel reputation to (-)'
            ],
            special: [
                'Check Ship Goal. If applicable, complete it & gain reward. Then flip ship card.',
                'If Chewbacca or a droid are revealed on this planet, gain as crew <span class="bold">for free</span>. Chewbacca & droids cannot be exchanged once taken as crew. Lando will only exchange crew for either Chewbacca or a droid regardless of color.',
                'Discard the top card of <span class="red">all market decks</span>. <span class="bold">All AI cards are then shuffled.</span>'
            ]
        },
    ],

}

var characterNotes = {
    bobaFett: [
        'Boba Fett can attain personal goal.',
        'Use Boba Fett starting card. Place designated contact token face up on first location found in market decks that matches contact color. This will determine location of first bounty encounter.',
        'Boba Fett starting ship is G-1A Starfighter. Boba Fett can attain a ship goal.',
        'Boba Fett will pay all available credits up to ship cost. If full cost of ship cannot payed = Pay all available credits & take ship, place Boba Fett in defeated position & end turn.',
        'If Boba Fett purchases used ship, take <span class="bold">Firespray</span>. (See Rule 4)',
        'If Boba Fett has purchased a ship, Boba Fett will only purchase another ship if it is the Firespray.',
        'Boba Fett must win a combat to gain a bounty from a bounty encounter. If Boba Fett loses combat 2 turns in a row, the bounty is discarded to the bottom of the bounty deck.',
        'Boba Fett always eliminates the bounty if the fame is the same as a capture.',
        '<span class="bold">Bounty Exception:</span> Boba Fett will never eliminate Chewbacca as the highest class contact on a planet or through a standard bounty comletetion. Chewbacca must always be captured & delivered.'
    ],
    bossk: [
        'Bossk can attain personal goal. Bossk will always exchange G/M for a G/M of a higher value until personal goal is met.',
        'Use Bossk starting card. Place designated contact token face up on first location found in market decks that matches contact color. This will determine location of first bounty encounter.',
        'Bossk starting ship is G-1A Starfighter. Bossk can attain ship goal.',
        'Bossk will pay all available credits up to ship cost. If full cost of ship cannot payed = Pay all available credits & take ship, place Bossk in defeated position & end turn.',
        'If Bossk purchases used ship, take <span class="bold">YV-666</span>. (See Rule 4)',
        'If Bossk has purchased a ship, Bossk will only purchase another ship if it is the YV-666.',
        'Bossk must win a combat to gain a bounty from a bounty encounter. If Bossk loses combat 2 turns in a row, the bounty is discarded to the bottom of the bounty deck.',
        'Bossk always eliminates a bounty if the reward is 1 fame.',
        '<span class="bold">Bounty Exception:</span> Bossk must always capture & deliver any bounty with a fame reward of 2 except for the following: Bossk always eliminates any Wookie bounty.'
    ],
    doctorAphra: [
        'Use Doctor Aphra starting card. Doctor Aphra can attain personal goal.',
        'Doctor Aphra starting ship is G9 Rigger. Doctor Aphra can attain a ship goal.',
        'Doctor Aphra does not purchase bounties.',
        'Doctor Aphra will pay all available credits up to ship cost. If full cost of ship cannot payed = Pay all available credits & take ship, place Doctor Aphra in defeated position & end turn.',
        'If Doctor Aphra purchases used ship, take <span class="bold">Heavy-Duty Lifter</span>. (See Rule 4)',
        'If Doctor Aphra has purchased a ship, Doctor Aphra will only purchase another ship if it is the Heavy-Duty Lifter.'
    ],
    hanSolo: [
        'Use Han Solo starting card. Han Solo can attain personal goal.',
        'Han Solo starting ship is G9 Rigger. Han Solo can attain a ship goal.',
        'Han Solo does not take bounties.',
        'Han Solo will pay all available credits up to ship cost. If full cost of ship cannot payed = Pay all available credits & take ship, place Han Solo in defeated position & end turn.',
        'If Han Solo purchases used ship, take <span class="bold">YT-1300</span>. (See Rule 4)',
        'If Han Solo has purchased a ship, Han Solo will only purchase another ship if it is the YT-1300.'
    ],
    ig88: [
        'IG-88 can attain personal goal.',
        'Use IG-88 starting card. Place designated contact token face up on first location found in market decks that matches contact color. This will determine location of first bounty encounter.',
        'IG-88 starting ship is G-1A Starfighter. IG-88 can attain a ship goal.',
        'IG-88 will pay all available credits up to ship cost. If full cost of ship cannot payed = Pay all available credits & take ship, place IG-88 in defeated position & end turn.',
        'If IG-88 purchases used ship, take <span class="bold">Aggressor Assault Class Fighter</span>. (See Rule 4)',
        'If IG-88 has purchased a ship, IG-88 will only purchase another ship if it is the Aggressor Assault Class Fighter.',
        'IG-88 must win a combat to capture a bounty from a bounty encounter.If IG-88 loses combat 2 turns in a row, the bounty is discarded to the bottom of the bounty deck.',
        'IG-88 always eliminates the bounty.',
        '<span class="bold">Bounty Exception</span>: IG-88 will never eliminate Chewbacca as the highest class contact on a planet or through a standard bounty completetion. Chewbacca must always be captured & delivered.'
    ],
    jynErso: [
        'Use Jyn Erso Solo starting card. Jyn Erso can attain personal goal.',
        'Jyn Erso starting ship is G9 Rigger. Jyn Erso can attain a ship goal.',
        'Jyn Erso does not take bounties.',
        'Jyn Erso will pay all available credits up to ship cost. If full cost of ship cannot payed = Pay all available credits & take ship, place Jyn Erso in defeated position & end turn.',
        'If Jyn Erso purchases used ship, take <span class="bold">HWK-290 Freighter.</span> (See Rule 4)',
        'If Jyn Erso has purchased a ship, Jyn Erso will only purchase another ship if it is the HWK-290 Freighter.'
    ],
    ketsuOnyo: [
        'Ketsu Onyo can attain personal goal.',
        'Use Ketsu Onyo starting card. Place designated contact token face up on first location found in market decks that matches contact color. This will determine location of first bounty encounter.',
        'Ketsu Onyo starting ship is G-1A Starfighter. Ketsu Onyo can attain a ship goal.',
        'Ketsu Onyo will pay all available credits up to ship cost. If full cost of ship cannot payed = Pay all available credits & take ship, place Ketsu Onyo in defeated position & end turn.',
        'If Ketsu Onyo purchases used ship, take <span class="bold">Lancer-Class Pursuit Craft.</span> (See Rule 4)',
        'If Ketsu Onyo has purchased a ship, Ketsu Onyo will only purchase another ship if it is the Lancer-Class Pursuit Craft.',
        'Ketsu Onyo must win a combat to capture a bounty from a bounty encounter. If Ketsu Onyo loses a combat 2 turns in a row, the bounty is discarded to the bottom of the bounty deck.',
        'Ketsu Onyo always eliminates a bounty if the reward is 1 fame.',
        '<span class="bold">Bounty Exception:</span> Ketsy Onyo must always capture & deliver any bounty with a fame reward of 2.'
    ],
    landoCalrissian: [
        'Use Lando Calrissian starting card. Lando Calrissian can attain personal goal.',
        'Lando Calrissian can attain a ship goal. Lando Calrissian starting ship is G9 Rigger.',
        'Lando Calrissian starts with (+) reputation of staeting planet\'s faction.',
        'Lando Calrissian does not take bounties.',
        'Lando Calrissian will pay all available credits up to ship cost. If full cost of ship cannot payed = Pay all available credits & take ship, place Lando Calrissian in defeated position & end turn.',
        'If Lando Calrissian purchases used ship, take GX-1 Short Hauler. (See Rule 5)',
        'If Lando Calrissian has purchased a ship, Lando will only purchase another ship if it is the <span class="bold">GX-1 Short Hauler</span> or <span class="bold">YT-1300</span>. If Lando already has purchased the <span class="bold">GX-1 Short Hauler</span>, Lando will then only purchase the <span class="bold">YT-1300</span>.'
    ]
}

var characterSetup = {
    bobaFett: [
        'Starting ship:<br /><span class="bold">G-1A Starfighter</span>',
        'bounty'
    ],
    bossk: [
        'Starting ship:<br /><span class="bold">G-1A Starfighter</span>',
        'bounty'
    ],
    doctorAphra: [
        'Starting ship:<br /><span class="bold">G9 Rigger</span>'
    ],
    hanSolo: [
        'Starting ship:<br /><span class="bold">G9 Rigger</span>'
    ],
    ig88: [
        'Starting ship:<br /><span class="bold">G-1A Starfighter</span>',
        'bounty'
    ],
    jynErso: [
        'Starting ship:<br /><span class="bold">G9 Rigger</span>'
    ],
    ketsuOnyo: [
        'Starting ship:<br /><span class="bold">G-1A Starfighter</span>',
        'bounty'
    ],
    landoCalrissian: [
        'Starting ship:<br /><span class="bold">G9 Rigger</span>'
    ]
}
