//Assignment1
function addNumbers(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

console.log(addNumbers(5, 2));

//Assignment2
function difference(no1, no2) {
  var diff = no1 - no2;
  if (diff < 0) {
    return -1 * diff;
  } else {
    return diff;
  }
}
console.log(difference(4, 18));

//Assignment3
function isOdd(num) {
  if (num % 2 == 1) {
    return true;
  } else {
    return false;
  }
}
console.log(isOdd(5));

//Assignment4
function oddNumbers(limit) {
  for (var i = 1; i <= limit; i = i + 2) {
    console.log(i);
  }
}
oddNumbers(21);

//Assignment5
var array = [2, 4, 6, 8];
function average(array) {
  if (array.length === 0) {
    return 0;
  } else {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    average = sum / array.length;
    console.log(average);
  }
}
average(array);

//Assignment6
function char(stg) {
  return stg.toLowerCase();
}
console.log(char("CODING"));
