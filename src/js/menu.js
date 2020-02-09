const handleMenu = (button, menu) => {
    button.addEventListener('click', () => {
            button.classList.toggle('change');
            menu.classList.toggle('show');
            document.body.classList.toggle('lock'); 
    })
};

document.addEventListener('DOMContentLoaded', () => {
    const buttonMenu = document.querySelector('.navbar__menu'),
        menu = document.querySelector('.side-nav');
    handleMenu(buttonMenu, menu);
});