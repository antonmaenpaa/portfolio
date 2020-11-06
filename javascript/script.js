
const openMenu = document.getElementById('menu');
let sideBlock = document.getElementById('sideMenu');

const closeMenu = document.getElementById('close-menu');

openMenu.onclick = function() {
    sideBlock.style.width = '15rem';

}

closeMenu.onclick = function() {
    sideBlock.style.width = '0';
}

