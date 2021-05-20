// MENU MOBILE
function menuMobile() {
const btnMobile = document.querySelector('.menu-mobile');
function toggleMenu(){ 
    const navMenu = document.querySelector('.menu');
    navMenu.classList.toggle('active');
}
btnMobile.addEventListener('click',toggleMenu);
}
menuMobile();

// Máquina de Escrever
const texto = document.querySelector('.info-section-texto p');
function maquinaEscrever(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}
maquinaEscrever(texto);

const tempo = new Date();
const ano = tempo.getFullYear();
document.querySelector('.copy').innerHTML = `Alex Pereira ${ano} - Todos os direitos reservados`;

// SLIDER
let indexImage = 0;
let images = document.querySelectorAll('.image div');
let maxImages = images.length;

function nextImage() {

    images[indexImage].classList.remove('selected');
    indexImage++;

    if (indexImage >= maxImages) {
        indexImage = 0;
    }

    images[indexImage].classList.add('selected');
}
function start() {
    setInterval(() => {
        nextImage();
    }, 3000);
}
window.addEventListener('load', start);
