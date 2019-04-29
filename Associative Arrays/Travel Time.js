function travelTime(input) {
    const countries = new Map();

    for (const data of input) {
        const [country, town, cost] = data.split(' > ');

        if (!countries.has(country)) {
            countries.set(country, new Map());
            countries.get(country).set(town, cost);
        } else {
            if (countries.get(country).has(town)) {
                if (countries.get(country).get(town) > cost) {
                    countries.get(country).set(town, cost);
                }
            } else {
                countries.get(country).set(town, cost);
            }
        }
    }

    let sortedCountries = [...countries]
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (const [country, townsMap] of sortedCountries) {
        let sortedTowns = [...townsMap]
            .sort((a, b) => a[1] - b[1])
            .map(e => e.join(' -> '));

        console.log(`${country} -> ${sortedTowns.join(' ')}`);
    }
}

travelTime(["Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]);