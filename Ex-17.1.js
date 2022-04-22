//! Instructions
//? Without running the code below, explain in your own words what the result
//? of each block of code will be and why.

//! Block 1

var b = 1;
function someFunction(number) {
  function otherFunction(input) {
    return b;
  }
  b = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

//* Answer: firstResult in line 15 will store the otherFunction declared in line 9.
//* then result in line 16 will store the value of 5 because b was changed to 5 in line 12 which is outside otherFunction,
//* and whenever its called it will print the 5, both arguments passed in lines 15 and 16 do not matter and are unused.

//! Block 2
var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a);

//* Answer: a is declared and defined as 1 in line 23, then inside function b2 is changed to 10, however its not the outside
//* a that is assigned to 10, although the function a() in line 27 is declared after the return keyword, it is hoisted up to
//* the start of b2 function and so inside function b2, it doesnt know the outside a, and it changes the inside a from being
//* an empty function to storing the vaLue of 10. so prrining a in line 30 will log value of 1.

//! Block 3
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}

//* Answer: i is declared outside the for loop, then for iterates 3 times each time declaring a log variable and storing unknown
//* function inside which logs current i, however because of the timeout on running log, after 100ms the 3 iterations will be
//* already done, and the final value of i will be 3, so it logs number 3, 3 times.
