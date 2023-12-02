/*
  Pada array, dapat dilakukan pengambilan sebagian data dari index tertentu sampai index tertentu
  Terdapat fungsi bawaan javascript "slice" untuk melakukan hal tersebut

  cobalah untuk membuat custom function yang seperti slice

*/

const customSlice = (arr, start, end) => {
  // tulis code di sini

  // misal value start > dari end, maka kita tuker aja
  // console.log({start, end});
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  // console.log({start, end});

  // validasi start & end
  start = start < 0 ? 0 : start;
  end = end > arr.length - 1 ? arr.length - 1 : end;

  let hasil = [];
  for (let i = start; i <= end; i++) {
    hasil.push(arr[i]);
  }

  return hasil;

}

let data = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh'];
console.log(customSlice(data, 1, 5)); // [ 'satu', 'dua', 'tiga', 'empat', 'lima' ]
console.log(customSlice(data, 3, 20)); // [ 'tiga', 'empat', 'lima' , 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh' ]
console.log(customSlice(data, 0, 3)); // [ 'nol', 'satu', 'dua', 'tiga' ]
console.log(customSlice(data, -5, 3)); // [ 'nol', 'satu', 'dua', 'tiga' ]
console.log(customSlice(data, 1, 3)); // [ 'satu', 'dua', 'tiga' ]
console.log(customSlice(data, 3, 1)); // [ 'satu', 'dua', 'tiga' ] (support reverse start & end)



// let varible = "a";
// varible = false ? "ini kalau true" : "ini kalau false";
// console.log(varible);

// let arr = ["nol", "satu", "dua"];
// let end = 3;

// console.log({end: end, itemCount: arr.length, lastIdx: arr.length - 1});

// // end = end > arr.length-1 ? arr.length-1 : end;

// if (end > arr.length - 1) {
//   end = arr.length - 1;
// }

// console.log({end: end});