const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const finished = document.getElementById('finished');
const popup = document.getElementById('popup-form');
const add = document.getElementById('add');
const submit = document.getElementById('submit');
const closeform = document.getElementById('close');
const table = document.getElementById('table');

function showForm() {
    popup.style.display = "block";
}

function hideForm() {
    popup.style.display = "none";
}

add.onclick = function() {showForm()}

function resetFields() {
    title.value = ""
    author.value = ""
    pages.value = ""
}

closeform.onclick = function() {resetFields(); hideForm()}

function insertData() {
    let row = table.insertRow(-1);
    let titleData = row.insertCell(0);
    let authorData = row.insertCell(1);
    let pagesData = row.insertCell(2);
    let finishedData = row.insertCell(3);

    titleData.innerHTML = title.value;
    authorData.innerHTML = author.value;
    pagesData.innerHTML = pages.value;
    finishedData.innerHTML = `<input id="finished" name="finished" type="checkbox" ${finished.checked?"checked":""}>`

}

submit.onclick = function() {insertData(); resetFields(); hideForm()}