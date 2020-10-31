//definisco la mia var che darà il valore sull'html
var startSectionEl = document.getElementById("startSection");
//definisco il mio start butn
var startBtnEl = document.getElementById('startBtn');
//definisco la mia variabile globale
var WIN_NUMBER = 0;
//definisco il mio array che conterrà i miei numeri
var slotElements = [];
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
	easyEl.style.display = "flex";
	for(var i = 0; i < WIN_NUMBER; i ++){
		easyEl.innerHTML += '<div class="square"></div>';
	}
	break;
	case 1:
	parseInt(WIN_NUMBER = 81);
	mediumEl.style.display = "flex";
	for(var i = 0; i < WIN_NUMBER; i ++){
		mediumEl.innerHTML += '<div class="square"></div>';
	}
	break;
	case 2:
	parseInt(WIN_NUMBER = 49);
	hardEl.style.display = "flex";
	for(var i = 0; i < WIN_NUMBER; i ++){
		hardEl.innerHTML += '<div class="square"></div>';
	}
	break;
}
console.log(WIN_NUMBER);
//utilizzo un ciclo che mi metterà dentro l'array i primi 16 numeri casuali
for (var i = 1; i <= RANDOM_NUMB; i++){

    var randomNum = getRandom(1, WIN_NUMBER);

    if(slotElements.includes(randomNum)){
      RANDOM_NUMB = RANDOM_NUMB + 1;
    }else {
      slotElements.push(randomNum);
    }
    }
  console.log(slotElements);
  gameInputEl.style.display = "block";
	startSectionEl.style.display = "none";

  // prendo gli elementi che mi servono dall'html e gli do una variabile

  squareElements = document.getElementsByClassName("square");
  for(var i = 0; i < squareElements.length; i++){
    squareElements[i].value = i;
    var maxMine = parseInt(1);
    var userPoint = parseInt(0);
    squareElements[i].addEventListener('click', function(event){
      var slotValue = parseInt(event.target.value);
      console.log(slotValue)
      var messageLoseWinEl = document.getElementById('messageLoseWin');
      var waterClickEl = document.getElementById('waterClick');
      var waterRemainingEl = document.getElementById('waterRemaining');

        if(isNumberInArray(slotValue, slotElements) && maxMine >= 1){
          event.target.style.backgroundImage = "url('img/mine.jpg')";
          messageLoseWinEl.innerHTML = "Hai preso la bomba, mi dispiace hai perso!"
          --maxMine;
        }else if(!isNumberInArray(slotValue, slotElements) && maxMine >= 1) {
          event.target.style.backgroundImage = "url('img/water.png')";
          ++userPoint;
          waterClickEl.innerHTML = userPoint;
          waterRemainingEl.innerHTML = ((squareElements.length-16) - userPoint);
        }


    });
  squareElements[i].addEventListener('contextmenu', function(event){
    squareElements[i] = parseInt(event.target.value)

    event.preventDefault();

    event.target.style.backgroundImage = "url('img/flag.png')";
  })
  }
});
