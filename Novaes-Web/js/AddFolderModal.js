document.addEventListener('DOMContentLoaded', function () {
    const addFolderBtn = document.getElementById('addFolderBtn');
    const folderModal = document.getElementById('folderModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const folderForm = document.getElementById('folderForm');

    addFolderBtn.addEventListener('click', function () {
        folderModal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        folderModal.style.display = 'none';
    });

    cancelBtn.addEventListener('click', function () {
        folderModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === folderModal) {
            folderModal.style.display = 'none';
        }
    });

    folderForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const folderName = document.getElementById('folderName').value;
        alert(`Pasta '${folderName}' salva!`);
        folderModal.style.display = 'none';
    });
});
