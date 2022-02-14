function check() {
    let num = document.getElementById("num").value;
    let randomNum = Math.ceil(Math.random()*10);
    if (num == randomNum) {
        document.getElementById("text").innerText = "Good Work!";
    }
    else{
        document.getElementById("text").innerText = "Not Matched!";
    }
}
