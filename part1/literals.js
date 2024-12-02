const firstName = "JavaScript";
const job = "programmer";
const birthYear = 1890;
const year = 2222;

const javaScripts =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old" + job + "!";
console.log(javaScripts);

const javaScriptsNew = `I'm ${firstName}, a ${
  year - birthYear
} year old ${job}!`;
console.log(javaScriptsNew);

console.log(`Just aregular string...`);
console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);
