//definisco la mia funzione random che prenderà un numero casuale
function getRandom(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
}

//definisco il mio array che conterrà i miei numeri
var oneHundredArr = [];

//definisco il numero massimo di numeri random che mi serviranno
var RANDOM_NUMB = 16;
//utilizzo un ciclo che mi metterà dentro l'array i primi 16 numeri casuali
for (var i = 1; i <= RANDOM_NUMB; i++){

    var randomNum = getRandom(1, 100);

    switch(oneHundredArr.includes(randomNum)){
      case true:
      RANDOM_NUMB = RANDOM_NUMB + 1;
      break;
      case false:
        oneHundredArr.push(randomNum);
      break;
    }}
console.log(oneHundredArr);
// prendo il bottone dall'HTML
var tryBtnEl = document.getElementById('tryBtn');

// do istruzioni al bottone su come reagire al click
tryBtnEl.addEventListener('click', function(){

// prendo gli elementi che mi servono dall'html e gli do una variabile
var myNumEl = document.getElementById("myNum").value;
var messageLoseWinEl = document.getElementById("messageLoseWin");
var numberEnteredEl = document.getElementById("numberEntered");
switch(myNumEl > 100 || myNumEl < 1){
  case true:
	alert("INSERISCI UN NUMERO DA 1 A 100!");
  break;
  case false:

	var WIN_NUMBER = 100;
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
console.log(oneHundredArr);

});
