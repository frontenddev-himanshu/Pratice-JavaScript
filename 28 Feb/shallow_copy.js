// shallow copy used in multiple value like - object{}.
let obj = {
    name: "Himanshu Kumar",
    age: 18,
}

let obj2 = {
    ...obj
}

console.log(obj.name);


let arr = [1, 2, 5, 8, 4];
console.log(arr);

console.log(...arr);