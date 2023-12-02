
let huruf = "";
let karakter = "iola41js4h14dfoil412as41h41lj4k1df4h1au4j1s4h13";

// huruf = huruf + "a";
// huruf += "c";
// console.log(huruf);

// huruf += true ? "a" : "";
// huruf += true ? "c" : "";
// huruf += false ? "z" : "";
// huruf += false ? "x" : "";
// huruf += false ? "j" : "";
// huruf += true ? "m" : "";

for (let i = 0; i < karakter.length; i++) {
  huruf += isNaN( parseInt(karakter[i]) ) ? karakter[i] : "";
}

console.log(huruf);


if ("") {
  console.log("true");
}
else {
  console.log("false");
}


let bilangan = -1;
let jenis = bilangan > 0 ? "positif" : ( bilangan === 0 ? "enol" : "negatif" );
console.log(jenis);