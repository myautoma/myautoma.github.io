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
	'img/icons/construction.jpg',
	'img/icons/forum.jpg',
	'img/icons/military.jpg',
	'img/icons/senate.jpg',
	'img/icons/shipping.jpg',
	'img/icons/trajan.jpg',
	'img/icons/plusTwoTrajanAction.jpg',
	'img/icons/wildAction.jpg',
	'../../img/closeHelp.png',
	'../../img/menuClose.png',
	'../../img/menuIcon.png',
	'../../img/question.png'
]);