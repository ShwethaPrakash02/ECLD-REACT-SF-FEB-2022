document.getElementById("stopBtn").onclick = redSignal;
document.getElementById("readyBtn").onclick = yellowSignal;
document.getElementById("goBtn").onclick = greenSignal;

function redSignal() {
  clearLight();
  document.getElementById("stop").style.backgroundColor = "red";
}
function yellowSignal() {
  clearLight();
  document.getElementById("ready").style.backgroundColor = "yellow";
}
function greenSignal() {
  clearLight();
  document.getElementById("go").style.backgroundColor = "green";
}
function clearLight() {
  document.getElementById("stop").style.backgroundColor = "black";
  document.getElementById("ready").style.backgroundColor = "black";
  document.getElementById("go").style.backgroundColor = "black";
}
