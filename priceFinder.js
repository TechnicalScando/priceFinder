const priceInput = document.querySelector('.priceInput')
const submitButton = document.querySelector('.submitButton')

let submit = () => {
    const price = priceInput.value
    if(price){
    console.log(`The value is: ${priceInput.value}`)
    }
}

submitButton.addEventListener('click', submit)
