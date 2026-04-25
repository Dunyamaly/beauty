const wrapper = document.querySelector('.slides-wrapper')
let slides = document.querySelectorAll('.slide')
const dotsContainer = document.querySelector('.dots')

let index = 0

const firstClone = slides[0].cloneNode(true)
wrapper.appendChild(firstClone)

slides = document.querySelectorAll('.slide')

slides.forEach((_, i) => {
  if (i === slides.length - 1) return
  const dot = document.createElement('span')
  dot.classList.add('dot')

  dot.addEventListener('click', () => {
    index = i
    moveSlide()
  })

  dotsContainer.appendChild(dot)
})

const dots = document.querySelectorAll('.dot')

function updateDots() {
  dots.forEach((d) => d.classList.remove('active'))
  dots[index % dots.length].classList.add('active')
}

function moveSlide() {
  wrapper.style.transform = `translateX(-${index * 100}%)`
  updateDots()
}

// 🔁 AUTO SLIDE
function autoSlide() {
  index++
  moveSlide()

  if (index === slides.length - 1) {
    setTimeout(() => {
      wrapper.style.transition = 'none'
      index = 0
      moveSlide()
    }, 600)

    setTimeout(() => {
      wrapper.style.transition = 'transform 0.6s ease'
    }, 650)
  }
}

// start
updateDots()
setInterval(autoSlide, 4500)
