		
			/*
			var number = prompt('Enter the number you want to add VAT to');
			var VAT = number / 100 * 20;
			var VATadded = 1 * number + 1 * VAT;
			alert(VATadded);
			*/
			/*
			var number2 = prompt('Enter the number you wish to remove VAT from');
			var VAT2 = number2 / 100 * 20;
			alert(number2 - VAT2);
			*/
			
			function myFunction() {
				
			// Assigning the varibles
			var numberInput = prompt('Enter your number here');
			var VATinput = prompt('Enter the tax rate you are using');	
			var plusTakeaway = prompt('Are you taking away VAT or Adding it? enter takeaway or add');
				
			
				
			// the maths
			if (plusTakeaway === 'takeaway') {
				var workingOut = numberInput / 100 * VATinput;
				var answer = numberInput - workingOut;
				}
			if (plusTakeaway === 'add') {
					var workingOutTwo = numberInput / 100 * VATinput;
					var answer2 = 1 * numberInput +  1 * workingOutTwo;
				}
				
			// Pushing the inputted results to HTML
			document.getElementById('YourNumber').innerHTML = numberInput;
			document.getElementById('theTax').innerHTML = VATinput + ' %';
			
			//Deciding on what answer to push to HTML 	
				
			if (plusTakeaway === 'takeaway') {
			document.getElementById('result').innerHTML = answer;
				}
			if (plusTakeaway === 'add') {
				document.getElementById('result').innerHTML = answer2;
				}
			}
			
			
					