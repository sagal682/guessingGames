function guessNumber(){
    var randomNum = Math.floor( Math.random() * 101);
    console.log(randomNum);
    
    var guess;
    guess = prompt("Please enter a number between and 100");
    console.log("your guess is: " + guess);
    
    if( guess < randomNum) {
        window.alert("your guess is too low ");
    } else if (guess > randomNum) {
        window.alert("your guess is too high ");

    } else if (guess == randomNum ) {
        window.alert("you guessed it. You Win !!! ");
    } 
    
}