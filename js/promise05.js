// promise04
// 콜백지옥에 빠진 callback_hell02.js를 Promise를 이용해 해방

function fnA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('A');
      resolve('B');
    }, 3000);
  });
}

function fnB(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(item);
      resolve('C');
    }, 2000);
  });
}

function fnC(item) {
    setTimeout(() => {
      console.log(item);
    }, 2000);
}

// fnA().then(item => fnB(item))
//      .then(item => fnC(item));


// then, catch를 사용하지 않고 async, await를 활용하여 처리 가능
// await를 사용하려면 async가 붙은 함수에서만 사용할 수 있다.
// await 뒤에는 promise여야 함
async function start(){
  const item = await fnA();
  const item2 = await fnB(item);
  fnC(item2);
}
start();