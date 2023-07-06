generateTarotDeck();

function generateTarotDeck(){

    var deck = [];

    var suits = ["Wands", "Cups", "Swords", "Pentacles"];

    var values = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
                    "Page", "Knight", "Queen", "King"]; 

    var majorArcana = [
        "The Fool",
        "The Magician",
        "The High Priestess",
        "The Empress",
        "The Emperor",
        "The Hierophant",
        "The Lovers",
        "The Chariot",
        "Strength",
        "The Hermit",
        "Wheel of Fortune",
        "Justice",
        "The Hanged Man",
        "Death",
        "Temperance",
        "The Devil",
        "The Tower",
        "The Star",
        "The Moon",
        "The Sun",
        "Judgment",
        "The World"
    ];


    for (var i = 0; i < suits.length; i++){
        for (var j = 0; j < values.length; j++){
            deck.push(values[j] + " of " + suits[i]);
        }
    }

    for (var k = 0; k < majorArcana.length; k++){
        deck.push(majorArcana[k]);
    }

    return deck; 
}