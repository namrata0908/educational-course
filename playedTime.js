var player,player2,player3,player4,player5,v1=0,v2=0,v3=0,v4=0,v5=0, completion = (v1+v2+v3+v4+v5)/5*100
//, display = document.getElementById('display');
// function onBodyLoad(){
// client = {
//     token: localStorage.getItem('login_session')
//     };
//     userDetails = JSON.stringify(client);
// res= await fetch("http://localhost:5000/dashboardData/session2",
//                         {
//                             method:'POST',  headers: {
//                         'Accept': 'application/json',
//                         'Content-Type': 'application/json' 
//                         },body:userDetails});
//         res = res.json()
//         var v1 = res.v1
//         var v2 = res.v2
//         var v3 = res.v3
//         var v4 = res.v4
//         var v5 = res.v5
                    

//                     }


function onYouTubeIframeAPIReady() {
    player = new YT.Player( 'player', {
        events: { 'onStateChange': onPlayerStateChange }
    });

    player2 = new YT.Player( 'player2', {
        events: { 'onStateChange': onPlayerStateChange2 }
    });

    player3 = new YT.Player( 'player3', {
        events: { 'onStateChange': onPlayerStateChange3 }
    });

    player4 = new YT.Player( 'player4', {
        events: { 'onStateChange': onPlayerStateChange4 }
    });

    player5 = new YT.Player( 'player5', {
        events: { 'onStateChange': onPlayerStateChange5 }
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
        v1=1
    showPercentage()
    }
}

function onPlayerStateChange2(event) {
    if(event.data === 0) { // Ended playing
    //     if(!timeSpent.length){
    //         timeSpent = new Array( parseInt(player.getDuration()) );
    //     }
    //     timer = setInterval(record,1000);
    // } else {
    //     clearInterval(timer);
        v2=1
    showPercentage()
    }
}
function onPlayerStateChange3(event) {
    if(event.data === 0) { // Ended playing
    //     if(!timeSpent.length){
    //         timeSpent = new Array( parseInt(player.getDuration()) );
    //     }
    //     timer = setInterval(record,1000);
    // } else {
    //     clearInterval(timer);
        v3=1
    showPercentage()
    }
}
function onPlayerStateChange4(event) {
    if(event.data === 0) { // Ended playing
    //     if(!timeSpent.length){
    //         timeSpent = new Array( parseInt(player.getDuration()) );
    //     }
    //     timer = setInterval(record,1000);
    // } else {
    //     clearInterval(timer);
        v4=1
    showPercentage()
    }
}
function onPlayerStateChange5(event) {
    if(event.data === 0) { // Ended playing
    //     if(!timeSpent.length){
    //         timeSpent = new Array( parseInt(player.getDuration()) );
    //     }
    //     timer = setInterval(record,1000);
    // } else {
    //     clearInterval(timer);
        v5=1
    showPercentage()
    }
}

// function record(){
//     timeSpent[ parseInt(player.getCurrentTime()) ] = true;
//     showPercentage();
// }

function showPercentage(){
     //v1v2 database call
    //update completion on database
    console.log("showPercentage")
    
    client = {
        token: localStorage.getItem('login_session'),
        v1 : v1,
        v2 : v2,
        v3 : v3,
        v4 : v4,
        v5 : v5,
        completion : completion
    };

    userDetails = JSON.stringify(client);
    fetch("http://localhost:5000/dashboardData/session",
                    {
                        method:'POST',  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                    },body:userDetails});
    
    

}

async function showCompletion(){
        client = {
        token: localStorage.getItem('login_session')
        };
        userDetails = JSON.stringify(client);
        res= await fetch("http://localhost:5000/dashboardData/session2",
                        {
                            method:'POST',  headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json' 
                        },body:userDetails});
        res= await res.json();
        
        
        completion = res.completion
        
    
    
    const completionDisplay = document.querySelector('#completion')
    completionDisplay.outerHTML="<span>"+ completion +"%"+"</span>"
}

async function showSessions(){

    client = {
        token: localStorage.getItem('login_session')
        };
        userDetails = JSON.stringify(client);
        res= await fetch("http://localhost:5000/dashboardData/session2",
                        {
                            method:'POST',  headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json' 
                        },body:userDetails});
        res= await res.json();
        

    var session = res.sessionDone
    const sessionsDisplay = document.querySelector('#sessions')
    
    sessionsDisplay.outerHTML="<span>"+ session+"</span>"
}

// async function showChart(){
//     var chartDisplay = document.querySelector("#chart") 
//     client = {
//         token: localStorage.getItem('login_session')
//         };
//         userDetails = JSON.stringify(client);
//         res= await fetch("http://localhost:5000/dashboardData/session2",
//                         {
//                             method:'POST',  headers: {
//                         'Accept': 'application/json',
//                         'Content-Type': 'application/json' 
//                         },body:userDetails});
//         res= await res.json();
        
        
//         completion = res.completion
//     var uncomplete = (100-completion)
//     chartDisplay.outerHTML = `<div class="card-body">
//             <div class="chart-area"><canvas data-bss-chart="{&quot;type&quot;:&quot;doughnut&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Finished&quot;,&quot;Unfinished&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;&quot;,&quot;backgroundColor&quot;:[&quot;#4e73df&quot;,&quot;#FF0000&quot;],&quot;borderColor&quot;:[&quot;#ffffff&quot;,&quot;#ffffff&quot;,&quot;#ffffff&quot;],&quot;data&quot;:[&quot;`+uncomplete+`&quot;,&quot;` + completion + `&quot;]}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false},&quot;title&quot;:{}}}"></canvas></div>                               
//         </div>`
        
// }

