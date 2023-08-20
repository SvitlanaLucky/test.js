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
// const title = document.querySelector(
//   '.js-title'
// );

// title.textContent = 'Hello JS';
// console.dir(title.textContent);

// title.classList.add('title-color');
// title.classList.remove('title-color');
// title.classList.toggle('title-color');
// title.classList.toggle('title-color');

// title.style.color = 'green';

// console.dir(title.dataset.id);

// title.hidden = false;

// console.log(title);

// console.dir(
//   title.getAttribute('hidden')
// );
// title.removeAttribute('hidden');
// title.setAttribute('hidden');
// ______________________________________________________________________________

// const list =
//   document.querySelector('.js-list');

// console.dir(list.children);
// console.log([...list.children]);
// ______________________________________________________________________

// const li = document.createElement('li');
// li.textContent =
//   list.children.length + 1;
// li.classList.add('title-color');
// li.dataset.id = '1234';
// const div =
//   document.createElement('div');
// const h2 = document.createElement('h2');
// h2.textContent = 'hello';
// li.append(div);
// div.append(h2);
// list.append(li);

// list.append(li);
// console.dir(li);

// const li = `<li class = 'title-color' data-id = '1234'>${
//   list.children.length + 1
// }
//     <div>
// <h2>hello</h2>
// </div></li>`;
// list.insertAdjacentHTML(
//   'beforeend',
//   li
// );
// ________________________________________________________________

const listStatic =
  document.querySelectorAll('li');
const listDynamics =
  document.getElementsByTagName('li');

console.log('Static: ', listStatic);
console.log('Dynamic: ', listDynamics);
