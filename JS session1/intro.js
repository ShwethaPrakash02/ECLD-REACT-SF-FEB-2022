//Assign1:Print your name, age, Marital Status by storing them in different variables
var name = "Shwetha";
console.log(name);
var age = 24;
console.log(age);
var maritalStatus = false;
console.log(maritalStatus);

//Assign2:Define 3 variables to store your gender, height (in inches ), non-veg (food preference)
//Print all the three variable types (one per line in the given order)
var gender = "female";
console.log(gender);
var height = 62.992;
console.log(height);
var nonVeg = true;
console.log(nonVeg);

//Assign3: Given the year of birth of a person, calculate his/her age (You can store the current year in a variable)
var yearOfBirth = 1997;
var currentYear = 2022;
age = currentYear - yearOfBirth;
console.log(age);

//Assign4: Given the 3 subjects marks of a particular student calculate the total marks obtained
var maths = 90;
var science = 85;
var english = 95;
totalmarks = maths + science + english;
console.log(totalmarks);

//Assign5: Given the sides of a rectangle print the perimeter and area
var length = 8;
var breadth = 4;
perimeter_of_a_rectangle = 2 * (length + breadth);
area_of_a_rectangle = length * breadth;
console.log(perimeter_of_a_rectangle);
console.log(area_of_a_rectangle);

//Assign6: Given a number of total months find the number of months remaining after converting the total months to years
var totalMonths = 32;
remaining_months = totalMonths % 12;
console.log(remaining_months);

//Assign7: Given the Principal Amount, Interest Percentage and Time calculate the simple interest amount
var principalAmount = 50000;
var rateOfInterest = 8;
var time = 1;
simple_interest = (principalAmount * rateOfInterest * time) / 100;
console.log(simple_interest);

//Assign8: Given the marks of 6 students in a class calculate their average marks
var mark1 = 35;
var mark2 = 28;
var mark3 = 44;
var mark4 = 60;
var mark5 = 95;
var mark6 = 20;
averageMarks = (mark1 + mark2 + mark3 + mark4 + mark5 + mark6) / 6;
console.log(averageMarks);

//Assign9: Given 3 product prices and their quantity calculate the total amount of items in the cart
var priceOfProduct1 = 100;
var quantityOfProduct1 = 3;
var priceOfProduct2 = 80;
var quantityOfProduct2 = 2;
var priceOfProduct3 = 150;
var quantityOfProduct3 = 5;
total_amount_of_items =
  priceOfProduct1 * quantityOfProduct1 +
  priceOfProduct2 * quantityOfProduct2 +
  priceOfProduct3 * quantityOfProduct3;
  console.log(total_amount_of_items);

//Assign10:Given the item prices and quantity along with tax, discount and tip calculator the total bill amount
var priceOfItem = 2000
var numberOfItems = 4
var taxPercentage = 12
var discountPercentage = 20
var tipPercentage = 8
total_price_before_tax = 8000
total_price_after_tax = 8960
total_price_after_discount = 7168
total_bill_amount = total_price_after_discount*(100-8)/100
console.log(total_bill_amount);
