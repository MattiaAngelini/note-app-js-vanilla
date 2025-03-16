// Descrizione: Crea un'applicazione per prendere appunti.

// Funzionalità:
// Aggiungi, leggi e elimina note.
// Salva le note nel localStorage per renderle persistenti.

// Funzionalità aggiuntive:
// Aggiungi la possibilità di categorizzare le note (es. lavoro, personale).
// Implementa una ricerca per trovare note specifiche.

const listNotes = document.getElementById('list-note')
const notes = JSON.parse(localStorage.getItem('test'));

function addNote(){
    let note = {}
    let today = new Date().toLocaleDateString();
    const userInputNote = document.getElementById('user-note').value
    const userInputTitle = document.getElementById('user-title-note').value

    note['id'] = notes.length
    note['title'] = userInputTitle
    note['text'] = userInputNote
    note['date'] = today

    notes.push(note)
    printOnDom(notes)

    localStorage.setItem('test', JSON.stringify(notes))

    console.log(localStorage.getItem("test"));
    
}


function printOnDom(arr){
    const li = document.createElement('li')

    //BOTTONI
    const btnOpen = document.createElement('button')
    btnOpen.innerHTML = 'APRI'
    const btnDelete = document.createElement('button')
    btnDelete.innerHTML = 'ELIMINA'

    for (let i = 0; i < arr.length; i++) {
        li.innerHTML = arr[i].title + ' ' +  arr[i].date + ' '
        li.appendChild(btnDelete)
        li.appendChild(btnOpen)
        listNotes.appendChild(li)
    }
}

