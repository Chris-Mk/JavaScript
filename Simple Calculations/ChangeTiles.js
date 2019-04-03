function changeTiles(input) {
    let siteLength = parseInt(input.shift());
    let tileWidth = parseFloat(input.shift());
    let tileLength = parseFloat(input.shift());
    let benchWidth = parseInt(input.shift());
    let benchLength = parseInt(input.shift());

    let siteArea = siteLength * siteLength;
    let benchArea = benchWidth * benchLength;
    let effectiveArea = siteArea - benchArea;
    let tileArea = tileWidth * tileLength;
    let requiredTiles = effectiveArea / tileArea;
    let requiredTime = requiredTiles * .20;

    console.log(Math.round(requiredTiles * 100) / 100);
    console.log(Math.round(requiredTime * 100) / 100);
}

changeTiles([20, 5, 4, 1, 2]);