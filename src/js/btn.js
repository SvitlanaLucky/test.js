const btnAdd = document.querySelector(
  'button[data-add]'
);
const resetBtn = document.querySelector(
  'button[data-reset]'
);
const valueInput =
  document.querySelector(
    'input[data-value]'
  );
const outputEl = document.querySelector(
  '[data-output] span'
);

let total = 0;

btnAdd.addEventListener(
  'click',
  function () {
    console.log('he-he-he');

    const value = Number(
      valueInput.value
    );

    total += value;
    outputEl.textContent = total;
    valueInput.value = '';

    console.log(total);
  }
);

resetBtn.addEventListener(
  'click',
  function () {
    total = 0;
    outputEl.textContent = total;
  }
);
// ______________________________________________________________________

// const global = 'global';

// if (true) {
//   const blockA = 'block A';

//   console.log(global); // 'global'
//   console.log(blockA); // block A
//   //   console.log(blockB); // ReferenceError: blockB is not defined
//   //   console.log(blockC); // ReferenceError: blockC is not defined

//   if (true) {
//     const blockB = 'block B';

//     console.log(global); // global
//     console.log(blockA); // block A
//     console.log(blockB); // block B
//     // console.log(blockC); // ReferenceError: blockC is not defined
//   }
// }

// if (true) {
//   const blockC = 'block C';

//   console.log(global); // global
//   console.log(blockC); // block C
//   //   console.log(blockA); // ReferenceError: blockA is not defined
//   //   console.log(blockB); // ReferenceError: blockB is not defined
// }

// console.log(global); // global
// // console.log(blockA); // ReferenceError: blockA is not defined
// // console.log(blockB); // ReferenceError: blockB is not defined
// // console.log(blockC); // ReferenceError: blockC is not defined

// let students = 100;

// students += 50;

// console.log(students);
