const { promiseTheaterIXX, promiseTheaterVGC } = require('./external.js');

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (hasilPenonton) => {
  let hasil = 0;
  const hasilTheaterIXX = await promiseTheaterIXX(hasilPenonton);
  const hasilTheaterVGC = await promiseTheaterVGC(hasilPenonton);

  // Perulangan
  for (const element of hasilTheaterIXX) {
    if (hasilPenonton === element.hasil) {
      hasil++;
    }
  }
  for (const element of hasilTheaterVGC) {
    if (hasilPenonton === element.hasil) {
      hasil++;
    }
  }
  return hasil
};
module.exports = {
  promiseOutput,
};
