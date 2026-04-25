document.addEventListener('DOMContentLoaded', () => {
  function setupImageSlider(container) {
    if (!container) return

    const images = container.querySelectorAll('img')
    const indicators = container.querySelector('.image-indicators')

    const isTouch = window.matchMedia('(hover: none)').matches
    const isMobile = window.innerWidth <= 1024

    if (!images.length) return

    let currentIndex = 0

    /* =========================
       📱 MOBILE VERSION (SLIDER + DOTS)
    ========================= */

    if (isTouch || isMobile) {
      let startX = 0
      let currentTranslate = 0
      let prevTranslate = 0

      // wrapper
      const wrapper = document.createElement('div')
      wrapper.style.display = 'flex'
      wrapper.style.height = '100%'
      wrapper.style.transition = 'transform 0.3s ease'

      // dots
      const dotsContainer = document.createElement('div')
      dotsContainer.className = 'slider-dots'
      const dots = []

      images.forEach((img, i) => {
        const slide = document.createElement('div')
        slide.style.minWidth = '100%'
        slide.style.height = '100%'

        img.style.position = 'static'
        img.style.opacity = '1'

        slide.appendChild(img)
        wrapper.appendChild(slide)

        const dot = document.createElement('span')
        if (i === 0) dot.classList.add('active')
        dotsContainer.appendChild(dot)
        dots.push(dot)
      })

      container.innerHTML = ''
      container.appendChild(wrapper)
      container.appendChild(dotsContainer)

      function setPosition() {
        wrapper.style.transform = `translateX(${currentTranslate}px)`
      }

      function setIndex(index) {
        currentIndex = index
        currentTranslate = -index * container.offsetWidth
        prevTranslate = currentTranslate
        setPosition()

        // update dots
        dots.forEach((d) => d.classList.remove('active'))
        dots[currentIndex].classList.add('active')
      }

      // touch start
      container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX
        wrapper.style.transition = 'none'
      })

      // touch move
      container.addEventListener('touchmove', (e) => {
        const currentX = e.touches[0].clientX
        const diff = currentX - startX
        currentTranslate = prevTranslate + diff
        setPosition()
      })

      // touch end
      container.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX
        const diff = endX - startX

        if (diff < -50 && currentIndex < images.length - 1) {
          currentIndex++
        } else if (diff > 50 && currentIndex > 0) {
          currentIndex--
        }

        wrapper.style.transition = 'transform 0.3s ease'
        setIndex(currentIndex)
      })

      setIndex(0)
      return
    }

    /* =========================
       🖥️ DESKTOP (HOVER MODE)
    ========================= */

    const dots = []

    if (indicators) {
      indicators.innerHTML = ''

      images.forEach((_, i) => {
        const dot = document.createElement('span')
        if (i === 0) dot.classList.add('active')
        indicators.appendChild(dot)
        dots.push(dot)
      })
    }

    function showImage(index) {
      currentIndex = index

      images.forEach((img) => (img.style.opacity = 0))
      if (dots.length) dots.forEach((d) => d.classList.remove('active'))

      images[currentIndex].style.opacity = 1
      if (dots.length) dots[currentIndex].classList.add('active')
    }

    showImage(0)

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const index = Math.floor((x / rect.width) * images.length)

      showImage(Math.min(index, images.length - 1))
    })

    container.addEventListener('mouseleave', () => {
      showImage(0)
    })
  }

  /* =========================
     INIT ALL CARDS
  ========================= */
  document.querySelectorAll('.card-images').forEach(setupImageSlider)

  /* =========================
     FAVORITE BUTTON
  ========================= */
  document.querySelectorAll('.favorite-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active')
    })
  })
})
