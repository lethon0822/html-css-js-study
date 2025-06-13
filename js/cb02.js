function sum(n1, n2) {
  console.log("더한값: ", `${n1} + ${n2} = ${n1 + n2}`);
}

const div = function (n1, n2) {
  console.log("나눈값: ", `${n1} / ${n2} = ${n1 / n2}`);
};

// 콜백 함수(다른 함수에 인자로 전달되어 그 안에서 실행되는 함수)
// cb = 함수 주소값 받는 변수 (복사됨, 셸로우 카피)
const calc = function (cb, n1, n2) {
  cb(n1, n2);
};

calc(sum, 10, 20);
calc(div, 10, 2);

//함수를 직접 삽입한 형태
calc(
  function (n1, n2) {
    console.log("곱한값: ", n1 * n2);
  }, 30, 2);

// 화살표 함수로
const max = (n1, n2) => console.log("더큰값: ", n1 >= n2 ? n1: n2)
calc (max, 10, 20);