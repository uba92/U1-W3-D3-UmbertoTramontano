const tasksForm = document.getElementById('tasks-list')
tasksForm.addEventListener('submit', function (e) {
    e.preventDefault()

    //creo un riferimento per il tag input in cui inserire la task da aggiungere
    const newTask = document.getElementById('tasks')

    //salvo in una costante il 'value' del tag input, ovvero la nuova task inserita dall'utente
    const newLi = newTask.value

    //creo un nuovo elemento 'li' che conterrà la task inserita dall'utente 
    const li = document.createElement('li')
    li.innerText = newLi

    //event listener su li - al click il testo verrà sbasrrato da una linea orizzontale, tipo depennato
    li.addEventListener('click', function (){
        li.style.textDecoration = 'line-through'
    })
    //creo un bottone che affiancherà 'li' per rimuovere la task corrispondente
    const removeBtn = document.createElement('button')
    removeBtn.innerText = 'REMOVE'
    li.appendChild(removeBtn)

    //event listener per rimuovere la task corrispondente al click del button remove
    removeBtn.addEventListener('click', function () {
        li.style.display = 'none'
    })
    //creo un nuovo elemento 'ul' a cui appendere li
    const newUl = document.createElement('ul')
    newUl.appendChild(li)
    
    // appendo la lista alla section dedicata
    const savedTask = document.getElementById('saved-task')
    savedTask.appendChild(newUl)

    newTask.value = ''

})