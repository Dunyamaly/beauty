// filter-top.js
const filterList = document.getElementById('filterList')

if (filterList) {
  const categories = [
    'Üz baxımı',
    'Saça qulluq',
    'Dəriyə qulluq',
    'Gözlər üçün',
    'Makiyaj',
    'Bədən baxımı',
    'Dırnaq baxımı',
    'Kişi baxımı',
  ]

  categories.forEach((cat) => {
    const div = document.createElement('div')
    div.textContent = cat
    div.style.padding = '10px 20px'
    div.style.borderBottom = '1px solid #eee'
    div.style.cursor = 'pointer'
    filterList.appendChild(div)
  })
}
