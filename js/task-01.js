const refs = {
  categories: document.querySelectorAll("h2"),
  items: document.querySelectorAll(".item ul"),
}

console.log("Number of categories: ", refs.categories.length);

const categoryDetails = refs.items.forEach(category => {
  console.log(`Category: ${category.previousElementSibling.textContent}`),
  console.log(`Elements: ${category.children.length}`);
})