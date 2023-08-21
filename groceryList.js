const root = document.querySelector('#root');

const groceries = [
  {item: 'Apples', bought: false,},
  {item: 'Bananas', bought: true,},
];

const renderGroceryList = () => {
  /*
  these next few lines check if a grocery list already exists on screen
  if yes, remove it from the screen
  if we do not have this check, then the grocery list will keep appending on top of each other
  */
  const existingList = document.querySelector('#grocery-list');
    
  if (existingList) {
    root.removeChild(existingList);
  }
  
  const list = document.createElement('ul');
  list.id = 'grocery-list';
  
  groceries.forEach((grocery, index) => {
    const groceryItem = document.createElement("li");
    // groceryItem.id = "groceryItem";
    groceryItem.textContent = grocery.item;

    if (grocery.bought) {
        groceryItem.style.textDecoration = "line-through";
    }

    groceryItem.addEventListener("click", () => {
        if (grocery.bought) {
            grocery.bought = false;
            renderGroceryList();
        } else {
            grocery.bought = true;
            renderGroceryList();
        }
    })
    
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "x";

    deleteButton.addEventListener("click", () => {
        groceries.splice(index, 1);
        renderGroceryList();
    })

    list.appendChild(groceryItem);
    groceryItem.appendChild(deleteButton);
  })
  
  root.appendChild(list);
}

const renderInputs = () => {
  
  const input = document.createElement('input');
  const button = document.createElement('button');

  button.innerText = "Add grocery"

  button.addEventListener("click", () => {
    groceries.push({item: input.value, bought: false})
    renderGroceryList();
  })

  
  // whenever user types into the input field and presses the button, a new grocery item should appear in the list

  root.appendChild(input);
  root.appendChild(button);
}

renderInputs();
renderGroceryList();