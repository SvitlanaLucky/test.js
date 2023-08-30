const getItemTemplate = ({
  isDone,
  text,
}) => `<li class="item">
        <div>
          <input type="checkbox" ${
            isDone ? 'checked' : ''
          }/>
          <span>${text}</span>
        </div>
        <button type="button">x</button>
      </li>`;

const refs = {
  list: document.querySelector('.list'),
  form: document.querySelector(
    '.forma'
  ),
};

const render = () => {
  const lis = items.map((item) =>
    getItemTemplate(item)
  );

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML(
    'beforeend',
    lis.join('')
  );
};

const items = [
  {
    text: 'купити хліб',
    isDone: false,
  },
  {
    text: 'купити молоко',
    isDone: false,
  },
  {
    text: 'купити до чаю',
    isDone: true,
  },
];

render();

refs.form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    console.log(event.target.elements.text.value);
  }
);
