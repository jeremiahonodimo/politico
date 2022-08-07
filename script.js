const form = document.querySelector("form");

form.addEventListener("submit", event => {
     event.preventDefault();
    const username = document.querySelector("[name='username']").value;
    const email = document.querySelector("[name='email']").value;
    const password = document.querySelector("[name='password']").value;
    const confirmpassword = document.querySelector("[name='confirm password']").value;

    const errors = [];

    if(username === '')
    alert("Username can't be blank");
    if(email ==='') 
         alert("Email can't be blank");
    if(password === '')    
         alert("Password can't be blank");
    if(password !== confirmpassword)  
        alert("wrong Password");
})
