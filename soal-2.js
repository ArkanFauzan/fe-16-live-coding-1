/*
  Untuk mendapatkan panjang array atau jumlah item di dalam array dapat menggunakan:
  let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
  data_array.length

  Cobalah untuk menghitung jumlah item array tanpa menggunakan .length

  Konsep penyelesaian:
  - declare variable (misal let count = 0)
  - menggunakan infinity looping, mulai dari 0 sampai tak hingga
  - di setiap looping cek apakah ada data pada array di index tersebut?
      - jika ada, count++
      - jika tidak ada, stop looping menggunakan break
*/

const countManual = (arr) => {
  // tulis code di sini
  
  // initial variable
  let totalData = 0; // 2

  // prosesnya

  // kalau mau pake while
  let i = 0;
  while(arr[i] !== undefined) {
    totalData++;
    i++;
  }

  /*
  // kalau mau pake for with break
  for (let i = 0; i >= 0; i++) { // infinity loop

    // if (arr[i] !== undefined) {
    //   totalData++;
    // }
    // else {
    //   break;
    // }

    if (arr[i] === undefined) {
      break;
    }
    else {
      totalData++;
    }

    if(arr[i]){
      totalData++
    }else{
      break;
    }

  }
  */

  // return variable
  return totalData;
}

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,9];
console.log(countManual(data_array)); // output : 21

console.log("data array 21:", data_array[21]);