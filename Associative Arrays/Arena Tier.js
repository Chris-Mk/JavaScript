function arenaTier(input) {
    const gladiatorPool = new Map();
    let gladiator = input.shift();

    while (gladiator !== 'Ave Cesar') {
        if (gladiator.includes('->')) {
            let [name, technique, skills] = gladiator.split(' -> ');
            skills = +skills;

            if (!gladiatorPool.has(name)) {
                gladiatorPool.set(name, new Map());
                gladiatorPool.get(name).set(technique, skills);
            } else {
                if (gladiatorPool.get(name).has(technique)) {
                    if (gladiatorPool.get(name).get(technique) < skills) {
                        gladiatorPool.get(name).set(technique, skills);
                    }
                } else {
                    gladiatorPool.get(name).set(technique, skills);
                }
            }
        } else if (gladiator.includes('vs')) {
            const [firstGladiator, secondGladiator] = gladiator.split(' vs ');

            if (gladiatorPool.has(firstGladiator) && gladiatorPool.has(secondGladiator)) {
                const firstGladTech = [...gladiatorPool.get(firstGladiator)],
                    secondGladTech = [...gladiatorPool.get(secondGladiator)];


                for (const [firstTech, firstSkills] of firstGladTech) {
                    for (const [secondTech, secondSkills] of secondGladTech) {
                        if (firstTech === secondTech) {
                            if (firstSkills > secondSkills) {
                                gladiatorPool.delete(secondGladiator);
                            } else {
                                gladiatorPool.delete(firstGladiator);
                            }
                        }
                    }
                }
            }
        }
        gladiator = input.shift();
    }

    let gladiatorSkills = new Map();
    for (const [gladiator, techAndSkills] of gladiatorPool) {
        let sum = 0;
        [...techAndSkills].forEach(e => sum += +e[1]);
        gladiatorSkills.set(gladiator, sum);
    }

    [...gladiatorSkills]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(e => {
            console.log(`${e[0]}: ${e[1]} skill`);

            [...gladiatorPool.get(e[0])]
                .sort((a, b) => b[1] - a[1])
                .forEach(v => console.log(`- ${v[0]} <!> ${v[1]}`));
        });
}

arenaTier(['Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300', 'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250', 'Ave Cesar']);
arenaTier(['Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar']);