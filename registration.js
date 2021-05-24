async function postData(url = '/register', userDetails) {

    client = {
        fname:formData.fname.value,
        password:formData.pwd.value,
        phone:formData.phone.value,
        email:formData.email.value
    };
    
    userDetails = JSON.stringify(client);
    
    res=await fetch("http://localhost:3010/register",
                    {
                        method:'POST',  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                    },body:userDetails});
    
    res=await res.json();
    confirm(res.fname)
    if(res.code===201)
    {var redirect = confirm('Registration Sucessful\n\nLogin to Continue');
    if(redirect)
    window.location = "./login.html"  //redirecting user to login page using relative addressing
    }
    else{
        emailH2.style.display='inline';			//Email already Exists error
    }
    
    
    
    
    
    }