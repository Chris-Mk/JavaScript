function trekkingMania(input) {
    let groups = Number(input.shift());
    let musalaClimbers = 0;
    let monblanClimbers = 0;
    let kilimanjaroClimbers = 0;
    let k2Climbers = 0;
    let everestClimbers = 0;
    let totalClimbers = 0
    
    for (let i = 0; i < groups; i++) {
        let climbers = Number(input.shift());
        totalClimbers += climbers;

        if (climbers <= 5) {
            musalaClimbers += climbers;
        } else if (climbers > 5 && climbers <= 12) {
            monblanClimbers += climbers;
        } else if (climbers > 12 && climbers <= 25) {
            kilimanjaroClimbers += climbers;
        } else if (climbers > 25 && climbers <= 40) {
            k2Climbers += climbers;
        } else if (climbers > 40) {
            everestClimbers += climbers;
        }
    }

    console.log(`${((musalaClimbers / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((monblanClimbers / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((kilimanjaroClimbers / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((k2Climbers / totalClimbers) * 100).toFixed(2)}%`);
    console.log(`${((everestClimbers / totalClimbers) * 100).toFixed(2)}%`);
}

trekkingMania([10, 10, 5, 1, 100, 12, 26, 17, 37, 40, 78]);
trekkingMania([5, 25, 41, 31, 250, 6]);