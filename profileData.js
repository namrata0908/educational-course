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

async function passData() {

    client = {
        pwd:formData2.pwd.value,
        newpwd:formData2.newpwd.value,
        token: localStorage.getItem('login_session')
    };
    userDetails = JSON.stringify(client);
    
    res=await fetch("http://localhost:5000/setting/pwd",
                    {
                        method:'POST',  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                    },body:userDetails});
    
    res=await res.json();
    if(res.code===200)
    {   
        alert("Password Updated Successfully\n Login Again")
        localStorage.removeItem('login_session')
        window.location.href = "/register"
    }
    else if(res.code===401){
        alert("Old Password Is Wrong")
    }
    else{
        alert("Access Denied\nLogin Again")
        localStorage.removeItem('login_session')
        window.location.href = "/register"
    }
    
}

