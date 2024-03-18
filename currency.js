class Currency {
  constructor() {
    this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_9Ju5woFMAiVpylaJ5yAmLbmH3WMkShquJFxV7MUi&base_currency=	";
    }
   async exchange(amount, firstCurrency, secondCurrency) {
       const response = await fetch(`${this.url}${firstCurrency}`)
       const result = await response.json();
       const exchangeResult = amount * result.data[secondCurrency]
       return exchangeResult;
    }
}
