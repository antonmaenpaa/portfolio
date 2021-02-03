window.addEventListener('load', main);

function main() {
    addEventListeners();
}

/** Adds all addventliseteners in one function  */
function addEventListeners() {

    const openMenu = document.getElementById('menu');
    // const closeMenu = document.getElementById('close-menu');
    const sideLinks = document.getElementById('close');
    const sideLinks1 = document.getElementById('close1');
    const sideLinks2 = document.getElementById('close2');
    const sideLinks3 = document.getElementById('close3');

    sideLinks.onclick = closeSideBarWithLinks;
    sideLinks1.onclick = closeSideBarWithLinks;
    sideLinks2.onclick = closeSideBarWithLinks;
    sideLinks3.onclick = closeSideBarWithLinks;
    openMenu.onclick = openCloseSideBar;
    // closeMenu.onclick = closeSideBar;

    
    window.addEventListener('scroll', changeHeaderBgOnScroll);
  
}

/** Function that open sidebar onclick */
function openCloseSideBar() {
    let sideBlock = document.getElementById('sideBar');
    if(sideBlock.style.width == '50%') {
        sideBlock.style.width = null;

    } else {
        sideBlock.style.width = '50%';
    }
}

/** Function that close sidebar onclick */
// function closeSideBar() {
//     let sideBlock = document.getElementById('sideMenu');
//     sideBlock.style.width = '0';

// }

/** Function that close sidebar onclick on sidebar links */
function closeSideBarWithLinks() {
    let sideBlock = document.getElementById('sideMenu');
    sideBlock.style.width = '0';
}



/** Fade in header background to black when scrollY is on height 600 */
function changeHeaderBgOnScroll() {
    const headerBlock = document.querySelector('header');
    let top = window.scrollY;
    if (top >= 600) {
        headerBlock.classList.add('header-black');
        
    } else {
        headerBlock.classList.remove('header-black');
        
    }

}



