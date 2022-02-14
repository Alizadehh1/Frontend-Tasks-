function leapYear() {
    let year = document.getElementById("year").value;
    if (year % 4 == 0) {
        document.getElementById("text").innerText = "Leap Year";
    }
    else{
        document.getElementById("text").innerText = "Not Leap year!";
    }
}
