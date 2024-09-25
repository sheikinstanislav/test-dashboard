const menuItems = document.querySelectorAll('.nav-menu__item');

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuItems.forEach((el) => el.classList.remove('nav-menu__item--active'));

    item.classList.add('nav-menu__item--active');
  });
});
