window.addEventListener("load", function () {
  var btn = document.getElementById("btn");
  btn.addEventListener("click", getData);
});
function getData() {
  // var xhr = new XMLHttpRequest();
  var city = document.getElementById("city").value
  // xhr.open(
  //   "GET",
  //   "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=3d603b309bcf067a107d8d0d42943877"
  // );
  // xhr.send();
  // xhr.onload = function () {
  //   var response = JSON.parse(this.response);
  //   console.log(response);

  //   var container = document.getElementById("container");
  //   var place = document.createElement("p");
  //   place.innerHTML = response.name;
  //   var temp = document.createElement("span");
  //   temp.innerHTML ="Temp: " + Math.round(response.main.temp - 273.15) + "&#8451;, ";
  //   var wind = document.createElement("span");
  //   wind.innerHTML ="Wind speed: " + response.wind.speed + " m/s, ";
  //   var clouds = document.createElement("span");
  //   clouds.innerHTML ="Clouds: " + response.clouds.all + "%";
  //   container.append(place, temp, wind, clouds);
  // };
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=045fc3b4cd84234220adc6d0f0eafddc`
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((resp) => {
      console.log(resp);
      var container = document.getElementById("container");
      var place = document.createElement("p");
      place.innerHTML = resp.name;
      var temp = document.createElement("span");
      temp.innerHTML =
        "Temp: " + Math.round(resp.main.temp - 273.15) + "&#8451;, ";
      var wind = document.createElement("span");
      wind.innerHTML = "Wind speed: " + resp.wind.speed + " m/s, ";
      var clouds = document.createElement("span");
      clouds.innerHTML = "Clouds: " + resp.clouds.all + "%";
      container.append(place, temp, wind, clouds);
    })
    .catch((error) => {
      console.log("Rejected", error);
    });
}
