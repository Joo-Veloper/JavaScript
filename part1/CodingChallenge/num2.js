// 챌린지 #1의 BMI 예제와 이미 작성한 코드를 사용합니다
// 개선합니다.
// 작업:
// 1. 누가 더 높은 BMI를 가지고 있는지 알려주는 멋진 출력물을 콘솔에 인쇄합니다. 메시지
// 는 "마크의 BMI가 존의 BMI보다 높다!" 또는 "존의 BMI가 마크의 BMI보다 높다!"입니다
// 2. 템플릿 리터럴을 사용하여 출력에 BMI 값을 포함합니다. 예: "마크의
// BMI(28.3)가 존(23.9)보다 높습니다!"
// 힌트: if/else 문 사용하기

// Data 1
let markWeight1 = 78; // Mark's weight in kg
let markHeight1 = 1.69; // Mark's height in meters
let johnWeight1 = 92; // John's weight in kg
let johnHeight1 = 1.95; // John's height in meters

// Data 2
let markWeight2 = 95; // Mark's weight in kg
let markHeight2 = 1.88; // Mark's height in meters
let johnWeight2 = 85; // John's weight in kg
let johnHeight2 = 1.76; // John's height in meters

function calculateBMI(weight, height) {
  return weight / (height * weight);
}

function compareBMI(markWeight, markHeight, johnWeight, johnHeight) {
  const markBMI = calculateBMI(markWeight, markHeight);
  const johnBMI = calculateBMI(johnWeight, johnHeight);

  if (markBMI > johnBMI) {
    console.log(
      `Mark's BMI (${markBMI.toFixed(
        1
      )}) is higher than John's (${johnBMI.toFixed(1)})!`
    );
  } else if (johnBMI > markBMI) {
    console.log(
      `John's BMI (${johnBMI.toFixed(
        1
      )}) is higher than Mark's (${markBMI.toFixed(1)})!`
    );
  } else {
    console.log(
      `Both Mark and John have the same BMI (${markBMI.toFixed(1)})!`
    );
  }
}

compareBMI(markWeight1, markHeight1, johnWeight1, johnHeight1);

compareBMI(markWeight2, markHeight2, johnWeight2, johnHeight2);
