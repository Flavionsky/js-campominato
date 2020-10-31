
//definisco la mia var che darà il valore sull'html
var maxNumEl = document.getElementById("maxNum");
var startSectionEl = document.getElementById("startSection");
//definisco il mio start butn
var startBtnEl = document.getElementById('startBtn');
//definisco la mia variabile globale
var WIN_NUMBER = 0;
//definisco il mio array che conterrà i miei numeri
var oneHundredArr = [];
//definisco la variabile alla parte gameInput
var gameInputEl = document.getElementById("gameInput");


//definisco cosa fa al click il mio start btn
startBtnEl.addEventListener('click', function(){

	var difficultyEl = document.getElementById('difficulty').value;
	var easyEl = document.getElementById('square-easy-flex');
	var mediumEl = document.getElementById('square-medium-flex');
	var hardEl = document.getElementById('square-hard-flex');
//definisco le variabili
var RANDOM_NUMB = 16;
// condizione di scelta difficoltà
switch(parseInt(difficultyEl)){
	case 0:
	parseInt(WIN_NUMBER = 100);
	maxNumEl.innerHTML = 100;
	break;
	case 1:
	parseInt(WIN_NUMBER = 81);
	maxNumEl.innerHTML = 81;
	break;
	case 2:
	parseInt(WIN_NUMBER = 49);
	maxNumEl.innerHTML = 49;
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
	startSectionEl.style.display = "none";

});





// prendo il bottone dall'HTML
var tryBtnEl = document.getElementById('tryBtn');

// do istruzioni al bottone su come reagire al click
tryBtnEl.addEventListener('click', function(){

// prendo gli elementi che mi servono dall'html e gli do una variabile
var myNumEl = document.getElementById("myNum").value;
var messageLoseWinEl = document.getElementById("messageLoseWin");
var numberEnteredEl = document.getElementById("numberEntered");
var numberRemainingEl = document.getElementById("numberRemaining");
if(myNumEl > WIN_NUMBER || myNumEl < 1){
	alert("INSERISCI UN NUMERO DA 1 A " + WIN_NUMBER + "!");
}  else{

  //definisco un ciclo che inserisce il numero in input dentro all'array solo se è diverso da uno degli altri presenti
    if(oneHundredArr.length == WIN_NUMBER-1){
      oneHundredArr.push(parseInt(myNumEl));
      messageLoseWinEl.innerHTML = "Complimenti, Hai vinto!";
    } else if(oneHundredArr.includes(parseInt(myNumEl))){
			messageLoseWinEl.innerHTML = "Hai perso!" + "<br>" + "il tuo punteggio è: " + (oneHundredArr.length - 16);
		} else{
			oneHundredArr.push(parseInt(myNumEl));
			numberEnteredEl.innerHTML += myNumEl + " ";
			numberRemainingEl.innerHTML = (WIN_NUMBER - oneHundredArr.length);
		}
}

});
