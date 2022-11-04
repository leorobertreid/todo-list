const Todo = (name, description, id, buttonId) => {

    return `
    <div id ="${id}" class="todoItem">
        <h2>${name}</h2>
        <p>${description}</p>
        <button type="button" class="todoButton" id=${buttonId}>remove</button>
    </div>
    `;
}

export default Todo