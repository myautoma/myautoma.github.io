<!DOCTYPE html>
<html>
<head>
	<title>Space Base</title>

	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/slider.js"></script>
	<script type="text/javascript" src="js/scripts.js"></script>

	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-extensions@4.0.0/dist/css/bulma-extensions.min.css">

	<script defer src="https://cdn.jsdelivr.net/npm/bulma-extensions@4.0.0/dist/js/bulma-extensions.min.js"></script>
	
	<link rel="stylesheet" type="text/css" href="css/styles.css">

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-129700564-17"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'UA-129700564-17');
	</script>


</head>
<body>

	<div id="container">

		<h1 id="mainTitle" class="title is-2">Space Base</h1>
		<h2 class="subtitle is-4"><a href="https://boardgamegeek.com/thread/1990937/solo-variant" target="_blank">Solo Variant</a></h2>

		<div class="rows is-centered is-hcentered">
			<div id="sliderContainer" class="row is-narrow has-text-centered">
				<p class="subtitle is-4">AI Turns</p>
				<input id="aiTurnsSlider" class="slider has-output is-fullwidth is-success is-large" step="5" min="10" max="30" value="25" type="range">
				<output for="aiTurnsSlider">25</output>
				<p class="subtitle is-4">Winning Score</p>
				<input id="winningScoreSlider" class="slider has-output is-fullwidth is-warning is-large" step="10" min="40" max="70" value="40" type="range">
				<output for="winningScoreSlider">40</output>
			</div>
			<div id="buttons" class="row is-narrow has-text-centered">
				<button id="startGame" class="button is-link">Start Game</button>
				<button id="nextTurn" class="button is-success">Next Turn</button>
			</div>
		</div>

	</div>

</body>
</html>
