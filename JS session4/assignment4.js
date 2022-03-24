//Assignment1
var char = ["edstem", "react", "html", "javascript", "css"];
var count = 0;
for (var i = 0; i < char.length; i++) {
  for (j = 0; j < char[i].length; j++) {
    if (
      char[i][j] === "a" ||
      char[i][j] === "e" ||
      char[i][j] === "i" ||
      char[i][j] === "o" ||
      char[i][j] === "u"
    ) {
      count++;
    }
  }
}
console.log(count);

//Assignment2
var string1 = "eye";
var length = string1.length;
var string2 = "";

for (var i = length - 1; i >= 0; i--) {
  string2 += string1[i];
}

if (string1 === string2) {
  console.log("Yes");
} else {
  console.log("No");
}

//Assignment3
var marks = [95, 86, 66, 94, 58];
var sum = 0;

for (var i = 0; i < marks.length; i++) {
  sum = sum + marks[i];
}

var average = sum / marks.length;
console.log(average);

//Assignment4
var stg = ["edstem", "react", "html", "foodie", "coder"];
var stg1 = []
for (var i = 0; i < stg.length;  i++) {
    if(stg[i].length % 2 ===0){
        stg1.push(stg[i])
    }
  }
  console.log(stg1);

//Assignment5
var nums = [5, 9, 8, 12, 22, 18];

for (i = 0; i < nums.length; i++) {
  if (nums[i] % 3 === 0) {
    nums[i] = "multiple";
  }
}
console.log(nums);

//Assignment6
var arr = [];

for (var i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);

//Assignment7
var sentence = "Edstem technologies located at Kerala";
var word = "";
var result = [];

for (var i = 0; i < sentence.length; i++) {
  if (sentence[i] == " ") {
    result.push(word);
    word = "";
  } else {
    word += sentence[i];
  }
}
result.push(word);
console.log(result);

//Assignment8
var string = "Edstem";
for (var i = 1; i < string.length; i = i + 2) {
  console.log(string[i]);
}

//Assignment9
var sentence = "Coding is easy";
var word = "";
var result = [];

for (var i = 0; i < sentence.length; i++) {
  if (sentence[i] == " ") {
    result.push(word);
    word = "";
  } else {
    word += sentence[i];
  }
}
result.push(word);
console.log(result.length);

//Assignment10
var array = ["react", "html", "edstem"]
var str = "false";
var arr = "react";

for(var i=0; i<array.length; i++) {
    if(arr ===array[i]) {
        str = "true"
    }
}
if(str ==="true"){
    console.log("true");
}else{
    console.log("false");
}