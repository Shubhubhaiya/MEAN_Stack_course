const nums = [ 1,2,3,45,67];


// find the first number which is greater than 3 
const greaterThan3 = nums.find((num)=>{
    return num >3;
});

console.log(greaterThan3);


// for each and every element of array
nums.forEach(element => {
    if(element > 3){
        console.log(element);
    }
});