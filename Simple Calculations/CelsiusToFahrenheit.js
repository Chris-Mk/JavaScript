function convertor(input) {
    let celsius = Number(input.shift());
    let fahrenheit = (celsius * 9 / 5) + 32;

    console.log(fahrenheit.toFixed(2));
}

convertor([0]);