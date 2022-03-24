function getAge() {
  var age = document.getElementById("age").value
  console.log(age);
  if (age > 18) {
    document.getElementById("age-limit").innerHTML = "You can drive in India!";
  } else if (age < 18) {
    document.getElementById("age-limit").innerHTML = "You can't drive in India";
  } else  {
     document.getElementById("age-limit").innerHTML = "You are just old enough to drive in India!"
  }
}
