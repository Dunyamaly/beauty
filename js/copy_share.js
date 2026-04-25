const copyBtn = document.querySelector('.copy')
const shareBtn = document.querySelector('.share')
const input = document.querySelector('.invite-inline input')

const link = input.value

// 🔹 Kopyala
copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(link)
    copyBtn.innerText = 'Kopyalandı!'
    setTimeout(() => {
      copyBtn.innerText = 'Kopyala'
    }, 2000)
  } catch (err) {
    alert('Kopyalama alınmadı')
  }
})

// 🔹 Paylaş
shareBtn.addEventListener('click', async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Biznest ilə qazanc əldə et',
        text: 'Bu linklə qoşul və qazanc əldə et:',
        url: link,
      })
    } catch (err) {
      console.log('İstifadəçi paylaşmadı')
    }
  } else {
    // fallback (desktop)
    try {
      await navigator.clipboard.writeText(link)
      alert('Link kopyalandı! İstədiyin yerdə paylaş.')
    } catch {
      alert('Paylaş mümkün olmadı')
    }
  }
})
