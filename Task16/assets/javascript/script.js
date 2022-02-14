let num1 = document.getElementById("fnum");
let num2 = document.getElementById("snum");
let text = document.getElementById("text");
const sumOfNum = () =>{
    if (num1.value == num2.value) {
        text.innerText = 3 * (parseInt(num1.value) + parseInt(num2.value));
    }else{
        text.innerText = parseInt(num1.value) + parseInt(num2.value);
    }
}