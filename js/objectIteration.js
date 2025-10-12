// File: objectIteration.js
// Author: Krishna Pramod Gaud
// Description: Demonstrates different ways to iterate over objects in JavaScript

const student = {
    name: "Krishna",
    age: 20,
    branch: "EEE",
    college: "XYZ University"
};

// 1. Using for...in loop
console.log("1. Using for...in loop:");
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

// 2. Using Object.keys() with forEach
console.log("\n2. Using Object.keys() with forEach:");
Object.keys(student).forEach(key => {
    console.log(`${key}: ${student[key]}`);
});

// 3. Using Object.values() with forEach
console.log("\n3. Using Object.values() with forEach:");
Object.values(student).forEach(value => {
    console.log(value);
});

// 4. Using Object.entries() with for...of
console.log("\n4. Using Object.entries() with for...of:");
for (let [key, value] of Object.entries(student)) {
    console.log(`${key}: ${value}`);
}

// 5. Using Map forEach
const studentMap = new Map(Object.entries(student));
console.log("\n5. Using Map forEach:");
studentMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
