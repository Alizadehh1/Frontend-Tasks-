let usernameOrEmail = document.getElementById('username-or-email');
let password = document.getElementById('pwd');
let securityCode = document.querySelector('#securityCode');
let btnSubmit = document.querySelector('.btnSubmit')
let usernameorEmailErr = document.getElementById('username-or-email-err');
let passwordErr = document.getElementById('pwd-err');
let securityCodeErr = document.querySelector('#security-err')
let firstNum = document.querySelector('.firstNum');
let secondNum = document.querySelector('.secondNum');
let thirdNum = document.querySelector('.thirdNum');
let fourthNum = document.querySelector('.fourthNum');

firstNum.textContent = Math.floor(Math.random() * 10);
secondNum.textContent = Math.floor(Math.random() * 10);
thirdNum.textContent = Math.floor(Math.random() * 10);
fourthNum.textContent = Math.floor(Math.random() * 10);

usernameOrEmail.addEventListener('focus', () => {
    usernameOrEmail.nextElementSibling.style.visibility = 'hidden';
    usernameOrEmail.style.border = '1px solid #ced4da';
    usernameOrEmail.nextElementSibling.nextElementSibling.textContent = '';
});

password.addEventListener('focus', () => {
    password.nextElementSibling.style.visibility = 'hidden';
    password.style.border = '1px solid #ced4da';
    password.nextElementSibling.nextElementSibling.textContent = '';
});

securityCode.addEventListener('focus', () => {
    securityCode.nextElementSibling.style.visibility = 'hidden';
    securityCode.style.border = '1px solid #ced4da';
    securityCode.nextElementSibling.nextElementSibling.textContent = '';
});

usernameorEmailIncorrect = () => {
    usernameorEmailErr.textContent = 'Username or Email incorrect';
    usernameorEmailErr.style.color = 'crimson';
    usernameOrEmail.style.border = '1px solid crimson';
    usernameOrEmail.nextElementSibling.style.visibility = 'visible';
}

incorrectPassword = () => {
    passwordErr.textContent = 'Incorrect password';
    passwordErr.style.color = 'crimson';
    password.style.border = '1px solid crimson';
    password.nextElementSibling.style.visibility = 'visible';

}

incorrectSecurityCode = () => {
    securityCodeErr.textContent = 'Incorrect security code';
    securityCodeErr.style.color = 'crimson';
    securityCode.style.border = '1px solid crimson';
    securityCode.nextElementSibling.style.visibility = 'visible';
}



btnSubmit.addEventListener('click' , () => {
    let userDatas = JSON.parse(localStorage.getItem('userDatas'));
    
    if (firstNum.textContent + secondNum.textContent + thirdNum.textContent + fourthNum.textContent == securityCode.value){
        for (let i = 0; i < userDatas.length; i++) {
            if (userDatas[i].username == usernameOrEmail.value || userDatas[i].email == usernameOrEmail.value) {
                if (userDatas[i].password == password.value) {
                    location.replace('/page-account.html');
                    return;
                }else{
                    incorrectPassword();
                    return;
                }
            }
        }
        usernameorEmailIncorrect();
    }else{
        incorrectSecurityCode();
    } 
});



