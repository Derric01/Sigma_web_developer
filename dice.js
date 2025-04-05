function RollDice() {
    const numofDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImage = document.getElementById('diceImage');

    // Define your dice images
    const diceFaces = {
        1: '1.jpeg',
        2: '2.jpg',
        3: '3.png',
        4: '4.png',
        5: '5.png',
        6: '6.jpg'
    };

    const values = [];
    const imagesHTML = [];

    for (let i = 0; i < numofDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);

        const imageSrc = `images/${diceFaces[value]}`;
        const imgTag = `<img src="${imageSrc}" alt="Dice ${value}" width="100" style="margin: 10px;">`;

        imagesHTML.push(imgTag);
    }

    diceResult.textContent = `Dice Rolled: ${values.join(', ')}`;
    diceImage.innerHTML = imagesHTML.join('');
}
