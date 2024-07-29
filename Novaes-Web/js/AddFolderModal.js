function showModal() {
    document.getElementById('AddFolderModal').style.display = 'block';
}


function hideModal() {
    document.getElementById('AddFolderModal').style.display = 'none';
}

function saveButton() {
    console.log('Salvar');
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