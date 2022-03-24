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
    'img/cards/1.jpg',
	'img/cards/2.jpg',
	'img/cards/3.jpg',
	'img/cards/4.jpg',
	'img/cards/5.jpg',
	'img/cards/6.jpg',
	'img/cards/7.jpg',
	'img/cards/8.jpg',
	'img/cards/9.jpg',
	'img/cards/10.jpg',
	'img/cards/11.jpg',
	'img/cards/12.jpg',
	'img/cards/13.jpg',
	'img/cards/14.jpg',
	'img/cards/15.jpg',
	'img/cards/16.jpg',
	'img/cards/17.jpg',
	'img/cards/18.jpg',
	'img/cards/19.jpg',
	'img/cards/20.jpg',
	'img/cards/21.jpg',
	'img/cards/22.jpg',
	'img/cards/23.jpg',
	'img/cards/24.jpg',
	'img/cards/25.jpg',
	'img/cards/26.jpg',
	'img/cards/27.jpg',
	'img/cards/28.jpg',
	'img/cards/29.jpg',
	'img/cards/30.jpg',
	'img/cards/31.jpg',
	'img/cards/32.jpg',
	'img/cards/33.jpg',
	'img/cards/34.jpg',
	'img/cards/35.jpg',
	'img/cards/36.jpg',
	'../../img/closeHelp.png',
	'../../img/menuClose.png',
	'../../img/menuIcon.png',
	'../../img/question.png'
];
  
preloadAll(sources)
  .then(images => initiateGameElements())
  .catch(err => console.error('Failed', err));
