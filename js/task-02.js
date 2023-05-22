// Напиши скрипт, який для кожного елемента
// масиву ingredients:

// Створить окремий елемент < li >.
//   Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі < li >
//   за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEL = document.querySelector("#ingredients");
const li1El = document.createElement("li");
li1El.classList.add("item");
li1El.textContent = "Potatoes";
console.log(li1El);
const li2El = document.createElement("li");
li2El.classList.add("item");
li2El.textContent = "Mushrooms";
console.log(li2El);
const li3El = document.createElement("li");
li3El.classList.add("item");
li3El.textContent = "Garlic";
console.log(li3El);
const li4El = document.createElement("li");
li4El.classList.add("item");
li4El.textContent = "Tomatos";
console.log(li4El);
const li5El = document.createElement("li");
li5El.classList.add("item");
li5El.textContent = "Herbs";
console.log(li5El);
const li6El = document.createElement("li");
li6El.classList.add("item");
li6El.textContent = "Condiments";
console.log(li6El);
ingredientsEL.append(li1El, li2El, li3El, li4El, li5El, li6El);
console.log(ingredientsEL);
