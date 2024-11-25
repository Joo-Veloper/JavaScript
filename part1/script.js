let js = "amazing";
// if (js === "amazing") {
//   alert("JavaScript is Fun!"); // alert창
// }
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda"; // 변수가 없다면 수동으로 변경해야 하지만 변수를 사용함으로 자동으로 변경 가능하다
let first = "jonas";

// 변수 명(규칙)은 CammelCase나 _ 같은걸 사용
let firstNamePerson;
let first_name_person;

console.log(firstName);
console.log(firstName);
console.log(firstName);

// let 3year = 3; // 변수명 숫자 시작 X (자바, pyhotn등 과 같음)
// let jonas&matilda = 'JM'; // 변수 이름에  문자, 이름 또는 달러 기호(&) 사용 X
let joans_matilda = "JM";
//let new = 27; // new또한 자바스크립트의 예약어 이기에 사용 불가

let sfunction = 27;
//let name = "Jonas"; // name도 예약어 이기에 단순히 이름만 사용 X 보통 이름을 firstName으로 작성함
let firstname = "Jonas";

let Person = "jonas"; //특정사용 사례의 경우에는 대문자를 사용가능 . 그게 아닌 경우에 알래처럼 소문자 사용
let person = "jonas"; //
let PI = 3.1415; // 변하지 않을 것이라는 걸 알고 있는 상수인 경우 대문자를 사용

// 1과 2번중 1번 변수 집합이 더 설명적이다. 그러기에 변수명은 설명적으로 작성
// 1
let myFirstJob = "Programmer";
let myCurrentJogb = "Teacher";
//2
let job1 = "programmer";
let job2 = " teacher";

console.log(myFirstJob);

// DATA TYPE
true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 24);
console.log(typeof "joo");

javascriptIsFun = "YES";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 31;

// const birthYear = 2024;
// birthYear = 1990;

var job = "programmer";
job = "teacher";
lastName = "Schmedtmann";
console.log(lastName);

// Operators
// const now = 2037;
// const ageJonas = now - 1990;
// const ageSara = now - 2018;
// console.log(ageJonas, ageSara);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2**3 means 2 the power of 3=2*2*2
// const firstName1 = "Java";
// const lastName1 = "Script";
// console.log(firstName1 + " " + lastName1);

// //Assignment operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// //Comparions operators
// console.log(ageJonas > ageSara);
// console.log(ageSara >= 19);

// const isFullAge = ageSara >= 18;
// console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1990;
const ageSara = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = ageJonas + ageSara / 2;
console.log(ageJonas, ageSara, averageAge);
