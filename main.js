const amountInput = document.querySelector("#amount")
const firstOption = document.querySelector("#firstCurrencyOption")
const secondOption=document.querySelector("#secondCurrencyOption")
const resultInput = document.querySelector("#result")
const currency = new Currency();
runEventListeners()
function runEventListeners() {
    amountInput.addEventListener("input",exchange)
}

function exchange() {
    const amount = Number(amountInput.value.trim())
    const firstOptionvalue = firstOption.options[firstOption.selectedIndex].textContent;
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent
    console.log(firstOptionvalue, secondOptionValue);
    currency.exchange(amount, firstOptionvalue, secondOptionValue).then((result) => {
        resultInput.value=result.toFixed(3)
    })
    
}