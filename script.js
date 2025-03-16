console.log('test')
const listNotes = document.getElementById('list-note')
let notes = []

function addNote(){

    let note = {}
    let today = new Date().toLocaleDateString();

    const userInputNote = document.getElementById('user-note').value
    const userInputTitle = document.getElementById('user-title-note').value

    note['title'] = userInputTitle
    note['text'] = userInputNote
    note['date'] = today

    notes.push(note)
 
    printOnDom(notes)

    console.log(notes)
    
}


function printOnDom(arr){
    const li = document.createElement('li')

    for (let i = 0; i < arr.length; i++) {
        li.innerHTML = arr[i].title
        listNotes.appendChild(li)
    }
}