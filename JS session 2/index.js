//Assignment1

var year = 900;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("LEAP YEAR");
    } else {
      console.log("NOT LEAP YEAR");
    }
  } else {
    console.log("LEAP YEAR");
  }
} else {
  console.log("NOT LEAP YEAR");
}

//Assignment2

var yearOfBirth = 1997;
var age = 2022 - yearOfBirth;

if (age < 18) {
  console.log("NO");
} else {
  console.log("YES");
}

// Assignment3
var ch = 'E'
if (ch === 'a' || ch ==='e' || ch ==='i' || ch==='o' || ch ==='u' || ch ==='A' || ch ==='E' || ch ==='I' || ch ==='O' || ch ==='U') {
    console.log("V");
} else {
    console.log("C");
}


//Assignment4
var pincode = 6703077;
if (pincode.length === 6) {
  console.log("VALID");
} else {
  console.log("INVALID");
}

//Assignment5
var state = "Kerala"
if (state === "Kerala" ||state ==="Tamil Nadu" ||state ==="Karnataka" ||state ==="Andhra Pradesh"|| state ==="Telangana") {
  console.log(state + " belongs to South");
} else if( state === "Rajasthan" ||state ==="Gujarat" ||state ==="Maharashtra" ||state ==="Goa") {
  console.log(state + " belongs to West");
} else if(state ==="Jammu Kashmir"||state ==="Himachal Pradesh" ||state ==="Punjab" ||state ==="Hariyana"||state ==="Uttarakhand"||state ==="Uttar Pradesh"||state ==="Madhya Pradesh" ||state ==="Chattisgarh") {
  console.log(state + " belongs to North");
} else if (state ==="Bihar"||state ==="Jharkhand"||state ==="West Bengal"||state ==="Sikkim"||state ==="Assam"||state ==="Arunachal Pradesh"||state ==="Meghalaya"||state ==="Nagaland"||state ==="Manipur"||state ==="Tripura"||state ==="Mizoram") {
  console.log(state + " belongs to East");
} else {
  console.log("Not Valid");
}

//Assignment6
var number = 7
var result = number % 2 ===0 ? "EVEN" : "ODD"
console.log(result);

//Assignment7
var A = 4
var B = 4
var result1 = A > B ? "A > B" : A < B ? "A < B" : "A = B"
console.log(result1);

//Assignment8

var size = "L"
if (size === "S"){
  console.log("Small");
} else if (size ==="M") {
  console.log("Medium");
} else if (size ==="L") {
  console.log("Large");
} else if (size ="XL") {
  console.log("Extra Large");
} else{
  console.log("None");
}