//Assignment1
// Given an array with name, age and gender convert it to object and print keys and values by looping over it using for in loop

var objt = {};
var array = ["Shwetha", 24, "F"];
var key = ["name", "age", "gender"];
for (var i = 0; i < array.length; i++) {
  objt[key[i]] = array[i];
}
console.log(objt);

//Assignment2
//Given a string , calculate the occurrence of each and every character and print the output.

var str = "shwetha";
var obj = {};
for (var i = 0; i < str.length; i++) {
  if (obj[str[i]]) {
    obj[str[i]] = obj[str[i]] + 1;
  } else {
    obj[str[i]] = 1;
  }
}
console.log(obj);

//Assignment3
//Given user's names and their phone numbers , query the given user and find the phone number .

var user = [
  {
    name: "Shwetha",
    phoneNum: 9876543210,
  },
  {
    name: "Prakash",
    phoneNum: 7689245120,
  },
];
for (var i = 0; i < user.length; i++) {
  if (user[i].name === "Shwetha") {
    console.log(user[i].phoneNum);
  }
}

//Assignment4
//Given an array , find the unique elements .
var count = 1;
var obj = {};
var arr = [10, 20, 30, 10, 40, -2, 30];
for (var i = 0; i < arr.length; i++) {
  if (!obj[arr[i]]) {
    obj[arr[i]] = count;
  } else {
    delete obj[arr[i]];
  }
}
console.log(Object.keys(obj));

//Assignment5
//Given two words (small case) if they are anagrams print "TRUE" otherwise "FALSE" 
var word1 = "coronavirus";
var word2 = "carnivorous";

var x = word1.split("").sort().join("");
var y = word2.split("").sort().join("");

if (x === y) {
  console.log("true");
} else {
  console.log("false");
}

//Assignment6
//Given an employees database query the employees who are from hyderabad and having experience more than 3 years

var database = [
  {
    name: "vicky",
    age: 24,
    married: false,
    address: { city: "hyderabad", state: "andhra", pincode: "516003" },
    skills: ["react", "html", "nodejs"],
    experience: 2,
  },
  {
    name: "nirmal",
    age: 20,
    married: true,
    address: { city: "hyderabad", state: "telengana", pincode: "500004" },
    skills: ["css", "figma"],
    experience: 4,
  },
  {
    name: "neeraj",
    age: 26,
    married: false,
    address: { city: "bengaluru", state: "karnataka", pincode: "510006" },
    skills: ["aws", "angular", "nodejs"],
    experience: 5,
  },
];

for (var i = 0; i < database.length; i++) {
  if (database[i].experience > 3 && database[i].address.city === "hyderabad") {
    console.log(database[i].name);
  }
}
