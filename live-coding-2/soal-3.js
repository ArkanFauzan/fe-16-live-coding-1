function tukar_besar_kecil(text){
  // lengkapi kode berikut
  
  let result = "";
  for (let i = 0; i < text.length; i++) {
    
    result += text[i] === text[i].toLowerCase() ? text[i].toUpperCase() : text[i].toLowerCase();

    if (text[i] === text[i].toLowerCase()) {
      result += text[i].toUpperCase();
    }
    else {
      result += text[i].toLowerCase();
    }

  }
  return result;
}


// console.log(tukar_besar_kecil('Hello World')); // "hELLO wORLD"
// console.log(tukar_besar_kecil('I aM aLAY')); // "i Am Alay"
// console.log(tukar_besar_kecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
// console.log(tukar_besar_kecil('IT sHOULD bE me')); // "it Should Be ME"
// console.log(tukar_besar_kecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

// konsepnya:
/*
let char = "h";
if (char === char.toLowerCase()) {
  char = char.toUpperCase();
  // console.log('ini jadiin kapital');
}
else {
  char = char.toLowerCase();
  // console.log('ini jadiin kecil');
}

console.log(char);
*/
