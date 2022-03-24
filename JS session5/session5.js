//Assignment1
var stg = ["HTML", "CSS", "JAVA", "JS"];
var str = ""
for(var i =0; i<stg.length; i++){
  str += stg[i]+","
}
str += stg[stg.length-1]
console.log(str);

//Assignment2
var count = 0;
var arr = ["HTML", "CSS", "JAVA", "JS", "ANDROID"];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    count++;
  }
}
console.log(count);

//Assignment3
var score = [100, 20, 31, 150, 39, 72];
var highest = score[0]
var lowest =score[0]
for(var i=0; i<score.length; i++){
  if(score[i]>=highest){
    highest = score[i]
  } else if(score[i]<=lowest){
    lowest=score[i]
  }
}
console.log(highest, lowest);

//Assignment4
var mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var rows = mat.length;
console.log(rows);
var col = mat[0].length;
console.log(col);

//Assignment5
var array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array[i].length; j++) {
    if (i == j) {
      console.log(array[i][j]);
    }
  }
}

//Assignment6
var string1 = ["assignment", "problem", "media", "upload"];
for(var i=0; i<string1.length; i++) {
  if(string1[i][0]=="a" || string1[i][string1[i].length-1]=="a") {
    console.log(string1[i]);
  }
}
//Assignment7
var arr =["edstem", "tech"]
var st = ""
for(var i=0; i<arr.length; i++) {
  if(i==0){
    st=st+arr[i]
  }else{
    st=st+'_'+arr[i]
  }
}
console.log(st);

//Assignment8
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var sum1 = 0;
var sum2 = 0;
for (var i = 0; i < matrix.length; i++) {
  for (var j = 0; j < matrix[i].length; j++) {
    if (i == j) {
      sum1 = sum1 + matrix[i][j];
    }
    if (i == matrix.length - j - 1) {
      sum2 = sum2 + matrix[i][j];
    }
  }
}
console.log(sum2 - sum1);

//Assignment9
var num = [2, 3, 4];
var pro = 1;
for (var i = 0; i < num.length; i++) {
  pro *= num[i];
}
console.log(pro);

//Assignment10
var input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (var i = 0; i < input.length; i++) {
  for (var j = 0; j < input[i].length; j++) {
    if (i == j) {
      console.log(input[i][input[i].length - 2]);
    }
  }
}
