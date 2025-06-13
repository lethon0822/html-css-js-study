const arr = [10, 20, 30, 40, 55];
// 배열의 함수ㅡforEach인자로 콜백 함수를 하나 받음
// 배열의 길이만큼 반복 (index값이 올라감)
arr.forEach(function (item, index) {
  console.log(`item: ${item}, index: ${index}`);
});

let sum = 0;
arr.forEach((item) => sum += item);

// 유사 배열
const myArr = {
  0: 10,
  1: 20,
  2: 30,
  3: 40,
  4: 50,
  length: 5,
  forEach: function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i);
    }
  },
};
console.log('my-length: ', myArr.length);
myArr.forEach(function (item, index) {
  console.log(`item: ${item}, index: ${index}`);
});
