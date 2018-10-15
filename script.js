		
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
			alert('This is a working VAT calculator that can either add or take away different levels of VAT');
			var numberInput = prompt('Please enter the figure that you wish to add or remove VAT');
			var VATinput = prompt('Enter the tax rate you are using e.g 17.5 or 20');
				
		
				
				
			// Makes sure the user enters in the correct phrase - eliminates the NaN error
			for (var i=0; i !== 'takeaway' && i !== 'add';) {
					i = prompt('Are you taking away VAT or Adding it? enter takeaway or add; no caps please');
					
				}
			// the maths
			if (i === 'takeaway') {
				var workingOut = numberInput / 100 * VATinput;
				var answer = numberInput - workingOut;
				}
			if (i === 'add') {
					var workingOutTwo = numberInput / 100 * VATinput;
					var answer2 = 1 * numberInput +  1 * workingOutTwo;
				}	
			// Pushing the inputted results to HTML
			document.getElementById('YourNumber').innerHTML = '£' + numberInput;
			document.getElementById('theTax').innerHTML = VATinput + ' %';
			//Deciding on what answer to push to HTML 		
			if (i === 'takeaway') {
			document.getElementById('result').innerHTML = '£' + answer;
				}
			if (i === 'add') {
				document.getElementById('result').innerHTML = '£' + answer2;
				}
			}
			
			
					