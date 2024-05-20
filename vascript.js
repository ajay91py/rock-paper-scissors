console.log("hi!");

let choice;
function getComputerChoice() 

{
    let val = Math.random()*3;
   
   if (val<=1) {
    choice="rock"
    console.log("computer chose", choice);
   }
    else if (1<val && val<=2){
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
let comptuerScore=0;


 function playgame() {
    
    for(let i=1; i<=5; i++){
        
        function playRound(humanChoice, ComputerChoice) {

            while (humanChoice === ComputerChoice ) {
               console.log("it's a tie");
               humanChoice=null;
            } 
            while (humanChoice==="rock") {
              if (ComputerChoice==="paper")
               {
                   console.log("I win loser");
                   comptuerScore++ ;
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
                       comptuerScore++ ;
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
                           comptuerScore++ ;
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
           const computerselection=getComputerChoice();
           const humanSelection=getHumanChoice();
                
           playRound(humanSelection, computerselection);
    }

}
playgame();

console.log('humanscore', humanScore);
console.log('computerscore', comptuerScore);
let result;
function winner(result) {

if (humanScore>comptuerScore) {
   console.log('you win human');
   result='you win human'
}
else if (humanScore<comptuerScore) {
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