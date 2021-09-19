const allCategoriesRef = document.querySelector('ul');
const list = document.querySelectorAll('.item');
console.log(`В списке ${list.length} категории.`)
const categoriesRef = document.querySelectorAll("li.item");

categoriesRef.forEach(element => console.log('Категория:', element.firstElementChild.textContent,
'Количество элементов:', element.lastElementChild.children.length));
