/* let lastName = undefined;
let paintingColor = null;
let number = 30;

number += 20;
console.log(number);

// there are two types of variable type (primitive/value type and reference type (object, array, function)).

let person = {
    name: 'kushal',
    age: 20,
    toBeSelected: true
}; //object literal

//Dot notation
person.name = 'kritika';
person.age = 8;

//Bracket Notation
person ['name'] = 'Harry';
person ['age'] = 30;

console.log(person.name);
console.log(person.age);

let selectedFruits = [
    'Apple', 'Banana', 'Kiwi', 'Avacado'
]; //Array literal
selectedFruits[2] = 'pear';

console.log(selectedFruits.length);


1. create fucntion
2. call the function
// fucntion //performing task // display
function greet(personName, lastName) {
    console.log('hello ' + personName + ' ' + lastName);
}
greet('Kritika', 'Tamang');//argument */ 

// calculating the value


/*function square() {
    let number = prompt("Give me a number")
    var result = number * number;
    console.log(result); 
}
square();


// fucntion through arguments and prompt
let number = prompt("Give me a number");

function square(num) {
    var result = num * num;
    console.log(result); 
}
square(number);

// while loop
 let number = 25;

 while (number < 100) {
     number += 34;
     console.log(number);
 }

 // for loop

for (let num = 0; num <= 25; num++) {
    console.log(num);
}


let fruits = 'Avacado';
console.log(fruits);
console.log(fruits.slice(1, 5));
console.log(fruits.replace('Ava', 'Bans'));
console.log(fruits.toUpperCase());
console.log(fruits.toLowerCase());
// console.log(fruits.charAt(2));
console.log(fruits[6]);
// console.log(fruits.split(''));

fruits = new Array('Avacado', 'Banana', 'Mango', 'Kiwi', 'Pear', 'Papaya', 'Pomogrenate');

// alert(fruits[2]);
console.log(fruits[5]); // access value of array

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array common methods
console.log('to string', fruits.toString()); // toString() method
console.log(fruits.join('+')); // join('') method
console.log(fruits.pop(), fruits); // pop() method, removes last item
console.log(fruits.push('blackberries'), fruits); // push() method, appends item
fruits.shift(); //removes first element, shift() method
console.log(fruits);
fruits.unshift('oranges'); //removes first element, shift() method
console.log(fruits);


let vegetables = ['sag', 'dall', 'potato', 'tomato']
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let numbers = [1, 3, 32, 21, 78, 90, 20, 79];
console.log(numbers.sort(function(a, b) {return a-b})); //in asceding order
console.log(numbers.sort(function(a, b) {return b-a})); // in descending order

let emptyArrays = new Array();
for (let i = 0; i <= 15; i++) {
    emptyArrays.push(i);
}
console.log(emptyArrays);


let student = {
    name: 'kushal',
    lastName: 'Tamang',
    age: 20,
    toBeSelected: true,
    myInfo: function (){
        return this.name + '\n' + this.lastName;
    }  
}; //object literal
console.log(student.myInfo());
*/

//Conditionals

var age = 26;

if ( (age >= 18) && (age <= 70) ) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'wrong one';
    console.log(status);
}

// Switch statements

switch (2) {
    case 0:
        text = 'weekend';
        break;
    case 4:
        text = 'weekend';
        break;
    case 6:;
        text = 'weekend'
        break;
    default:
        text = 'weekday'
}

console.log(text);