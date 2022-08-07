const form = document.querySelector("form");

form.addEventListener("submit", event => {
     event.preventDefault();
    const username = document.querySelector("[name='username']").value;
    const email = document.querySelector("[name='email']").value;
    const password = document.querySelector("[name='password']").value;
    const confirmpassword = document.querySelector("[name='confirmPassword']").value;

    const errors = [];
    if(username === '') 
         errors.push("Username can't be blank");
    if(email ==='') 
         errors.push("Email can't be blank");
    if(password === '')    
         errors.push("Password can't be blank");
    if(password !== confirmpassword)  
        errors.push("wrong password");
                  



});


