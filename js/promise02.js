// promise02
const p = new Promise((resolve, reject)=> {
    resolve('성공');    // then 메소드의 콜백함수 호출
    reject('실패');    // catch 메소드의 콜백함수 호출

});

// then과 catch 모두 콜백 함수를 보냄

p.then( item => {
    console.log('then: ', item);
    return '두번째';    // resolve('두번째'); 와 같음
})
.then( item=> {
    console.log('2 then: ', item);
})
 .catch( item => {
    console.log('catch: ', item);
 });
