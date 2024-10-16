const tasksForm = document.getElementById('tasks-list')
tasksForm.addEventListener('submit', function (e) {
    e.preventDefault()

    const newTask = document.getElementById('tasks')

    const newLi = newTask.value
    
    const newUl = document.createElement('ul')
    newUl.innerHTML = `
        <li>${newLi}</li>
    `

    const savedTask = document.getElementById('saved-task')
    savedTask.appendChild(newUl)

})