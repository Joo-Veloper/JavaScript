// If your country split in half, and each half would contain half the population, then how many people would live in each half?

// Increase the population of your country by 1 and log the result to the console.

// Finland has a population of 6 million. Does your country have more people than Finland?

// The average population of a country is 33 million people. Does you country have less people than the average country?

// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

let population = 10; // 인구수 초기값 (백만 단위)
const country = "SEOUL"; // 국가는 변하지 않으므로 const 사용
const continent = "ASIA"; // 대륙도 변하지 않으므로 const 사용
let language = "KOREAN"; // 사용하는 언어는 변할 수 있으므로 let 사용

console.log(population / 2); // 10 / 2 = 5

population++; // population = 10 + 1
console.log(population); // 11

console.log(population > 6); // true
console.log(population < 33); // true

const description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;

console.log(description1);
