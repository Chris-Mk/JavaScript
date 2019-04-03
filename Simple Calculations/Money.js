function money(input) {
    let bitcoins = parseInt(input.shift());
    let yuan = parseFloat(input.shift());
    let commission = parseFloat(input.shift()) / 100;

    let bitcoinsToLeva = bitcoins * 1168;
    let levaToEuro = bitcoinsToLeva / 1.95;
    let yuanToDollars = yuan * .15;
    let dollarsToLeva = yuanToDollars * 1.76;
    let yuanToEuro = dollarsToLeva / 1.95;
    let totalMoney = levaToEuro + yuanToEuro;
    let finalMoney = totalMoney - (totalMoney * commission);

    console.log(finalMoney.toFixed(2));
}

money([1, 5, 5]);