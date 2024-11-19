// Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

// Try to change one of the changed variables now, and observe what happens.

language = "Korean"; // 거주지 언어는 변경 가능성이 있으므로 let 사용
const country = "Korea"; // 국가는 고정된 값으로 const 사용
const continent = "Asia"; // 대륙도 고정된 값으로 const 사용
const isIsland = false; // 섬인지 여부도 고정된 값으로 const 사용
isIsland = true; // TypeError 발생: const로 선언된 변수의 값 변경 불가

// language:

// language 변수는 선언되지 않은 상태에서 값을 할당하고 있습니다.
// 이는 ReferenceError를 유발합니다.
// 올바르게 사용하려면 let 또는 const로 변수를 선언해야 합니다.
// const로 선언된 변수 (country, continent, isIsland):

// const로 선언된 변수는 초기화 이후 값을 변경할 수 없습니다.
// 따라서 isIsland = true;를 시도하면 TypeError가 발생합니다.
