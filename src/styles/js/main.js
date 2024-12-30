const inputText = document.getElementById("add-item");

const addBtn = document.getElementById("create");

const deleteBtn = document.getElementById("delete");

const editBtn = document.getElementById("edit");

const listBox = document.getElementById("list-box");

const span = document.createElement("span");
const p = document.createElement("p");
const btn = document.createElement("button");

span.appendChild(p);
span.appendChild(btn);

console.log(span);

addBtn.addEventListener("click", () => {
    listBox.innerHTML = inputText;
});