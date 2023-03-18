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
