const headerNavs = [
  { title: '얄코강좌는', link: '#about' },
  { title: 'HTML', link: '#html' },
  { title: 'CSS', link: '#css' },
  { title: '커리큘럼', link: '#curriculum' },
  { title: '문의하기', link: '#contact' },
];

const $headerNavUl = document.querySelector('header nav.header__nav > ul');

for (const item of headerNavs) {
  const $li = document.createElement('li');
  // 한개를 줄 때는 두 방법 중 뭘 해도 크게 상관 없다.
  // $li.className = 'header__nav-item';
  $li.classList.add('header__nav-item');
  $li.innerHTML = `
    <a href="${item.link}">${item.title}</a>
    `;
  $headerNavUl.appendChild($li);
}

// about
const aboutCards = [
  {
    img: './images/about_1.svg',
    title: '빠른 강의',
    descs: ['군더더기 없는 진행으로', '여러분의 시간을 절약합니다.'],
  },
  {
    img: './images/about_2.svg',
    title: '손쉬운 학습',
    descs: ['강의 페이지를 활용해서', '편리하게 실습할 수 있습니다.'],
  },
  {
    img: './images/about_3.svg',
    title: '플레이그라운드',
    descs: ['강의를 위해 제작한 도구가', '반복 학습을 도와줍니다.'],
  },
];

const $aboutDiv = document.querySelector('#about > div.about');
aboutCards.forEach((item, idx) => {
  let desc = '';
  if (item.descs.length > 0) {
    // 길이가 0보다 길면 하나씩 가져오도록 (길이에 따라 유연하게)
    desc = item.descs[0];
    for (let i = 1; i < item.descs.length; i++) {
      desc += `<br> ${item.descs[i]}`;
    }
  }
  // div 생성
  const $div = document.createElement('div');
  $div.classList.add('about__card');
  // 인덱스 값을 이용해서 타이틀 색 바꾸기
  $div.innerHTML = `
        <img class = "about__icon" src=${item.img} >
        <h2 class = "about__title _${idx + 1}" >${item.title}</h2>
        <p class = "about__text">${desc}</p>
    `;
  $aboutDiv.appendChild($div);
});

// 했던 흔적
// let index = 1;
// for (const item of aboutCards) {
//   const $div = document.createElement('div');
//   $div.className = 'about__card';
//   $div.innerHTML = `
//       <img src="${item.img}"/>
//       <h2>${item.title}</h2>
//       <p>${item.descs[0]} <br>
//       ${item.descs[1]}</p>
//     `;
//   $aboutDiv.appendChild($div);
// }

const $currList = document.querySelectorAll(
  '#curriculum .curriculum__list > li'
);
const $currProgBar = document.querySelector(
  '#curriculum .curriculum__progress .bar'
);

$currList.forEach((item, index) => {
  item.addEventListener(
    'mouseenter',
    () => ($currProgBar.style.width = `${200 * index}px`)
  );
  item.addEventListener('mouseleave', () => ($currProgBar.style.width = 0));
});

const $contactTabs = document.querySelectorAll('#contact #ct_1, #ct_2');
const $contactSlideCon = document.querySelector('#contact .contact__slide-con');

$contactTabs.forEach((item, index) => {
  const marginLeft = [0, '-100vw'][index];
  // 아래와 동일한 한 문장
  // let marginLeft = 0;
  // if (index === 0){
  //   marginLeft = 0;
  // } else if (index === 1){
  //   marginLeft = '-100vw';
  // }

  item.addEventListener('click', () => {
    $contactSlideCon.style.marginLeft = marginLeft;
  });
});

const $menuBtn = document.querySelector('header.header button.header__menu-btn');
const $headerNav = document.querySelector('header.header nav.header__nav');

// e로 조작하기
$menuBtn.addEventListener('click', (e) => {
  $menuBtn.classList.toggle('on');
  $headerNav.classList.toggle('active');

  e.stopPropagation(); // 버블링 중지
});

const $body = document.querySelector('body');
$body.addEventListener('click', () => {
  $menuBtn.classList.remove('on');
  $headerNav.classList.remove('active');
})
