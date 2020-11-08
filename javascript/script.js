window.addEventListener('load', main);

function main() {
    addEventListeners();
    scrolling();
}

function addEventListeners() {

    const openMenu = document.getElementById('menu');
    const closeMenu = document.getElementById('close-menu');

    openMenu.onclick = openBlock;
    closeMenu.onclick = closeBlock;
    window.onscroll = scrolling;
}

function openBlock() {
    let sideBlock = document.getElementById('sideMenu');
    sideBlock.style.width = '15rem';
}


function closeBlock() {
    let sideBlock = document.getElementById('sideMenu');
    sideBlock.style.width = '0';
}

function scrolling() {
    const headerBlock = document.querySelector('header');
    let top = window.scrollY;
    if (top >= 568) {
        headerBlock.classList.add('header-black');
        
    } else {
        headerBlock.classList.remove('header-black');
        
    }

}



