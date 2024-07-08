// for function borrowing we are using call, bind and apply methods

// <---------------------->

function fullName() {
  console.log(`${this.firstName} ${this.lastName}`);
}

const person1 = {
  firstName: "Shubhdeep",
  lastName: "verma",
  city: "Mohali",
};

const person2 = {
  firstName: "Nitesh",
  lastName: "verma",
  city: "Abohar",
};

const person1FullName = fullName.bind(person1);
const person2FullName = fullName.bind(person2);
person1FullName();
person2FullName();
