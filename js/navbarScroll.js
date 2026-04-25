const nav = document.querySelector('nav')

let lastScroll = 0

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY

  // 100px-dən yuxarı hissə → həmişə görünür
  if (currentScroll <= 100) {
    nav.classList.remove('hide')
    lastScroll = currentScroll
    return
  }

  // aşağı scroll → gizlət
  if (currentScroll > lastScroll) {
    nav.classList.add('hide')
  }
  // yuxarı scroll → göstər
  else {
    nav.classList.remove('hide')
  }

  lastScroll = currentScroll
})
