// 함수로 평균 점수를 계산
const calcAverage = (scores) =>
  scores.reduce((a, b) => a + b, 0) / scores.length;

// 조건 비교 함수
const checkWinner = (dolphinsAvg, koalasAvg, minScore = 0) => {
  if (dolphinsAvg >= minScore && koalasAvg >= minScore) {
    if (dolphinsAvg > koalasAvg) {
      return "돌핀스가 승리했습니다!";
    } else if (koalasAvg > dolphinsAvg) {
      return "코알라가 승리했습니다!";
    } else {
      return "동점입니다!";
    }
  } else if (dolphinsAvg >= minScore) {
    return "돌핀스가 승리했습니다! (최소 점수 요건 충족)";
  } else if (koalasAvg >= minScore) {
    return "코알라가 승리했습니다! (최소 점수 요건 충족)";
  } else {
    return "아무 팀도 승리하지 못했습니다.";
  }
};

// Test data
const data1Dolphins = [96, 108, 89];
const data1Koalas = [88, 91, 110];

const bonus1Dolphins = [97, 112, 101];
const bonus1Koalas = [109, 95, 123];

const bonus2Dolphins = [97, 112, 101];
const bonus2Koalas = [109, 95, 106];

// 평균 계산
const avg1Dolphins = calcAverage(data1Dolphins);
const avg1Koalas = calcAverage(data1Koalas);

const avgBonus1Dolphins = calcAverage(bonus1Dolphins);
const avgBonus1Koalas = calcAverage(bonus1Koalas);

const avgBonus2Dolphins = calcAverage(bonus2Dolphins);
const avgBonus2Koalas = calcAverage(bonus2Koalas);

// 결과 출력
console.log("Data 결과:", checkWinner(avg1Dolphins, avg1Koalas));
console.log(
  "Bonus 1 결과:",
  checkWinner(avgBonus1Dolphins, avgBonus1Koalas, 100)
);
console.log(
  "Bonus 2 결과:",
  checkWinner(avgBonus2Dolphins, avgBonus2Koalas, 100)
);
