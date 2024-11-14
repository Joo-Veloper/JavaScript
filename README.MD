---
# JavaScript 기본 및 변수 명명 규칙
---

## 시작하기

```javascript
let js = "amazing";
```

위 코드는 `js`라는 변수를 선언하고 문자열 값 `"amazing"`을 할당합니다. 이후 조건문에서 이 변수의 값을 확인하여 코드의 동작을 결정할 수 있습니다.

---

## 조건문을 이용한 경고창 출력

```javascript
if (js === "amazing") {
  alert("JavaScript is Fun!"); // alert창
}
```

`js` 변수의 값이 `"amazing"`일 때 `alert` 함수를 통해 "JavaScript is Fun!"이라는 메시지를 경고창으로 표시합니다. 하지만 이 코드는 주석 처리되어 있어 실행되지 않습니다.

---

## 콘솔 로그 사용하기

```javascript
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);
```

`console.log`를 사용해 계산 결과나 텍스트, 숫자를 브라우저의 콘솔에 출력할 수 있습니다. 이는 디버깅이나 프로그램의 상태를 확인할 때 유용합니다.

---

## 변수 선언과 명명 규칙

### 기본 변수 선언 예시

```javascript
let firstName = "Matilda"; // 변수를 사용하면 값 변경이 용이함
let first = "jonas";
```

`firstName`과 같은 변수를 선언하여 값을 할당하면, 필요할 때마다 해당 변수를 호출해 값을 사용할 수 있어 유지보수에 편리합니다.

### 변수 명명 규칙

JavaScript 변수는 다음과 같은 규칙을 따라야 합니다:

- **CamelCase** 또는 **언더스코어**(`_`)를 사용해 여러 단어를 연결하는 것이 일반적입니다.

```javascript
let firstNamePerson;
let first_name_person;
```

### 변수 이름에 대한 주의 사항

- 변수 이름은 숫자로 시작할 수 없습니다.

  ```javascript
    let 3year = 3; // 오류 발생
  ```

- 변수 이름에 특수 문자를 사용할 수 없습니다(예: `&`).

  ```javascript
    let jonas&matilda = 'JM'; // 오류 발생
  ```

- JavaScript의 예약어는 변수 이름으로 사용할 수 없습니다.

  ```javascript
    let new = 27; // 오류 발생
  ```

  예외적으로, 예약어와 유사한 이름은 사용 가능합니다.

  ```javascript
  let sfunction = 27; // 사용 가능
  ```

- JavaScript에서 `name`은 예약어는 아니지만, 일반적으로 `firstName`과 같은 명확한 변수 이름을 사용하는 것이 좋습니다.

---

## 상수 선언

변하지 않는 값에는 대문자 변수명을 사용하는 것이 관례입니다. 예를 들어, 원주율 값은 아래와 같이 선언합니다:

```javascript
let PI = 3.1415;
```

---

## 변수명을 설명적으로 작성하기

변수명을 작성할 때는 변수의 용도를 쉽게 알 수 있도록 설명적으로 작성하는 것이 좋습니다.

### 예시

```javascript
// 1번 방법 - 설명적 변수명 사용
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

// 2번 방법 - 설명 부족한 변수명 사용
let job1 = "Programmer";
let job2 = "Teacher";
```

위 예시에서 1번 방법이 더 설명적이므로, 코드를 읽는 사람이 변수의 역할을 쉽게 파악할 수 있습니다.

---

## 실행 예시

코드를 실행하면 다음과 같이 콘솔에 결과가 출력됩니다:

```javascript
console.log(myFirstJob); // "Programmer"
console.log(firstName); // "Matilda"
```

---
