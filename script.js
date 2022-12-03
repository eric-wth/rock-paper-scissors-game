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
        default: return 'Please enter either rock, paper, or scissors'
    }
}

const playRound = () => {
    playerSelection = prompt("Welcome to my Rock, Paper, Scissors Game. Please enter rock, paper, or scissors?").toLowerCase().trim();

    if(playerSelection === 'rock' | 'paper' | 'scissors') {
        computerSelection = computerPlay();  

        if(playerSelection === computerSelection) {
            alert("It's a DRAW!")
        }
        else if(playerSelection === 'paper' && computerSelection === 'rock') {
            alert (
                "You WIN! Paper beats Rock."           
            )
            playerScore(); 

        }
        else if(playerSelection === 'paper' && computerSelection === 'scissors') {
            alert (
                "You LOSE! Scissors beats Paper"
            )
            computerScore();
        }
        else if(playerSelection === 'rock' && computerSelection === 'paper') {
            alert (
                "You LOSE! Paper beats Rock"            
            )
            computerScore();
        }
        else if(playerSelection === 'rock' && computerSelection === 'scissors') {
            alert (
                "You WIN! Rock beats Scissors"
            )
            playerScore();
        }
        else if(playerSelection === 'scissors' && computerSelection === 'rock') {
            alert (
                "You LOSE! Rock beats Scissors"
            )
            computerScore();
        }
        else if(playerSelection === 'scissors' && computerSelection === 'paper') {
            alert (
                "You WIN! Scissors beats Paper"
            )
            playerScore();
        }
    }    
}

const game = () => {
    for (let i=0; i < 5; i++) {        
        playRound(); 
    }
    `{${pScore} > ${cScore}}` ? 
        (alert(
            `Player Score: ${pScore}; Computer Score: ${cScore}. PLAYER WINS!!!`
        ))
        :
        (alert(
            `Player Score: ${pScore}; Computer Score: ${cScore}, COMPUTER WINS!!!`
        ))
    console.log(playerScore());
    console.log(computerScore());
}

game();