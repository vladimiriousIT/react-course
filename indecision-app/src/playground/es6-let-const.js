// Function scoped
var nameVar = 'Vladimir';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

// Block scoping 
let nameLet = 'Jen';
// let nameLet = 'Julie'; --> not possible
console.log('nameLet', nameLet);
// Block scoping 
const nameConst = 'Frank';
//const nameConst = 'Gunther'; --> not possible
console.log('nameConst', nameConst);
// function getPetName(){
//     var petName = 'Hal';
//     return petName;
// }

// const petName = getPetName();
// console.log(petName);



var fullName = 'Vladimir Stratiev';

if(fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
