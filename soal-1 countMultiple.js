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

  /**
   * foreach data_array
   *    if data_array[i] ada di searchValue
   */

  // initial variable, format:
  /**
   * {
   *  // data_yang_dicari : jumlah_ketemunya
   *  3: 0,
   *  5: 0,
   *  9: 0
   * }
   */
  let objJumlahData = {};

  // fill objJumlahData with each searchValue (ex: {"3": 0, "100": 0} )
  searchValue.forEach(val => {
    objJumlahData[val] = 0;
  });
  // for (let i = 0; i < searchValue.length; i++) {
  //   objJumlahData[searchValue[i]] = 0;
  // }

  // prosesnya
  for (let i = 0; i < arr.length; i++) {

    if (searchValue.includes(arr[i])) {
      // jika termasuk ke dalam angka yang ingin dicari
      
      // objJumlahData[arr[i]] = objJumlahData[arr[i]] + 1;
      objJumlahData[arr[i]]++;

    }

  }

  // return variable
  return objJumlahData;

}

let data_array = [1,2,4,7,3,1,5,7,5,9,1,3,6,2,6,5,5,5,5,1];
let result = countData(data_array, [5,3,9,6,100,200]);  // output: object

for (const prop in result) {
  console.log(`angka ${prop} ada ${result[prop]}`);
}

// gimana kalau mau cari angka 5 ada berapa? & angka 3 ada berapa?

// let obj = {halo: 10, hai: 20};
// let prop = "hai";
// console.log(obj[prop]);