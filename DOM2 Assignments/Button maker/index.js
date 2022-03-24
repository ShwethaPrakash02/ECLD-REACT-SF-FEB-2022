function btn() {
  var backgroundColor = document.getElementById("background-color").value;
  console.log(backgroundColor);
  var fontcolor = document.getElementById("font-color").value;
  console.log(fontcolor);
  var fontsize = document.getElementById("font-size").value;
  console.log(fontsize);
  var fontweight = document.getElementById("font-weight").value;
  console.log(fontweight);
  var padding = document.getElementById("padding").value;
  console.log(padding);
  var borderRadius = document.getElementById("border").value;
  console.log(borderRadius);

  var btn1 = document.createElement("button");
  btn1.innerHTML = "Custom Button";
  btn1.className = "newbtn1";
  document.querySelector("#container").append(btn1);

  btn1.style.backgroundColor = backgroundColor;
  btn1.style.color = fontcolor;
  btn1.style.fontSize = fontsize;
  btn1.style.fontWeight = fontweight;
  btn1.style.padding = padding;
  btn1.style.borderRadius = borderRadius;
}
