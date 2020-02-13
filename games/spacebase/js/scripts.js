var touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
var winningScore = 0;
var totalTurns = 0;
var playerNum = 0;
var aiRollNum = 0;

var players = ['Human', 'AI 1', 'AI 2', 'AI 3']

$(document).on(touchEvent, '#startGame', function() {
  winningScore = $('#winningScoreSlider').val();
  totalTurns = $('#aiTurnsSlider').val();
  adjustUI();
})

$(document).on(touchEvent, '#nextTurn', function() {

  if(playerNum == 1) {
    totalTurns--;
    $('#turnNum span').html(totalTurns);

    if(totalTurns == 0) {
      $('#buttons').remove();
      $('#diceResults').html('<p class="has-text-danger title is-4">The AI Win!</p>')
      return;
    }
  }

  if(playerNum == 4) {
    playerNum = 0;
    let cardColumn = Math.floor(Math.random()*6) + 1;
    $('#diceInfo').hide();
    $('#diceResults').html('<p class="subtitle is-5">Refresh the cards in column ' + cardColumn + '.</p>')
  } else {
    $('#diceInfo').show();
    $('#playerTurn span').html(players[playerNum]);
    rollDice();
    playerNum++;
  }

})

function adjustUI() {
  $('#sliderContainer').remove();

  var gameInfoHTML = '<p id="winningScore">Winning Score: <span class="bold">' + winningScore + '</span></p>';
  gameInfoHTML += '<p id="turnNum">Turns Remaining: <span class="bold">' + totalTurns + '</span></p>';
  gameInfoHTML += '<p id="playerTurn">Current Turn: <span class="bold has-text-link">' + players[playerNum] + '</span></p>';

  $('#buttons').before(gameInfoHTML)

  var setupDiceResultsHTML = '<div id="diceResultsContainer">';
  setupDiceResultsHTML += '<p id="diceInfo">Current Dice Roll:</p>';
  setupDiceResultsHTML += '<div id="diceResults">';
  setupDiceResultsHTML += '</div>';
  setupDiceResultsHTML += '</div>';

  $('#buttons').after(setupDiceResultsHTML)

  $('#startGame').hide();
  $('#nextTurn').show();

  rollDice();
  playerNum++;
}

function rollDice() {
  let dice1 = Math.floor(Math.random()*6) + 1;
  let dice2 = Math.floor(Math.random()*6) + 1;

  var colorClass;

  if(playerNum == 0) {
    colorClass = 'is-info';
    $('.has-text-danger').removeClass('has-text-danger').addClass('has-text-link')
  } else {
    colorClass = 'is-danger';
    $('.has-text-link').removeClass('has-text-link').addClass('has-text-danger')
  }

  var diceResultsHTML = '<p class="subtitle is-4"><span class="dice tag ' + colorClass + ' is-large">' + dice1 + '</span><span class="dice tag ' + colorClass + ' is-large">' + dice2 + '</span></p>';

  $('#diceResults').html(diceResultsHTML)

}