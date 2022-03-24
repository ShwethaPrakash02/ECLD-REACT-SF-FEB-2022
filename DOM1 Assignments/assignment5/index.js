function increase(){
    var size = document.getElementById("increase").value;
    if (size === "+"){
        var image = document.getElementById("img");
        actualWidth = image.clientWidth;
        image.style.width = actualWidth + 5 + "px"
    }
}
function decrease() {
    var size = document.getElementById("decrease").value;
    if(size === "-"){
        var image = document.getElementById("img");
        actualWidth = image.clientWidth;
        image.style.width = actualWidth - 5 + "px";
    }

    }
