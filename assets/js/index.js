function Randomize() {
    var randomHeight = Math.floor(Math.random()*750);
    var randomWidth = Math.floor(Math.random()*980);
    document.getElementById("myDiv").style.height = randomHeight + "px";
    document.getElementById("myDiv").style.width = randomWidth + "px";
};