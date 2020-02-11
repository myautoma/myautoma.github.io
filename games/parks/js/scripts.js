var touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
var basicSites = ['Forest', 'Mountain', 'Valley', 'Ocean', 'Vista'];
var advancedSites = ['Lookout*', 'Wildlife*', 'River*', 'Lodge*'];

var finalizedSites = [];

var seasonNum = 1;

$(document).on(touchEvent, '#randomize', function() {

    if($('#fourToFivePlayersCheckbox input').prop("checked") == true){
        basicSites.push('Waterfall');
    }

    for (let i = 0; i < 4; i++) {
        let thisAdvancedSiteIndex = Math.floor(Math.random()*advancedSites.length);
        let thisAdvancedSite = advancedSites.splice(thisAdvancedSiteIndex, 1);
        basicSites.push('<span class="bold">' + thisAdvancedSite + '</span>');
        shuffle(basicSites);
        finalizedSites[i] = basicSites.slice()  
    }

    adjustUI();
    generateTrail(seasonNum)

})

$(document).on(touchEvent, '#nextSeason', function() {
    seasonNum++;
    generateTrail(seasonNum)

})

$(document).on(touchEvent, '#prevSeason', function() {
    seasonNum--;
    generateTrail(seasonNum)

})

function adjustUI() {
    $('#fourToFivePlayersCheckbox').remove();

    var buttonsHTML = '<button id="nextSeason" class="button is-success is-light">Next Season</button>';
    buttonsHTML += '<button id="prevSeason" class="button is-danger is-light">Previous Season</button>';
    $('#buttons').html(buttonsHTML);

    $('#mainTitle').after('<h3 class="subtitle is-3">Season <span id="currentSeason">1</span></h3>')
}

function generateTrail(season) {

    $('#currentSeason').html(season)

    if(season == 1) {
        $('#prevSeason').hide();
    } else if (season == 4) {
        $('#nextSeason').hide();
    } else {
        $('#prevSeason').show();
        $('#nextSeason').show();
    }

    let seasonIndex = season - 1;

    let trailHTML = '';

    trailHTML += '<ol id="trailList">';

    for (let i = 0; i < finalizedSites[seasonIndex].length; i++) {
        trailHTML += '<li>' + finalizedSites[seasonIndex][i] + '</li>';
    }

    trailHTML += '</ol>';

    $('#trail').html(trailHTML)

}



function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}