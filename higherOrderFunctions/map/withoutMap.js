// without higher order functions


const nums = [1,2,3,4,5];

const doubleNums = [];

for(let i = 0; i < nums.length; i++){
      doubleNums.push(doubleElement(nums[i]));
}

function doubleElement(num){
    return num *2;

}

console.log(doubleNums);