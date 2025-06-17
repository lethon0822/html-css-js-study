// promise03
// 콜백지옥에 빠진 callback_hell02.js를 Promise를 이용해 해방

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('A');
    resolve('B');
  }, 3000);
});

p.then((item) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('item');
      resolve('C');
    }, 2000);
  });
}).then((item) => {
  setTimeout(() => {
    console.log(item);
  }, 1000);
});
