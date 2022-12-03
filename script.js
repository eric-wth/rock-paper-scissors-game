let playerSelection;
let computerSelection;
let pScore = 0;
let cScore = 0;

const playerScore = () => {
    return(pScore++);
};

const computerScore = () => {
    return(cScore++);
};


const computerPlay = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    switch(randomNum) {
        case 1:  return('rock');
        break;
        case 2: return('paper');
        break; 
        case 3: return('scissors');
        break;
    }
}

const playRound = () => {
    playerSelection = prompt("Welcome to my Rock, Paper, Scissors Game. Please enter rock, paper, or scissors?").toLowerCase().trim();

    if(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection ==='scissors') {
        computerSelection = computerPlay();  

        if(playerSelection === computerSelection) {
            alert("It's a DRAW!")
            console.log("Round is a draw")
        }
        else if(playerSelection === 'paper' && computerSelection === 'rock') {
            alert ("You WIN! Paper beats Rock.")
            playerScore();
            console.log(`Player wins round - Player Choice:${playerSelection}, Computer selection:${computerSelection}`)
        }
        else if(playerSelection === 'paper' && computerSelection === 'scissors') {
            alert ("You LOSE! Scissors beats Paper")
            computerScore();
            console.log(`Computer wins round - Player Choice:${playerSelection}, Computer selection:${computerSelection}`)
        }
        else if(playerSelection === 'rock' && computerSelection === 'paper') {
            alert ("You LOSE! Paper beats Rock")
            computerScore();
            console.log(`Computer wins round - Player Choice:${playerSelection}, Computer selection:${computerSelection}`)
        }
        else if(playerSelection === 'rock' && computerSelection === 'scissors') {
            alert ("You WIN! Rock beats Scissors")
            playerScore();
            console.log(`Player wins round - Player Choice:${playerSelection}, Computer selection:${computerSelection}`)
        }
        else if(playerSelection === 'scissors' && computerSelection === 'rock') {
            alert ("You LOSE! Rock beats Scissors")
            computerScore();
            console.log(`Computer wins round - Player Choice:${playerSelection}, Computer selection:${computerSelection}`)
        }
        else if(playerSelection === 'scissors' && computerSelection === 'paper') {
            alert ("You WIN! Scissors beats Paper")
            playerScore();
            console.log(`Player wins round - Player Choice:${playerSelection}, Computer selection:${computerSelection}`)
        }
        else {
            alert ("Please enter either: rock, paper, or scissors");
        }
    }    
}

const game = () => {
    for (let i=0; i < 5; i++) {        
        playRound();
    }
    `{${pScore} > ${cScore}}` ? 
        (alert(`Player Score: ${pScore}; Computer Score: ${cScore}. PLAYER WINS!!!`))
        :
        (alert(`Player Score: ${pScore}; Computer Score: ${cScore}, COMPUTER WINS!!!`))
}

game();