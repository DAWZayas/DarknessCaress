export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function shuffle(array) {
  let arrayAux = array.slice();
  for (let i = arrayAux.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arrayAux[i];
    arrayAux[i] = arrayAux[j];
    arrayAux[j] = temp;
  }
  return arrayAux;
}

export function randomBool() { return randomNumber(1, 10) > 5 ? true : false; }
