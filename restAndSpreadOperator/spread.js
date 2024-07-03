const nums1 = [1,2,3,4];
const nums2 = [5,6,7,8];

// output [1,2,3,4,5,6,7,8]

// in arrays
const numbers = [...nums1, ...nums2]; //spread
console.log(numbers);


// in object
const obj1 = { 
    age: 28,
    city: 'Mohali',
    profession: 'Softewar engineer'
}

const obj2 = {
    name: "shubh",
    ...obj1    //spread
}


console.log(obj2);


