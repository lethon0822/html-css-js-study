// fn.js
// 함수

// es5 문법, 함수 3가지 요소: 메소드명, 파라미터, 구현부 (리턴타입이 없다.)
// JS에서는 함수도 1급 객체로 인정(주소값이 저장됨).
// JS에서 함수 호출은 함수 주소값 소괄호.
function sum(n1, n2) {
    console.log('sum 메소드 호출');
    console.log(`${n1} + ${n2} = ${n1+n2}`);
    // return; 이 자동으로 들어감
}

sum(2, 4);
sum(5, 6, 7);
sum(8);

const copySum = sum;

copySum(1, 2);

// 주소가 같아서 true
console.log(copySum===sum);