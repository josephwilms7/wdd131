const noteForm = document.getElementById('noteForm');
const noteInput = document.getElementById('noteInput');
const notesContainer = document.getElementById('notesContainer');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

// Function to render notes
function renderNotes() {
    notesContainer.innerHTML = ''; // Clear current notes
    notes.forEach((note, index) => {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.innerHTML = `
            <p>${note}</p>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        notesContainer.appendChild(noteDiv);
    });
}

// Function to add a note
function addNote(event) {
    event.preventDefault(); // Prevent form submission
    const noteText = noteInput.value;
    notes.push(noteText);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteInput.value = ''; // Clear the input
    renderNotes(); // Update the displayed notes
}

// Function to delete a note
function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes(); // Update the displayed notes
}

// Event listeners
noteForm.addEventListener('submit', addNote);
notesContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const index = event.target.getAttribute('data-index');
        deleteNote(index);
    }
});

// Initial rendering of notes
renderNotes();

localStorage.setItem('test', 'Hello World');
console.log(localStorage.getItem('test'));
