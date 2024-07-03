
//without rest 
// function sum(num1, num2, num3){
//     console.log(num1 + num2 + num3);
// }

// sum(3,4,5);


// with rest
function sum (num1, num2, ...nums){  //rest
    
    let sum = 0;

    nums.forEach((num)=>{
        sum += num;
    });

    console.log(sum + num1 + num2);

}

sum(1,2,3,4,5,6,3,4,6,7,8);












