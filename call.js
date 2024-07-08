// for function borrowing we are using call, bind and apply methods

function display(state) {
  console.log(
    `Hello your name is ${this.firstName} and city is ${this.city} ${state}`
  );
}

const person1 = {
  firstName: "Shubhdeep",
  city: "Mohali",
};

const person2 = {
  firstName: "Nitesh",
  city: "Abohar",
};

display.call(person1, ["Punjab", "haryana"]);
// display.call(person2, "Haryana");
