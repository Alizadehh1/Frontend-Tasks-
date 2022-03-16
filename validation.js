let username = document.getElementById('username');
let email = document.getElementById('email');
let pwd = document.getElementById('pwd');
let pwd2 = document.getElementById('pwd2');
let securityCode = document.querySelector('#securityCode');
let usernameErr = document.getElementById('usernameErr');
let emailErr = document.getElementById('emailErr');
let pwdErr = document.getElementById('pwdErr');
let pwd2Err = document.getElementById('pwd2Err');
let securityCodeErr = document.querySelector('#security-err')
let btnSubmit = document.getElementById('btnSubmit');
let formGroup = document.querySelectorAll('.form-group');
let inputs = document.querySelectorAll('input');
let registerSuccess = document.querySelector('.register-success');
let checker = false;

let firstNum = document.querySelector('.firstNum');
let secondNum = document.querySelector('.secondNum');
let thirdNum = document.querySelector('.thirdNum');
let fourthNum = document.querySelector('.fourthNum');

firstNum.textContent = Math.floor(Math.random() * 10);
secondNum.textContent = Math.floor(Math.random() * 10);
thirdNum.textContent = Math.floor(Math.random() * 10);
fourthNum.textContent = Math.floor(Math.random() * 10);

username.addEventListener('focus', () => {
    username.nextElementSibling.style.visibility = 'hidden';
    username.style.border = '1px solid #ced4da';
    username.nextElementSibling.nextElementSibling.textContent = '';
    checker = false;
});

email.addEventListener('focus', () => {
    email.nextElementSibling.style.visibility = 'hidden';
    email.style.border = '1px solid #ced4da';
    email.nextElementSibling.nextElementSibling.textContent = '';
    checker = false;
});

pwd.addEventListener('focus', () => {
    pwd.nextElementSibling.style.visibility = 'hidden';
    pwd.style.border = '1px solid #ced4da';
    pwd.nextElementSibling.nextElementSibling.textContent = '';
    checker = false;
});

pwd2.addEventListener('focus', () => {
    pwd2.nextElementSibling.style.visibility = 'hidden';
    pwd2.style.border = '1px solid #ced4da';
    pwd2.nextElementSibling.nextElementSibling.textContent = '';
    checker = false;
});

securityCode.addEventListener('focus', () => {
    securityCode.nextElementSibling.style.visibility = 'hidden';
    securityCode.style.border = '1px solid #ced4da';
    securityCode.nextElementSibling.nextElementSibling.textContent = '';
});

username.addEventListener('blur', usernameChecker = () => {
    if (username.value == ''){
        usernameErr.textContent = 'Username is required';
        usernameErr.style.color = 'crimson';
        username.style.border = '1px solid crimson';
        username.nextElementSibling.style.visibility = 'visible';
        checker = true;
    }
    else if (username.value.length < 6){
        usernameErr.textContent = 'Username must be at least 6 characters';
        username.style.border = '1px solid crimson';
        usernameErr.style.color = 'crimson';
        username.nextElementSibling.style.visibility = 'visible';
        checker = true;
    }
    else{
        usernameErr.textContent = '';
        username.nextElementSibling.style.visibility = 'hidden';
        username.style.border = '1px solid #ced4da';
        checker = false;
    }
});
email.addEventListener('blur' , emailChecker = () => {
    if (email.value == ''){
        emailErr.textContent = 'Email is required';
        emailErr.style.color = 'crimson';
        email.style.border = '1px solid crimson';
        email.nextElementSibling.style.visibility = 'visible';
        checker = true;
    }
    else if (email.value.indexOf('@') == -1){
        emailErr.textContent = 'Email must contain @';
        email.style.border = '1px solid crimson';
        emailErr.style.color = 'crimson';
        email.nextElementSibling.style.visibility = 'visible';
        checker = true;
    }
    else{
        emailErr.textContent = '';
        email.nextElementSibling.style.visibility = 'hidden';
        email.style.border = '1px solid #ced4da';
        checker = false;
    }
});

pwd.addEventListener('blur' , pwdChecker = () => {
    if (pwd.value == ''){
        pwdErr.textContent = 'Password is required';
        pwdErr.style.color = 'crimson';
        pwd.style.border = '1px solid crimson';
        pwd.nextElementSibling.style.visibility = 'visible';
        checker = true;
    }
    else if (pwd.value.length < 6){
        pwdErr.textContent = 'Password must be at least 6 characters';
        pwd.style.border = '1px solid crimson';
        pwdErr.style.color = 'crimson';
        pwd.nextElementSibling.style.visibility = 'visible';
        checker = true;
    }
    else{
        pwdErr.textContent = '';
        pwd.nextElementSibling.style.visibility = 'hidden';
        pwd.style.border = '1px solid #ced4da';
        checker = false;
    }
});

pwd2.addEventListener('blur' , pwd2Checker = () => {
    if (pwd2.value != pwd.value){
        pwd2.style.border = '1px solid crimson';
        pwd2Err.textContent = 'Password confirmation must match password';
        pwd2Err.style.color = 'crimson';
        pwd2.nextElementSibling.style.visibility = 'visible';
        checker = true;
    }
    else if(pwd2.value == ''){
        pwd2.style.border = '1px solid crimson';
        pwd2Err.textContent = 'Password confirmation is required';
        pwd2Err.style.color = 'crimson';
        pwd2.nextElementSibling.style.visibility = 'visible';
        checker = true;
    }
    else{
        pwd2.style.border = '1px solid #ced4da';
        pwd2Err.textContent = '';
        pwd2.nextElementSibling.style.visibility = 'hidden';
        checker = false;
    }
});

usernameorEmailExists = () => {
    usernameErr.textContent = 'Username or Email already exist';
    usernameErr.style.color = 'crimson';
    username.style.border = '1px solid crimson';
    username.nextElementSibling.style.visibility = 'visible';

    emailErr.textContent = 'Username or Email already exist';
    emailErr.style.color = 'crimson';
    email.style.border = '1px solid crimson';
    email.nextElementSibling.style.visibility = 'visible';

    checker = true;
}

btnSubmit.addEventListener('click' , () => {
    usernameChecker();
    emailChecker();
    pwdChecker();
    pwd2Checker();
    if (checker == false) {
        let userData = {
            username: username.value,
            email: email.value,
            password: pwd.value
        };
        saveData(userData);
    }
});

function saveData(userData) {  
    if (localStorage.getItem('userDatas') === null) {
        localStorage.setItem('userDatas', JSON.stringify([]));
    }
    let ourDatas = JSON.parse(localStorage.getItem('userDatas'));
    for (let i = 0; i < ourDatas.length; i++) {
        if (ourDatas[i].username == userData.username || ourDatas[i].email == userData.email) {
            usernameorEmailExists();
            return;
        }
    }
    ourDatas.push(userData);
    localStorage.setItem('userDatas', JSON.stringify(ourDatas));
}