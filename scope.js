//global scope 
const name = "Shubhdeep verma";
var rol1 = "34455"


const display = function(){ 
    // functional scope
    // let name = "kamal";
    console.log(name);
    
    const num = 10; 
    
    {
        let rollNo = 56; //block scope //let and const 

    } 

    {
        var roll1 = "345"; // functional scope // var functional
    }

    console.log(roll1);
    console.log(rol1);

    // console.log(rollNo);
    // console.log(num);

    console.log(name);
};

// console.log(roll1);

display();