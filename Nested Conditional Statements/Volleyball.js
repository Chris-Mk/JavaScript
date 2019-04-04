function volleyball(input) {
    let year = input.shift();
    let holidays = Number(input.shift());
    let weekendsHome = Number(input.shift());

    let weekendsSofia = 48 - weekendsHome;
    let playSofia = (3/4 * weekendsSofia) + (2/3 * holidays);
    let playTotal = playSofia + weekendsHome;

    if (year === 'leap') {
        playTotal = Math.floor(playTotal + (.15 * playTotal));
        console.log(playTotal);
    } else if (year === 'normal') {
        console.log(Math.floor(playTotal));
    }
}

volleyball(['leap', 0, 1]);