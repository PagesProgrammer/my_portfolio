const toggleButton = document.getElementsByClassName('toggle-button')[0]
const swup = new Swup();
const  navbarLinks = document.getElementsByClassName('navbar-links')[0]


toggleButton.addEventListener( 'click', () => {
  navbarLinks.classList.toggle('active')
}

)