const myArray = ['A', 'B', 'C', 'D'];

// 배열에서만 가능
for (const item of myArray) {
    console.log(item);
}

// 유사 배열
const myArray2 = {
    0: '가',
    1: '나',
    2: '다',
    3: '라',
    length: 4
}
for (let i = 0; i<myArray2.length; i++){
    console.log('for', myArray2);
}

const MyArray2Iterable = Array.from(myArray2); // 유사 배열을 진짜 배열로
// 에러 발생 MyArray2 is not iterable(반복 가능한 객체),
// 진짜 배열로 만들어진 건 MyArray2Iterable
for (const item of MyArray2Iterable) {
    console.log(item);
}