// const massMark = 78;
// const heigthMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heigthMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMakr = massMark / heigthMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMakr > BMIJohn;
console.log(BMIMakr, BMIJohn);
