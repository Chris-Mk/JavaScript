function detective(input) {
    let secretWord = input.shift();
    let encryptedMessage = input.shift();

    let temp = 0;
    for (let i = 0; i < secretWord.length; i++) {
        temp += secretWord.charCodeAt(i);
    }

    let mask = 0;
    do {
        mask += temp % 10;
        temp = Math.floor(temp / 10);
    } while (temp > 0);

    let result = "";
    for (let i = 0; i < encryptedMessage.length; i++) {
        if (encryptedMessage.charCodeAt(i) % mask === 0) {
            result += String.fromCharCode(encryptedMessage.charCodeAt(i) + mask);
        } else {
            result += String.fromCharCode(encryptedMessage.charCodeAt(i) - mask);
        }
    }

    let decryptedMessage = "";

    for (let i = result.length - 1; i >= 0; i--) {
        decryptedMessage += String.fromCharCode(result.charCodeAt(i));
    }

    console.log(decryptedMessage);
}

detective(["0.5", "dofe"]);