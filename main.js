import Todos from "./app/Todos"

const h_app = document.getElementById("app") // access the app html
const h_todos = document.getElementById("todos") // access the todos html
const h_submitButton = document.getElementById("buttonSubmit")

let todoData = []

const addItem = (name, description) => {
  console.log
  todoData.push({
    name,
    description,
    id: "id-" + (Math.random() * 1000).toString() + Date.now().toString(),
    buttonId: "buttonid-" + (Math.random() * 1000).toString() + Date.now().toString(),
  })

  renderPage()
}

h_submitButton.addEventListener("click", () => {
  const nameVal = document.getElementById("itemName").value
  const descriptionVal = document.getElementById("itemDescription").value

  document.getElementById("itemName").value = ""
  document.getElementById("itemDescription").value = ""

  addItem(nameVal, descriptionVal)
})


const removeTodoItem = (itemId) => {
  todoData = todoData.filter((item) => item.id !== itemId)
  renderPage()
}

const removeTodos = () => {
  let todoButtons = []
  for (let element of todoData) {
    todoButtons.push(document.getElementById(element.buttonId))
  }
  todoButtons.forEach((button, index) => {
    button.onclick = () => {
      removeTodoItem(todoData[index].id)
    }
  })
}

const renderPage = () => {

  console.log(todoData)
  
  let todos = Todos(todoData)
  h_todos.innerHTML = todos
  console.log(todoData)
  
  removeTodos()
}

renderPage()

