var weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
var d = new Date();
document.getElementById("weekDay").innerText = "Today is : " + weekdays[d.getDay()-1];
document.getElementById("time").innerText = "Current time is : " + d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds()