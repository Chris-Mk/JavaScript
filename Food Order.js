function foodOrder(input) {
    let budget = Number(input.shift()) - 2.50;
    let product = input.shift();

    let totalPrice = 0;
    let items = 0;

    while (product !== "Order") {
        let price = Number(input.shift());

        if (price > budget) {
            console.log("You will exceed the budget if you order this!");
            product = input.shift();
            continue;
        }

        if (price <= budget) {
            items++;
            budget -= price;
            totalPrice += price;
        }

        product = input.shift();
    }

    console.log(`You ordered ${items} items!\nTotal: ${(totalPrice + 2.50).toFixed(2)}`);
}

foodOrder([25.00, "Soup", 3.50, "Salad", 7.80, "Fish", 9.00, "Cake", 5.00, "Ice cream", 2.00, "Order"]);