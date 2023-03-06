# Arrays & Functions

Array and functions practice questions

## Question One

What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.

#### ANSWER
Mutating array methods changes the original array while non-mutating array methods do not change the original array value, instead returns a new array.

- MUTATING ARRAY METHODS

  - array.push() : adds item to the end of the array
  - array.unshift() : adds item to the start of an array
  - array.pop() : removes an item from the end of an array
  - array.shift() : removes an item from the beginning of an array
  - array.fill(): changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length)

- NON-MUTATING ARRAY METHODS
  - array.concat(): use to merge two or more arrays. it doesnt change existing arrays, but returns a new array.
  - array.filter(): This is a non-mutating method used to filter through the array. It takes a function that is called over each item in the array where if it returns true then the item is included in the new array
  - array.slice(): This takes 2 parameters, the first is the starting index where the copy of the array should begin and the second is the ending index where the copy of the array should end, which is not inclusive. It copies the item and return a new array
  - array.map(): This method returns a new array containing a transformed copy of the original array depending on the function that is called on each item. It takes a function just like array.filter method.
  - array.join(): creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.

## Question Two

Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 

- Add ‘Kotlin’ to the end of the array - Add ‘Java’ after ‘Ruby’ 
- Remove the first item in the array 
- Add ’Scala’ and ‘Swift’ to the beginning of the array 
- Replace ‘PHP’ with ‘Go’ and ‘Rust’

## Question Three

What will be the value of fruit after calling the function changeFruit?

````
let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
fruit[2] = "orange";
return fruit;
}
````

## Question Four

Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
e.g., max([4, 5, 10, -2]) // maximum value is 10

## Question Five

Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
e.g.,
valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([5,10,15]) // [0,10,30]
