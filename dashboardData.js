if(localStorage.getItem('login_session') === null){
    if(confirm('Login To Continue')){
    window.location.href = "/login"
    }
    else{
    window.location.href = "/404"
    }
}

async function dashboardData(){
    // console.log("dashboard is here")
    client = {
        token: localStorage.getItem('login_session')
    };
    if(client.token){
    userDetails = JSON.stringify(client);
    res= await fetch("http://localhost:5000/dashboardData",
                    {
                        method:'POST',  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                    },body:userDetails});
    res= await res.json();
    // console.log(res)
    return (res)
                }
}


async function showPayment(){

    const paymentDisplay = document.querySelector('#payment')
    var payment = await dashboardData()
    paymentDisplay.outerHTML="<span>"+"Rs. "+ payment.payment+"</span>"
}



async function showName(){

    const nameDisplay = document.querySelector('#name')
    var name = await dashboardData()
    nameDisplay.outerHTML="<span style=color:black>"+ name.firstname + " " + name.lastname +"</span>"
}


async function logout(){
    localStorage.removeItem('login_session')
    window.location.href = "/"

// if(deleteLink){
// deleteLink.addEventListener('click', function(event) {
//     event.preventDefault();

//     var choice = confirm("Do you sure want to logout?");
//     if (choice) {
//         localStorage.removeItem('login_session')
//         document.location.href = '/'
//     }
// });
// }
}

async function showVideo(){
    var video = document.querySelector('#video')
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
        
        
        var payment = res.payment
    if(payment > 2999){    
    video.outerHTML=`<div class="container">
                                <div class="row">
                                  <div class="col">
                                      <span class="course-title">Modern JavaScript Tutorial #1 - Intro & Setup</span>
                                    <iframe id="player" width="800" height="400" src="https://www.youtube.com/embed/iWOYAxlnaww?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                  </div>
                                  <div class="col">
                                    <span class="course-title">Modern JavaScript Tutorial #2 - Syntax Basics & Types</span>
                                  <iframe id="player2" width="800" height="400" src="https://www.youtube.com/embed/FhguwBJeqWs?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="col">
                                    <span class="course-title">Modern JavaScript Tutorial #3 - Control Flow</span>
                                  <iframe id="player3" width="800" height="400" src="https://www.youtube.com/embed/JloLGV9DmtQ?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="col">
                                    <span class="course-title">Modern JavaScript Tutorial #4 - Functions</span>
                                  <iframe id="player4" width="800" height="400" src="https://www.youtube.com/embed/xUI5Tsl2JpY?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="col">
                                    <span class="course-title">Modern JavaScript Tutorial #5 - Objects</span>
                                  <iframe id="player5" width="800" height="400" src="https://www.youtube.com/embed/X0ipw1k7ygU?enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                </div>
                                </div>
                               
                        </div>`
    }
    else{
        alert("Course Payment Not Completed!")
    }
}

