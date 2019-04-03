function currencyConvertor(input) {
    let amount = Number(input.shift());
    let inputCurrency = input.shift();
    let outputCurrency = input.shift();

    if (inputCurrency == 'USD') {
        amount *= 1.79549;
    } else if (inputCurrency == 'EUR') {
        amount *= 1.95583;
    } else if (inputCurrency == 'GBP') {
        amount *= 2.53405;
    }

    if (outputCurrency == 'USD') {
        amount /= 1.79549;
    } else if (outputCurrency == 'EUR') {
        amount /= 1.95583;
    } else if (outputCurrency == 'GBP') {
        amount /= 2.53405;
    }

    console.log(`${amount.toFixed(2)} ${outputCurrency}`);
}

currencyConvertor(['20', 'USD', 'BGN']);