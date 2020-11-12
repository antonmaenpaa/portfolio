window.addEventListener('load', main);

function main() {
    addEventListeners();
}

function addEventListeners() {

    const openMenu = document.getElementById('menu');
    const closeMenu = document.getElementById('close-menu');
    const sideLinks = document.getElementById('close');
    const sideLinks1 = document.getElementById('close1');
    const sideLinks2 = document.getElementById('close2');
    const sideLinks3 = document.getElementById('close3');

    sideLinks.onclick = closeSideBarWithLinks;
    sideLinks1.onclick = closeSideBarWithLinks;
    sideLinks2.onclick = closeSideBarWithLinks;
    sideLinks3.onclick = closeSideBarWithLinks;
    openMenu.onclick = openSideBar;
    closeMenu.onclick = closeSideBar;
    
    window.onscroll = changeHeaderBgOnScroll;
}

function openSideBar() {
    let sideBlock = document.getElementById('sideMenu');
    sideBlock.style.width = '15rem';
}


function closeSideBar() {
    let sideBlock = document.getElementById('sideMenu');
    sideBlock.style.width = '0';

}

function closeSideBarWithLinks() {
    let sideBlock = document.getElementById('sideMenu');
    sideBlock.style.width = '0';
}

function changeHeaderBgOnScroll() {
    const headerBlock = document.querySelector('header');
    let top = window.scrollY;
    if (top >= 600) {
        headerBlock.classList.add('header-black');
        
    } else {
        headerBlock.classList.remove('header-black');
        
    }

}



