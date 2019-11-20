var cards = {

    bobaFett: [
        {
            card: '1',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Elimination bonus becomes active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 2 damage.',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Job. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'None.'
        },
        {
            card: '2',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Elimination bonus becomes active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 2 damage.',
                'If all job slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Job. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a>.'
            ],
            special: 'If a crew slot is empty, take a bounty from the market.'
        },
        {
            card: '3',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Elimination bonus becomes active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, character suffers 2 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'Spend 8k to gain 1 fame.',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'If a crew slot is empty, take a bounty from the market.'
        },
        {
            card: '4',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Elimination bonus becomes active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Cargo. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Eliminate the highest class contact on this planet and gain 1 fame.'
            ],
            special: 'None.'
        },
        {
            card: '5',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Elimination bonus becomes active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 3 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'Spend 8k to gain 1 fame.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a>.'
            ],
            special: 'If a crew slot is empty, take a bounty from the market.'
        },
        {
            card: '6',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Elimination bonus becomes active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, character suffers 2 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'None.'
        },
        {
            card: '7',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Elimination bonus becomes active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, lose 1 reputation w/planet\'s faction (if any).',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Tech. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'If a crew slot is empty, take a bounty from the market.'
        },
        {
            card: '8',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Elimination bonus becomes active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Tech.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Eliminate the highest class contact on this planet and gain 1 fame.'
            ],
            special: 'None.'
        },
        {
            card: '9',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Elimination bonus becomes active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> a Ship.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'If ship is Slave 1, gain 1 fame.'
        },
        {
            card: '10',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Elimination bonus becomes active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Cargo. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                ' Eliminate the highest class contact on this planet and gain 1 fame.'
            ],
            special: 'Discard the top card of the Ship and Luxury market decks. <span class="bold red">AI deck is automatically shuffled.</span>'
        },
    ],
    bossk: [
        {
            card: '1',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 2 damage.',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Job. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'None.'
        },
        {
            card: '2',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 2 damage.',
                'If all job slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Job. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a>.'
            ],
            special: 'If a crew slots is filled, take a bounty from the market.'
        },
        {
            card: '3',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, character suffers 2 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Tech.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'Spend 8k to gain 1 fame.',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'None.'
        },
        {
            card: '4',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Cargo. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (= or -) reputation matching closest patrol within 3 spaces to Bossk, encounter that patrol. If Bossk succeeds gain additional 4k.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a>.'
            ],
            special: 'None.'
        },
        {
            card: '5',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 3 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'Spend 8k to gain 1 fame.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a>.'
            ],
            special: 'If a crew slots is filled, take a bounty from the market.'
        },
        {
            card: '6',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, character suffers 2 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.',
                'Eliminate the lowest class contact on this planet and gain 2k.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'None.'
        },
        {
            card: '7',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, lose 1 reputation w/planet\'s faction (if any).',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Tech. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'If a crew slots is filled, take a bounty from the market.'
        },
        {
            card: '8',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Tech.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (= or -) reputation matching closest patrol within 4 spaces to Bossk,  encounter that patrol. If Bossk succeeds gain additional 1 fame.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'None.'
        },
        {
            card: '9',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> a Ship.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'If ship is Hounds Tooth, gain 1 fame.'
        },
        {
            card: '10',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Encounter text becomes active. Encounter text will become the first encounter option to accept if applicable.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Cargo. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (= or -) reputation matching closest patrol within 3 spaces to Bossk,  encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'Discard the top card of the Bounty and Tech market decks. <span class="bold red">AI deck is automatically shuffled.</span>'
        },
    ],
    doctorAphra: [
        {
            card: '1',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Planning text becomes active as follows: Market action can be taken when movement ends on a navpoint.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 2 damage.',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Job. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Then place a goal token on card\'s destination.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.',
                'Gain 1 reputation w/this planet\'s faction (if any).'
            ],
            special: 'Reveal a facedown white contact token  on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card if it is a droid.'
        },
        {
            card: '2',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a> If patrol in path is empire, ignore reputation and pass through the patrol.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Planning text becomes active as follows: Market action can be taken when movement ends on a navpoint.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 2 damage.',
                'If all job slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Job. Then place a goal token on card\'s destination.',
                'Take a 2nd market action. <a class="helpLink helpLink-buying" href="#">Buy</a> a Cargo if slot is available. Then place a goal on card\'s destination.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free.'
            ],
            special: 'None.'
        },
        {
            card: '3',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a> If patrol in path is empire, ignore reputation and pass through the patrol.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Planning text becomes active as follows: Market action can be taken when movement ends on a navpoint.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, character suffers 2 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'Spend 8k to gain 1 fame.',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'None.'
        },
        {
            card: '4',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Planning text becomes active as follows: Market action can be taken when movement ends on a navpoint.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Cargo. Then place a goal token on card\'s destination.',
                'Take a 2nd market action. <a class="helpLink helpLink-buying" href="#">Buy</a> a Job if slot is available. Then place a goal on card\'s destination.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'None.'
        },
        {
            card: '5',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Planning text becomes active as follows: Market action can be taken when movement ends on a navpoint.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 3 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.',
                'Take a 2nd market action. <a class="helpLink helpLink-buying" href="#">Buy</a> a Cargo if slot is available. Then place a goal on card\'s destination.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'Spend 8k to gain 1 fame.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free.'
            ],
            special: 'None.'
        },
        {
            card: '6',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a> If patrol in path is empire, ignore reputation and pass through the patrol.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Planning text becomes active as follows: Market action can be taken when movement ends on a navpoint.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, character suffers 2 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.',
                'Take a 2nd market action. <a class="helpLink helpLink-buying" href="#">Buy</a> a Cargo if slot is available. Then place a goal on card\'s destination.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'None.'
        },
        {
            card: '7',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Planning text becomes active as follows: Market action can be taken when movement ends on a navpoint.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, lose 1 reputation w/planet\'s faction (if any).',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Tech. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Then place a goal token on card\'s destination.',
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'Reveal a facedown yellow contact token on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card if it is a droid.'
        },
        {
            card: '8',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Planning text becomes active as follows: Market action can be taken when movement ends on a navpoint.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Tech.',
                'Reveal the facedown contact token of the lowest class on this planet.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.',
                'Gain 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'Discard all non-droid crew members and gain 1 fame.'
        },
        {
            card: '9',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a> If patrol in path is empire, ignore reputation and pass through the patrol.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Planning text becomes active as follows: Market action can be taken when movement ends on a navpoint.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> a Ship.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'Reveal a facedown  contact token  on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card if it is a droid.'
        },
        {
            card: '10',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Planning text becomes active as follows: Market action can be taken when movement ends on a navpoint.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Cargo. Then place a goal token on card\'s destination.',
                'Take a 2nd market action. <a class="helpLink helpLink-buying" href="#">Buy</a> a Job if slot is available. Then place a goal on card\'s destination.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'Discard the top card of the Bounty and Luxury market decks. <span class="bold red">AI deck is automatically shuffled.</span>'
        },
    ],
    hanSolo: [
        {
            card: '1',
            planning: [
                '***+2 Movement bonus is active.',
                'If defeated, recover all damage.',                                
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a> If any patrol in path, ignore reputation and pass through the patrol(s).',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Only movement bonus is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 2 damage.',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Job. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Then place a goal token on card\'s destination.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.',
                'Gain 1 reputation w/this planet\'s faction (if any).'
            ],
            special: 'None.'
        },
        {
            card: '2',
            planning: [
                '***+2 Movement bonus is active.',
                'Recover all damage.',                                
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Only movement bonus is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 2 damage.',
                'If all job slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Job. Then place a goal token on card\'s destination.',
                'Take a 2nd market action. <a class="helpLink helpLink-buying" href="#">Buy</a> a Cargo if slot is available. Then place a goal on card\'s destination.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free.'
            ],
            special: 'None.'
        },
        {
            card: '3',
            planning: [
                '***+2 Movement bonus is active.',
                'If defeated, recover all damage.',                                
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Only movement bonus is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, character suffers 2 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'Spend 8k to gain 1 fame.',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'Reveal all green contacts on this planet. If Greedo, eliminate and gain 1 fame.'
        },
        {
            card: '4',
            planning: [
                '***+2 Movement bonus is active.',
                'If defeated, recover all damage.',                                
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a> If any patrol in path, ignore reputation and pass through the patrol(s).',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Only movement bonus is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Cargo. Then place a goal token on card\'s destination.',
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'Reveal all yellow contacts on this planet. If Kaz, <a class="helpLink helpLink-gainingCrew" href="#">gain crew</a> for free. If Chewbacca, <a class="helpLink helpLink-gainingCrew" href="#">gain crew</a> for free and gain 1 fame.'
        },
        {
            card: '5',
            planning: [
                '***+2 Movement bonus is active.',
                'If defeated, recover all damage.',                                
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Only movement bonus is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 3 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.',
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, discard all cargo and gain 1 fame.',
                'Spend 8k to gain 1 fame.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free.'
            ],
            special: 'None.'
        },
        {
            card: '6',
            planning: [
                '***+2 Movement bonus is active.',
                'Recover all damage.',                                
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Only movement bonus is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, character suffers 2 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.',
                'Take a 2nd market action. <a class="helpLink helpLink-buying" href="#">Buy</a> a Job if slot is available. Then place a goal on card\'s destination.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'Reveal all green contacts on this planet. If Greedo, eliminate and gain 1 fame.'
        },
        {
            card: '7',
            planning: [
                '***+2 Movement bonus is active.',
                'If defeated, recover all damage.',                                
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a> If any patrol in path, ignore reputation and pass through the patrol(s).',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Only movement bonus is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, lose 1 reputation w/planet\'s faction (if any).',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Tech. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Then place a goal token on card\'s destination.',
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'None.'
        },
        {
            card: '8',
            planning: [
                '***+2 Movement bonus is active.',
                'If defeated, recover all damage.',                                
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Only movement bonus is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Tech.',
                'Reveal the facedown contact token of the lowest class on this planet.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.',
                'Gain 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'Reveal all yellow contacts on this planet. If Kaz, <a class="helpLink helpLink-gainingCrew" href="#">gain crew</a> for free. If Chewbacca, <a class="helpLink helpLink-gainingCrew" href="#">gain crew</a> for free and gain 1 fame.'
        },
        {
            card: '9',
            planning: [
                '***+2 Movement bonus is active.',
                'If defeated, recover all damage.',                                
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Only movement bonus is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> a Ship.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'If ship is Millennium Falcon, gain 1 fame.'
        },
        {
            card: '10',
            planning: [
                '***+2 Movement bonus is active.',
                'If defeated, recover all damage.',                                
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a> If any patrol in path, ignore reputation and pass through the patrol(s).',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. If completed, gain reward and flip character card. Only movement bonus is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Cargo. Then place a goal token on card\'s destination.',
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'Discard the top card of the Bounty and Luxury market decks. <span class="bold red">AI deck is automatically shuffled.</span>'
        },
    ],
    ig88: [
        {
            card: '1',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will take a droid crew from any player in his space. If completed, gain reward and flip character card. Only combat dice reroll text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 2 damage.',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Job. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'Reveal the facedown white contact token  on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card if it is a droid.'
        },
        {
            card: '2',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will take a droid crew from any player in his space. If completed, gain reward and flip character card. Only combat dice reroll text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 2 damage.',
                'If all job slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Job. Then place a goal token on card\'s destination.',
                'If 1 crew is a droid, gain 2k.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free.'
            ],
            special: 'None.'
        },
        {
            card: '3',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will take a droid crew from any player in his space. If completed, gain reward and flip character card. Only combat dice reroll text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, character suffers 2 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Bounty. Then place a goal token on card\'s bounty destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'Spend 8k to gain 1 fame.',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'Reveal the facedown green contact token  on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card  if it is a droid.'
        },
        {
            card: '4',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will take a droid crew from any player in his space. If completed, gain reward and flip character card. Only combat dice reroll text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Bounty. Then place a goal token on card\'s bounty destination.',
                'If 1 crew is a droid, gain 2k.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free.'
            ],
            special: 'None.'
        },
        {
            card: '5',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will take a droid crew from any player in his space. If completed, gain reward and flip character card. Only combat dice reroll text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 3 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.',
                'If 2 crew are droids, gain 5k.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'Spend 8k to gain 1 fame.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free.'
            ],
            special: 'None.'
        },
        {
            card: '6',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will take a droid crew from any player in his space. If completed, gain reward and flip character card. Only combat dice reroll text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, character suffers 2 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'Discard all non-droid crew members. Gain 5k for each discarded crew member.'
        },
        {
            card: '7',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will take a droid crew from any player in his space. If completed, gain reward and flip character card. Only combat dice reroll text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, lose 1 reputation w/planet\'s faction (if any).',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Tech. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'Reveal the facedown yellow contact token  on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card if it is a droid.'
        },
        {
            card: '8',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will take a droid crew from any player in his space. If completed, gain reward and flip character card. Only combat dice reroll text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Tech.',
                'Reveal the facedown contact token of the lowest class on this planet.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'Reveal the facedown green contact token  on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card if it is a droid.'
        },
        {
            card: '9',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will take a droid crew from any player in his space. If completed, gain reward and flip character card. Only combat dice reroll text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> a Ship.',
                'Take a 2nd market action. <a class="helpLink helpLink-buying" href="#">Buy</a> a Job if slot is available. Then place a goal on card\'s destination.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'If ship is IG-2000, gain 1 fame.'
        },
        {
            card: '10',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Until completed, IG-88 will take a droid crew from any player in his space. If completed, gain reward and flip character card. Only combat dice reroll text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Bounty. Then place a goal token on card\'s bounty destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at bounty location, encounter bounty.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'Discard the top card of the Bounty and Tech market decks. <span class="bold red">AI deck is automatically shuffled.</span>'
        },
    ],
    jynErso: [
        {
            card: '1',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward and flip character card. Only combat text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 2 damage.',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Job. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Then place a goal token on card\'s destination.',
                'If on an imperial planet, place 1 damage token.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.',
                'Gain 1 reputation w/this planet\'s faction (if any).'
            ],
            special: 'None.'
        },
        {
            card: '2',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward and flip character card. Only combat text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 2 damage.',
                'If all job slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Job. Then place a goal token on card\'s destination.',
                'If on an imperial planet, place 1 damage token.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free.'
            ],
            special: 'Reveal all yellow contacts on this planet. If K-2S0, gain crew and gain 1 fame.'
        },
        {
            card: '3',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a> If patrol in path is rebel, ignore reputation and pass through the patrol.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward and flip character card. Only combat text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, character suffers 2 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.',
                'If on an imperial planet, place 1 damage token.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'Spend 8k to gain 1 fame.',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'Reveal the facedown yellow contact token  on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free if it is a droid.'
        },
        {
            card: '4',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward and flip character card. Only combat text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Cargo. Then place a goal token on card\'s destination.',
                'If on an imperial planet, place 1 damage token.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'None.'
        },
        {
            card: '5',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a> If patrol in path is rebel, ignore reputation and pass through the patrol.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward and flip character card. Only combat text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 3 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.',
                'If on an imperial planet, place 1 damage token.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'Spend 8k to gain 1 fame.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free.'
            ],
            special: 'None.'
        },
        {
            card: '6',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward and flip character card. Only combat text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, character suffers 2 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.',
                'If on an imperial planet, place 1 damage token.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'If damage tokens are on 2 imperial planets, gain 1 fame.'
        },
        {
            card: '7',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward and flip character card. Only combat text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, lose 1 reputation w/planet\'s faction (if any).',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Tech. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Then place a goal token on card\'s destination.',
                'If on an imperial planet, place 1 damage token.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, move that patrol 3 spaces towards your ship.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'None.'
        },
        {
            card: '8',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward and flip character card. Only combat text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Tech.',
                'Reveal the facedown contact token of the lowest class on this planet.',
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.',
                'Gain 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'Reveal all yellow contacts on this planet. If K-2S0, gain crew and gain 1 fame.'
        },
        {
            card: '9',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a> If patrol in path is rebel, ignore reputation and pass through the patrol.',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward and flip character card. Only combat text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> a Ship.',
                'If on an imperial planet, place 1 damage token.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, move that patrol 3 spaces towards your ship.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'None.'
        },
        {
            card: '10',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Action text inactive. Combat text active. If completed, gain reward and flip character card. Only combat text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Cargo. Then place a goal token on card\'s destination.',
                'If on an imperial planet, place 1 damage token.'
            ],
            encounter: [
                '***Combat dice reroll text is active.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'Discard the top card of the Ship and Luxury market decks. <span class="bold red">AI deck is automatically shuffled.</span>'
        },
    ],
    ketsuOnyo: [
        {
            card: '1',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward and flip character card. Only combat credit text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 2 damage.',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Job. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Encounter a patrol within 3 spaces of Ketsu. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'If at bounty location, encounter bounty. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'None.'
        },
        {
            card: '2',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward and flip character card. Only combat credit text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 2 damage.',
                'If all job slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Job. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Encounter a patrol within 3 spaces of Ketsu. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'If at bounty location, encounter bounty. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free.'
            ],
            special: 'None.'
        },
        {
            card: '3',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward and flip character card. Only combat credit text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, character suffers 2 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Bounty. Then place a goal token on card\'s bounty destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Encounter a patrol within 2 spaces of Ketsu. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'If at bounty location, encounter bounty. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'Spend 8k to gain 1 fame.',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'Reveal the facedown white contact token  on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free if it is syndicate or no affiliation.'
        },
        {
            card: '4',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward and flip character card. Only combat credit text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Cargo. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'If at bounty location, encounter bounty. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free.',
            ],
            special: 'Reveal the facedown white contact token  on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free if it is syndicate or no affiliation.'
        },
        {
            card: '5',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward and flip character card. Only combat credit text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 3 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.',
                'Take a 2nd market action. <a class="helpLink helpLink-buying" href="#">Buy</a> a Tech if slot is available.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'If at bounty location, encounter bounty. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'Spend 8k to gain 1 fame.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free.'
            ],
            special: 'None.'
        },
        {
            card: '6',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward and flip character card. Only combat credit text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, character suffers 2 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Encounter a patrol within 3 spaces of Ketsu. If combat is won, take no credits and gain additional 1 fame. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'If at bounty location, encounter bounty. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'None.'
        },
        {
            card: '7',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward and flip character card. Only combat credit text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, lose 1 reputation w/planet\'s faction (if any).',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Tech. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Then place a goal token on card\'s destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Encounter a patrol within 3 spaces of Ketsu. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'If at bounty location, encounter bounty. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'Reveal the facedown green contact token  on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free if it is syndicate or no affiliation.'
        },
        {
            card: '8',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward and flip character card. Only combat credit text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Tech.',
                'Reveal the facedown contact token of the lowest class on this planet.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'If at bounty location, encounter bounty. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'None.'
        },
        {
            card: '9',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward and flip character card. Only combat credit text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> a Ship.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'If (-) reputation matching a patrol in this space, encounter that patrol. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'If at bounty location, encounter bounty. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'Reveal the facedown yellow contact token  on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free if it is syndicate or no affiliation.'
        },
        {
            card: '10',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Encounter text inactive. If completed, gain reward and flip character card. Only combat credit text is active.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Bounty. Then place a goal token on card\'s bounty destination.',
                'If at bounty destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.'
            ],
            encounter: [
                'Encounter a patrol within 3 spaces of Ketsu. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'If at bounty location, encounter bounty. <span class="italic">Once Personal Goal is met, combat credit text is active.</span>',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'Discard the top card of the Bounty and Luxury market decks. <span class="bold red">AI deck is automatically shuffled.</span>'
        },
    ],
    landoCalrissian: [
        {
            card: '1',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward and flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 2 damage. Receive no credits for delivery. Instead gain additional 1 fame.',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Job. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Then place a goal token on card\'s destination.'
            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.',
                'Gain 1 reputation w/this planet\'s faction (if any).'
            ],
            special: 'None.'
        },
        {
            card: '2',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward and flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 2 damage.',
                'If all job slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Job. Then place a goal token on card\'s destination.',
            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',                
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free.'
            ],
            special: 'Reveal all green and yellow contacts on this planet.  If Chewbacca or a droid, gain as crew.'
        },
        {
            card: '3',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward and flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, character suffers 2 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Job. Then place a goal token on card\'s destination.',
                'Take a 2nd market action. <a class="helpLink helpLink-buying" href="#">Buy</a> a Cargo if slot is available. Then place a goal on card\'s destination.'
            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',                
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'Spend 8k to gain 1 fame.',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'None.'
        },
        {
            card: '4',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward and flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Cargo. Then place a goal token on card\'s destination.',
                'Take a 2nd market action. <a class="helpLink helpLink-buying" href="#">Buy</a> a Job if slot is available. Then place a goal on card\'s destination.'
            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',                
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'None.'
        },
        {
            card: '5',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward and flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, ship suffers 3 damage.',
                'Sabacc Skills! Receive Luxury item for free.',
            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',                
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'Spend 8k to gain 1 fame.',
                'Reveal the facedown contact token of the lowest class on this planet and <a class="helpLink helpLink-gainingCrew" href="#">gain the crew</a> on its card for free.'
            ],
            special: 'None.'
        },
        {
            card: '6',
            planning: [
                'Recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward and flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, character suffers 2 damage.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Cargo. Then place a goal token on card\'s destination.',
            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',                
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'None.'
        },
        {
            card: '7',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward and flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, lose 1 reputation w/planet\'s faction (if any).',
                'If all cargo slots full, <a class="helpLink helpLink-buying" href="#">buy</a> Tech. Otherwise <a class="helpLink helpLink-buying" href="#">buy</a> Cargo. Then place a goal token on card\'s destination.',
            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',                
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'Reveal all green and yellow contacts on this planet. If Chewbacca or a droid, gain as crew.'
        },
        {
            card: '8',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward and flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it. If cargo is <span class="bold">ILLEGAL</span>, receive no credits for delivery. Instead gain 1 fame.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Tech.',
                'Reveal the facedown contact token of the lowest class on this planet.'
            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',                
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.',
                'Gain 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'None.'
        },
        {
            card: '9',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward and flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> a Ship.'
            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',                
                'If (-) reputation matching a patrol in this space, encounter that patrol.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Gain 4k. Then lose 1 reputation w/the nearest patrol\'s faction.'
            ],
            special: 'If ship is Millennium Falcon, gain 5k.'
        },
        {
            card: '10',
            planning: [
                'If defeated, recover all damage.',
                '<a class="helpLink helpLink-moving" href="#">Move toward closest goal.</a>',
                'Gain 2k.'
            ],
            action: [
                'Check Personal Goal. Dice reroll text active as follows - Reroll any 1 blank die. If completed, gain reward and flip character card. All text is active as follows - Reroll any 1 blank die; Pay 1k to gain 1 reputation with planet faction.',
                'If at cargo destination,  <a class="helpLink helpLink-jobsAndCargo" href="#">deliver</a> it.',
                '<a class="helpLink helpLink-buying" href="#">Buy</a> Cargo. Then place a goal token on card\'s destination.',
            ],
            encounter: [
                '***Dice reroll text active as follows - Reroll any 1 blank die.',                
                'If (-) reputation matching a patrol in this space, gain reputation of faction.',
                'If at job destination, <a class="helpLink helpLink-jobsAndCargo" href="#">complete</a> it.',
                'Spend 8k to gain 1 fame.'
            ],
            special: 'Discard the top card of the Bounty and Luxury market decks. <span class="bold red">AI deck is automatically shuffled.</span>'
        },
    ],


}

var characterNotes = {
    bobaFett: [
        'Boba Fett starting ship is G-1A Starfighter.',
        'Use Boba Fett starting card.',
        'Place starting contact token face up on first location found in market decks that matches contact color. This will determine location of first bounty encounter. Place this before all other contacts of same color.',
        'When bounty location is not revealed, Boba Fett heads towards next closest goal location. If no goal available, he heads to closest planet with matching bounty contact color.',
        'Boba Fett reveals all contacts that match the color of bounty on each planet he ends movement on until bounty location is found.',
        'Boba Fett must roll a success to capture a bounty from a bounty encounter. If initial capture fails, he will continue to attempt capture on following turns till successful.',
        'Boba Fett always eliminates the bounty if the fame is the same as a capture.'
    ],
    bossk: [
        'Bossk starting ship is G-1A Starfighter.',
        'Use Bossk starting card.',
        'Place starting contact token face up on first location found in market decks that matches contact color. This will determine location of first bounty encounter. Place this before all other contacts of same color.',
        'When bounty location is not revealed, Bossk heads towards next closest goal location. If no goal available, he heads to closest planet with matching bounty contact color. ',
        'Bossk reveals a contact that matches color of bounty on each planet he ends movement on until bounty location is found.',
        'Bossk must roll a success to capture a bounty from a bounty encounter. If initial capture fails, he will continue to attempt capture on following turns till successful.',
        'Bossk always eliminates the bounty if the fame is the same as a capture.'
    ],
    doctorAphra: [
        'Doctor Aphra starting ship is G9 Rigger.',
        'Use Doctor Aphra starting card.',
        'Doctor Aphra does not purchase bounties.'
    ],
    hanSolo: [
        'Han Solo starting ship is G9 Rigger.',
        'Use Han Solo starting card.',
        'Han Solo does not take bounties.'
    ],
    ig88: [
        'IG-88 starting ship is G-1A Starfighter.',
        'Use IG-88 starting card.',
        'Place starting contact token face up on first location found in market decks that matches contact color. This will determine location of first bounty encounter. Place this before all other contacts of same color.',
        'When bounty location is not revealed, IG-88 heads towards next closest goal location. If no goal available, he heads to closest planet with matching bounty contact color. ',
        'IG-88 reveals a contact that matches color of bounty on each planet he ends movement on until bounty location is found.',
        'IG-88 must roll a success to capture a bounty from a bounty encounter. If initial capture fails, he will continue to attempt capture on following turns till successful.',
        'IG-88 always eliminates the bounty if the fame is the same as a capture.'
    ],
    jynErso: [
        'Jyn Erso starting ship is G9 Rigger.',
        'Use Jyn Erso starting card.',
        'Jyn Erso does not take bounties.'
    ],
    ketsuOnyo: [
        'Ketsu Onyo starting ship is G-1A Starfighter.',
        'Use Ketsu Onyo starting card.',
        'Place starting contact token face up on first location found in market decks that matches contact color. This will determine location of first bounty encounter. Place this before all other contacts of same color.',
        'When bounty location is not revealed, Ketsu Onyo heads towards next closest goal location. If no goal available, he heads to closest planet with matching bounty contact color. ',
        'Ketsu Onyo reveals a contact that matches color of bounty on each planet he ends movement on until bounty location is found.',
        'Ketsu Onyo must roll a success to capture a bounty from a bounty encounter. If initial capture fails, she will continue to attempt capture on following turns till successful.',
        'Ketsu Onyo always eliminates the bounty if the fame is the same as a capture.'
    ],
    landoCalrissian: [
        'Lando Calrissian starting ship is G9 Rigger.',
        'Use Lando Calrissian starting card.',
        'Lando Calrissian always moves toward closest goal that allows him to land on a planet.',
        'Lando Calrissian does not take bounties.'
    ]
}