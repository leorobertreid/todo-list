import Todo from './Todo.js'

const Todos = (todoData) => {
    let todoElements = todoData.map((todoItem) => Todo(todoItem.name, todoItem.description, todoItem.id, todoItem.buttonId))
    let renderVal = ""
    
    todoElements.forEach((element) => {
        renderVal += element
    })

    return renderVal
}

export default Todos