function myFunction() {
// Gathering the user input
var primeNumber = document.getElementById('Input').value;
var VAT; 
	if (document.getElementById('VAT15').checked) {
  	VAT = document.getElementById('VAT15').value;
	}
	if (document.getElementById('VAT17').checked) {
  	VAT = document.getElementById('VAT17').value;
	}
	if (document.getElementById('VAT20').checked) {
  	VAT = document.getElementById('VAT20').value;
	}
	
	
var method;
	if (document.getElementById('takeaway').checked) {
		method = document.getElementById('takeaway').value;
		}
	if (document.getElementById('add').checked) {
		method = document.getElementById('add').value;
		}
	
//var method = document.getElementById('method').value;
	
	
	
	
	
// The maths based on what option the user selects	
if (method === 'add') {
	var removeVAT = primeNumber / 100 * VAT; 
	var answer = 1 * primeNumber + 1 * removeVAT;
}
if (method === 'takeaway') {
	var removeVAT2 = primeNumber / 100 * VAT;
	var answer2 = 1 * primeNumber -  1 * removeVAT2;

}
// Pushing the anwer to HTML	
if (method === 'add') {
	document.getElementById('answer').innerHTML = '£' + answer + '.00';
	}
if (method === 'takeaway') {
	document.getElementById('answer').innerHTML = '£' + answer2 + '.00';
	}
// Stops the answer from disappearing as the page reloads 
return false;

	
}
