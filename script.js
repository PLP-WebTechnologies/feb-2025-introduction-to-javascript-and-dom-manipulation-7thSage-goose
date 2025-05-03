const list = document.getElementById("list");
const addButton = document.getElementById("add");
const changeStyle = document.getElementById("txt");

addButton.addEventListener("click", () => {
  const newItem = document.createElement("li"); 
  newItem.textContent = "New Item"; 
  list.appendChild(newItem); 
}); 
changeStyle.style.color = "blue";