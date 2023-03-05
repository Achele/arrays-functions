// QUESTION TWO
const languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];

// Add ‘Kotlin’ to the end of the array
languages.push("Kotlin");
// console.log(languages);

// Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, "Java");
// console.log(languages);

// Remove the first item in the array
languages.shift();
// console.log(languages);

// Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift("Scala", "Swift");
// console.log(languages);

// Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(3, 1, "Go", "Rust");
// console.log(languages);

//  QUESTION THREE
let fruit = ["apple", "mango", "banana"];
function changeFruit(fruit) {
  fruit[2] = "orange";
  return fruit;
}
// Output will be ['apple', 'mango', 'orange]
console.log(changeFruit(fruit));

// QUESTION FOUR
/**
 * declare a function called maxValue that takes an array of numbers called numsArray
 * initialize the maximum value with 0
 * loop through the array to check if a given index is greater than the max value,
 * if it is, assign the value back to the maximum value variable
 * return the maximum
 *
 */

const maxValueArray = (numsArray) => {
  let maxValue = 0;
  for (let i = 0; i < numsArray.length - 1; i++) {
    if (numsArray[i] > maxValue) {
      maxValue = numsArray[i];
    }
  }
  return maxValue;
};
console.log(maxValueArray([10, 5, 10, -2]));

// QUESTION FIVE
/**
 * declare a function called valTimesIndex
 * using the map method, return a new array with each value multiplied by the index
 */
// const valTimesIndex = (numsArray) => {
//   numsArray.map((value, index) => {
//     return value * index;
//   });
// };

const valTimesIndex = (numsArray) =>
  numsArray.map((value, index) => value * index);

console.log(valTimesIndex([1, 2, 3]));
