const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  result: document.querySelector('#value'),
}

const onDecrementBtn = () => refs.result.textContent -= 1;

const onIncrementBtn = () => {
  refs.result.textContent = Number(refs.result.textContent) + 1;
  // refs.result.textContent ++;

};

refs.decrementBtn.addEventListener("click", onDecrementBtn);
refs.incrementBtn.addEventListener("click", onIncrementBtn);

