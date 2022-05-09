window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  navScroll()
  backTopShow()
  menuActiveSection(home)
  menuActiveSection(servicos)
  menuActiveSection(about)

}

function navScroll() {
  if (scrollY > 0) {
    navbar.classList.add("scroll")
  }else {
    navbar.classList.remove("scroll")
  }
}

function backTopShow () {
  if (scrollY > 500) {
    backTop.classList.add("show")
  }else {
    backTop.classList.remove("show")
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove("menu-expanded")
}

function menuActiveSection (section) {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionPassedTarget = targetLine >= sectionTop
  const sectionEndAt = sectionTop + sectionHeight
  const sectionEndTargetLine = sectionEndAt <= targetLine
  const sectionlimite = sectionPassedTarget && !sectionEndTargetLine
  const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`)
  menuElement.classList.remove('active')
  if(sectionlimite) {
    menuElement.classList.add('active')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home,
#home img,
#home .stats,
#servicos,
#servicos header,
#servicos card,
#about,`);