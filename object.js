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


