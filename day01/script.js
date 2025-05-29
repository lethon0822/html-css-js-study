// $이 붙은 애들은 주소값을 받음
// window.document... 에서 window를 생략할 수 있음
const $screen = document.querySelector('#screen');
const $toggleButton = document.querySelector('#button');
let timeInterval;
let stopWatchOn = false;
let seconds = 0;

console.log('screen', $screen);
console.log('toggleButton', $toggleButton);

if ($screen && $toggleButton) {
  /* 파라미터 :
      1. 인자 : 문자열(이벤트 이름), 
      2. 함수 주소값 >> 콜백 함수 (다시 호출됨) */
  $toggleButton.addEventListener('click', () => {
    // 누를 때마다 false <=> true 값 바뀌기
    stopWatchOn = !stopWatchOn;
    console.log('stopWatchOn : ', stopWatchOn);

    /* innerHTML : 문자열 내 태그가 있으면 해석해줌
       innerText : 태그가 있어도 문자열을 그대로 반영   */
    $toggleButton.innerText = stopWatchOn ? '■' : '▶';

    // style : style 태그처럼 js에서 css 스타일 적용할 때 (속성 이름은 카멜 케이스)
    // $toggleButton.style.backgroundColor = stopWatchOn ? 'tomato' : 'steelblue';
    $toggleButton.classList.toggle('stop-color');

    if (stopWatchOn) {
      /* setInterval : 일정 시간동안 반복하고 싶은 작업을 할 수 있게
         setTimeout : 한번만 실행됨
          첫번째 인자 : 콜백 함수
          두번째 인자 : number (ms) */
      timeInterval = setInterval(() => {
        seconds++;

        // floor : 소숫점 이하 버리기(실수 내림 처리)
        /* 1초 > 100 , 1분 > 60초 > 6000 , 이후 String으로 파싱 
           padStart : 문자열 길이를 만들어 부족한 자리에 원하는 값을 앞쪽부터 채우기
           padEnd :                      "                          뒤쪽부터 채우기  */
        const mm = String(Math.floor(seconds / 6000) % 60).padStart(2, '0');
        const ss = String(Math.floor(seconds / 100) % 60).padStart(2, '0');
        const ms = String(Math.floor(seconds % 100)).padStart(2, '0');
        $screen.innerHTML = `${mm}:${ss}:${ms}`;
      }, 10);
    } else {
      clearInterval(timeInterval);
      seconds = 0;
      $screen.innerHTML = '00:00:00'; 
    }
  });
}
