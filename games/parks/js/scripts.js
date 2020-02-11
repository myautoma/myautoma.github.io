var touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
var basicSites = ['Forest', 'Mountain', 'Valley', 'Ocean', 'Vista'];
var advancedSites = ['Lookout*', 'Wildlife*', 'River*', 'Lodge*'];
var finalizedSites = [];
var seasonNum = 1;

$(document).on(touchEvent, '#startGame', function() {

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
    generateTrail()

})

$(document).on(touchEvent, '#nextSeason', function() {
    seasonNum++;
    generateTrail()
})

$(document).on(touchEvent, '#prevSeason', function() {
    seasonNum--;
    generateTrail()
})

$(document).on(touchEvent, '#randomize', function() {
    let seasonIndex = seasonNum - 1;
    shuffle(finalizedSites[seasonIndex]);
    generateTrail(seasonNum)
})

function adjustUI() {
    $('#fourToFivePlayersCheckbox').remove();

    var buttonsHTML = '<button id="prevSeason" class="button is-danger is-light">Previous Season</button>';
    buttonsHTML += '<button id="nextSeason" class="button is-success is-light">Next Season</button>';
    buttonsHTML += '<br />';
    buttonsHTML += '<button id="randomize" class="button is-link is-light">Randomize</button>';
    $('#buttons').html(buttonsHTML);

    $('#mainTitle').after('<h3 class="subtitle is-3">Season <span id="currentSeason">1</span></h3>')
}

function generateTrail() {

    $('#currentSeason').html(seasonNum)

    if(seasonNum == 1) {
        $('#prevSeason').hide();
    } else if (seasonNum == 4) {
        $('#nextSeason').hide();
    } else {
        $('#prevSeason').show();
        $('#nextSeason').show();
    }

    let seasonIndex = seasonNum - 1;

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
