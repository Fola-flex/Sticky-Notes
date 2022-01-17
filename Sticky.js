let addNote = document.getElementsByClassName('notes')[0];
let text = document.getElementsByClassName('text')[0];
let checkIcon = document.getElementById('check');
let closeIcon = document.getElementById('close');
let color = ['#c2ff3d', '#ff3de8', '#3dc2ff', '#04e022','#bc83e6', '#ebb328'];
let angle = ['-5', '-4', '-3', '-2', '-1', '0','1','2', '3', '4', '5'];
let i = 0;

checkIcon.addEventListener('click', () => {
    showStickyNote();
})
 
text.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
    showStickyNote();
    }
});

function addNotes() {
    let noteMenumodal = document.createElement('div');
    let noteMenu = document.createElement('div');
    
    noteMenumodal.className = 'modal'
    noteMenu.className = 'notes-menu';
    noteMenu.style.display = 'flex';
    
    noteMenumodal.style.display = 'block';
    text.style.display = 'block';
    closeIcon.style.display = 'block';
    checkIcon.style.display = 'block';

    noteMenu.appendChild(text);
    noteMenu.appendChild(checkIcon);
    noteMenu.appendChild(closeIcon);
    addNote.appendChild(noteMenu);
    document.body.appendChild(noteMenumodal);

    closeIcon.addEventListener('click', () => {
        noteMenu.style.display = 'none';
        noteMenumodal.style.display = 'none';
        text.value = "";
    });
}  
    
function showStickyNote() {
    let stickyNote = document.createElement('div');
    let stickyNote0 = document.createElement('div');

    stickyNote0.className = 'sticky-notes'
    stickyNote0.innerHTML =   text.value;
    
    stickyNote.appendChild(stickyNote0);
    addNote.appendChild(stickyNote);

    stickyNote0.style.background = displayColor();
    stickyNote0.style.transform = `rotate(${rotate()}deg)`;

    stickyNote.addEventListener('dblclick', () => {
        stickyNote.remove();
    });

    stickyNote.addEventListener('mouseenter', () => {
        stickyNote.style.transform = 'scale(1.1)';
    });
    
    stickyNote.addEventListener('mouseleave', () => {
        stickyNote.style.transform = 'scale(1.0)';
    });
}

function displayColor() {
    if (i > color.length - 1) {
        i = 0;
    }
    return color[i++];
}

function rotate() {
    addAngle = Math.floor(Math.random()*angle.length);
    deg = angle[addAngle]; 
    return deg;
}