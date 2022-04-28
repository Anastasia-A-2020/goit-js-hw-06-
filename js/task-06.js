const refs = {
  input: document.querySelector("#validation-input"),
}

const CheckLengthHendler = () => {
  if (refs.input.value.length > 0 && refs.input.value.length <= refs.input.dataset.length) {
    refs.input.classList.remove("invalid");
    refs.input.classList.add("valid");
    return;
  }

  refs.input.classList.add("invalid");
}


refs.input.addEventListener("blur", CheckLengthHendler);