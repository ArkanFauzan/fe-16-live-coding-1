
let obj = {
  a:7,
  b:9,
  k:100,
  x:70,
  z:1
}

let prop = "x";
console.log(obj[prop]);

// loop object cara 1 : for in
// loop property objectnya
console.log("~~~~~~~~~~~~~~~ loop for in (property) ~~~~~~~~~~~~~~~~");
for (const prop in obj) {
  console.log(prop, obj[prop]);
}


// ~~~~~~~~ gabisa buat object, cuma buat array ~~~~~~~~~~~~~~~~~~

// loop cara 2 : for of
// loop value objectnya
// console.log("~~~~~~~~~~~~~~~ loop for of (value) ~~~~~~~~~~~~~~~~");
// let array = ["value1", "value2", "value3"]
// for (const value of array) {
//   console.log(value);
// }