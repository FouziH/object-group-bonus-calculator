$(document).ready(readyNow);

const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3,
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4,
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5,
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1,
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  },
];
// no writing past this point
function readyNow() {}

console.log(employees[0].name);

function functionLogic(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  } //end for
} // end functionLogic

functionLogic(employees);
function employeeLogic(object) {
  let newEmployeeObj = {};
  newEmployeeObj = object.name;
  if (object.reviewRating === 3) {
    newEmployeeObj.bonusPercent = 0.04;
  } else if (object.reviewRating === 4) {
    newEmployeeObj.bonusPercent = 0.06;
  }
  return newEmployeeObj;
} //end employeeLogic
console.log(employeeLogic(employees[0]));

console.log(
  employeeLogic({
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1,
  })
);

//function bonusCalculation(person) {
// if (person.reviewRating === 3) {
//
// } else if (person.reviewRating === 4) {
// } else if (person.reviewRating === 5) {
// }
//}

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

//Write a function that access

//console.log();

//function Person(name, lastname, age, eye) {
// this.firstName = first;
//this.lastName = last;
//this.age = age;
////this.eyeColor = eye;
//}
//let newPerson = new Person("Christian", "Fredricks", 23, "blue");

//console.log(newPerson);
