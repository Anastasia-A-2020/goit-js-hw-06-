const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
}

refs.input.addEventListener("input", onChangeTextSize);

function onChangeTextSize() {
  console.log(refs.input.value);
  refs.span.style.fontSize= `${refs.input.value}px`;
 };