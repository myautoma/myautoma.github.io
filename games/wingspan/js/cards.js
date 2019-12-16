var cards = [

	{
		card: '1',
		actions: [
			{	
				class: 'gainFood',
				instructions: '<p>Using the food key on the card, start from the left-most die face icon and select the first die face available in the birdfeeder. Remove <span class="bold">ALL</span> dice with that face from the birdfeeder.</p>',
				desc: 'Gain Food',
				actionCube: 'plus'
			}
		]
		
	},
	{
		card: '2',
		actions: [
			{	
				class: 'layEggs',
				instructions: '<p>An egg is added to the Automa\'s scoring record for each egg icon on the drawn card.</p>',
				desc: 'Lay 1 Egg',
				value: 1,
				actionCube: 'minus'
			},
			{	
				class: 'drawCards',
				instructions: '<p>Discard <span class="bold">ALL</span> 3 face-up cards from the bird tray. The app also records the Automa gaining 1 face-down card.</p>',
				desc: 'Draw Cards',
				actionCube: 'plus'
			}
		]
	},
	{
		card: '3',
		actions: [
			{	
				class: 'drawCards',
				instructions: '<p>Discard <span class="bold">ALL</span> 3 face-up cards from the bird tray. The app also records the Automa gaining 1 face-down card.</p>',
				desc: 'Draw Cards',
				actionCube: 'plus'
			},
			{	
				class: 'layEggs',
				instructions: '<p>An egg is added to the Automa\'s scoring record for each egg icon on the drawn card.</p>',
				desc: 'Lay 2 Eggs',
				value: 2,
				actionCube: 'minus'
			},
			{	
				class: 'playBird',
				instructions: '<p>From the 3 face-up cards on the bird tray, add the highest value to the Automa\'s score, then discard <span class="bold">ALL</span> that meet the requirement of the Automa\'s bonus card.</p>',
				desc: 'Play a Bird',
				actionCube: 'plus'
			}
		]
	},
	{
		card: '4',
		actions: [
			{	
				class: 'drawCards',
				instructions: '<p>Discard <span class="bold">ALL</span> 3 face-up cards from the bird tray. The app also records the Automa gaining 1 face-down card.</p>',
				desc: 'Draw Cards',
				actionCube: 'minus'
			},
			{	
				class: 'gainFood',
				instructions: '<p>Using the food key on the card, start from the left-most die face icon and select the first die face available in the birdfeeder. Remove <span class="bold">ALL</span> dice with that face from the birdfeeder.</p>',
				desc: 'Gain Food',
			},
			{	
				class: 'gainFood',
				instructions: '<p>Using the food key on the card, start from the left-most die face icon and select the first die face available in the birdfeeder. Remove <span class="bold">ALL</span> dice with that face from the birdfeeder.</p>',
				desc: 'Gain Food',
			},
			{	
				class: 'playBird',
				instructions: '<p>From the 3 face-up cards on the bird tray, add the highest value to the Automa\'s score, then discard <span class="bold">ALL</span> that meet the requirement of the Automa\'s bonus card.</p>',
				desc: 'Play a Bird',
			}
		]
	},
	{
		card: '5',
		actions: [
			{	
				class: 'layEggs',
				instructions: '<p>An egg is added to the Automa\'s scoring record for each egg icon on the drawn card.</p>',
				desc: 'Lay 1 Egg',
				actionCube: 'plus',
				value: 1,
			},
			{	
				class: 'gainFood',
				instructions: '<p>Using the food key on the card, start from the left-most die face icon and select the first die face available in the birdfeeder. Remove <span class="bold">ALL</span> dice with that face from the birdfeeder.</p>',
				desc: 'Gain Food',
			},
			{	
				class: 'layEggs',
				instructions: '<p>An egg is added to the Automa\'s scoring record for each egg icon on the drawn card.</p>',
				desc: 'Lay 3 Eggs',
				actionCube: 'minus',
				value: 3,
			},
			{	
				class: 'drawCards',
				instructions: '<p>Discard <span class="bold">ALL</span> 3 face-up cards from the bird tray. The app also records the Automa gaining 1 face-down card.</p>',
				desc: 'Draw Cards',
				actionCube: 'minus'
			}
		]
	},
	{
		card: '6',
		actions: [
			{	
				class: 'layEggs',
				instructions: '<p>An egg is added to the Automa\'s scoring record for each egg icon on the drawn card.</p>',
				desc: 'Lay 1 Egg',
				value: 1,
			},
			{	
				class: 'playBird',
				instructions: '<p>From the 3 face-up cards on the bird tray, add the highest value to the Automa\'s score, then discard <span class="bold">ALL</span> that meet the requirement of the Automa\'s bonus card.</p>',
				desc: 'Play a Bird',
				actionCube: 'plus'
			},
			{	
				class: 'playBird',
				instructions: '<p>From the 3 face-up cards on the bird tray, add the highest value to the Automa\'s score, then discard <span class="bold">ALL</span> that meet the requirement of the Automa\'s bonus card.</p>',
				desc: 'Play a Bird',
				actionCube: 'plus'
			},
			{	
				class: 'layEggs',
				instructions: '<p>An egg is added to the Automa\'s scoring record for each egg icon on the drawn card.</p>',
				desc: 'Lay 3 Eggs',
				actionCube: 'plus',
				value: 3,
			}
		]
	},
	{
		card: '7',
		actions: [
			{	
				class: 'playBird',
				instructions: '<p>From the 3 face-up cards on the bird tray, add the highest value to the Automa\'s score, then discard <span class="bold">ALL</span> that meet the requirement of the Automa\'s bonus card.</p>',
				desc: 'Play a Bird'
			},
			{	
				class: 'drawCards',
				instructions: '<p>Discard <span class="bold">ALL</span> 3 face-up cards from the bird tray. The app also records the Automa gaining 1 face-down card.</p>',
				desc: 'Draw Cards'
			},
			{	
				class: 'gainFood',
				instructions: '<p>Using the food key on the card, start from the left-most die face icon and select the first die face available in the birdfeeder. Remove <span class="bold">ALL</span> dice with that face from the birdfeeder.</p>',
				desc: 'Gain Food',
			},
			{	
				class: 'layEggs',
				instructions: '<p>An egg is added to the Automa\'s scoring record for each egg icon on the drawn card.</p>',
				desc: 'Lay 3 Eggs',
				actionCube: 'plus',
				value: 3,
			}
		]
	},
	{
		card: '8',
		actions: [
			{	
				class: 'gainFood',
				instructions: '<p>Using the food key on the card, start from the left-most die face icon and select the first die face available in the birdfeeder. Remove <span class="bold">ALL</span> dice with that face from the birdfeeder.</p>',
				desc: 'Gain Food'
			},
			{	
				class: 'layEggs',
				instructions: '<p>An egg is added to the Automa\'s scoring record for each egg icon on the drawn card.</p>',
				desc: 'Lay 2 Eggs',
				actionCube: 'plus',
				value: 2,
			},
			{	
				class: 'drawCards',
				instructions: '<p>Discard <span class="bold">ALL</span> 3 face-up cards from the bird tray. The app also records the Automa gaining 1 face-down card.</p>',
				desc: 'Draw Cards'
			},
			{	
				class: 'layEggs',
				instructions: '<p>An egg is added to the Automa\'s scoring record for each egg icon on the drawn card.</p>',
				desc: 'Lay 3 Eggs',
				actionCube: 'minus',
				value: 3,
			}
		]
	},
	{
		card: '9',
		actions: [
			{	
				class: 'gainFood',
				instructions: '<p>Using the food key on the card, start from the left-most die face icon and select the first die face available in the birdfeeder. Remove <span class="bold">ALL</span> dice with that face from the birdfeeder.</p>',
				desc: 'Gain Food'
			},
			{	
				class: 'playBird',
				instructions: '<p>From the 3 face-up cards on the bird tray, add the highest value to the Automa\'s score, then discard <span class="bold">ALL</span> that meet the requirement of the Automa\'s bonus card.</p>',
				desc: 'Play a Bird'
			},
			{	
				class: 'layEggs',
				instructions: '<p>An egg is added to the Automa\'s scoring record for each egg icon on the drawn card.</p>',
				desc: 'Lay 2 Eggs',
				actionCube: 'plus',
				value: 2,
			},
			{	
				class: 'drawCards',
				instructions: '<p>Discard <span class="bold">ALL</span> 3 face-up cards from the bird tray. The app also records the Automa gaining 1 face-down card.</p>',
				desc: 'Draw Cards',
				actionCube: 'plus'
			}
		]
	},
	{
		card: '10',
		actions: [
			{	
				class: 'playBird',
				instructions: '<p>From the 3 face-up cards on the bird tray, add the highest value to the Automa\'s score, then discard <span class="bold">ALL</span> that meet the requirement of the Automa\'s bonus card.</p>',
				desc: 'Play a Bird'
			},
			{	
				class: 'layEggs',
				instructions: '<p>An egg is added to the Automa\'s scoring record for each egg icon on the drawn card.</p>',
				desc: 'Lay 2 Eggs',
				actionCube: 'minus',
				value: 2,
			},
			{	
				class: 'drawCards',
				instructions: '<p>Discard <span class="bold">ALL</span> 3 face-up cards from the bird tray. The app also records the Automa gaining 1 face-down card.</p>',
				desc: 'Draw Cards',
				actionCube: 'minus'
			},
			{	
				class: 'gainFood',
				instructions: '<p>Using the food key on the card, start from the left-most die face icon and select the first die face available in the birdfeeder. Remove <span class="bold">ALL</span> dice with that face from the birdfeeder.</p>',
				desc: 'Gain Food'
			}
		]
	},
	{
		card: '11',
		actions: [
			{	
				class: 'playBird',
				instructions: '<p>From the 3 face-up cards on the bird tray, add the highest value to the Automa\'s score, then discard <span class="bold">ALL</span> that meet the requirement of the Automa\'s bonus card.</p>',
				desc: 'Play a Bird',
				actionCube: 'plus'
			},
			{	
				class: 'playBird',
				instructions: '<p>From the 3 face-up cards on the bird tray, add the highest value to the Automa\'s score, then discard <span class="bold">ALL</span> that meet the requirement of the Automa\'s bonus card.</p>',
				desc: 'Play a Bird',
				actionCube: 'plus'
			},
			{	
				class: 'playBird',
				instructions: '<p>From the 3 face-up cards on the bird tray, add the highest value to the Automa\'s score, then discard <span class="bold">ALL</span> that meet the requirement of the Automa\'s bonus card.</p>',
				desc: 'Play a Bird',
				actionCube: 'plus'
			},
			{	
				class: 'playBird',
				instructions: '<p>From the 3 face-up cards on the bird tray, add the highest value to the Automa\'s score, then discard <span class="bold">ALL</span> that meet the requirement of the Automa\'s bonus card.</p>',
				desc: 'Play a Bird',
				actionCube: 'plus'
			}
		]
	}
]

var bonusCards = [
	
	{
		card: 'Anatomist',
		class: 'anatomist',
		desc: 'Birds with body parts in their names',
		fullDesc: 'Body parts include beak, belly, bill, breast, cap, chin, collar, crest, eye, face, head, neck, rump, shoulder, tail, throat, wing',
		gameVersion: 'base'
		
	},
	{
		card: 'Bird Counter',
		class: 'birdCounter',
		desc: 'Birds with a <img class="largeIcon" src="img/icons/flock.png" /> power',
		gameVersion: 'base'
		
	},
	{
		card: 'Bird Feeder',
		class: 'birdFeeder',
		desc: 'Birds that eat <img class="largeIcon" src="img/icons/food-seed.png" />',
		fullDesc: 'Any bird with a <img class="largeIcon" src="img/icons/food-seed.png" /> symbol. The bird may also eat other kinds of food.',
		gameVersion: 'base'
		
	},
	{
		card: 'Cartographer',
		class: 'cartographer',
		desc: 'Birds with geography terms in their names',
		fullDesc: 'Terms include American, Atlantic, Baltimore, California, Canada, Carolina, Chihuahua, Eastern, Inca, Kentucky, Mississippi, Mountain, Northern, Sandhill, Savannah, Western',
		gameVersion: 'base'
		
	},
	{
		card: 'Enclosure Builder',
		class: 'enclosureBuilder',
		desc: 'Birds with <img class="largeIcon" src="img/icons/nest-ground.png" /> nests',
		fullDesc: 'Birds must have a <img class="largeIcon" src="img/icons/nest-ground.png" /> or <img class="largeIcon" src="img/icons/wild-nest.png" /> nest symbol.',
		gameVersion: 'base'
		
	},
	{
		card: 'Falconer',
		class: 'falconer',
		desc: 'Birds with a <img class="largeIcon" src="img/icons/predator.png" /> power',
		gameVersion: 'base'
		
	},
	{
		card: 'Fishery Manager',
		class: 'fisheryManager',
		desc: 'Birds that eat <img class="icon" src="img/icons/food-fish.png" />',
		fullDesc: 'Any bird with a <img class="icon" src="img/icons/food-fish.png" /> symbol. The bird may also eat other kinds of food.',
		gameVersion: 'base'
		
	},
	{
		card: 'Food Web Expert',
		class: 'foodWebExpert',
		desc: 'Birds that eat only <img class="largeIcon" src="img/icons/food-invertebrate.png" />',
		fullDesc: 'Any bird that has only <img class="largeIcon" src="img/icons/food-invertebrate.png" /> and no other food symbols.',
		gameVersion: 'base'
		
	},
	{
		card: 'Forester',
		class: 'forester',
		desc: 'Birds that can only live in <img class="largeIcon" src="img/icons/habitat-forest.png" />',
		gameVersion: 'base'
		
	},
	{
		card: 'Historian',
		class: 'historian',
		desc: 'Birds named after a person',
		fullDesc: 'Any bird with an \'s in its name.',
		gameVersion: 'base'
		
	},
	{
		card: 'Large Bird Specialist',
		class: 'largeBirdSpecialist',
		desc: 'Birds with wingspans over 65cm',
		gameVersion: 'base'
		
	},
	{
		card: 'Nest Box Builder',
		class: 'nestBoxBuilder',
		desc: 'Birds with <img class="largeIcon" src="img/icons/nest-cavity.png" /> nests',
		fullDesc: 'Birds must have a <img class="largeIcon" src="img/icons/nest-cavity.png" /> or <img class="largeIcon" src="img/icons/wild-nest.png" /> nest symbol.',
		gameVersion: 'base'
		
	},
	{
		card: 'Omnivore Expert',
		class: 'omnivoreExpert',
		desc: 'Birds that eat <img class="largeIcon" src="img/icons/food-wild.png" />',
		fullDesc: 'Any bird that specifically has a <img class="largeIcon" src="img/icons/food-wild.png" /> symbol as part of its food cost.',
		gameVersion: 'base'
		
	},
	{
		card: 'Passerine Specialist',
		class: 'passerineSpecialist',
		desc: 'Birds with wingspans 30cm or less',
		gameVersion: 'base'
		
	},
	{
		card: 'Photographer',
		class: 'photographer',
		desc: 'Birds with colors in their names',
		fullDesc: 'Colors include ash, black, blue, bronze, brown, cerulean, chestnut, ferruginous, gold, gray, green, indigo, lazuli, purple, red, rose, roseate, ruby, ruddy, rufous, snowy, white, yellow',
		gameVersion: 'base'
		
	},
	{
		card: 'Platform Builder',
		class: 'platformBuilder',
		desc: 'Birds with <img class="largeIcon" src="img/icons/nest-platform.png" /> nests',
		fullDesc: 'Birds must have a <img class="largeIcon" src="img/icons/nest-platform.png" /> or <img class="largeIcon" src="img/icons/wild-nest.png" /> nest symbol.',
		gameVersion: 'base'
		
	},
	{
		card: 'Prairie Manager',
		class: 'prairieManager',
		desc: 'Birds that can only live in <img class="largeIcon" src="img/icons/habitat-grassland.png" />',
		gameVersion: 'base'
		
	},
	{
		card: 'Rodentologist',
		class: 'rodentologist',
		desc: 'Birds that eat <img class="largeIcon" src="img/icons/food-rodent.png" />',
		fullDesc: 'Any bird with a <img class="largeIcon" src="img/icons/food-rodent.png" /> symbol. The bird may also eat other kinds of food.',
		gameVersion: 'base'
		
	},
	{
		card: 'Viticulturalist',
		class: 'viticulturalist',
		desc: 'Birds that eat <img class="largeIcon" src="img/icons/food-fruit.png" />',
		fullDesc: 'Any bird with a <img class="largeIcon" src="img/icons/food-fruit.png" /> symbol. The bird may also eat other kinds of food.',
		gameVersion: 'base'
		
	},
	{
		card: 'Wetland Scientist',
		class: 'wetlandScientist',
		desc: 'Birds that can only live in <img class="largeIcon" src="img/icons/habitat-wetland.png" />',
		gameVersion: 'base'
		
	},
	{
		card: 'Wildlife Gardener',
		class: 'wildlifeGardener',
		desc: 'Birds with <img class="largeIcon" src="img/icons/nest-bowl.png" /> nests',
		fullDesc: 'Birds must have a <img class="largeIcon" src="img/icons/nest-bowl.png" /> or <img class="largeIcon" src="img/icons/wild-nest.png" /> nest symbol.',
		gameVersion: 'base'
	},
	{
		card: 'Autwitcher',
		class: 'autwitcher',
		desc: 'Birds that are worth 3 or 4 points',
		fullDesc: 'Birds that are worth 3 or 4 points. Automa keeps up to 2 of them (higher value first).',
		gameVersion: 'europeanExpansion'
	},
	{
		card: 'Raspb Life Fellow',
		class: 'raspbLifeFellow',
		desc: 'Birds that are worth 5, 6 or 7 points',
		fullDesc: 'Birds that are worth 5, 6 or 7 points. The Automa keeps the highest valued one.',
		gameVersion: 'europeanExpansion'
	}

]

var roundBonusCards = [
	
	{
		card: '1',
		name: 'Birds in Forest',
		class: 'birdsInForest',
		values: [0, 1, 2, 3],
		maxValue: 5,
		tileNum: 8,
		gameVersion: 'base'
	},
	{
		card: '2',
		name: 'Birds in Grassland',
		class: 'birdsInGrassland',
		values: [0, 1, 2, 3],
		maxValue: 5,
		tileNum: 4,
		gameVersion: 'base'
	},
	{
		card: '3',
		name: 'Birds in Wetland',
		class: 'birdsInWetland',
		values: [0, 1, 2, 3],
		maxValue: 5,
		tileNum: 7,
		gameVersion: 'base'
	},
	{
		card: '4',
		name: 'Total Birds',
		class: 'totalBirds',
		values: [2, 5, 8, 11],
		maxValue: 15,
		tileNum: 2,
		gameVersion: 'base'
	},
	{
		card: '5',
		name: 'Eggs in Forest',
		class: 'eggsInForest',
		values: [1, 3, 5, 7],
		tileNum: 8,
		gameVersion: 'base'
	},
	{
		card: '6',
		name: 'Eggs in Grassland',
		class: 'eggsInGrassland',
		values: [1, 3, 5, 7],
		tileNum: 4,
		gameVersion: 'base'
	},
	{
		card: '7',
		name: 'Eggs in Wetland',
		class: 'eggsInWetland',
		values: [1, 3, 5, 7],
		tileNum: 7,
		gameVersion: 'base'
	},
	{
		card: '8',
		name: 'Sets of Three Eggs',
		class: 'setsOfThreeEggs',
		values: [-1, 0, 1, 2],
		tileNum: 2,
		gameVersion: 'base'
	},
	{
		card: '9',
		name: 'Bowl Nest Birds with Eggs',
		class: 'bowlNestBirdsEggs',
		values: [0, 1, 2, 3],
		tileNum: 3,
		gameVersion: 'base'
	},
	{
		card: '10',
		name: 'Cavity Nest Birds with Eggs',
		class: 'cavityNestBirdsEggs',
		values: [0, 1, 2, 3],
		tileNum: 1,
		gameVersion: 'base'
	},
	{
		card: '11',
		name: 'Ground Nest Birds with Eggs',
		class: 'groundNestBirdsEggs',
		values: [0, 1, 2, 3],
		tileNum: 5,
		gameVersion: 'base'
	},
	{
		card: '12',
		name: 'Platform Nest Birds with Eggs',
		class: 'platformNestBirdsEggs',
		values: [0, 1, 2, 3],
		tileNum: 6,
		gameVersion: 'base'
	},
	
	{
		card: '13',
		name: 'Eggs in Bowl Nests',
		class: 'eggsInBowlNests',
		values: [1, 3, 5, 7],
		tileNum: 3,
		gameVersion: 'base'
	},
	{
		card: '14',
		name: 'Eggs in Cavity Nests',
		class: 'eggsInCavityNests',
		values: [1, 3, 5, 7],
		tileNum: 1,
		gameVersion: 'base'
	},
	{
		card: '15',
		name: 'Eggs in Ground Nests',
		class: 'eggsInGroundNests',
		values: [1, 3, 5, 7],
		tileNum: 5,
		gameVersion: 'base'
	},
	{
		card: '16',
		name: 'Eggs in Platform Nests',
		class: 'eggsInPlatformNests',
		values: [1, 3, 5, 7],
		tileNum: 6,
		gameVersion: 'base'
	},
	{
		card: '17',
		name: 'Birds with Tucked Cards',
		class: 'birdsWithTuckedCards',
		values: [-1, -1, 1, 2],
		tileNum: 9,
		gameVersion: 'europeanExpansion'
	},
	{
		card: '18',
		name: 'Birds in One Row',
		class: 'birdsInOneRow',
		values: [1, 1, 2, 3],
		tileNum: 10,
		gameVersion: 'europeanExpansion'
	},
	{
		card: '19',
		name: 'Bird Cards in Hand',
		class: 'birdCardsInHand',
		values: [2, 2, 3, 3],
		tileNum: 11,
		gameVersion: 'europeanExpansion'
	},
	{
		card: '20',
		name: 'Brown Powers',
		class: 'brownPowers',
		values: [0, 2, 4, 5],
		tileNum: 12,
		gameVersion: 'europeanExpansion'
	},
	{
		card: '21',
		name: 'Birds with No Eggs',
		class: 'birdsWithNoEggs',
		values: [1, 3, 5, 6],
		tileNum: 13,
		gameVersion: 'europeanExpansion'
	},
	{
		card: '22',
		name: 'Food Cost of Played Birds',
		class: 'foodCostOfPlayedBirds',
		values: [3, 8, 14, 20],
		tileNum: 9,
		gameVersion: 'europeanExpansion'
	},
	{
		card: '23',
		name: 'Filled Columns',
		class: 'filledColumns',
		values: [-1, -1, 0, 1],
		tileNum: 10,
		gameVersion: 'europeanExpansion'
	},
	{
		card: '24',
		name: 'Food in Personal Supply',
		class: 'foodInPersonalSupply',
		values: [2, 1, 3, 3],
		tileNum: 11,
		gameVersion: 'europeanExpansion'
	},
	{
		card: '25',
		name: 'White and No Powers',
		class: 'whiteAndNoPowers',
		values: [-1, 0, 1, 1],
		tileNum: 12,
		gameVersion: 'europeanExpansion'
	},
	{
		card: '26',
		name: 'Birds over 4 points',
		class: 'birdsOver4Points',
		values: [-1, 0, 1, 2],
		tileNum: 13,
		gameVersion: 'europeanExpansion'
	}

]
