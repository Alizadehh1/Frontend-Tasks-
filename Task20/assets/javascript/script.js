let num1 = document.getElementById("fnum");
let num2 = document.getElementById("snum");
let text = document.getElementById("text");
const btnSubmit = () => {
    if (num1.value < 0) {
        if (num2.value > 0) {
            text.innerText = true;
        }else{
            text.innerText = false;
        }
    }
    else if (num1.value > 0){
        if (num2.value < 0) {
            text.innerText = true;
        }else{
            text.innerText = false;
        }
    }
}