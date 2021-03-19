# What is Object Calisthenics?

Are programming exercises, formalized as a set of 9 rules, but i will focus on the ones that, i think are most important and simple.

These rules focus on maintainability, readability, testability, and comprehensibility of your code. If you already write code that is maintainable, readable, testable, and comprehensible, then these rules will help you write code that is more maintainable, more readable, more testable, and more comprehensible.

# Rules

## Only One Level Of Indentation Per Method

```javascript
function displayPyramid(numberOfLine) {
  for (let index = 0; index < numberOfLine; index++) {
    let output = "";
    const limit = numberOfLine - index;
    for (let secondIndex = 1; secondIndex < limit; secondIndex++) {
      // Two Level Indentation here
      output += " ";
    }
    for (let thirdIndex = 1; thirdIndex <= 2 * index + 1; thirdIndex++) {
      // Two Level Indentation has violated the rule
      output += "*";
    }
    console.log(output);
  }
}
```

### We can extract the two for-loop inside to two more separated functions.

```javascript
function getBlankSpace(numberOfLine, currentLineIndex) {
  let output = "";
  const limit = numberOfLine - currentLineIndex;
  for (let index = 1; index < limit; index++) {
    output += " ";
  }
  return output;
}

function getFilledPyramid(currentLineIndex) {
  let output = "";
  for (let index = 1; index <= 2 * currentLineIndex + 1; index++) {
    output += "*";
  }
  return output;
}

function displayPyramid(numberOfLine) {
  for (let index = 0; index < numberOfLine; index++) {
    let output = "";
    output += getBlankSpace(numberOfLine, index);
    output += getFilledPyramid(index);
    console.log(output);
  }
}
```

## Don’t Use The ELSE Keyword

```javascript
function printSeat(ticketCode) {
  if(ticketCode.startsWith("A") || ticketCode.startsWith("B") {
    printVipSeat();
  } else {
    printBasicSeat();
  }
}
```

### If we refactor it to do early return, it will become this.

```javascript
function printSeat(ticketCode) {
  if(ticketCode.startsWith("A") || ticketCode.startsWith("B") {
    return printVipSeat();
  }
  return printBasicSeat();
}
```

### Benefit:

- reduce complexity (or increase the readability of the logic flow)
- reduce unwanted variables if previously you do only a single return on the last part of the function.
- possibly reduce duplication on more complex if / conditional logic

## Don’t Abbreviate

```javascript
let temp = 1;
const n = 5;
for (let i = 1; i <= n; i++) {
  temp *= i;
  console.log(`${i}! = ${temp}`);
}
```

### In here, we can change temp, i and n as it is abbreviated, and change it to this:

```javascript
let temporary = 1;
const count = 5;
for (let index = 1; index <= count; index++) {
  temporary *= index;
  console.log(`${index}! = ${temporary}`);
}
```

### Benefit:

- reveal the intention of the variable
