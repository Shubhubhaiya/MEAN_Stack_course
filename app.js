
// this is a print statement 
console.log("Hello world shubhdeep")


// variable  - var, let, const 


// Data type
//Primitives data types: number, string, boolean, undefined, null
var name1 = "Nitesh";
name1 = "Kamal";
console.log(name1);

let name = "Shubhdeep";   // string

const age1 = 70;

age1 = 80;

console.log(age1); 

let isStudent =  false;  //boolean

let city;    //undefined
console.log(city);

let phoneNumber = null;  //null
console.log(phoneNumber);


// Non-primitive data type

//object
// const person = {           //10002    
//     name: "Shubhdeep",
//     age: 30,
//     city: "Mohali"
// };

const person1 = {           //11003
    name: "Shubhdeep",
    age: 30,
    city: "Mohali"
};




//array
const names = ["Kamal", "Shubhdeep", "Palak"];
const names1 = ["Kamal", "Shubhdeep", "Palak"];

// console.log(names[0]);
// console.log(names[2]);


//traditional way of looping
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// javascript loop
for(let name of names){
    console.log(name);
}

//looping in object
const person = {           
    name: "Shubhdeep",
    age: 30,
    city: "Mohali"
};

// console.log(person.age);
// console.log(person['age']);

// for iterating keys in objects 
for(let key in person){
    console.log(person[key]);
}



console.log(person.name);
console.log(person.age);


let num = 10;
let num2 = "10";

console.log(num == num2);   //true    //comparing values
console.log(num === num2); //false  // type + value
// console.log(person == person1); //false
// console.log(names == names1);  //false


// Control structures

let age = 18;

if(age >= 18){
    console.log("Person is adult");
}else{
    console.log("Person is not adult");
}

// Looping 

//for
for(let i = 1; i<=10; i++){
    console.log("Hello");
    console.log(i);
}

//while loop

let i = 1;
while(i <=10){
    console.log(i);
    i++;
}


































