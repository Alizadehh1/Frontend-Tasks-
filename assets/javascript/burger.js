let burgerIcon = document.querySelector('.mobile-menu');
let burgerMenu = document.querySelector('.mobile-menu-container');

burgerIcon.addEventListener('click', () => {
    burgerMenu.classList.toggle('mobile-menu-container-active');
    console.log('salan');
});

// burgerIcon.addEventListener('click', () => {
//     burgerMenu.style.display = 'block';
//     burgerMenu.style.transform = 'translateX(0)';
        
// });
