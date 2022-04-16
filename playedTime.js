var player, timer, timeSpent = [], viewed=0
//, display = document.getElementById('display');

function onYouTubeIframeAPIReady() {
    player = new YT.Player( 'player', {
        events: { 'onStateChange': onPlayerStateChange }
    });
}

function onPlayerStateChange(event) {
    if(event.data === 0) { // Ended playing
    //     if(!timeSpent.length){
    //         timeSpent = new Array( parseInt(player.getDuration()) );
    //     }
    //     timer = setInterval(record,1000);
    // } else {
    //     clearInterval(timer);

    showPercentage()
    }
}

// function record(){
//     timeSpent[ parseInt(player.getCurrentTime()) ] = true;
//     showPercentage();
// }

function showPercentage(){
    viewed = 1
}