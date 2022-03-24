window.addEventListener("load", function () {
  var btn = document.getElementById("btn");
  btn.addEventListener("click", getData);
});
function getData() {
  //   var xhr = new XMLHttpRequest();
  var post = document.getElementById("post").value;
  //   xhr.open("GET", "https://api.zippopotam.us/IN/" + post);
  //   xhr.send();
  //   xhr.onload = function () {
  //     let response = JSON.parse(this.response);
  //     console.log(response);
  //     var container = document.getElementById("container");
  //     var state = document.createElement("span");
  //     state.innerHTML = "State: " + response.places[0].state;
  //     var place = document.createElement("span")
  //     place.innerHTML = "Place name: " + response.places[0]["place name"] + ", "
  //     var latitude = document.createElement("span");
  //     latitude.innerHTML = "Latitude: " + response.places[0].latitude + ", ";
  //     var longitude = document.createElement("span");
  //     longitude.innerHTML = "Longitude: " + response.places[0].longitude + ", ";
  //     var pincode = document.createElement("h1")
  //     pincode.innerHTML = response["post code"]
  //     container.append(pincode, latitude, longitude, place, state);
  //   };
  fetch("https://api.zippopotam.us/IN/" + post)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      var container = document.getElementById("container");
      var state = document.createElement("span");
      state.innerHTML = "State: " + data.places[0].state;
      var place = document.createElement("span");
      place.innerHTML =
        "Place name: " + data.places[0]["place name"] + ", ";
      var latitude = document.createElement("span");
      latitude.innerHTML = "Latitude: " + data.places[0].latitude + ", ";
      var longitude = document.createElement("span");
      longitude.innerHTML = "Longitude: " + data.places[0].longitude + ", ";
      var pincode = document.createElement("h1");
      pincode.innerHTML = data["post code"];
      container.append(pincode, latitude, longitude, place, state);
    })
    .catch((error) => {
      console.log(error);
    });
}
