async function postData() {

    client = {
        firstname:formData.fname.value,
        lastname:formData.lname.value,
        password:formData.pwd.value,
        phone:formData.phone.value,
        email:formData.email.value
    };
    userDetails = JSON.stringify(client);
    
    res=await fetch("http://localhost:5000/register",
                    {
                        method:'POST',  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                    },body:userDetails});
    
    res=await res.json();
    if(res.code===201)
    {   console.log('redirect')
        var redirect = confirm('Registration Sucessful\n\nLogin to Continue');
    if(redirect){
        const container = document.querySelector(".container");
        container.classList.remove("sign-up-mode");
    }  //redirecting user to login page using relative addressing
    }
    else{
        emailH2.style.display='inline';			//Email already Exists error
    }
    
}

async function lData(){
    client2 = {
        email:loginData.lmail.value,
        password:loginData.lpwd.value
    };
    
    loginDetails = JSON.stringify(client2);

    res = await fetch("http://localhost:5000/login",
            {
            method:'POST',  headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
            },body:loginDetails});

    res = await  res.json();
    localStorage.setItem('login_session',res.token)
    console.log(res)
    if(res.code===202){
        window.location.href='/dashboard'
    }
    if(res.code===200){
        const signin = document.querySelector('#signin')
        signin.outerHTML = "<span style="+"color:red"+">Wrong Password or Email</span>"
        
    }
    if(res.code===203){
        const signin = document.querySelector('#signin')
        signin.outerHTML = "<span style="+"color:red"+">User Doesn't Exist</span>"
    }

}