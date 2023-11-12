/**
 * Filter Array
 * 
 * Diberikan data berupa array object, lalu lakukan filter untuk menampilkan data yang memiliki grade diatas 7
 * 
 * Hanya boleh menggunakan looping for (tidak boleh menggunakan method filter)
 */

students = [
  {name:"Andi",grade:7.5},
  {name:"Ardi",grade:9},
  {name:"Ahmad",grade:7},
  {name:"Anang",grade:6},
  {name:"Amir",grade:8}
];

/*

expected output:

[
  { name: 'Andi', grade: 7.5 },
  { name: 'Ardi', grade: 9 },
  { name: 'Amir', grade: 8 }
]

*/

const filterGrade7 = (dataStudent) => {
  // sesuaikan

  // initial variable
  let studentFiltered = [];

  // prosesnya (pake for)
  for (let i = 0; i < dataStudent.length; i++) {
    if (dataStudent[i].grade > 7) {
      studentFiltered.push(dataStudent[i])
    }
  }

  // prosesnya (pake forEach)
  // dataStudent.forEach(v => {
  //   if (v.grade > 7) {
  //     studentFiltered.push(v);
  //   }
  // });

  // returnnya
  return studentFiltered;
};


// realnya pake js filter

let filteredStudents = filterGrade7(students);
console.log(filteredStudents);

let filterWithJsFilter = students.filter(eachStudent => {
  return eachStudent.grade > 7;// return boolean, true/false
})

// kalau cuma 1 baris, di isi filternya, bisa dibuat:
// let filterWithJsFilter = students.filter(eachStudent => eachStudent.grade > 7);

console.log('filter with js filter', filterWithJsFilter);