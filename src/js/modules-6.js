// const titleEl =
//   document.createElement('h1');

// titleEl.classList.add('page-title');
// titleEl.textContent = 'Це заголовок ';

// titleEl.insertAdjacentHTML(
//   'beforeend',
//   'hello'
// );

// console.log(titleEl);

// document.body.appendChild(titleEl);
// console.log(document.body);
// __________________________________________________________________________
// const refs = {
//   output: document.querySelector(
//     '.js-output'
//   ),
//   clearBtn: document.querySelector(
//     '.js-clear'
//   ),
// };

// window.addEventListener(
//   'keydown',
//   onKeydown
// );

// function onKeydown(event) {
//   console.log('event.key: ', event.key);
// }
// __________________________________________________________________________________
const title = document.querySelector(
  '.js-title'
);

title.textContent = 'Hello JS';
console.dir(title.textContent);

title.classList.add('title-color');
title.classList.remove('title-color');
title.classList.toggle('title-color');
title.classList.toggle('title-color');

title.style.color = 'green';

console.dir(title);
// ______________________________________________________________________________
