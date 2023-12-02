/*
  Menghitung banyaknya item yang ingin dicari di dalam array, misal ada berapa angka 5 di dalam array:
  let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];

  Konsep penyelesaian:
  - declare variable (misal let count = 0)
  - lakukan looping untuk setiap item array
  - disetiap looping cek apakah item tersebut sama dengan "value yang dicari"
      - jika sama, count++
*/

const countData = (arr, searchValue) => {
  // tulis code di sini
  
  // hampir semua proses koding, pake 3 konsep ini:
  /**
   * 1. initial variable / default value
   * 2. prosesnya, bisa looping, dll ===> untuk mengubah "intital variable"
   * 3. variablenya di return
   */

  // initial variable
  let jumlahData = 0;

  // prosesnya
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      jumlahData++;
    }
  }

  // return variable
  return jumlahData;

}

let data_array = [1,2,4,7,3,1,5,7,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(countData(data_array, 5));  // output: 6