function makeArray(firstArray, secondArray, maxLength) {
  // Об'єднуємо два масиви в один
  const newArray = firstArray.concat(secondArray);
  
  // Якщо довжина нового масиву перевищує maxLength, повертаємо скорочений масив
  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }
  
  // Якщо довжина не перевищує maxLength, повертаємо весь масив
  return newArray;
}

// Перевірка роботи функції
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
