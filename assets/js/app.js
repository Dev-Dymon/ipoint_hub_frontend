// toggle sidebar
let menu_btn = document.querySelector('.toggle-menu');
menu_btn.addEventListener('click', ()=>{
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.add('sidebar-active');

    let overlay = document.querySelector('.overlay')
    overlay.style.right = 0;
});

let close_btn = document.querySelector('.close-sidebar')
close_btn.addEventListener('click', ()=>{
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('sidebar-active');

    let overlay = document.querySelector('.overlay')
    overlay.style.right = '-100%';
});

// sidebar dropdown
let dropbtn = document.querySelector('.sub-menu-head')
dropbtn.addEventListener('click', ()=>{
    let submenu = document.querySelector('.sub-menu');
    submenu.classList.toggle('sub-menu-active');

    let direction = document.querySelector('#direction');

    if(direction.classList.contains('fa-angle-up')){
        direction.classList.add('fa-angle-down')
        direction.classList.remove('fa-angle-up')
    }
    else if(direction.classList.contains('fa-angle-down')){
        direction.classList.add('fa-angle-up')
        direction.classList.remove('fa-angle-down')
    }
});