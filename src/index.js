// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary
// --
import uuid from 'uuid/v4'

// Add necessary imports
import { createTodo,removeTodo,loadTodos} from './todos'
import { renderTodos } from './views'
import { setFilters } from './filters'
// Render initial todos

// Set up search text handler

// Set up checkbox handler

// Set up form submission handler

// Bonus: Add a watcher for local storage
renderTodos()

document.querySelector('#search-text').addEventListener('input', (e) =>{
    setFilters({
        searchText :e.target.value
    })
    renderTodos()
})

document.querySelector('#new-todo').addEventListener('submit',  (e)=> {
    e.preventDefault()
    const trimmedText=e.target.elements.text.value.trim()
    if(trimmedText.length>0){
    createTodo(trimmedText)
    renderTodos()
    e.target.elements.text.value = ''
    }
})

document.querySelector('#hide-completed').addEventListener('change', (e) =>{
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

window.addEventListener('storage',(e)=>{
    if(e.key==='todos'){
        loadTodos()
        removeTodo()
    }
})