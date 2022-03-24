var outputScreen = document.getElementById("screen")
function number(value){
    outputScreen.value += value
    
}
function calculate() {
    outputScreen.value = eval(outputScreen.value)
}
function clearScreen() {
    outputScreen.value = ""
}
function square() {
    outputScreen.value = Math.pow(outputScreen.value, 2);
}
function del() {
    outputScreen.value = outputScreen.value.slice(0, -1)
}