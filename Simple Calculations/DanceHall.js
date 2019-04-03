function danceHall(input) {
    let hallLength = Number(input.shift());
    let hallWidth = Number(input.shift());
    let wardrobeSide = Number(input.shift());

    let hallArea = hallLength * hallWidth;
    let wardrobeArea = wardrobeSide * wardrobeSide; 
    let freeHallArea = hallArea - wardrobeArea - hallArea / 10;
    let dancerArea = freeHallArea / .7040;

    console.log(Math.floor(dancerArea));
}

danceHall([50, 25, 2]);