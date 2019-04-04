function cookieFactory(input) {
    let batchesCount = +(input.shift());

    for (let i = 1; i <= batchesCount; i++) {
        let ingredient = '';
        let isEggs = false;
        let isFlour = false;
        let isSugar = false;

        while (true) {
            ingredient = input.shift();

            if (ingredient === "eggs") {
                isEggs = true;
            } else if (ingredient === "flour") {
                isFlour = true;
            } else if (ingredient === "sugar") {
                isSugar = true;
            } else if (ingredient === "Bake!") {
                if (isEggs && isFlour && isSugar) {
                    console.log(`Baking batch number ${i}...`);
                    break;
                } else {
                    console.log("The batter should contain flour, eggs and sugar!");
                }
            }
        }
    }
}

cookieFactory([2 ,"flour", "eggs", "sugar", "chocolate", "Bake!", "flour", "eggs", "sugar", "caramel", "peanuts", "Bake!"]);
cookieFactory([3, "flour", "eggs", "jam", "Bake!", "sugar", "Bake!", "flour", "eggs", "milk", "almonds", "sugar", "Bake!", "flour", "eggs", "sugar", "Bake!"]);