const person1 = {
    name: '김철수',
    age: 25,
    married: false
}

console.log(typeof(person1));
console.log(person1);

console.log(person1.name);
console.log(person1.age);

// person1이 상수이지 내부의 속성은 상수가 되지 않아서 수정이 가능함
person1.age = 30;

console.log('person1.age', person1.age);
console.log("person1['age']", person1['age']);