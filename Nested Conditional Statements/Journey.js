function journey(input) {
    let budget = Number(input.shift());
    let season = input.shift();

    switch (season) {
        case 'summer':
            if (budget <= 100) {
                budget *= .30;
                console.log('Somewhere in Bulgaria');
                console.log(`Camp - ${budget.toFixed(2)}`);
            } else if (budget <= 1000) {
                budget *= .40;
                console.log('Somewhere in Balkans');
                console.log(`Camp - ${budget.toFixed(2)}`);
            } else {
                budget *= .90;
                console.log('Somewhere in Europe');
                console.log(`Hotel - ${budget.toFixed(2)}`);
            }
            break;
        case 'winter':
            if (budget <= 100) {
                budget *= .70;
                console.log('Somewhere in Bulgaria');
                console.log(`Hotel - ${budget.toFixed(2)}`);
            } else if (budget <= 1000) {
                budget *= .80;
                console.log('Somewhere in Balkans');
                console.log(`Hotel - ${budget.toFixed(2)}`);
            } else {
                budget *= .90;
                console.log('Somewhere in Europe');
                console.log(`Hotel - ${budget.toFixed(2)}`);
            }
            break;
    }
}

journey([1500, 'summer']);