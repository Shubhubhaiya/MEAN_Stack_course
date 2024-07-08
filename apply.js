// apply method in javascript is similar to call method but it allows to
// invoke a function with a specified this value and array of aruments

function display(state1, state2, state3) {
  console.log(
    `Hello your name is ${this.firstName} and city is ${this.city} ${state1} ${state2} ${state3}`
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

const states = ["Punjab", "Haryana", "himachal"];
const states2 = ["Uttrakhand", "up"];

display.apply(person1, states);
display.apply(person2, states2);
