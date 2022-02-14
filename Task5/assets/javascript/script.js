let str = "Dernegul ";
let arr = str.split("");
document.getElementById("text").innerHTML = arr;
console.log(arr);
for (let i = 0; i < str.length; i++) {
    let arr1 = arr.pop();
    arr.unshift(arr1);
    console.log(arr);
    document.getElementById("text").innerHTML = arr;
}
