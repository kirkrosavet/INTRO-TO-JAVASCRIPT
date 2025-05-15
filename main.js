// Use alert(...); to display 'Good morining!' in a popup.

// alert("Good morning")

// Display your name in a popup 

// alert("kirk rosavet")

// Use math, calucluate 10 + 5 in the console 
console.log(10+5);


// Calculate 20 -5 in the console
console.log(20-5);

//Create a variable to store your name and log it to the console.
let myName = "kirk rosavet"; 
console.log(myName);



//Concatenate your first and last name and log the result.
let firstName = "kirk";
let lastName = "Rosavet";
// let fullName = `My name is 'firstName' + " " + 'lastName`;
console.log(`My name is ${firstName} ${lastName}`);


//Find and log the length of a string stored in a variable.

//Convert a string to a number and a number to a string, logging the results.

let age = (23)
console.log(age)

 pi = 3.14;
pi = 10;

console.log(pi);

let a = (5)
let b = (10)
console.log(a+b)

 string = "reapper"
console.log(string)

const single ='blake'
const double ="bellamy"
const backtick =`playboy`

console.log(single)
console.log(double)
console.log(backtick)
console.log(single + double)

const name = "kirk"
const greeting = `hello, ${name}`;
console.log(greeting)

const n = "KIRK"
const one ="hello" 
const two =" how are you doing"
const joined = `${one}${n}${two}`;
console.log(joined)

const button = document.querySelector("button");

function greet() {
    const name = prompt("what is your name? ");
    const greeting = document.querySelector("#greeting");
greeting.textContent =`hello ${name}, nice to see you`;
}
button.addEventListener("click", greet);