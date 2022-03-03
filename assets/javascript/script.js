let username = document.getElementById('username');
let email = document.getElementById('email');
let pwd = document.getElementById('pwd');
let pwd2 = document.getElementById('pwd2');
let usernameErr = document.getElementById('usernameErr');
let emailErr = document.getElementById('emailErr');
let pwdErr = document.getElementById('pwdErr');
let pwd2Err = document.getElementById('pwd2Err');
let btnSubmit = document.getElementById('btnSubmit');
let inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', () => {
        inputs[i].nextElementSibling.style.visibility = 'hidden';
        inputs[i].style.border = '1px solid #ced4da';
        inputs[i].nextElementSibling.nextElementSibling.textContent = '';
    });
}

username.addEventListener('blur', usernameChecker = () => {
    if (username.value == ''){
        usernameErr.textContent = 'Username is required';
        usernameErr.style.color = 'crimson';
        username.style.border = '1px solid crimson';
        username.nextElementSibling.style.visibility = 'visible';
    }
    else if (username.value.length < 6){
        usernameErr.textContent = 'Username must be at least 6 characters';
        username.style.border = '1px solid crimson';
        usernameErr.style.color = 'crimson';
        username.nextElementSibling.style.visibility = 'visible';
    }
    else{
        usernameErr.textContent = '';
        username.nextElementSibling.style.visibility = 'hidden';
        username.style.border = '1px solid #ced4da';
    }
});
email.addEventListener('blur' , emailChecker = () => {
    if (email.value == ''){
        emailErr.textContent = 'Email is required';
        emailErr.style.color = 'crimson';
        email.style.border = '1px solid crimson';
        email.nextElementSibling.style.visibility = 'visible';
    }
    else if (email.value.indexOf('@') == -1){
        emailErr.textContent = 'Email must contain @';
        email.style.border = '1px solid crimson';
        emailErr.style.color = 'crimson';
        email.nextElementSibling.style.visibility = 'visible';
    }
    else{
        emailErr.textContent = '';
        email.nextElementSibling.style.visibility = 'hidden';
        email.style.border = '1px solid #ced4da';
    }
});

pwd.addEventListener('blur' , pwdChecker = () => {
    if (pwd.value == ''){
        pwdErr.textContent = 'Password is required';
        pwdErr.style.color = 'crimson';
        pwd.style.border = '1px solid crimson';
        pwd.nextElementSibling.style.visibility = 'visible';
    }
    else if (pwd.value.length < 6){
        pwdErr.textContent = 'Password must be at least 6 characters';
        pwd.style.border = '1px solid crimson';
        pwdErr.style.color = 'crimson';
        pwd.nextElementSibling.style.visibility = 'visible';
    }
    else{
        pwdErr.textContent = '';
        pwd.nextElementSibling.style.visibility = 'hidden';
        pwd.style.border = '1px solid #ced4da';
    }
});

pwd2.addEventListener('blur' , pwd2Checker = () => {
    if (pwd2.value != pwd.value){
        pwd2.style.border = '1px solid crimson';
        pwd2Err.textContent = 'Password confirmation must match password';
        pwd2Err.style.color = 'crimson';
        pwd2.nextElementSibling.style.visibility = 'visible';
    }
    else if(pwd2.value == ''){
        pwd2.style.border = '1px solid crimson';
        pwd2Err.textContent = 'Password confirmation is required';
        pwd2Err.style.color = 'crimson';
        pwd2.nextElementSibling.style.visibility = 'visible';
    }
    else{
        pwd2.style.border = '1px solid #ced4da';
        pwd2Err.textContent = '';
        pwd2.nextElementSibling.style.visibility = 'hidden';
    }
});

btnSubmit.addEventListener('click' , () => {
    usernameChecker();
    emailChecker();
    pwdChecker();
    pwd2Checker();
});