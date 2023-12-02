/*
  Melakukan filter angka: hanya menampilkan angka yang diminta

  Gunakan looping "for", tidak boleh menggunakan method "javascript filter"
*/

const filterData = (arr, searchValue) => {
  // tulis code di sini
  
  // initial variable
  let hasil_filter = [];

  // prosesnya
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      hasil_filter.push(arr[i]);
    }
  }

  // return hasilnya
  return hasil_filter;

}

let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(filterData(data_array, 5));  // output: [ 5, 5, 5, 5, 5, 5 ] (ada 6 kali)


/**
 * paling umum di programming
 * 1. searching = nyari data apakah ada atau tidak
 * 2. filtering = memfilter data, agar hanya muncul data yang diinginkan
 */