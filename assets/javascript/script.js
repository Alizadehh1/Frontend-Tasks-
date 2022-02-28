let fills = document.querySelectorAll(".fill");
let empties = document.querySelectorAll(".empty");












for (let i = 0; i < fills.length; i++) {
    fills[i].addEventListener("dragstart" , dragStart);
    fills[i].addEventListener("dragend" , dragEnd);
}
function dragStart(event) {
    this.classList.add("is-dragging");
    console.log("dragstart");
    event.dataTransfer.setData("text" , this.id);
}
function dragEnd(event) {
    this.classList.remove("is-dragging");
    console.log("dragend");
}
for (let i = 0; i < empties.length; i++) {
    empties[i].addEventListener("dragenter" , dragEnter);
    empties[i].addEventListener("dragleave" , dragLeave);
    empties[i].addEventListener("dragover" , dragOver);
    empties[i].addEventListener("drop" , dropping);
}
function dropping(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    console.log("Drop");
    this.appendChild(document.getElementById(data))
    if (this.classList[0] == "todo") {
        document.getElementById(data).style.backgroundColor = "blue";
    }
    else if (this.classList[0] == "doing" ) {
        document.getElementById(data).style.backgroundColor = "palevioletred";
    }
    else if (this.classList[0] == "done"){
        document.getElementById(data).style.backgroundColor = "green";
    }
}
function dragEnter(event) {
    event.preventDefault();
    console.log("Dragenter");
    this.classList.add("drag-over");
}
function dragLeave(event) {
    event.preventDefault();
    console.log("Dragleave");
    this.classList.remove("drag-over");
}
function dragOver(event) {
    event.preventDefault();
    console.log("over");
    this.classList.add("drag-over");
}