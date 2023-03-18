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
