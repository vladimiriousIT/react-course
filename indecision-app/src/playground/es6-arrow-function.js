// ES5
const square = function (x) {
    return x*x;
}

// function square(x) {
//     return x*x;
// }

//ES6
// const squareArrow = (x) => {
//     return x*x;
// }
const squareArrow = (x) => x*x;
console.log(squareArrow(5));

//Use arrow functions 
//getFirstName('Vladimir Stratiev')
//create arrow function using shorhand syntax

const getFirstName1 = (text) => {
    return text.split(' ')[0];  
}
const getFirstName2 = (text) => text.split(' ')[0];

console.log(getFirstName1('Vladimir Stratiev'));
console.log(getFirstName2('Vladimir Stratiev'));