// In JavaScript, variable declarations (var, let, const) and function declarations are hoisted to the top of their scope before code execution.

console.log(KuchBhi); // without assign data call any function that's called hoisting
var KuchBhi = "H";


// abc() is a function declaration, fully hoisted to the top with its body.That why we can call any function before execution.
abc()
function abc() {
    console.log("llll");
}
