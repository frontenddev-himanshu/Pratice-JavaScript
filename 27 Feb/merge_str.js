// let str = "Himanshu";
// let str2 = "Kumar";
// let str3 = "sharma";

// maxLength = Math.max(str.length, str2.length, str3.length);


// console.log(maxLength);

// let output = "";

// for (let i = 0; i < maxLength; i++) {
//     // output += str[i] + str2[i]
//     // console.log(output);

//     if (i < str.length && i < str2.length && i < str3.length ) {
//         output += str[i] + str2[i] + str3[i];
//         // output += str2[i];
//         // output += str3[i];
//     }

//     // if (i < str2.length) {
//     //     output += str2[i]
//     // }

//     // if (i < str3.length) {
//     //     output += str3[i];
//     // }
// }

// console.log(output);


let str = "Himanshu", str2 = "Kumar", str3 = "sharma";
let maxLength = Math.max(str.length, str2.length, str3.length);
let output = "";

for (let i = 0; i < maxLength; i++) {
    output += (str[i] || '') + (str2[i] || '') + (str3[i] || '');
}

console.log(output);








