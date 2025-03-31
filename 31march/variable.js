let a = 5, b = 10;

[a, b] = [b, a];


// [b, a] creates an array [10, 5].
// a takes the first value (10), and b takes the second value (5).
// Now, a = 10 and b = 5.

// console.log(a , b); // 10 5





let x = {
    p: 1,
}

let y = x;

y.p = 2;

// console.log(x.p); // 2
