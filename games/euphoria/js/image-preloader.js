const preload = src => new Promise(function(resolve, reject) {
    const img = new Image();
    img.onload = function() {
      resolve(img);
    }
    img.onerror = reject;
    img.src = src;
  });
  
  const preloadAll = sources =>
    Promise.all(
      sources.map(
        preload));
  
  const sources = [
	'img/bazaarCard1.png',
	'img/bazaarCard2.png',
	'img/bazaarCard3.png',
	'img/bazaarCard4.png',
	'img/artifactMarket.png',
	'img/breezeBar.png',
	'img/camping.png',
	'img/commodityArea.png',
	'img/commodityAreaBlackAutoma.png',
	'img/commodityAreaWhiteAutoma.png',
	'img/constructMarkets.png',
	'img/factionAutoma.png',
	'img/factionEuphorian.png',
	'img/factionIcarite.png',
	'img/factionSubterran.png',
	'img/factionWastelander.png',
	'img/skyLounge.png',
	'img/help/artifactMarket.jpg',
	'img/help/artifactMarket.png',
	'img/help/automaCardDiagram.jpg',
	'img/help/automaCardDiagram2.jpg',
	'img/help/automaComponents.jpg',
	'img/help/bazaarCard1.png',
	'img/help/bazaarCard2.png',
	'img/help/bazaarCard3.png',
	'img/help/bazaarCard4.png',
	'img/help/breezeBar.png',
	'img/help/camping.png',
	'img/help/commodityArea.png',
	'img/help/constructMarket.jpg',
	'img/help/constructMarkets.png',
	'img/help/factionAutoma.png',
	'img/help/factionEuphorian.png',
	'img/help/factionIcarite.png',
	'img/help/factionSubterran.png',
	'img/help/factionWastelander.png',
	'img/help/penalty.png',
	'img/help/placeWorker.jpg',
	'img/help/skyLounge.png',
	'img/help/star.png',
	'img/help/tiebreaker.jpg',
	'../../img/closeHelp.png',
	'../../img/menuClose.png',
	'../../img/menuIcon.png',
	'../../img/question.png'
];
  
preloadAll(sources)
  .then(images => initiateGameElements())
  .catch(err => console.error('Failed', err));
