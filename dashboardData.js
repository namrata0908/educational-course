function dashboardData(){
    return ({"payment":6000,
    "sessionDone":1,
    "completion":50
    })
}

async function showPayment(){

    const paymentDisplay = document.querySelector('#payment')
        
    paymentDisplay.outerHTML="<span>"+"Rs. "+dashboardData().payment+"</span>"
}