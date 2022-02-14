
// function check() {
//     var celsi = document.getElementById("celsius").value;
//     var fahren = document.getElementById("fahrenheit").value;
//     if (celsi == "") {
//        fToc();
//     }
//     else if(fahren == "" ){
//         cTof();
//     }
//     else{
//         return;
//     }
//     // if (fahren == "") {
//     //     return cTof();
//     // }
// }
function cTof() {
    var celsi = document.getElementById("celsius").value;
    document.getElementById("fahrenheit").value = (celsi * 9/5) + 32 + "°F";
}
function fToc() {
    var fahren = document.getElementById("fahrenheit").value;
    document.getElementById("celsius").value = (fahren - 32) * 5/9 + "°C";
}
