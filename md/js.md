## JavaScript

```
# use console.log() to visualise variable or expression

function sum(a, b){
    console.log(a);
    console.log(a + b);
    return a + b;
}
sum(1,3);
```

```
# Must include return in js if not it will return undefined.

function sum(x,y){
    return x + y;
}

```

### String property

```
let text = "Hello World";
text.length; // 11

# length does not have () because it's a property not method
```

```
"BLUE".toLowerCase(); // "blue";
"red".toUpperCase(); // "RED";
```

#### Characters

```
const language = "JavaScript";

language[0]; // first character
language[1]; // second character
language[2]; // third character

language[language.length - 2]; // "p" because it's second to last character from "JavaScript"
```

```
# .at() reads character at certain index

const language = "JavaScript";
language.at(0); // "J"
language.at(1); // "a"
language.at(-1); // "t"
language.at(-2); // "p"
```

#### Substrings

Substrings is a portion of a string e.g. rain in brain.

```
const language = "JavaScript";
language.substring(1,4); // "ava"

# indexEnd parameter is optional.
language.substring(4); //"Script"
```

`.substr` is deprecated.

#### Plus operator

```
"Hello" + "World" // "HelloWorld"
```

```
let prefix = "Mrs.";
let name = "Sam";
let string = prefix + " " + name; // "Mrs. Sam"
```

```
let name = "Sam";
name = name + " Blue";
console.log(name); // "Sam Blue"

# same as
name += " Blue";
```

#### Template strings

Template strings support interpolation, means you can write variable in your string.

```
`This is a template string`

# Multiline strings
let text = `This is a multiline
string that
just works!`
```

```
let language = "JavaScript";
`I am learning ${language}`;
```

#### .trim()

```
# Removes all leading and trailing space characters

const name = "  Sam Blue ";
name.trim(); // "Sam Blue"
```

#### .startsWith() and .endsWith()

```
# Return true when substring found at the beginning

const sentence = "Hello there. Welcome!";

sentence.startsWith("H"); // true
sentence.startsWith("Hello"); // true
sentence.startsWith("Hey"); // false
sentence.startsWith("Sam"); // false

# Return true when substring found at the end

sentence.endsWith("."); // false
sentence.endsWith("!"); // true
sentence.endsWith("Welcome!"); // true
sentence.endsWith("Welcome"); // false
```

#### .includes(substring)

```
# Return true when substring is found anywhere
const sentence = "Hello there. Welcome!";

sentence.includes("there"); // true
sentence.includes("W"); // true
sentence.includes("Hello"); // true
sentence.includes("Hey"); // false
sentence.includes("Sam"); // false
sentence.includes("."); // true
sentence.includes("!"); // true
sentence.includes("Welcome"); // true
```

### Numbers

```
Example of numbers in JS
1
2
-5
3.5
2000
2021
-23.51
```

```
# Using numeric separator (_) makes it easier to read
let nb = 1_000; // equivalent to 1000
let nc = 1_000_000; // 1 million
```

```
# number to string
let answer = 42;
answer.toString();
```

#### NaN

Not a number.

```
"abc" * 4; // NaN

# Sign something wrong with the code e.g. not converting string to a number
```

```
# Convert string to number
let str = "42";
Number.parseInt(str, 10); //42

# Global objecet called Number which contains method parseInt
# Parameter 2 - radix: decimal 10, binary 2
```

`parseInt()` works the same but use the modern `Number.parseInt`

#### Operations

```
8%2; // Devision remainder is 0
7%2 // Devision remainder is 1
```

```
Math.round(2.6); // 3
Math.floor(2.6); // 2
Math.ceil(2.6); // 3

Math.round(2.5); // 3
Math.floor(2.5); // 2
Math.ceil(2.5); // 3
```

### Variables

```
# let

let language = "C++";
language = "JavaScript";

let sum = 0;
sum += 1;
```

```
# const cannot be re-assigned

const language = "C++";
language = "Python" // Type error
```

General rule is always go with `const` until you realised you need to re-assigned. `var` can still be used but its discourage to use.

### Conditions

```
const grade = 3;

if (grade >= 10) {
    console.log("Passing grade");
} else {
    console.log("Failing grade");
}
```

```
const grade = 10;

if (grade > 10) {
    console.log("Passing grade");
} else if (grade === 10) {
    console.log("Passing on the limit");
} else {
    console.log("Failing grade");
}
```

#### Ligatures

This can be enabled on your code editor.

```
>= for >=
<= for <=
=== for ===
!== for !==
```

#### Advanced if

```
# Dropping the else

function canVote(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
```

Note: Use triple equal `===` instead of `==`. With `==` js will try to convert both values into the same data type.

#### Returning booleans

```
# Refactor boolean

function isPassing(grade) {
    return grade >= 10;
}
```

#### Even & Odd

```
// even numbers
4 % 2 // 0
6 % 2 // 0
8 % 2 // 0
10 % 2 // 0

// odd numbers
3 % 2 // 1
5 % 2 // 1
7 % 2 // 1
9 % 2 // 1
```

### Arrays

```
const users = []; // empty array
const grades = [10, 8, 13, 15]; // array of numbers
const attendees = ["Sam", "Alex"]; // array of strings
const values = [10, false, "John"]; // mixed
```

```
# .length property

[].length; // 0

const grades = [10, 8, 13, 15];
grades.length; // 4
```

```
# get element by index

const users = ["Sam", "Alex", "Charley"];
users[1]; //"Alex"

# using .at(index)

const users = ["Sam", "Alex", "Charley"];
users.at(1); //"Alex"
users.at(-2); //"Alex"
```

```
# adding a element

const numbers = [10, 8, 13, 15];
numbers.push(20); // returns 5 (the new length of the array)
console.log(numbers); // [10, 8, 13, 15, 20];
```

Even though the array is `const`, new data can still be pushed. This is because `const` means you can only assign variable once but doesn't mean the variable is immutable. Benefit to use `const` is the variable will always be an array.

```
const numbers = []; // start with empty array
numbers.push(10); // returns 1 (new length of array)
console.log(numbers); // [10] (still an array but content changed)
numbers.push(20); // returns 2 (new length of array)
console.log(numbers); // [10, 20] (still an array but content changed)
```

#### Array forEach

```
# Looping through an array

const grades = [10, 8, 13];

grades.forEach(function(grade) {
    // do something with individual grade
    console.log(grade);
});
```

`forEach` takes a callback function as an argument which is called once for each element in an array.
The callback function here it not actually executing the function but is defining how the function should behave if it's executed. The function definition is passed to `forEach` function. In this case `grade` is the function definition.

#### Naming variables

Use **plural** for **array** and **singular** for **item** of the array.  
E.g.

- grades => item is **grade**
- people => item is **person**

#### Returning from loop

In the function that calls `foreach` there are two 2 functions. The `return` should be outside the `foreach` function. Returning inside the function is not useful because it's going to return inside the callback function and `.foreach()` will always return `undefined`.

```
# Correct return

function logUserIds(userIds) {
    userIds.forEach(function(userId) {
        console.log(userId);
    });
    return true; // ✅ return from the logUserIds function
}
```

#### Array filter

```
# Returns another array with some items of the original array

const numbers = [9, 5, 14, 3, 11];

const numbersAboveTen = numbers.filter(function(number) {
    return number > 10;
});
console.log(numbersAboveTen); // [14, 11]
```

The `.filter()` method expects a callback. JS takes the callback and call it for every singel item in the array.

#### Array find

```
let names = ["Sam", "Alex", "Charlie"];

let result = names.find(function(name) {
  return name === "Alex";
});
console.log(result); // "Alex"
```

The callback will stop calling once the array returns true.

#### .filter() vs .find()

1. `.filter()` always return an array.
2. `.find()` returns first array item that matches.

#### Array map

`.map(callback)` **transform** an array into another.

```
const numbers = [4, 2, 5, 8];

const doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // [8, 4, 10, 16]
```

It will be `[undefined, undefined].` if you forget `return` in the callback function.

#### Array includes(item)

Method takes an item `true` if the item exists.

```
const groceries = ["Apple", "Peach", "Tomato"];

groceries.includes("Tomato"); // true
groceries.includes("Bread"); // false
```

#### Array join(glue)

Use glue to insert separators between items when converted to strings.

```
const groceries = ["Apple", "Peach", "Tomato"];
groceries.join("; "); // "Apple; Peach; Tomato"
groceries.join(" . "); // "Apple . Peach . Tomato"
```

### Objects

An object is a data type that allows you to group several variables together into one variable that contains keys and values.

```
const user = {
    id: 1,
    firstName: "Sam",
    lastName: "Doe",
    age: 20
};

user.id; // 1
user.firstName; // "Sam"
user.isAdmin; // undefined (property does not exist)

# Updating the property value
user.age = user.age + 1;


```

### Arrow functions

#### Default parameters

In Js if an argument is not passed in the function parameters the code will not fail but instead passed as `undefined`.

```
function addOne(number = 0) {
    return number + 1;
}

addOne(2); // 3
addOne(5); // 6
addOne(); // 1

# When calling the function without an argument the default value is set to 0.
```

#### Function to arrow functions

Benefits of arrow function:

1. Shorter to write.
2. Uses lexical scope.
3. Benefit from implicit return.

```
function sum(a, b) {
    return a + b;
}

const sum = function(a, b) {
    return a + b;
}

const sum = (a, b) => {
    return a + b;
}
```

Functions are not deprecated. You can use functions but arrow functions is preferred because of their benefits.

#### Arrow function forEach

```
grades.forEach((grade) => {
    console.log(grade);
});

# if it's one parameter you can drop ()
grades.forEach(grade => {
    console.log(grade);
});
```

#### Arrow function array filter()

```
const numbersAboveTen = numbers.filter((number) => {
    return number > 10;
});
```

### Implicit return

When you forget to write `return` you'll get an implicit `return undefined`. Implicit it means it is refer to something suggested or understood without directly stating.

In JS under specific conditions, implicit return will work:

1. Must be an arrow function.
2. Function body must be **one statement**. Curly braces can be removed.
3. `Return` must be removed because its one statement.

```
const isLegal = (age) => {
    return age >= 18;
}

# Removing curly brackets & return

const isLegal = (age) => age >= 18;

# Removing parentheses

const isLegal = age => age >= 18;
```

#### Array filter(callback)

```
const numbersAboveTen = numbers.filter(number => number > 10);

const getPositiveTemperatures = temperatures => {
    return temperatures.filter(temperature  => temperature > 0);
}
```

#### Array find(callback)

```
const result = names.find(name => name === "Alex");
```

#### Array map(callback)

```
const doubled = numbers.map(number => number * 2);
```
