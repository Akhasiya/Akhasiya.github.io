const header = document.querySelector('.fixed-header');
let lastScrollY = 0;
document.addEventListener('scroll', function () {
    const cuerpo = document.querySelector('.cuerpo');
    const offset = window.scrollY;

    if (offset < 300) {
      cuerpo.classList.remove('active');
    } else {
      cuerpo.classList.add('active');
    }
  });

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }

    lastScrollY = currentScrollY;
});
let div = document.getElementById('div')
let nav = document.getElementById('nav')
let header2 = document.getElementById('header');

function show() {
    if (div.classList.contains('hidden') && nav.classList.contains('hidden')) {

        div.classList.remove('hidden')
        div.classList.add('div')
        nav.classList.remove('hidden')
    } else {
        div.classList.add('hidden')
        div.classList.remove('div')
        nav.classList.add('hidden')
    }
}

function responsive(){
    if(header2.style.display == 'flex'){
        header2.style.display = 'none'
    }else{
        header2.style.display = 'flex'
    }
}

const div1 = document.getElementById('div-1');
const div2 = document.getElementById('div-2');
const div3 = document.getElementById('div-3');

const p1 = document.getElementById('Compromiso');
const p2 = document.getElementById('Misión');
const p3 = document.getElementById('Visión');

div1.addEventListener('mouseover', ()=>{
if (p1.classList.contains('hidden')) {
    p1.classList.remove('hidden');
    div1.classList.add('info-div');
    div1.style.transition = '1s all'
}
})
div1.addEventListener('mouseout', ()=>{
if (!p1.classList.contains('hidden')) {
    p1.classList.add('hidden');
    div1.classList.remove('info-div');
    div1.style.transition = '1s all'
}
})

div2.addEventListener('mouseover', ()=>{
if (p2.classList.contains('hidden')) {
    p2.classList.remove('hidden');
    div2.classList.add('info-div');
    div2.style.transition = '1s all'
}
})
div2.addEventListener('mouseout', ()=>{
if (!p2.classList.contains('hidden')) {
    p2.classList.add('hidden');
    div2.classList.remove('info-div');
    div2.style.transition = '1s all'
}
})

div3.addEventListener('mouseover', ()=>{
if (p3.classList.contains('hidden')) {
    p3.classList.remove('hidden');
    div3.classList.add('info-div');
    div3.style.transition = '1s all'
}
})
