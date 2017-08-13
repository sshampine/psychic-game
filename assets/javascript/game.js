		var wins = 0;
		var loss = 0;
		var guesses = 9;
		var guessArray = [];

			randomWord();
			console.log(randomLetter);
			
		
		document.onkeyup = function(event) {
			
			var userInput = event.key;
			console.log(userInput);

			
			if (userInput === randomLetter) {
				wins++;
				winCount();
				resetStats();
				randomWord();
				console.log("new letter: " + randomLetter);
			} else {
				guesses--;	
				guessesLeft();			
				guessArray.push(userInput);
				j = guessArray.join(", ")
				document.getElementById("status").innerHTML = "Your guesses so far: " + j;
				console.log("your guess: " + j);
			}

			if (guesses === 0) {
				loss++;
				lossCount();
				resetStats();
				randomWord();
				console.log("new letter: " + randomLetter);
			}
			
	};

	 	function writeResults(test1, test2) {
	 		document.getElementById("win").innerHTML = test1;
	 		document.getElementById("loss").innerHTML =test2;
	 		console.log(test1);
	 		console.log(test2);
	 	}

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