
choices=['rock', 'paper','scissors'];
let compScore=0;
let playerScore=0;
let computerScore = document.querySelector(".comp-score");
let player_Score = document.querySelector(".playerscore");
let roundWinner= document.querySelector('.roundwinner');
function playRound(choice) {

     
        let CompChoice = choices[Math.floor(Math.random()*3)];
        let emoji= document.querySelector(".emoji");
        emoji.textContent= `compter chose: ${CompChoice}`;
        console.log(`computer choice is ${CompChoice}`)
        console.log(`human choice is ${choice}`)
    
        if (CompChoice===choice)
            {console.log("it's a tie");
        roundWinner.textContent='Round won by: NO one'}
        else {
            (choice==='rock'&&CompChoice==='paper'||choice==='paper'&&CompChoice==='scissors'||choice==='scissors'&&CompChoice==='rock')? compwins() :youwin();
        }
function compwins() {
    console.log('computer won')
    compScore++;
    roundWinner.textContent='Round won by: Computer'
    computerScore.textContent= `computer score: ${compScore}`;
    return compScore;
}
function youwin() {
    console.log('player wins')
    playerScore++;
    roundWinner.textContent='Round won by: Player'
    player_Score.textContent= `Player score: ${playerScore}`;
    return playerScore;

}
function results() {

    let winner= document.querySelector('.result');
    
    if(compScore===5||playerScore===5) {
        if(compScore===5) {
            winner.textContent= `Result: Computer won`
            computerScore.textContent= 'computer score: 0';
            player_Score.textContent= 'Player score: 0';
            // alert('starting over')
           startover();
        }
        else if(playerScore===5) {
            winner.textContent= 'result: Player Won'
            computerScore.textContent= 'computer score: 0';
            player_Score.textContent= 'Player score: 0';
            // alert('starting over')
           startover();
        }

    }
       

}
results();
 
}

function startover() {
    compScore=0;
    playerScore=0;

}

