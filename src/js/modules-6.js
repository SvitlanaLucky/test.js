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

// const listStatic =
//   document.querySelectorAll('li');
// const listDynamics =
//   document.getElementsByTagName('li');

// console.log('Static: ', listStatic);
// console.log('Dynamic: ', listDynamics);
// _________________________________________________________________________

// const cars = [
//   {
//     id: 1,
//     model: 'Honda',
//     type: 'Civic',
//     price: 120000,
//     img: 'https://cdn2.riastatic.com/photosnew/auto/photo/honda_civic__510691787f.webp',
//   },
//   {
//     id: 2,
//     model: 'Audi',
//     type: 'Q7',
//     price: 40000,
//     img: 'https://cdn1.riastatic.com/photosnew/auto/photo/audi_q7__508873771bx.webp',
//   },
//   {
//     id: 3,
//     model: 'BMW',
//     type: '5 siries',
//     price: 9000,
//     img: 'https://cdn0.riastatic.com/photosnew/auto/photo/bmw_5-series__507762095bx.webp',
//   },
//   {
//     id: 4,
//     model: 'Volvo',
//     type: 'XC60',
//     price: 7000,
//     img: 'https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volvo-xc60__2006476-341x224x60.webp',
//   },
// ];

// const container =
//   document.querySelector(
//     '.js-container'
//   );
// const markup = cars
//   .map(
//     ({
//       id = 'none',
//       model,
//       type,
//       price,
//       img,
//     }) => `<li data-id='${id}'>
//     <img src="${img}" alt="${model}" class = "img">
//     <h2>Марка - ${model}</h2>
//     <h3>Модель - ${type}</h3>
//     <p>Ціна - ${price}</p>
//     </li>`
//   )
//   .join('');

// container.insertAdjacentHTML(
//   'beforeend',
//   markup
// );

// const containerAfter =
//   document.querySelector(
//     '.js-container'
//   );
// containerAfter.innerHTML = '';
// _____________________________________________________________________________________
