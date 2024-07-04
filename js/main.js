const navBurger = document.querySelector('.nav__burger')
const navList = document.querySelector('.nav__list')

navBurger.addEventListener('click', function () {
    this.classList.toggle('active')
    navList.classList.toggle('active')
})