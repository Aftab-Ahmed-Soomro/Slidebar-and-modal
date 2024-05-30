let modal = document.querySelector('.modal');
let main = document.querySelector('.main');
let hamMenu = document.getElementById('ham-menu');

function signUp() {
    modal.style.display = 'flex';
    main.style.filter = 'blur(10px)';
}

function hide() {
    modal.style.display = 'none';
    main.style.display = 'block';
    main.style.filter = 'blur(0px)';
}

isOpen = false;

function hamburger () {
    isOpen = !isOpen
    if (isOpen) {
        hamMenu.style.display = 'block';
    }
    else {
        hamMenu.style.display = 'none';
    }
}