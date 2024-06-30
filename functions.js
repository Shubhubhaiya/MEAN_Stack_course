let num1 = 10;
let num2 = 20;


// //Addition 
// const sum  = num1 +num2;
// console.log(sum);


// let num3 = 30;
// let num4 = 50;
// const sum1 = num3 + num4;
// console.log(sum1);


// let num5 = 30;
// let num6 = 50;
// const sum2 = num5 + num6;
// console.log(sum2);


// function declaration 
// function sum (num1, num2){
//     console.log(num1 + num2);
// }
// sum(4,5);


//function expression 
const display  = function(msg){
    console.log(msg);
}
display("Hi I am shubhdeep verma");


// IIFE (Immediately invoked functions)
(function display1(){
    console.log("Hello display1");
})();


// Arrow functions 

const sum = (num1, num2) => {  // num1 and num2 are the params
    console.log(num1 + num2)
};
sum(40, 50); // 40 and 50 are the args

const display1 = (msg)=> console.log(msg);
display1("Hi I am in display 1");








