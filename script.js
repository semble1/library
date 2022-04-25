const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const popup = document.getElementById('popup-form');
const add = document.getElementById('add');
const submit = document.getElementById('submit');

function showForm() {
    popup.style.display = "block";
}

function hideForm() {
    popup.style.display = "none";
}

add.onclick = function() {showForm()}