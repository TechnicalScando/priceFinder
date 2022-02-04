const priceInput = document.querySelector('.price')
const submitButton = document.querySelector('.submit')
const priceBox = document.querySelector('.priceBox')
const resetButton = document.querySelector('.reset')
const percentSelect = document.querySelector('.percentSelect')
const riskReward = document.querySelector('.riskReward')
const itemName = document.querySelector('.item')

const submit = () => {
  const buyCost = Number(priceInput.value)
  const percentage = Number(percentSelect.value)
  const riskRewardRatio = Number(riskReward.value)
  const price = calcPercent(buyCost, percentage)
  const stopLoss = calcStopLoss(buyCost, (percentage / riskRewardRatio))
  if (price) {
    const stringArray = [`${itemName.value}\u0020`, 'Sell: ', price, 'Buy price: ', buyCost, 'Stop: ', stopLoss]

    const priceLine = document.createElement('div')
    priceLine.className = 'priceLine'

    for (let i = 0; i < stringArray.length; i++) {
      console.log(i)
      const newP = document.createElement('p')
      newP.textContent = stringArray[i]
      if (i === 2) {
        newP.style.color = 'green'
      } else if (i === 4) {
        newP.style.color = 'blue'
      } else if (i === 6) {
        newP.style.color = 'red'
      }
      priceLine.appendChild(newP)
    }
    priceBox.appendChild(priceLine)
  }
}

const reset = () => {
  while (priceBox.firstChild) {
    priceBox.removeChild(priceBox.firstChild)
  }
  priceInput.value = ''
  itemName.value = ''
}

const calcPercent = (price, percentage) => {
  const numPrice = price
  const calcPrice = numPrice + (numPrice * percentage)
  return calcPrice
}

const calcStopLoss = (price, percentage) => {
  const numPrice = price
  const calcPrice = numPrice - (numPrice * percentage)
  return calcPrice
}

submitButton.addEventListener('click', submit)
resetButton.addEventListener('click', reset)
