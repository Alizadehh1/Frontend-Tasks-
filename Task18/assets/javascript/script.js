let num1 = document.getElementById("fnum");
let num2 = document.getElementById("snum");
let text = document.getElementById("text");
const btnSubmit = () =>{
    if (num1.value == 50 || num2.value == 50) {
        text.innerText = true;
    }else if(parseInt(num1.value) + parseInt(num2.value) == 50){
        text.innerText = true;
    }
    else{
        text.innerText = false;
    }
}