const btnAdd = document.querySelector('button[data-add]');
const resetBtn = document.querySelector('button[data-reset]');
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('[data-output] span');

let total = 0;

btnAdd.addEventListener('click', function () {
    console.log('click he-he-he');

    const value = Number(valueInput.value);

    total += value;
    outputEl.textContent = total;
    valueInput.value = '';

    console.log(total);
});

resetBtn.addEventListener('click', function () {
    total = 0;
    outputEl.textContent = total;

});





