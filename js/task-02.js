const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
 const vegetable = document.createElement('ul');
 ingredients.forEach(ingredient => {
   const li = document.createElement('li');
   const item = document.createElement('item');
   item.textContent = ingredient,
   li.appendChild(item);
   vegetable.appendChild(li);

 })
 
document.body.appendChild(vegetable);
console.log(vegetable)

