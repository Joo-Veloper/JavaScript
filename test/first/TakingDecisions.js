// If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
const country = "Portugal"; // 국가 이름
let population = 10; // 초기 인구 값

function checkPopulation(population) {
  if (population > 33) {
    console.log(
      `${country}'s population is ${population - 33} million above average.`
    );
  } else {
    console.log(
      `${country}'s population is ${33 - population} million below average.`
    );
  }
}

// 초기값 확인
checkPopulation(population);

// 인구를 13으로 변경 후 확인
population = 13;
checkPopulation(population);

// 인구를 130으로 변경 후 확인
population = 130;
checkPopulation(population);

// 원래 인구로 복원 후 확인
population = 10;
checkPopulation(population);
