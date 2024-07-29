const folderItems = document.getElementsByClassName("folderItem");

for (let i = 0; i < folderItems.length; i++) {
    folderItems[i].addEventListener('dblclick', function() {
        const directoryId = this.getAttribute("data-id");
        window.location.href = "/directory/" + directoryId;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search');
    const searchInput = document.getElementById('searchInput');
    const folders = document.querySelectorAll('.folderItem');

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const searchTerm = searchInput.value.trim().toLowerCase();

        folders.forEach(folder => {
            const folderName = folder.dataset.name.toLowerCase();

            if (folderName.includes(searchTerm)) {
                folder.style.display = 'table-row'; 
            } else {
                folder.style.display = 'none'; 
            }
        });
    });

    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.trim().toLowerCase(); 

        folders.forEach(folder => {
            const folderName = folder.dataset.name.toLowerCase();

            if (folderName.includes(searchTerm)) {
                folder.style.display = 'table-row';
            } else {
                folder.style.display = 'none'; 
            }
        });

        if (searchTerm === '') {
            folders.forEach(folder => {
                folder.style.display = 'table-row'; 
            });
        }
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const folderItems = document.getElementsByClassName("folderItem");

    for (let i = 0; i < folderItems.length; i++) {
        folderItems[i].addEventListener('dblclick', function() {
            const directoryId = this.getAttribute("data-id");
            window.location.href = "/directory/" + directoryId;
        });

        folderItems[i].addEventListener('contextmenu', function(event) {
            event.preventDefault(); // Previne o menu de contexto padrão do navegador
            const contextMenu = document.getElementById('context-menu');
            
            // Posiciona o menu de contexto
            contextMenu.style.top = `${event.clientY}px`;
            contextMenu.style.left = `${event.clientX}px`;
            contextMenu.style.display = 'block';
            
            // Armazena o ID do item clicado
            contextMenu.setAttribute('data-id', this.getAttribute("data-id"));
        });
    }

    // Fecha o menu de contexto quando clicar fora
    document.addEventListener('click', function(event) {
        const contextMenu = document.getElementById('context-menu');
        if (!contextMenu.contains(event.target)) {
            contextMenu.style.display = 'none';
        }
    });

    // Alterna o tema
    const toggleThemeButton = document.getElementById("theme-checkbox");
    const body = document.body;
    const mainElement = document.querySelector('main');
    const headerElement = document.querySelector('header');
    const navElement = document.querySelector('nav');


});
