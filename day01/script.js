// $이 붙은 애들은 주소값을 받음
const $screen = document.querySelector('#screen');
const $toggleButton = document.querySelector('#button');
let timeInterval;
let stopWatchOn = false;
let seconds = 0;

console.log('screen', $screen);
console.log('toggleButton', $toggleButton);

if ($screen && $toggleButton) {
  /* 파라미터 : 
  1. 문자열(이벤트 이름), 
  2. 함수 주소값 >> 콜백 함수 (다시 호출됨) */
  $toggleButton.addEventListener('click', () => {
    // 누를 때마다 false <=> true 값 바뀌기
    stopWatchOn = !stopWatchOn;
    console.log('stopWatchOn : ', stopWatchOn);
  });
}
