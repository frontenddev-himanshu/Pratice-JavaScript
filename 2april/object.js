let obj = {
    a: 1,
}

let obj2 = obj

obj2.a = 10;

// console.log(obj.a); // 10

// Objects in JavaScript are stored by reference.
// b = a makes b reference the same object as a.
// Changing b.x also changes a.x
