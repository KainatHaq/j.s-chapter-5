alert("hello world");
//Q#1
//Write a program that take two numbers &
//add them in a new variable. Show the result in your browser.

document.write('<h2> Familiar Expression </h2>');

var num1 = 5;
var num2 = 3;
let add = num1 + num2;
document.write(`Sum of ${num1} and ${num2} is ${add} <br>`);


/*Q# 2 :
Repeat task1 for subtraction,
/multiplication, division & modulus.*/

// subtraction:
let subtract = num1 - num2;
document.write(`Subtraction of ${num1} and ${num2} is ${subtract}  </br>`);
// multiplication:
let multiplication = num1 * num2;
document.write(`Multiplication of ${num1} and ${num2} is ${multiplication}  </br>`);
// division:
let division = num1 / num2;
document.write(`Division of ${num1} and ${num2} is ${division}  </br>`);
// modulus:
let modulus = num1 % num2;
document.write(`Modulus of ${num1} and ${num2} is ${modulus}   </br> </br>`);



//Question 3:
// using JS Mathematic Expressions
// i. Declare a variable.
// ii. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// iii. Initialize the variable with some number.
// iv. Show the value of variable in your browser like “Initial
// value: 5”.
// v. Increment the variable.
// vi. Show the value of variable in your browser like “Value
// after increment is: 6”.
// vii. Add 7 to the variable.
// viii. Show the value of variable in your browser like “Value
// after addition is: 13”.
// xi. Decrement the variable.
// x. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// xi. Show the remainder after dividing the variable’s value
// by 3.
// xii. Output : “The remainder is : 0”.

var value;
document.write(`Value after variable declaration is ${value} </br>`);
value = 5;
document.write(`Initial Value is ${value} </br>`);
value++;
document.write(`Value of variable after increment is ${value} </br>`);
value += 7;
document.write(`Value of variable after addition is ${value} </br>`);
value--;
document.write(`Value of variable after decrement is ${value} </br>`);
value %= 3;
document.write(`The remainder after division of variable's value is ${value}  </br>`);

//Question 4:

 //Cost of one movie ticket is 600 PKR. Write a script to
 //store ticket price in a variable & calculate the cost of buying 5
 //tickets to a movie. Example output:

document.write(`<h2> Cost Calculation:</h2>`);
var ticket_Price = 600;
var ticket_Qty = 5;
var total_Cost = ticket_Price * ticket_Qty;
document.write(`Multiplication of ${ticket_Price} and ${ticket_Qty} is ${total_Cost}  </br>`);
document.write(`Total cost to buy ${ticket_Qty} tickets to a movie is ${total_Cost}  </br> `);


//Question 5:

// Write a script to display multiplication table of any
// number in your browser

document.write(`<h2> Table of 4 </h2> `);
var table = 4;
document.write(`${table} x 1 = ${table * 1} </br> `);
document.write(`${table} x 2 = ${table * 2} </br> `);
document.write(`${table} x 3 = ${table * 3} </br> `);
document.write(`${table} x 4 = ${table * 4} </br> `);
document.write(`${table} x 5 = ${table * 5} </br> `);
document.write(`${table} x 6 = ${table * 6} </br> `);
document.write(`${table} x 7 = ${table * 7} </br> `);
document.write(`${table} x 8 = ${table * 8} </br> `);
document.write(`${table} x 9 = ${table * 9} </br> `);
document.write(`${table} x 10 = ${table * 10}</br>`);


//Question 6:

// The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a.  Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

document.write(<h2>Celsius Temperature Calculation </h2>);

var fahr_temp = 70;
var cels_calc = (fahr_temp - 32) * (5 / 9);
document.write(`${fahr_temp}<sup>0</sup>F is ${cels_calc}<sup>0</sup>C  </br></br>`);

document.write(`<h2>Fahrenheit Temperature Calculation </h2>`);

var cels_temp = 25;
var fahr_calc = cels_temp * (9 / 5) + 32;
document.write(`${cels_temp}<sup>0</sup>C is ${fahr_calc}<sup>0</sup>F </br>`);


//Question 7:
// Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

document.write(`<h2>Shopping Cart</h2>`);
var item1 = 650;
var item2 = 100;
var item1_qty = 3;
var item2_qty = 7;
var Shipping_charges = 100;
var item1_cost = item1 * item1_qty;
var item2_cost = item2 * item2_qty;
var total_cost = item1_cost + item2_cost + Shipping_charges;

document.write(`Price of Item 1 is ${item1} </br>`);
document.write(`Quantity of Item 1 is ${item1_qty} </br>`);
document.write(`Price of Item 2 is ${item2} </br>`);
document.write(`Quantity of Item 2 is ${item2_qty} </br>`);
document.write(`Shipping Charges  ${Shipping_charges}</br>`);
document.write(`Total cost of your order is ${total_cost}</br></br> `);


//Question 8:

// Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
document.write(`<h2>Marks Sheet </h2>`);
var total_marks = 980;
var Obt_marks = 804;
let percentage = (Obt_marks / total_marks) * 100;

document.write(`Total Marks:${total_marks}</br>`);
document.write(`Marks Obtained: ${Obt_marks}</br>`);
document.write(`Percentage${percentage}&percnt; </br></br>`);
