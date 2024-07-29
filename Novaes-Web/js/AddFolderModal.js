function showModal() {
    document.getElementById('AddFolderModal').style.display = 'block';
}

function hideModal() {
    document.getElementById('AddFolderModal').style.display = 'none';
}

function saveButton() {
    console.log('Salvar Pasta');
    hideModal();
}



function showModalFile() {
    document.getElementById('AddFolderModalFile').style.display = 'block';
}

function hideModalFile() {
    document.getElementById('AddFolderModalFile').style.display = 'none';
}

function saveButtonFile() {
    console.log('Salvar arquivo');
    hideModalFile();
}



function showModalFolderName() {
    document.getElementById('EditModalFolder').style.display = "block";
}

function hideModalEdit() {
    document.getElementById('EditModalFolder').style.display = "none";
}

function saveButtonEditFolder () {
    console.log('Salvar Edição Pasta!')
    hideModalEdit();
}