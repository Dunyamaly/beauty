const track = document.querySelector('.cat-grid')
const nextBtn = document.querySelector('.right')
const prevBtn = document.querySelector('.left')

const cards = document.querySelectorAll('.cat-card')

const cardWidth = cards[0].offsetWidth + 20

let index = 1
let auto

// ---------------- CLONE ----------------
const firstClone = cards[0].cloneNode(true)
const lastClone = cards[cards.length - 1].cloneNode(true)

track.appendChild(firstClone)
track.insertBefore(lastClone, cards[0])

const items = document.querySelectorAll('.cat-card')

// initial position
track.style.transform = `translateX(${-cardWidth * index}px)`

// ---------------- MOVE ----------------
function move() {
  track.style.transition = 'transform 0.5s ease'
  track.style.transform = `translateX(${-cardWidth * index}px)`
}

// ---------------- NEXT ----------------
function next() {
  if (index >= items.length - 1) return
  index++
  move()
}

// ---------------- PREV ----------------
function prev() {
  if (index <= 0) return
  index--
  move()
}

// ---------------- LOOP FIX ----------------
track.addEventListener('transitionend', () => {
  const items = document.querySelectorAll('.cat-card')

  if (items[index].isSameNode(firstClone)) {
    track.style.transition = 'none'
    index = 1
    track.style.transform = `translateX(${-cardWidth * index}px)`
  }

  if (items[index].isSameNode(lastClone)) {
    track.style.transition = 'none'
    index = items.length - 2
    track.style.transform = `translateX(${-cardWidth * index}px)`
  }
})

// ---------------- AUTO ----------------
function startAuto() {
  auto = setInterval(next, 3000)
}

function resetAuto() {
  clearInterval(auto)
  startAuto()
}

startAuto()

// ---------------- BUTTONS ----------------
nextBtn.addEventListener('click', () => {
  next()
  resetAuto()
})

prevBtn.addEventListener('click', () => {
  prev()
  resetAuto()
})
