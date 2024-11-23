const sun = document.querySelector(".sun");
const input = document.querySelector(".input");
const form = document.querySelector(".form");
const todo = document.querySelector(".todo");
const all = document.querySelector(".all");
const active = document.querySelector(".active");
const complete = document.querySelector(".complete");
const clear = document.querySelector(".clear");
const body = document.body;
const icon = document.querySelector(".icon");
const tododiv = document.querySelector(".alltodo");

icon.addEventListener("click", (e) => {
  if (e.target.classList.contains("sun")) {
    icon.innerHTML = `<i class="fas fa-moon moon">`;
    body.style.background = "black";
    input.style.background = " rgb(58, 56, 65)";
  } else {
    icon.innerHTML = `<i class="fas fa-sun sun">`;
    body.style.background = "white";
    input.style.background = "white";
  }
});
function createTodo() {
  itemValue = input.value;

  if (itemValue === "") {
    alert("please add new todo");
    return;
  }
  const divEl = document.createElement("div");
  divEl.classList.add("todo");
  divEl.innerHTML = `
 <div class="todo-item">
          <span class="circle"><i class="fas fa-circle circle-icon"></i></span>
          <h2 class="todolist">${itemValue}</h2>
           <button class="delete">X</button>
        </div>
       
`;
  tododiv.appendChild(divEl);
  input.value = "";
}
function filterItem(term) {
  todos = tododiv.childNodes;
  todos.forEach((todo) => {
    if (term == "all") {
      todo.style.display = "block";
    }
    if (term == "complete") {
      if (todo.classList.contains("complete")) {
        todo.style.display = "block";
      } else {
        todo.style.display = "none";
      }
    }
    if (term == "active") {
      if (!todo.classList.contains("complete")) {
        todo.style.display = "block";
      } else {
        todo.style.display = "none";
      }
    }
  });
}

clear.addEventListener("click", () => {
  todos = tododiv.childNodes;
  todos.forEach((todo) => {
    if (todo.classList.contains("complete")) {
      todo.remove();
    }
  });
});

tododiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.closest("div").parentElement.remove();
  }
  if (e.target.classList.contains("circle-icon")) {
    const h2 = e.target.parentElement.nextElementSibling;
    const span = e.target.parentElement;
    const complete = e.target.parentElement.parentElement.parentElement;
    span.innerHTML = `<i class="fas fa-check check-icon">`;
    h2.style.textDecoration = "line-through";
    complete.classList.add("complete");
  }
});
form.addEventListener("submit", (e) => {
  createTodo();
});
all.addEventListener("click", () => {
  filterItem("all");
});
complete.addEventListener("click", () => {
  filterItem("complete");
});
active.addEventListener("click", () => {
  filterItem("active");
});
