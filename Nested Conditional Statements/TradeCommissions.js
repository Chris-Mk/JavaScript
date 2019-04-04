function tradeCommissions(input) {
    let city = input.shift();
    let sales = Number(input.shift());
    let commission = 0;

    switch (city) {
        case 'Sofia':
            if (sales >= 0 && sales <= 500) {
                commission = sales * .05;
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * .07;
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * .08;
            } else if (sales > 10000) {
                commission = sales * .12;
            } else {
                console.log('error');
            }
            break;
        case 'Varna':
            if (sales >= 0 && sales <= 500) {
                commission = sales * .045;
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * .075;
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * .10;
            } else if (sales > 10000) {
                commission = sales * .13;
            } else {
                console.log('error');
            }
            break;
        case 'Plovdiv':
            if (sales >= 0 && sales <= 500) {
                commission = sales * .055;
            } else if (sales > 500 && sales <= 1000) {
                commission = sales * .08;
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales * .12;
            } else if (sales > 10000) {
                commission = sales * .145;
            } else {
                console.log('error');
            }
            break;
        default:
            console.log('error');
    }

    if (commission > 0) {
        console.log(commission.toFixed(2));
    }
}

tradeCommissions(['Varna', 50]);