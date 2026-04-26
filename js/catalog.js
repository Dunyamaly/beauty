const drawerBtn = document.getElementById('drawerBtn')
const drawer = document.getElementById('drawer')
const overlay = document.getElementById('drawerOverlay')
const list = document.getElementById('drawerList')
const closeBtn = document.getElementById('close-catalog')

const mBtn = document.querySelector('.menu button')
const mMenu = document.getElementById('mMenu')
const mOverlay = document.getElementById('mMenuOverlay')
const mClose = document.getElementById('mMenuClose')
const mCatalog = document.getElementById('mMenuCatalog')

// EYNİ KATEQORİYALAR - həm drawer, həm də filter üçün
let categories = [
  'Üz baxımı',
  'Saça qulluq',
  'Dəriyə qulluq',
  'Gözlər üçün',
  'Makiyaj',
  'Bədən baxımı',
  'Dırnaq baxımı',
  'Kişi baxımı',
  'Üz baxımı',
  'Saça qulluq',
  'Dəriyə qulluq',
  'Gözlər üçün',
  'Makiyaj',
  'Bədən baxımı',
  'Dırnaq baxımı',
  'Kişi baxımı',
]

function renderList(containerId, isFilter = false) {
  const container = document.getElementById(containerId)
  if (!container) return

  container.innerHTML = ''

  categories.forEach((cat) => {
    const div = document.createElement('div')
    div.textContent = cat
    div.style.padding = '10px 20px'
    div.style.borderBottom = '1px solid #eee'
    div.style.cursor = 'pointer'

    if (isFilter) {
      div.addEventListener('click', () => {
        console.log('Filtr: ' + cat)
        // İstəyirsən burada filtrasiya et
      })
    }

    container.appendChild(div)
  })
}

/* CATALOG OPEN/CLOSE */
function openCatalog() {
  renderList('drawerList', false)
  drawer.classList.add('open')
  overlay.classList.add('show')
  closeMenu()
}

function closeCatalog() {
  drawer.classList.remove('open')
  overlay.classList.remove('show')
}

/* MOBILE MENU */
function openMenu() {
  mMenu.classList.add('active')
  mOverlay.classList.add('active')
}

function closeMenu() {
  mMenu.classList.remove('active')
  mOverlay.classList.remove('active')
}

/* EVENTS */
drawerBtn.addEventListener('click', openCatalog)
overlay.addEventListener('click', closeCatalog)
closeBtn.addEventListener('click', closeCatalog)
mCatalog.addEventListener('click', (e) => {
  e.preventDefault()
  openCatalog()
})
mBtn.addEventListener('click', openMenu)
mOverlay.addEventListener('click', closeMenu)
mClose.addEventListener('click', closeMenu)
