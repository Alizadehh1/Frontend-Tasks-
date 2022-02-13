setInterval ( () => {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var hourClockwise = document.getElementById("hour-clockwise").style;
    var minuteClockwise = document.getElementById("minute-clockwise").style;
    var secondClockwise = document.getElementById("second-clockwise").style;
    var myHour = document.getElementById("hour");
    var myMinute = document.getElementById("minute");
    var mySecond = document.getElementById("second");
    if (hour < 10) {
        myHour.innerText = "0" + hour + ":"
    }else{
        myHour.innerText = hour + ":";
    }
    if (minute < 10) {
        myMinute.innerText = "0" + minute + ":";
    }else{
        myMinute.innerText = minute + ":";
    }
    if (second <10) {
        mySecond.innerText = "0" + second;
    }else{
        mySecond.innerText = second;
    }
    var h_rotation = 30 * hour + minute / 2;
    var m_rotation = 6 * minute;
    var s_rotation = 6 * second;
    hourClockwise.transform = `rotate(${h_rotation}deg)`;
    minuteClockwise.transform = `rotate(${m_rotation}deg)`;
    secondClockwise.transform = `rotate(${s_rotation}deg)`;
},1000)
