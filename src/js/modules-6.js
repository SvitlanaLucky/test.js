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
// _______________________________завдання масив машинок____________________________
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
// const button = document.querySelector(
//   '.js-click'
// );
// const container =
//   document.querySelector(
//     '.js-container'
//   );
// button.addEventListener(
//   'click',
//   onClick
// );
// container.addEventListener(
//   'click',
//   onClick
// );

// let step = 0;

// function onClick(event) {
//   step += 10;
//   container.style.marginLeft = `${step}px`;
//   container.style.marginTop = `${step}px`;
//   console.log(event.currentTarget);
// }
// __________________________________________________________________________

// const title = document.querySelector('.js-title');

// const maxLength = 20;
// const totalLength = maxLength + 3;

// title.addEventListener('click', onClick);

// function onClick(event) {
//   const title = event.currentTarget;
//   const str = title.textContent.slice(0, maxLength);

//   if (title.textContent.length > totalLength) {
//     const remainder = title.textContent.slice(maxLength);

//     title.setAttribute('data-title', remainder);
//     title.textContent = str + '...';
//   } else {
//     const remainder = title.dataset.title;
//     title.textContent = str + remainder;
//     console.log(remainder)
//   }
// }
// ________________________________________________________________________________

// const userName = document.querySelector('.js-input')

// userName.addEventListener('input', onInput)

// function onInput(event) {
//   console.dir(event.currentTarget.value)
// }
// _________________________________форма з даними_____________________________________________

// const formEl = document.querySelector('.js-form');
// formEl.addEventListener('submit', onSubmit);

// function onSubmit(event) {
//   event.preventDefault();

//   const {userName, userEmail, userAge} = event.currentTarget.elements;

//   const data = {
//     name: userName.value,
//     email: userEmail.value,
//     age: userAge.value,
//   };

//   console.log(data);
// }
// _________________________________події клавіатури____________________________________________

// const container = document.querySelector('.js-container');

// document.addEventListener('keydown', onKey);

// function onKey(event) {
//   console.log(event);
// if(event.code === 'Escape' || event.code === 'Enter') {
//   container.classList.toggle('tog');
// };
// ;

//   if(event.ctrlKey && (event.code === 'KeyC')) {
//     event.preventDefault()
//     alert('КОПІЮЄШ, паскуда?!');
//   };
// };
// _______________________________завдання масив машинок_______________________________

const cars = [
  {
    id: 1,
    model: 'Honda',
    type: 'Civic',
    price: 120000,
    img: 'https://cdn2.riastatic.com/photosnew/auto/photo/honda_civic__510691787f.webp',
  },
  {
    id: 2,
    model: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://cdn1.riastatic.com/photosnew/auto/photo/audi_q7__508873771bx.webp',
  },
  {
    id: 3,
    model: 'BMW',
    type: '5 siries',
    price: 9000,
    number: '+380000000',
    img: 'https://cdn0.riastatic.com/photosnew/auto/photo/bmw_5-series__507762095bx.webp',
  },
  {
    id: 4,
    model: 'Volvo',
    type: 'XC60',
    price: 7000,
    img: 'https://cdn.riastatic.com/photosnewr/auto/new_auto_storage/volvo-xc60__2006476-341x224x60.webp',
  },
];

const list = document.querySelector('.js-list');
const form = document.querySelector('.js-search-form');
const favoriteList = document.querySelector('.js-favorite-list');

form.addEventListener('submit', onSearch);
list.addEventListener('click', onClick);

function createMarkup(arr) {
  return arr
    .map(
      ({
        id,
        model,
        type,
        price,
        number,
        img,
      }) =>
        `<li data-id = '${id}'>
        <img src="${img}" alt="${model}" width = '130'>
        <div class= 'js-favorite'>❤️</div>
    <h2>${model}</h2>
    <h3>${type}</h3>
    <p>${price}</p>
  </li>`
    )
    .join('');
}

list.insertAdjacentHTML('beforeend', createMarkup(cars));

function onSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;

  const { query, select } =
    form.elements;

  const searchCars = cars.filter(
    (item) =>
      item[
        select.value
      ].toLowerCase() ===
      query.value.trim().toLowerCase()
  );
  list.innerHTML =
    createMarkup(searchCars);
}

function onClick(event) { 
  if(event.target.classList.contains('js-favorite')) {
    const {id} = event.target.closest('li').dataset{id: };
  }
}
// _________________________________________________________________________________
