/**
 * Anagram : Membandingkan 2 buah string apakah tersusun/dibentuk dari huruf yang sama atau tidak
 */

const checkAnagram = (kata1, kata2) => {
  // lengkapi code

  // let result1 = kata1.toLowerCase().split('').sort().join('');
  // let result2 = kata2.toLowerCase().split('').sort().join('');
  // return result1 === result2;

  return kata1.toLowerCase().split('').sort().join('') === kata2.toLowerCase().split('').sort().join('');
}

let kata_1 = "kamu";
let kata_2 = "muka";
let kata_3 = "maka";
let kata_4 = "kaum";

let kata_5 = "Silent"; // s i l e n t
let kata_6 = "Listen"; // l i s t e n

// let kalimat = "halo nama saya arkan. saya tinggal di bandung";
// console.log(kalimat.split(""));

// console.log( kata_5.split('').sort().join('') );

// console.log(checkAnagram(kata_5, kata_6));


console.log(checkAnagram(kata_1, kata_2)); // "kamu" & "muka" => true
console.log(checkAnagram(kata_1, kata_3)); // "kamu" & "maka" => false
console.log(checkAnagram(kata_2, kata_3)); // "muka" & "maka" => false
console.log(checkAnagram(kata_1, kata_4)); // "kamu" & "kaum" => true


// maka   => m a k a
// makam  => 

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