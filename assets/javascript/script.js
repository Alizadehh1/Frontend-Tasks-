var num = document.getElementById("dsply");
var num1=0;
var num2=0;
var operator;
var check = false;
function btnDel() {
    num.value = null;
    num1 = 0;
    num2 = 0;
    check = false;
    operator = undefined;
}
function btn3() {
    if (check == true) {
        num.value = num2+3;
    }else{
        num.value+=3;
    }
    if (operator == undefined) {
        num1 = num.value;
    }else{
        num2 = num.value;
    }
    check == false;
}
function btn2() {
    if (check == true) {
        num.value = num2+2;
    }else{
        num.value+=2;
    }
    if (operator == undefined) {
        num1 = num.value;
    }else{
        num2 = num.value;
    }
    check == false;
}
function btn1() {
    if (check == true) {
        num.value = num2+1;
    }else{
        num.value+=1;
    }
    if (operator == undefined) {
        num1 = num.value;
    }else{
        num2 = num.value;
    }
    check == false;
}
function btn0() {
    if (check == true) {
        num.value = num2+0;
    }else{
        num.value+=0;
    }
    if (operator == undefined) {
        num1 = num.value;
    }else{
        num2 = num.value;
    }
    check == false;
}
function btn7() {
    if (check == true) {
        num.value = num2+7;
    }else{
        num.value+=7;
    }
    if (operator == undefined) {
        num1 = num.value;
    }else{
        num2 = num.value;
    }
    check == false;
}
function btn8() {
    if (check == true) {
        num.value = num2+8;
    }else{
        num.value+=8;
    }
    if (operator == undefined) {
        num1 = num.value;
    }else{
        num2 = num.value;
    }
    check == false;
}
function btn9() {
    if (check == true) {
        num.value = num2+9;
    }else{
        num.value+=9;
    }
    if (operator == undefined) {
        num1 = num.value;
    }else{
        num2 = num.value;
    }
    check == false;
}
function btn4() {
    if (check == true) {
        num.value = num2+4;
    }else{
        num.value+=4;
    }
    if (operator == undefined) {
        num1 = num.value;
    }else{
        num2 = num.value;
    }
    check == false;
}
function btn5() {
    if (check == true) {
        num.value = num2+5;
    }else{
        num.value+=5;
    }
    if (operator == undefined) {
        num1 = num.value;
    }else{
        num2 = num.value;
    }
    check == false;
}
function btn6() {
    if (check == true) {
        num.value = num2+6;
    }else{
        num.value+=6;
    }
    if (operator == undefined) {
        num1 = num.value;
    }else{
        num2 = num.value;
    }
    check == false;
}
function btnx() {
    check = true;
    operator = "*";
}
function btnminus() {
    check = true;
    operator = "-";
}
function btnsum() {
    check = true;
    operator = "+";
}
function btndiv() {
    check = true;
    operator = "/";
}
function btnEqual() {
    if (operator == "*") {
        num.value = num1*num2;
    }
    else if (operator == "-") {
        num.value = num1-num2;
    }
    else if(operator == "+"){
        num.value =  parseInt(num1) + parseInt(num2);
    }
    else if(operator == "/"){
        num.value =  num1 / num2;
    }
    num1 = num.value;
    num2 = 0;
}
