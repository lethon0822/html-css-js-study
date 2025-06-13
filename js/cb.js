function sum(n1, n2) {
    console.log(`${n1} + ${n2} = ${n1+n2}`)
}
sum(10, 20);

// 함수 주소값이 저장됨
const fn1 = sum;
fn1(20, 30);

// 변수처럼 작동함
sum = 10;
console.log(sum);

// 함수 주소값이 저장됨
const div = function(n1, n2) {
    console.log(`${n1} / ${n2} = ${n1/n2}`)
}
div(10, 2);