var hr = 0;
var min = 0;
var sec = 0;
var h 
var m 
var s

document.getElementById("start").addEventListener("click", function () {
  var start = setInterval(function () {
      sec = sec + 1
    console.log(sec);
    if(sec === 60){
        sec = 0
        min = min + 1
    }
    if (sec < 10) {
      s = "0" + sec;
    } else {
      s = sec;
    }
    if(min < 10){
        m = "0" + min
    } else{
        m = min
    }
    if (min === 60) {
      min = 0;
      hr = hr + 1;
    }
    if (hr < 10) {
      h = "0" + hr;
    } else {
      h = hr;
    }
    document.getElementById("watch").innerHTML = h + " : " + m + " : " + s
  }, 1000);
  document.getElementById("stop").addEventListener("click", function(){
      clearInterval(start)
  })
  document.getElementById("reset").addEventListener("click", function(){
      hr = 0;
       min = 0;
       sec = 0;
      clearInterval(start)
      document.getElementById("watch").innerHTML = "00 : 00 : 00"
  })
});
