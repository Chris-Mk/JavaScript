function tailoringShop(input) {
    let tables = Number(input.shift());
    let lengthOfTables = Number(input.shift());
    let widthOfTables = Number(input.shift());

    let areaOfCloths = (lengthOfTables + 2 * .30) * (widthOfTables + 2 * .30) * tables;
    let areaOfCarriage = (lengthOfTables / 2) * (lengthOfTables / 2) * tables;
    let clothsUSD = areaOfCloths * 7;
    let carriageUSD = areaOfCarriage * 9;
    let totalUSD = clothsUSD + carriageUSD;
    let totalBGN = totalUSD * 1.85;

    console.log(`${totalUSD.toFixed(2)} USD`);
    console.log(`${totalBGN.toFixed(2)} BGN`);
}

tailoringShop([5, 1.00, 0.50]);