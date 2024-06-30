const nums = [ 1,2,3,45,67];

// print nums which are greater than 3

for(let i = 0; i < nums.length; i++){
    isGreaterThan3(nums[i]);
}


function isGreaterThan3(num){
     if(num > 3){
        return num;
     }
}