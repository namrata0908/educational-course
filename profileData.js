async function postData() {

    client = {
        firstname:formData.fname.value,
        lastname:formData.lname.value,
        phone:formData.phone.value,
        email:formData.email.value,
        token: localStorage.getItem('login_session')
    };
    userDetails = JSON.stringify(client);
    
    res=await fetch("http://localhost:5000/setting",
                    {
                        method:'POST',  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                    },body:userDetails});
    
    res=await res.json();
    if(res.code===200)
    {   
        alert("Profile Updated Successfully\n Login Again")
        localStorage.removeItem('login_session')
        window.location.href = "/register"
    }
    else{
        alert("Access Denied\n Login Again")
        localStorage.removeItem('login_session')
        window.location.href = "/register"
    }
    
}

