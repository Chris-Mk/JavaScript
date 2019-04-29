function partyTime(input) {
    let guest = input.shift();
    const regular = [];
    const VIP = [];

    while (guest !== 'PARTY') {
        let firstChar = guest[0];

        if (Number.isInteger(firstChar)) {
            if (!VIP.includes(guest)) {
                VIP.push(guest);
            }
        } else {
            if (!regular.includes(guest)) {
                regular.push(guest);
            }
        }
        guest = input.shift();
    }

    for (const went of input) {
        if (VIP.includes(went)) {
            VIP.splice(VIP.indexOf(went), 1);
        } else if (regular.includes(went)) {
            regular.splice(regular.indexOf(went), 1);
        }
    }

    console.log(VIP.length + regular.length);
    VIP.forEach(e => console.log(e));
    regular.forEach(e => console.log(e));
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);