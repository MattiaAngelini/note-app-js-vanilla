// Descrizione: Crea un'applicazione per prendere appunti.

// Funzionalità:
// Aggiungi, leggi e elimina note.
// Salva le note nel localStorage per renderle persistenti.

// Funzionalità aggiuntive:
// Aggiungi la possibilità di categorizzare le note (es. lavoro, personale).
// Implementa una ricerca per trovare note specifiche.

// localStorage.clear()

const listNotes = document.getElementById('list-note')

//il programma allo start printa le note salvate nello storge SE ci sono
const notes = JSON.parse(localStorage.getItem('test')) || [];
printOnDom(notes)

function addNote(){

    //BOTTONI
    const btnOpen = document.createElement('button')
    btnOpen.innerHTML = 'APRI'
    const btnDelete = document.createElement('button')
    btnDelete.innerHTML = 'ELIMINA'

    btnDelete.addEventListener('click', function(){
        notes.splice(note.id, 1);
        localStorage.setItem('test', JSON.stringify(notes));
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
    li.innerHTML = note.title + ' ' + note.date + ' '
    li.appendChild(btnDelete)
    li.appendChild(btnOpen)
    listNotes.appendChild(li)

    //oggetti nota pushati in array ntoes e salvate nel local storage
    notes.push(note)
    localStorage.setItem('test', JSON.stringify(notes))
}

function printOnDom(arr){
 
    for (let i = 0; i < arr.length; i++) {
        //BOTTONI
        const btnOpen = document.createElement('button')
        btnOpen.innerHTML = 'APRI'
        const btnDelete = document.createElement('button')
        btnDelete.innerHTML = 'ELIMINA'

        btnDelete.addEventListener('click', function(){
            notes.splice(i, 1);
            localStorage.setItem('test', JSON.stringify(notes));
        })
        
        const li = document.createElement('li')
        li.innerHTML = arr[i].title + ' ' +  arr[i].date + ' '
        li.appendChild(btnDelete)
        li.appendChild(btnOpen)
        listNotes.appendChild(li)
    }
    console.log(notes)
}
