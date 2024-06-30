// with higher order functions 
const nums = [1,2,3,4,5];


// map function will execute callback function for every element
// of array and return new array

const doubleArr =  nums.map((num)=>{
    return num*2;
});
console.log(doubleArr);