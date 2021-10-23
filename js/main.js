// SHOW
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle', 'nav-menu')
// HIDDEN

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach((n) => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  })
}

/*===== SCROLL UP =====*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll')
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*===== CERTIFICATES SWIPER =====*/
var swiper = new Swiper('.certificates__container', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
})

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  reset: true,
})

/*===== SCROLL HOME =====*/
sr.reveal('.home__title', {})
sr.reveal('.home__img', { delay: 0, origin: 'right' })
sr.reveal('.home__scroll', { delay: 100 })

/*===== SCROLL ABOUT =====*/
sr.reveal('.about__img', { delay: 300 })
sr.reveal('.about__subtitle', { delay: 300 })
sr.reveal('.about__profession', { delay: 300 })
sr.reveal('.about__text', { delay: 300 })
sr.reveal('.about__button', { delay: 200 })
sr.reveal('.about__social-icon', { delay: 600, interval: 200 })

/*===== SCROLL SKILLS =====*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', { distance: '200px', delay: 50, interval: 100 })
sr.reveal('.skills__img', { delay: 400 })

/*===== SCROLL EDUCATION =====*/
sr.reveal('.education__subtitle', {})
sr.reveal('.education__content', { interval: 200 })

/*===== SCROLL PROJECTS =====*/
sr.reveal('.projects__img', { delay: 200 })
