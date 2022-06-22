function computerPlay() {
     let options = ["rock", "paper", "scissors"];
     let compOutcome = options[Math.floor(Math.random() * options.length)]
     return compOutcome;
}

function disableButtons() {
     buttons.forEach(button => {
          button.disabled = true})
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
     let result = "";
     let selections = ""
     selections = (`You chose ${playerSelection}. The computer chose ${computerSelection}`);

     // Tie Case
     if (playerSelection === computerSelection) {
          result = (`It's a Tie. You both chose ${playerSelection}\r\n Player score: ${playerScore} -- Computer score: ${computerScore}`)
     }

     // PlayerWin Cases
     else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {

          playerScore++
          result = (`You win, ${playerSelection} beats ${computerSelection}\r\n Player score: ${playerScore} -- Computer score: ${computerScore}`)

          if (playerScore == 5) {
               result += "\r\n You won the game!"
               disableButtons()
          }
        }

     // ComputerWin
     else {
          computerScore++
          result = (`You lose, ${computerSelection} beats ${playerSelection}\r\n Player score: ${playerScore} -- Computer score: ${computerScore}`)

          if (computerScore == 5) {
               result += "\r\n You lost the game!"
          disableButtons()
          }

     }

   document.getElementById('result').innerText = result
   document.getElementById('selections').innerText = selections
   return

}



const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
     button.addEventListener('click', function () {
        playRound(button.value, computerPlay())
          
     })
})





