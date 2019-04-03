function harvest(input) {
    let areaX = Number(input.shift());
    let grapesY = Number(input.shift());
    let litersZ = Number(input.shift());
    let workers = Number(input.shift());

    let wineArea = areaX * .4;
    let grapesKg = wineArea * grapesY;
    let litres = grapesKg / 2.5;
    let diff = Math.abs(litersZ - litres);
    let lpp = diff / workers;

    if (litres < litersZ) {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(litres)} liters.
        ${Math.ceil(diff)} liters left -> ${Math.ceil(lpp)} liters per person.`);
    }
}

harvest([650, 2, 175, 3]);