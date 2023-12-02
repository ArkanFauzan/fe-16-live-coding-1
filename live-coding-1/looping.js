
/**
 * looping
 */

let dataSiswa = ['arkan', 'fauzan', 'ayyasyi', 'aaa', 'bbb'];

// pake for (ngeluarin angka mulai dari berapa? sampe berapa?)
for (let i = 0; i < dataSiswa.length; i++) {
  console.log(dataSiswa[i]);
  /**
   *  dataSiswa[i] = each value/tiap item dari array / setiap array value
   *  i = posisi / index array
   * 
   */ 

}

// looping with forEach (with val & idx)
dataSiswa.forEach((eachValue, indexArray) => {
  console.log(`value sekarang: ${eachValue}, index ke: ${indexArray}`);
})

// looping only value
dataSiswa.forEach( v=> { // kalau cuma 1 param, gausah pake ()
  console.log(`value = ${v}`);
})