const priceInput = document.querySelector('.priceInput')
const submitButton = document.querySelector('.submitButton')
const priceList = document.querySelector('.priceList')
const resetButton = document.querySelector('.resetButton')

let submit = () => {
    const price = calcPercent(priceInput.value)
    if(price){
    priceList.textContent = price
    }
}

let reset = () => {
    priceList.textContent = ''
    priceInput.value = ''
}

let calcPercent = (price, percentage) => {
    numPrice = Number(price)
    percentage = .03
    calcPrice = numPrice + (numPrice * percentage)
    return calcPrice 
}

submitButton.addEventListener('click', submit)
resetButton.addEventListener('click', reset)
