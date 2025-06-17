/* aynchronous.js 비동기 처리에 대한 이해
    
    js 특징 : 싱글 스레드, 비동기 처리를 함 (java는 멀티 스레드)  
*/
// setTimeout()
// 인자 2개) 1. 콜백 함수, 2. 밀리세컨드단위로 초 수
console.log('---시작---');
setTimeout(()=> console.log('안녕'), 3000); // 1초 후에 이벤트(콜백 함수) 실행
console.log('--- 끝 ---');