function myFunction() {
// Gathering the user input
var primeNumber = document.getElementById('Input').value;
var VAT = document.getElementById('VATrate').value;
var method = document.getElementById('method').value;
// The maths based on what option the user selects	
if (method === 'add') {
	var removeVAT = primeNumber / 100 * VAT; 
	var answer = 1 * primeNumber + 1 * removeVAT;
}
if (method === 'takeaway') {
	var removeVAT2 = primeNumber / 100 * VAT;
	var answer2 = 1 * primeNumber -  1 * removeVAT2;

}


	
if (method === 'add') {
	document.getElementById('answer').innerHTML = '£' + answer + '.00';
	}
if (method === 'takeaway') {
	document.getElementById('answer').innerHTML = '£' + answer2 + '.00';
	}
 
return false;

	
}
