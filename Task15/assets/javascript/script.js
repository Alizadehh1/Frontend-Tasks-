let num = document.getElementById("num");
let text = document.getElementById("text");
btnSubmit = () =>{
    if (num.value <= 13) {
        return text.innerText = 13 - num.value;
    }
    else if (num.value > 13) {
        return text.innerText = 2 * (num.value - 13);
    }
}
