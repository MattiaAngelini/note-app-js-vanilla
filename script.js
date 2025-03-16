// Descrizione: Crea un'applicazione per prendere appunti.
// Funzionalità:
// Aggiungi, leggi e elimina note.
// Salva le note nel localStorage per renderle persistenti.

// localStorage.clear()

const listNotes = document.getElementById('list-note')
const modal = document.getElementById('ms-modal')
const modalTitle = document.getElementById('modal-title')
const modalText = document.getElementById('modal-text')

//il programma allo start printa le note salvate nello storge SE ci sono
const notes = JSON.parse(localStorage.getItem('test')) || [];
printOnDom(notes)

//funzione che trasforma nota in oggetto, la stampa con due bottoni apri o elimina, 
// pusha obj in array e salva array con notes nel local storage
function addNote(){
    //BOTTONI
    const btnOpen = document.createElement('button')
    btnOpen.classList.add('btn','btn-primary', 'm-1')
    btnOpen.innerHTML = 'APRI'
    const btnDelete = document.createElement('button')
    btnDelete.classList.add('btn','btn-danger')
    btnDelete.innerHTML = 'ELIMINA'

    btnDelete.addEventListener('click', function(){
        notes.splice(note.id, 1);
        localStorage.setItem('test', JSON.stringify(notes));
        location.reload();
    })
    btnOpen.addEventListener('click', function(){
        modal.classList.remove('d-none')
        modalTitle.innerHTML = note.title
        modalText.innerHTML = note.text
    })
        
    //costruzione oggetto con titolo, nota e data - oggetto stampato tra 'le mie note'
    let note = {}
    let today = new Date().toLocaleDateString();
    const userInputNote = document.getElementById('user-note').value
    const userInputTitle = document.getElementById('user-title-note').value
    note['id'] = notes.length
    note['title'] = userInputTitle
    note['text'] = userInputNote
    note['date'] = today
    const li = document.createElement('li')
    li.innerHTML = note.title + ' - ' + note.date + ' - '
    li.appendChild(btnDelete)
    li.appendChild(btnOpen)
    listNotes.appendChild(li)

    //oggetti nota pushati in array ntoes e salvate nel local storage
    notes.push(note)
    localStorage.setItem('test', JSON.stringify(notes))
}

//funzione che stampa nel dom la lista dell note salvate nel local storage,
//con bottoni per eliminare nota o visualizzarla nella modale
function printOnDom(arr){

    for (let i = 0; i < arr.length; i++) {
        //BOTTONI
        const btnOpen = document.createElement('button')
        btnOpen.classList.add('btn','btn-primary', 'm-1')
        btnOpen.innerHTML = 'APRI'
        const btnDelete = document.createElement('button')
        btnDelete.innerHTML = 'ELIMINA'
        btnDelete.classList.add('btn','btn-danger')
        btnDelete.addEventListener('click', function(){
            notes.splice(i, 1);
            localStorage.setItem('test', JSON.stringify(notes));
            location.reload();
        })

        btnOpen.addEventListener('click', function(){
        modal.classList.remove('d-none')
        modalTitle.innerHTML = arr[i].title
        modalText.innerHTML = arr[i].text
        })
        const li = document.createElement('li')
        li.innerHTML = arr[i].title + ' - ' +  arr[i].date + ' - '
        li.appendChild(btnDelete)
        li.appendChild(btnOpen)
        listNotes.appendChild(li)
    }
    console.log(notes)
}

function closeModal(){
    modal.classList.add('d-none')
}