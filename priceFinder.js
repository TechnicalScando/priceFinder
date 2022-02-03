const priceInput = document.querySelector('.price')
const submitButton = document.querySelector('.submit')
const priceList = document.querySelector('.priceList')
const resetButton = document.querySelector('.reset')
const percentSelect = document.querySelector('.percentSelect')
const riskReward = document.querySelector('.riskReward')
const itemName = document.querySelector('.item')

let priceStore = []

const submit = () => {
  const buyCost = Number(priceInput.value)
  const percentage = Number(percentSelect.value)
  const riskRewardRatio = Number(riskReward.value)
  const price = calcPercent(buyCost, percentage)
  const stopLoss = calcStopLoss(buyCost, (percentage / riskRewardRatio))
  if (price) {
    priceStore += `${itemName.value} Sell:${price}  Buy price:${buyCost} Stop:${stopLoss}`
    priceList.textContent = priceStore
  }
}

const reset = () => {
  priceList.textContent = ''
  priceInput.value = ''
  itemName.value = ''
  priceStore = []
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
