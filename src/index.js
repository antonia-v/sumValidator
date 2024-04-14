function twoNumberSum(array, targetSum) {
  const arrayRes = [];
  for (let j = 0; j < array.length; j++) {
    let x = array[j];
    for (let i = 0; i < array.length; i++) {
      let y = array[i];
      if (y !== x) {
        if (x + y === targetSum) {
          arrayRes.push(x);
          arrayRes.push(y);
          console.log(`El array resultante es: [${arrayRes}]`);
          return arrayRes;
        }
      }
    }
  }
  console.log("No hay coincidencias");
  return arrayRes;
}

const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

const result = twoNumberSum(array, targetSum);
