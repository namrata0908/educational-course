function dashboardData(){
    return ({"payment":6000,
    "sessionDone":5,
    "completion":60
    })
}

async function showPayment(){

    const paymentDisplay = document.querySelector('#payment')
        
    paymentDisplay.outerHTML="<span>"+"Rs. "+dashboardData().payment+"</span>"
}
async function showSessions(){

    const sessionsDisplay = document.querySelector('#sessions')
        
    sessionsDisplay.outerHTML="<span>"+dashboardData().sessionDone+"</span>"
}
async function showCompletion(){

    const completionDisplay = document.querySelector('#completion')
        
    completionDisplay.outerHTML="<span>"+dashboardData().completion +"%"+"</span>"
}
