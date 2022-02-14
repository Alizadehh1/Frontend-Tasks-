let num = document.getElementById("num");
let text = document.getElementById("text");
const btnSubmit = () =>{
    if (num.value <= 19) {
        text.innerText = 19 - num.value;
    }
    else if(num.value > 19){
        text.innerText = 3 * (num.value - 19);
    }
}