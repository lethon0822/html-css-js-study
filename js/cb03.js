function sum(n1, n2) {
  return n1 + n2;
}

function sub(n1, n2) {
  return n1 - n2;
}

const calc = function (cb, n1, n2) {
  console.log('결과: ', cb(n1, n2));
}
// 위와 같이 변수로 받는 식으로 함수를 만들면 호이스팅 x
calc(sum, 10, 20);
calc(sub, 20, 12);