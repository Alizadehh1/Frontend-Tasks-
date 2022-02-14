let d = new Date();
let month = d.getMonth()+1;
let day = d.getDate();
let year = d.getFullYear();
if (month<10) {
    month = "0" + month;
}
if (day<10) {
    day = "0" + day;
}
let year1 = month + "-" + day + "-" + year;
let year2 = month + "/" + day + "/" + year;
let year3 = day + "-" + month + "-" + year;
let year4 = day + "/" + month + "/" + year;

document.getElementById("year1").innerText = year1;
document.getElementById("year2").innerText = year2;
document.getElementById("year3").innerText = year3;
document.getElementById("year4").innerText = year4;