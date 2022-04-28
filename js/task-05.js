const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
}

const onTypeName = () => {
  if (!refs.input.value) {
    return refs.output.textContent = "Anonymous";
  }
  return refs.output.textContent = refs.input.value;
}; 

refs.input.addEventListener("input", onTypeName);