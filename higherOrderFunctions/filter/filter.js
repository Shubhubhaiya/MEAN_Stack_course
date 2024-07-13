const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// output : [2,4,6,8,10];

// const evenNumbers = [];

// evenNumbers.push(num/2)

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }

const evenNumbers = numbers.filter((num) => {
  return num % 2 == 0;
});

console.log(evenNumbers);
