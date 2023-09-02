import { getItemTemplate } from './getItemTemplate.js';
import { items } from './items.js';

const refs = {
  list: document.querySelector('.list'),
  form: document.querySelector('.forma'),
};

const render = () => {
  const lis = items.map(getItemTemplate);

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', lis.join(''));
};

const addItem = (text) => {
  const payload = {
    text,
    isDone: false,
  };

  items.push(payload);
};

const handSubmit = (event) => {
  const { value } = event.target.elements.text;

  event.preventDefault();
  addItem(value);
  render();
  refs.form.reset();
};

render();

refs.form.addEventListener('submit', (event) => {
  event.preventDefault();

  console.log(event.target.elements.text.value);
});
