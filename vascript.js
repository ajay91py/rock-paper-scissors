
let choice;
function getComputerChoice() 

{
    let val = Math.floor(Math.random()*3);
    console.log(val)
   
   if (val===1) {
    choice="rock"
    console.log("computer chose", choice);
   }
    else if (val===2){
        choice="paper"
        console.log("computer chose", choice);
    }
    else  {
        choice="scissors"
        console.log("computer chose", choice);
    }
    return choice;
}



let chosenLowercase;
function getHumanChoice() {
    let chosen= prompt("choose human: Rock, Paper or Scissors");
     chosenLowercase=chosen.toLocaleLowerCase();
    console.log('your choice', chosen);
    return chosenLowercase;
}



let humanScore=0;
let computerScore=0;


 function playgame() {
    
    for(let i=1; i<=5; i++) {
       
        function playRound(humanChoice, ComputerChoice) {

            while (humanChoice === ComputerChoice ) {
               console.log("it's a tie");
               humanChoice=null;
            } 
            while (humanChoice==="rock") {
              if (ComputerChoice==="paper")
               {
                   console.log("I win loser");
                   computerScore++ ;
                   humanChoice=null;
                
               }
               else if (ComputerChoice==="scissors")
                   { 
                       console.log("Okay, you win this time");
                       humanScore++ ;
                       humanChoice=null;
                       
                   }
                   
            }
            while (humanChoice==="paper") {
               if (ComputerChoice==="scissors")
                   {
                       console.log("I win loser");
                       computerScore++ ;
                       humanChoice=null;
                       
                   }
                   else if (ComputerChoice==="rock")
                       { 
                           console.log("Okay, you win this time");
                           humanScore++ ;
                           humanChoice=null;
                           
                       }
                       
                }
                while (humanChoice==="scissors") {
                   if (ComputerChoice==="rock")
                       {
                           console.log("I win loser");
                           computerScore++ ;
                           humanChoice=null;
                          
                       }
                       else if (ComputerChoice==="paper")
                           { 
                               console.log("Okay, you win this time");
                               humanScore++ ;
                               humanChoice=null;
                              
                           }
                           
                    }
                }
                
                const humanSelection=getHumanChoice();
                const computerSelection=getComputerChoice();
                
           playRound(humanSelection, computerSelection);
    
            }
}
playgame();

console.log('humanscore', humanScore);
console.log('computerscore', computerScore);
let result;
function winner(result) {

if (humanScore>computerScore) {
   console.log('you win human');
   result='you win human'
}
else if (humanScore<computerScore) {
    console.log('I win always');
    result='I always win'
}
else {
    console.log('Alas it\'s a tie')
    result='Hmmm it is a tie'
}
return result;
}

alert(winner());