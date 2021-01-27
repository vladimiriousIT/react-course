// argument object - no longer bound with arrow functions

// const add = function(a, b) {
//     console.log(arguments)
//     return a + b;
// }
const add = (a,b) => {
    //console.log(arguments); no longer used
    return a + b;
}
console.log(add(55,1, 1001));


// this keyword - no longer bound
const user = {
    name: 'Vladimir',
    cities: ['Varna', 'Alaska', 'London', 'Sofia'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    //printPlacesLived: function(){
        // console.log(this.name);
        // console.log(this.cities);
        // const that = this; // using this as parents function

        // this.cities.forEach(function(city){
        //     console.log(that.name + ' has lived in ' +  city);
        // });

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' +  city);
        // });
    }
};
console.log(user.printPlacesLived());

//
const multiplier = {
    // array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the numbers have been multiplied
    numbers: [10,20,30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply()); //[1,2,3] 2 [2,4,6]