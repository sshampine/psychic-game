		var wins = 0;
		var loss = 0;
		var guesses = 9;
		var guessArray = [];
		var newGuess = true;
			
		randomWord();
			
			
		
		document.onkeyup = function(event) {
			
			var userInput = event.key;
			
			for (var i =  0; i < guessArray.length; i++) {
				if (userInput === guessArray[i]) {
					newGuess = false;
				}
			}
			
		if (newGuess) {
			if (userInput === randomLetter) {
				wins++;
				winCount();
				resetStats();
				randomWord();
				
			} else {
				guesses--;	
				guessesLeft();			
				guessArray.push(userInput);
				j = guessArray.join(", ")
				document.getElementById("status").innerHTML = "Your guesses so far: " + j;
				
			}
		
		} else {
			newGuess = true;
		}
			
			if (guesses === 0) {
				loss++;
				lossCount();
				resetStats();
				randomWord();
				
			}
			
	};

	 	

	 	function resetStats(){
	 		guesses = 9;
	 		guessArray = [];
			j = guessArray;
			document.getElementById("status").innerHTML = "Your guesses so far: " + j;
			document.getElementById("guess").innerHTML = "Your guesses left: " + guesses;
	 	};

	 	function randomWord() {
	 		var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	 		return randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
			
	 	}

	 	function winCount() {
	 		document.getElementById("win").innerHTML = "Wins: " + wins;
	 	}

	 	function lossCount() {
	 		document.getElementById("loss").innerHTML = "Lossess: " + loss;
	 	}

	 	function letterBoard() {
			document.getElementById("status").innerHTML = "Your guesses so far: " + j;
	 	}

	 	function guessesLeft() {
	 		document.getElementById("guess").innerHTML = "Your guesses left: " + guesses;
	 	}