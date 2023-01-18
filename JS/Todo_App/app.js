//* Elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.querySelector("#todo-button"); //? getElementById ile arasında performans farkı vardır. Bu daha yavaş kalır
const todoUl = document.querySelector("#todo-ul");

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

//* Load event vs. DomContentLoaded
window.addEventListener("load", () => {
  getTodoListFromLocalStorage();
});

const getTodoListFromLocalStorage = () => {
  //? get TodoList from localStorage and load to UI
  todoList.forEach((todoItem) => {
    createTodo(todoItem);
  });
};

//* form => submit event vs. button => click event
// form.addEventListener("submit", ()=>{})
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (todoInput.value.trim() === "") {
    alert("Please, enter new todo text!");
    return;
  }
  const newTodo = {
    id: new Date().getTime(), //? unique id with ms of now
    completed: false, //? status
    text: todoInput.value, //? userInput
  };

  createTodo(newTodo);

  todoList.push(newTodo);
  //? localStorage todoList Update
  localStorage.setItem("todoList", JSON.stringify(todoList)); //* stringfy!!!!!!!!!!!!!!!!!!!!!!!!
  e.target.closest("form").reset(); //? inputları form.reset ile boşalttık
});

const createTodo = (newTodo) => {
  //* todo item creation
  //! obj. dest. (ES6 => JS'e kazandırılan yapılar)
  const { id, completed, text } = newTodo;

  const li = document.createElement("li");
  li.setAttribute("id", id);

  completed ? li.classList.add("checked") : "";

  const icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-check");
  li.append(icon);

  const p = document.createElement("p");
  p.innerText = text;
  li.appendChild(p);

  const removeIcon = document.createElement("i");
  removeIcon.setAttribute("class", "fas fa-trash");
  li.append(removeIcon);

  todoUl.prepend(li);
};

//* Capturing vs. Bubbling
todoUl.addEventListener("click", (e) => {
  const idAttr = e.target.closest("li").getAttribute("id");
  if (e.target.classList.contains("fa-check")) {
    e.target.parentElement.classList.toggle("checked");
    todoList.map((todo) => {
      if (todo.id == idAttr) {
        todo.completed == !todo.completed;
      }
    });

    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
    todoList = todoList.filter((todo) => todo.id != idAttr); //? id'si ile silinmeyenleri filtrele ve array i update et
    //* add updated array to localStorage
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }
});
