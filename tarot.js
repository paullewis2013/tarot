function generateTarotDeck(){

    var deck = 
    [
        '00-TheFool.png',
        '01-TheMagician.png',
        '02-TheHighPriestess.png',
        '03-TheEmpress.png',
        '04-TheEmperor.png',
        '05-TheHierophant.png',
        '06-TheLovers.png',
        '07-TheChariot.png',
        '08-Strength.png',
        '09-TheHermit.png',
        '10-WheelOfFortune.png',
        '11-Justice.png',
        '12-TheHangedMan.png',
        '13-Death.png',
        '14-Temperance.png',
        '15-TheDevil.png',
        '16-TheTower.png',
        '17-TheStar.png',
        '18-TheMoon.png',
        '19-TheSun.png',
        '20-Judgement.png',
        '21-TheWorld.png',
        'Cups01.png',
        'Cups02.png',
        'Cups03.png',
        'Cups04.png',
        'Cups05.png',
        'Cups06.png',
        'Cups07.png',
        'Cups08.png',
        'Cups09.png',
        'Cups10.png',
        'Cups11.png',
        'Cups12.png',
        'Cups13.png',
        'Cups14.png',
        'Pentacles01.png',
        'Pentacles02.png',
        'Pentacles03.png',
        'Pentacles04.png',
        'Pentacles05.png',
        'Pentacles06.png',
        'Pentacles07.png',
        'Pentacles08.png',
        'Pentacles09.png',
        'Pentacles10.png',
        'Pentacles11.png',
        'Pentacles12.png',
        'Pentacles13.png',
        'Pentacles14.png',
        'Swords01.png',
        'Swords02.png',
        'Swords03.png',
        'Swords04.png',
        'Swords05.png',
        'Swords06.png',
        'Swords07.png',
        'Swords08.png',
        'Swords09.png',
        'Swords10.png',
        'Swords11.png',
        'Swords12.png',
        'Swords13.png',
        'Swords14.png',
        'Wands01.png',
        'Wands02.png',
        'Wands03.png',
        'Wands04.png',
        'Wands05.png',
        'Wands06.png',
        'Wands07.png',
        'Wands08.png',
        'Wands09.png',
        'Wands10.png',
        'Wands11.png',
        'Wands12.png',
        'Wands13.png',
        'Wands14.png'
    ];

    // function removePngExtension(array) {
    //     const newArray = array.map((str) => str.replace(/\.png$/, ''));
    //     return newArray;
    // }

    // deck = removePngExtension(deck);

    return deck; 
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
  
function dealCard(){
    let card = deck.pop();

    const cardDisplay = document.getElementById("card")
    cardDisplay.src = "cards/" + card;

    return card;
}

deck = generateTarotDeck();
shuffle(deck);
console.log('deck loaded');

document.addEventListener("keydown", function() {
    dealCard();
});