const { promiseTheaterIXX, promiseTheaterVGC } = require('./external.js');

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (hasilPenonton) => {
  let hasil = 0;
  const hasilIxx = await promiseTheaterIXX(hasilPenonton);
  const hasilVGC = await promiseTheaterVGC(hasilPenonton);

  // Perulangan
  for (const element of hasilIxx) {
    if (hasilPenonton === element.hasil) {
      hasil++;
    }
  }
  for (const element of hasilVGC) {
    if (hasilPenonton === element.hasil) {
      hasil++;
    }
  }
  return hasil
};
module.exports = {
  promiseOutput,
};
