function vacation(input) {
    let requiredMoney = Number(input.shift());
    let availableMoney = Number(input.shift());

    let spendCount = 0;
    let days = 0;
    let spendIsFive = false;
    
    while (availableMoney < requiredMoney) {
        let action = input.shift();
        let money = Number(input.shift());
        days++;
        
        if (action === 'spend') {
            availableMoney -= money;
            
            if (availableMoney < 0) {
                availableMoney = 0;
            }
            spendCount++;

            if (spendCount === 5) {
                spendIsFive = true;
                break;
            }
        } else if (action === 'save') {
            spendIsFive = false;
            availableMoney += money;
            spendCount = 0;
        }
    }
    
    if (spendIsFive) {
        console.log(`You can't save the money. \n${spendCount}`);
    } else {
        console.log(`You saved the money for ${days} days.`);
    }
}

vacation([2000, 1000, "spend", 1200, "save", 2000]);
vacation([110, 60, "spend", 10, "spend", 10, "spend", 10, "spend", 10, "spend", 10]);
vacation([250, 150, "spend", 50, "spend", 50, "save", 100, "save", 100]);