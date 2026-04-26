const sortSelect = document.getElementById('sortSelect')
const cardsContainer = document.querySelector('.cards')

sortSelect.addEventListener('change', () => {
  const cards = Array.from(document.querySelectorAll('.card'))

  let sortedCards = [...cards]

  switch (sortSelect.value) {
    case 'price-asc':
      sortedCards.sort((a, b) => getPrice(a) - getPrice(b))
      break

    case 'price-desc':
      sortedCards.sort((a, b) => getPrice(b) - getPrice(a))
      break

    case 'name-asc':
      sortedCards.sort((a, b) => getName(a).localeCompare(getName(b)))
      break

    case 'name-desc':
      sortedCards.sort((a, b) => getName(b).localeCompare(getName(a)))
      break
  }

  cardsContainer.innerHTML = ''
  sortedCards.forEach((card) => cardsContainer.appendChild(card))
})

function getPrice(card) {
  return parseFloat(card.querySelector('.price').innerText.replace('AZN', '').trim())
}

function getName(card) {
  return card.querySelector('.product-name').innerText.trim()
}
