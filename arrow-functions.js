/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers(a, b){
//    // code block
//    return a + b;
// }

// let sum = addTwoNumbers(3, 5)
// console.log(sum);


// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b);
const addTwoNumbers2 = (a, b) => a + b;

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('hello there!!');
// the empty brackets lets javascript know that it is running a function
const sayHello = () => console.log('hello');
sayHello();

// longer method --->>

// function sayHello2() {
//     console.log('hello');
// }
// sayHello2()


// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)
console.log(returnMultipleLines());