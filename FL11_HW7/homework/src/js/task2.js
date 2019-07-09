const ATTEMPTS = 3, RANGE_INCREMENT = 4, PRIZES = [100, 50, 25], FACTOR = 2, DEFAULT_RANGE = 8;
let num, userNum, userDecision, totalPrize = 0, 
    prizeMultiplier = 1, range = DEFAULT_RANGE, text;

userDecision = confirm('Do you want to play a game?');
if (!userDecision) {
    alert('You did not become a billionaire, but can');
}
while (userDecision) {
    num = Math.floor(Math.random() * (range + 1));        
    console.log(num);
    for (let i = 0; i < ATTEMPTS; i++) {        
        text = 'Choose a roulette pocket number from 0 to ' + range + '\n' +
               'Attempts left: ' + (ATTEMPTS - i) + '\n' +
               'Total prize: ' + totalPrize + '$' + '\n' +
               'Possible prize on current attempt: ' + PRIZES[i] * prizeMultiplier + '$' + '\n\n' +
               'Please enter your number';
        userNum = parseInt(prompt(text));        
        if (userNum === num) {
            totalPrize += PRIZES[i] * prizeMultiplier;
            userDecision = confirm('Congratulation, you won!\n Your prize is: ' + totalPrize + '$.\n' +
                                   'Do you want to continue?');
            if (userDecision) {
                range += RANGE_INCREMENT;
                prizeMultiplier *= FACTOR;
                break;
            } 
        }
        if (i === ATTEMPTS - 1 || !userDecision) {
            alert('Thank you for your participation.\n' + 
                  'Your prize is ' + totalPrize + '$');
            userDecision = confirm('Do you want to play again?');
            range = DEFAULT_RANGE;
            prizeMultiplier = 1;
            totalPrize = 0;
            break;
        }
    }    
}