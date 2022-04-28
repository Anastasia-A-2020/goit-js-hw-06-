const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
  list: document.querySelector("#ingredients"),
};

const items = ingredients.map(ingridient => {
  const itemMarkup = document.createElement("li");
  itemMarkup.textContent = ingridient;
  itemMarkup.classList.add("item");
  return itemMarkup;
});

refs.list.append(...items);

