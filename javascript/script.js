window.addEventListener('load', main);

function main() {
    addEventListeners();
}

function addEventListeners() {

    const openMenu = document.getElementById('menu');
    const closeMenu = document.getElementById('close-menu');
    
    openMenu.onclick = openBlock;
    closeMenu.onclick = closeBlock;
}

function openBlock() {
    let sideBlock = document.getElementById('sideMenu');
    sideBlock.style.width = '15rem';
}


function closeBlock() {
    let sideBlock = document.getElementById('sideMenu');
    sideBlock.style.width = '0';
}



