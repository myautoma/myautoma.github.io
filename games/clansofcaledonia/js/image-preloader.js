function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

preload([
    'img/cards/1.jpg',
	'img/cards/2.jpg',
	'img/cards/3.jpg',
	'img/cards/4.jpg',
	'img/cards/5.jpg',
	'img/cards/6.jpg',
	'img/cards/7.jpg',
	'img/cards/8.jpg',
	'../../img/closeHelp.png',
	'../../img/gameHex.png',
	'../../img/menuClose.png',
	'../../img/menuIcon.png',
	'../../img/minus.png',
	'../../img/plus.png',
	'../../img/question.png'
]);