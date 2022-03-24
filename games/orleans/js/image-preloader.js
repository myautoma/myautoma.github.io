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
    'img/cards/1-1.jpg',
	'img/cards/1-2.jpg',
	'img/cards/1-3.jpg',
	'img/cards/1-4.jpg',
	'img/cards/1-5.jpg',
	'img/cards/1-6.jpg',
	'img/cards/2-1.jpg',
	'img/cards/2-2.jpg',
	'img/cards/2-3.jpg',
	'img/cards/2-4.jpg',
	'img/cards/2-5.jpg',
	'img/cards/2-6.jpg',
	'img/cards/3-1.jpg',
	'img/cards/3-2.jpg',
	'img/cards/3-3.jpg',
	'img/cards/3-4.jpg',
	'img/cards/3-5.jpg',
	'img/cards/3-6.jpg',
	'../../img/closeHelp.png',
	'../../img/menuClose.png',
	'../../img/menuIcon.png',
	'../../img/question.png'
];
  
preloadAll(sources)
  .then(images => initiateGameElements())
  .catch(err => console.error('Failed', err));
