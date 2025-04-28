function xyz() {


    var a = 10;

    if (true) {
        let b = 20;
        const c = 30;

    }

    console.log(a);
    console.log(b);
    console.log(c);


}

// xyz();


// console.log(a); →  10 (because var is function-scoped)

// console.log(b); → ReferenceError (because let is block-scoped)

// console.log(c); → ReferenceError (because const is block-scoped)







// function outer() {
//     let num = 0;
//     return function inner() {
//         num++
//         console.log(num);
//     }
// }

// const outPut = outer();
// outPut();
// outPut();
// outPut();
