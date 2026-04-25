const drawerBtn = document.getElementById('drawerBtn')
const drawer = document.getElementById('drawer')
const overlay = document.getElementById('drawerOverlay')
const list = document.getElementById('drawerList')
const closeBtn = document.getElementById('close-catalog')

const mBtn = document.querySelector('.menu button')
const mMenu = document.getElementById('mMenu')
const mOverlay = document.getElementById('mMenuOverlay')
const mClose = document.getElementById('mMenuClose')

const mCatalog = document.getElementById('mMenuCatalog') // 🔥 mobile kataloq

let items = ['Məsələn 1', 'Məsələn 2']

function render() {
  list.innerHTML = ''

  items.forEach((text) => {
    const div = document.createElement('div')
    div.textContent = text
    div.style.padding = '10px 20px'
    div.style.borderBottom = '1px solid #eee'
    list.appendChild(div)
  })
}

/* =======================
   🔥 SINGLE CATALOG LOGIC
======================= */
function openCatalog() {
  render()
  drawer.classList.add('open')
  overlay.classList.add('show')

  // mobile menu açıqdırsa bağla (UX fix)
  closeMenu()
}

function closeCatalog() {
  drawer.classList.remove('open')
  overlay.classList.remove('show')
}

/* =======================
   MOBILE MENU
======================= */
function openMenu() {
  mMenu.classList.add('active')
  mOverlay.classList.add('active')
}

function closeMenu() {
  mMenu.classList.remove('active')
  mOverlay.classList.remove('active')
}

/* =======================
   EVENTS
======================= */
drawerBtn.addEventListener('click', openCatalog)
overlay.addEventListener('click', closeCatalog)
closeBtn.addEventListener('click', closeCatalog)

/* 🔥 EYNİ FUNKUSİYA - MOBILE LINK */
mCatalog.addEventListener('click', (e) => {
  e.preventDefault()
  openCatalog()
})

mBtn.addEventListener('click', openMenu)
mOverlay.addEventListener('click', closeMenu)
mClose.addEventListener('click', closeMenu)
