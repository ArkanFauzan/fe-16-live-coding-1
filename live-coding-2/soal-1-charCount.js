/**
 * Anagram : Membandingkan 2 buah string apakah tersusun/dibentuk dari huruf yang sama atau tidak
 */

// ~~~~~~~~~~~~~~~~~~~~~ Cara object dengan metode jumlah huruf ~~~~~~~~~~~~~~~~~~~~~~~~~~
/**
 * let obj = {
 *  a: 0,
 *  b: 0,
 *  c: 0,
 *  ...
 *  k: 0,
 *  m: -1,
 *  z: 0
 * }
 * 
 */

// loop kata pertama
// huruf di objectnya ditambah dengan huruf2 yg ada di kata pertama
/**
 * kata 1 = m a k a
 */

// loop kata kedua
// huruf di objectnya dikurang dengan huruf2 yg ada di kata kedua
/**
 * kata 2 = m a k a m
 */

// kalau dari a - z semuanya 0, maka kata tersebut merupakan anagram

/**~~~~~~~~~~~~~~~~~ Cara akses property array dan object ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let iniArray = ["value1", "value2", "value3"]; // ngakses value, pake index, dimulai dari 0
// console.log(iniArray[2]);

let iniObject = {a:0, b:9, c:5};
// console.log( iniObject.c ); // cara akses object ke-1

let namaProperty = "c";
// console.log( iniObject[namaProperty] ); // cara akses object ke-2 (berdasarkan variable)

/**~~~~~~~~~~~~~~~~~ Cara akses property array dan object ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const checkAnagram = (kata1, kata2) => {
  // lengkapi code
  
  let chars = "abcdefghijklmnopqrstuvwxyz";
  let charCount = {};

  for (let i = 0; i < chars.length; i++) {
    charCount[ chars[i] ] = 0;
  }

  kata1 = kata1.toLowerCase();
  kata2 = kata2.toLowerCase();

  // loop huruf2 kata1, tambah 1 ke charCount
  for (let i = 0; i < kata1.length; i++) {
    charCount[ kata1[i] ] = charCount[ kata1[i] ] + 1;
  }

  // loop huruf2 kata2, kurang 1 ke charCount
  for (let i = 0; i < kata2.length; i++) {
    charCount[ kata2[i] ] = charCount[ kata2[i] ] - 1;
  }

  // check, anagram = semua valunya 0
  let isAnagram = true;
  for (const key in charCount) {
    if (charCount[key] !== 0) {
      isAnagram = false;
    }
    // console.log({key, value: charCount[key]});
  }

  return isAnagram;
}

// console.log(checkAnagram("makam", "maka"));

let kata_1 = "kamu";
let kata_2 = "muka";
let kata_3 = "maka";
let kata_4 = "kaum";

let kata_5 = "Silent"; // s i l e n t
let kata_6 = "Listen"; // l i s t e n

console.log(checkAnagram(kata_1, kata_2)); // "kamu" & "muka" => true
console.log(checkAnagram(kata_1, kata_3)); // "kamu" & "maka" => false
console.log(checkAnagram(kata_2, kata_3)); // "muka" & "maka" => false
console.log(checkAnagram(kata_1, kata_4)); // "kamu" & "kaum" => true