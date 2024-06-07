let digits=prompt("Welcoe to the Guessing Game! Type the number of digits in the number you want to guess");
let number=prompt("Guess the number which I'm thinking!");
let random=Math.ceil(Math.random()*(10**(digits))+1);

while(true)
    {
        if(number!=random)
            number=prompt("No,Try again");
        else
            {
                alert("Congratulations! You have guessed the number correctly!");
                break;
            }

    }