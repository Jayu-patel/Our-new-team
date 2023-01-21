let link = document.querySelector('.links');
let link_lists = document.querySelector('.link-lists');
let menu = document.querySelector('#menu-bar');
let closee = document.querySelector('#close-btn');
let b = document.getElementsByTagName('body');
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');

link.style.overflow = 'hidden';
menu.addEventListener('click',()=>{
    link.style.flex = '1';
    link.style.overflow = 'visible';
    link.style.transition = '0.5s';
    menu.style.display = 'none';
})
closee.addEventListener('click',()=>{
    link.style.flex = '0';
    link.style.overflow = 'hidden';
    link.style.transition = '0.5s';
    menu.style.display = 'block';
})
box1.addEventListener('click',()=>{
    link.style.flex = '0';
    link.style.overflow = 'hidden';
    link.style.transition = '0.5s';
    menu.style.display = 'block';
})
box2.addEventListener('click',()=>{
    link.style.flex = '0';
    link.style.overflow = 'hidden';
    link.style.transition = '0.5s';
    menu.style.display = 'block';
})