//definisco la mia funzione random che prenderà un numero casuale
function getRandom(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 *	Controlla se un numero e' presente in un array di numeri
 *	@param {number} num - Il numero da testare
 *	@param {number[]} numArr - Array generico contenente numeri
 *	@returns {boolean} true se il numero e' presente, false altrimenti
 */
function isNumberInArray(num, numArr){
	for(var i=0; i<numArr.length; i++){
		if(num === numArr[i]){
			return true;
		}
	}
	return false;
}
