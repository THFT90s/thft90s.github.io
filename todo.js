// document.body.style.backgroundColor = 'pink'

const newTodo = document.querySelector('#new-todo')
const button = document.querySelector('button')
const list = document.querySelector('.todo-list')

// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const renderTodos = () =>{
    //clear list 
   list.innerHTML = ""

   todos.forEach((todo) =>{
    //create & add list to the DOM
   const li = document.createElement('li')
    li.textContent = todo.text
    list.append(li)
})
   
}

renderTodos()

button.addEventListener('click', () =>{
   // Add a new item to the list
    todos.push({ text: newTodo.value, completed: false })
    // Save the list to local storage
    localStorage.setItem('todo-list', JSON.stringify(todos))
    newTodo.value = ""
    renderTodos()
})
