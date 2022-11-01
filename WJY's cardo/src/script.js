const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = [
  "ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
];

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        var card = { //這是一個物件，底下是他的屬性，冒號意思跟等於一樣，只不過在物件裡面要用冒號
            Point: x < 10 ? x+1 : 10, // 問號有點像 if， 左邊的條件成立惠等於 x+1，不成立會等於10
            Value: values[x], 
            Suit: suits[i], 
            File: values[x]+"_of_"+suits[i]+".png" 
        };
       
        deck.push(card); // 新增card到deck裡面，從最後面新增進去
    }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

console.log('The first five cards are:');

var TotalPoint = 0;
var TotalPoint2 = 0;

var player1 = [], player2= [];
player1.push(deck.pop());
player1.push(deck.pop());
player2.push(deck.pop());
player2.push(deck.pop());

player1.forEach(function readCard(_card){
    //  console.log(_card.Suit+" "+_card.Value+" "+_card.File)

     var newcard = document.createElement("img"); // 新增一個網頁的 Tag (img的標籤)，存在newcard變數裡面
     newcard.src = "PNG-cards/"+_card.File;
     newcard.width = 100;
     newcard.style = "padding: 10px;"
     document.getElementById("Player1").appendChild(newcard); // getElementById 來找到id是Cards的元素，appendChild來把newcard新增到這個元素裡面
     TotalPoint += _card.Point;
})
player2.forEach(function (_card){
    var newcard = document.createElement("img");
    newcard.src = "PNG-cards/"+_card.File;
    newcard.width = 100;
    newcard.style = "padding: 10px;"
    document.getElementById("Player2").appendChild(newcard);
    TotalPoint2 += _card.Point;
})
document.getElementById("Point").innerHTML="<p> Player1 Total point is: "+TotalPoint+"</p>"; // 讀取到Point標籤得內容之後，用innterHTML屬性去 = 後面的內容
document.getElementById("Point2").innerHTML="<p> Player2 Total point is: "+TotalPoint2+"</p>";

