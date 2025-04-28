function fn() {
    let x = 0;

    return function fn2() {
        x++
        console.log(x);

    }

    // fn2();

}


const outPut = fn();
outPut()
outPut()




// function outer() {
//     let count = 0;  // Step 1: Declare a variable "count" initialized to 0.
//     return function inner() {  // Step 2: Return the "inner" function from "outer".
//         count++;  // Step 3: Increment the "count" variable.
//         console.log(count);  // Step 4: Print the current value of "count".
//     };
// }

// const counter = outer();  // Step 5: Call "outer()" and assign the returned function to "counter".
// counter();  // Step 6: Call the "inner" function through "counter".
// counter();  // Step 7: Call the "inner" function again.
// counter();  // Step 8: Call the "inner" function once more.

