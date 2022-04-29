function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controls: document.querySelector("#controls"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", createBoxes);


let i = 0;

function createBoxes(amount) {
  do {
    onClickButton();
  } while (i < amount);
}
  
function onClickButton() { 
  i += 1;
  const markup = document.createElement("div");
  
  markup.style.backgroundColor = getRandomHexColor();
  markup.style.width = "30px";
  markup.style.height = "30px";
  refs.boxes.append(markup);
};
