const nums = [1,2,3,4,5];


const sum = nums.reduce((previousValue, currentValue)=>{
    return previousValue + currentValue
},0);

console.log(sum);