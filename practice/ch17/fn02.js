// fn02.js
// 함수

const sum = function(n1, n2) {
    console.log('함수 호출');
    return n1 + n2;
}

console.log('return함수: ', sum(10, 20));

const copySum = sum;
const result = copySum(10, 20);
console.log("result: ", result)
console.log('void함수: ', sum);