// 조건에 맞는 나라를 확인하기 위한 코드
// 사라가 영어를 사용하고, 인구가 5천만 명 이하이며, 섬이 아닌 나라에서 살기를 원합니다.

const country = "Portugal";
const language = "english";
const population = 10; // 인구 수 (백만 단위)
const isIsland = false; // 섬 여부

if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
