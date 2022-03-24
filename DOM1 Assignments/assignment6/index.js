function tipCalcy() {
  var amount = Number(document.getElementById("bill_amount").value);
  console.log(typeof amount);
  var perc = Number(document.getElementById("percentage_tip").value);
  console.log(typeof perc);
  if (!amount || !perc) {
    document.getElementById("error").innerHTML =
      "Please fill the necessary field";
  } else {
    var tip = amount * (perc / 100);
    console.log(typeof tip);
    var total = tip + amount;
    console.log(typeof total);

    document.getElementById("tip_amount").value = tip;

    document.getElementById("total_bill").value = total;
  }
}
