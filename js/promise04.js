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

fnA().then(item => fnB(item))
     .then(item => fnC(item));