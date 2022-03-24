//Assignment1
var num1 = [2, 3, 5, 7, 9];
num1.forEach(function (e) {
  console.log(e * e);
});

//Assignment2
var num2 = [1, 2, 3, 4];

newArray1 = num2.map(function (e) {
  return 2 * e;
});
console.log(newArray1);

//Assignment3
var num3 = [2, 6, 9, 7];
newArray2 = num3.filter(function (e) {
  return e % 3 === 0;
});
console.log(newArray2);

//Assignment4
var num4 = [2, 3, 4];
newArray3 = num4.reduce(function (pro, e) {
  return pro * e;
});
console.log(newArray3);

//Assignment5
var stg = ["apple", "orange", "grapes"];
stg.forEach(function (e) {
  console.log(e + "-" + e.length);
});

//Assignment6
var arr = ["Edstem", "Tech"];
newArray4 = arr.map(function(e){
  return e[0]
})
console.log(newArray4);

//Assignment7
var array = ["assignment", "problem", "media", "upload"];
newArray5 = array.filter(function(e){
  return e[0] === "a" || e[e.length-1] === "a"
})
console.log(newArray5);

//Assignment8
var string = ["edstem", "tech"];
newWord = string.reduce(function(str, e){
  return str + "_" + e 
})
console.log(newWord);

//Assignment9
var user = {
  name: "Shwetha",
  age: 24,
  gender: "Female",
  skills: ["HTML", "CSS", "JAVASCRIPT"],
  addskill: function (skill) {
    return this.skills.push(skill);
  },
};
user.addskill("REACT");
console.log(user.skills);
