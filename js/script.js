//definisco la mia funzione random che prenderà un numero casuale
function getRandom(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
}

//definisco la mia var che darà il valore sull'html
var maxNumEl = document.getElementById("maxNum");
//definisco il mio start butn
var startBtnEl = document.getElementById('startBtn');
//definisco la mia variabile globale
var WIN_NUMBER;
//definisco il mio array che conterrà i miei numeri
var oneHundredArr = [];
//definisco la variabile alla parte gameInput
var gameInputEl = document.getElementById("gameInput");
//definisco cosa fa al click il mio start btn
startBtnEl.addEventListener('click', function(){

//prendo la select e gli do una variabile
var difficultyEl = document.getElementById('difficulty').value;
//definisco le variabili
var RANDOM_NUMB = 16;
// condizione di scelta difficoltà
switch(parseInt(difficultyEl)){
	case 0:
	WIN_NUMBER = 100;
	maxNumEl.innerHTML = 100;
	break;
	case 1:
	WIN_NUMBER = 80;
	maxNumEl.innerHTML = 80;
	break;
	case 2:
	WIN_NUMBER = 50;
	maxNumEl.innerHTML = 50;
	break;
}
console.log(WIN_NUMBER);
//utilizzo un ciclo che mi metterà dentro l'array i primi 16 numeri casuali
for (var i = 1; i <= RANDOM_NUMB; i++){

    var randomNum = getRandom(1, WIN_NUMBER);

    switch(oneHundredArr.includes(randomNum)){
      case true:
      RANDOM_NUMB = RANDOM_NUMB + 1;
      break;
      case false:
        oneHundredArr.push(randomNum);
      break;
    }}
  console.log(oneHundredArr);
  gameInputEl.style.display = "block";
});
// prendo il bottone dall'HTML
var tryBtnEl = document.getElementById('tryBtn');

// do istruzioni al bottone su come reagire al click
tryBtnEl.addEventListener('click', function(){

// prendo gli elementi che mi servono dall'html e gli do una variabile
var myNumEl = document.getElementById("myNum").value;
var messageLoseWinEl = document.getElementById("messageLoseWin");
var numberEnteredEl = document.getElementById("numberEntered");
switch(myNumEl > WIN_NUMBER || myNumEl < 1){
  case true:
	alert("INSERISCI UN NUMERO DA 1 A " + WIN_NUMBER + "!");
  break;
  case false:

  //definisco un ciclo che inserisce il numero in input dentro all'array solo se è diverso da uno degli altri presenti
    switch(oneHundredArr.length == WIN_NUMBER-1){
      case true:
      oneHundredArr.push(parseInt(myNumEl));
      messageLoseWinEl.innerHTML = "Complimenti, Hai vinto!";
      break;
      case false:
      switch(oneHundredArr.includes(parseInt(myNumEl))){
        case true:
        messageLoseWinEl.innerHTML = "Numero già presente, Hai perso!" + "<br>" + "il tuo punteggio è: " + (oneHundredArr.length - 16);
        break;
        case false:
        oneHundredArr.push(parseInt(myNumEl));
        numberEnteredEl.innerHTML += myNumEl + " ";
        break;
      }
      break;
    }




}

});
