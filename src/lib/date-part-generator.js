const days = () => [...Array(31).keys()].map((i) => `${i + 1}`)

const months = () => [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const years = (count = 100) => {
  const year = new Date().getFullYear()
  return [...Array(count).keys()].map((i) => `${year - i}`)
}

export { days, months, years }
