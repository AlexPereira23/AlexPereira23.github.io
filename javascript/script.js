// MENU MOBILE
document.querySelector('.menu-mobile').addEventListener('click',()=>{
    let menuMobile = document.querySelector('.menuItens');
    if(menuMobile.style.display == 'flex') {
        document.querySelector('.menuItens').style.display = 'none';
    } else {
        document.querySelector('.menuItens').style.display = 'flex';
    }
});

// Máquina de Escrever
const texto = document.querySelector('.info-section-texto p');
function maquinaEscrever(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) =>{
        setTimeout(()=>{
            elemento.innerHTML += letra;
        },75 * i);
    });
}
maquinaEscrever(texto);

// SLIDER
let indexImage = 0;
let images = document.querySelectorAll('.image div');
let maxImages = images.length;

function nextImage(){

    images[indexImage].classList.remove('selected');
    indexImage++;

    if(indexImage >= maxImages) {
        indexImage = 0;
    }

    images[indexImage].classList.add('selected');
}   
function start() {
    setInterval(() =>{
        nextImage();
    },3000);
}
window.addEventListener('load',start);
