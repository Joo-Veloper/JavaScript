// numNeighbours다음과 같이 프롬프트 입력을 기반으로 변수를 선언합니다 .

// prompt('How many neighbour countries does your contry have?');
// 이웃이 1개만 있는 경우 콘솔에 'Only 1 border!'라는 메시지를 기록합니다. ( ==지금은 느슨한 동등성을 사용합니다.)

// 1보다 큰 else-if경우 '1개 이상의 테두리'를 기록하려면 블록을 사용합니다 .numNeighbours

// 블록을 사용하여 '테두리 없음'을 기록합니다(이 블록은 0이나 다른 값일 else때 실행됩니다 ).numNeighbours

// 1과 0을 포함한 다양한 값으로 코드를 테스트합니다 numNeighbours.

// ==로 변경 ===하고 동일한 값으로 코드를 다시 테스트합니다 numNeighbours. 정확히 1개의 테두리가 있을 때 무슨 일이 일어나는지 확인하세요! 왜 이런 일이 일어나는 걸까요?

// 마지막으로 numNeighbours숫자로 변환하고, 1을 입력했을 때 어떤 일이 일어나는지 살펴보세요.

// 이 상황에서 왜 연산자와 유형 변환을 사용해야 하는지 생각해 보세요 ===.

// numNeighbours 입력받기

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
