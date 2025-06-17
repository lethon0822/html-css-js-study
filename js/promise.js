// promise
// ES5) 생성자 함수 호출, ES6) 클래스로
// 콜백 함수의 파라미터 2개, 파라미터 명 상관 없으나
// 보통 resolve, reject로, 두쪽 다 콜백 함수(함수 주소값)가 들어옴
// 함수 주소값을 알면 함수를 호출할 수 있음
const p = new Promise((resolve, reject)=> {
    // resolve : 성공시 호출하는 콜백 함수
    // reject : 실패시 호출     "
    // 한개의 값만 보낼 수 있음
    resolve('성공');    // then 메소드의 콜백함수 호출
    reject('실패');    // catch 메소드의 콜백함수 호출

});

// then과 catch 모두 콜백 함수를 보냄

p.then( item => {
    console.log('then: ', item);
})
 .catch( item => {
    console.log('catch: ', item);
 });
