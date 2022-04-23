async function dashboardData(){
    // console.log("dashboard is here")
    client = {
        token: localStorage.getItem('login_session')
    };
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


async function showPayment(){

    const paymentDisplay = document.querySelector('#payment')
    var payment = await dashboardData()
    paymentDisplay.outerHTML="<span>"+"Rs. "+ payment.payment+"</span>"
}
async function showSessions(){

    const sessionsDisplay = document.querySelector('#sessions')
    var session = await dashboardData()
    sessionsDisplay.outerHTML="<span>"+ session.sessionDone+"</span>"
}
async function showCompletion(){

    const completionDisplay = document.querySelector('#completion')
    var completion = await dashboardData()
    completionDisplay.outerHTML="<span>"+ completion.completion +"%"+"</span>"
}

var deleteLink = document.querySelector('#logout');

if(deleteLink){
deleteLink.addEventListener('click', function(event) {
    event.preventDefault();

    var choice = confirm("Do you sure want to logout?");
    if (choice) {
        localStorage.removeItem('login_session')
        document.location.href = '/'
    }
});
}