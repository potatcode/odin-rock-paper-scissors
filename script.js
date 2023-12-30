score = [0, 0, 0]
winning_score = 3

const buttons = document.querySelectorAll('button');
console.log(buttons)
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice())
    })
})

function getComputerChoice() {
    num = Math.floor(Math.random() * 3)
    options = ["Rock", "Paper", "Scissors"]
    console.log("Computer chose " + options[num])
    return options[num]
}

function playRound(playerSelection, computerSelection) {
    playerSanitized = playerSelection.toLowerCase()
    computerSanitized = computerSelection.toLowerCase()

    let winner = 0
    let outputText = ""

    if (playerSanitized == "rock") {
        if (computerSanitized == "rock") {
            winner = 0
            outputText = "Tie! Rock is Rock"
        } else if (computerSanitized == "paper") {
            winner = 2
            outputText = "You Lose! Paper beats Rock"
        } else if (computerSanitized == "scissors") {
            winner = 1
            outputText = "You win! Rock beats Scissors"
        }
    } else if (playerSanitized == "paper") {
        if (computerSanitized == "rock") {
            winner = 1
            outputText = "You win! Paper beats Rock"
        } else if (computerSanitized == "paper") {
            winner = 0
            outputText = "Tie! Paper is Paper"
        } else if (computerSanitized == "scissors") {
            winner = 2
            outputText = "You Lose! Scissors beats Paper"
        }
    } else if (playerSanitized == "scissors") {
        if (computerSanitized == "rock") {
            winner = 2
            outputText = "You lose! Rock beats Scissors"
        } else if (computerSanitized == "paper") {
            winner = 1
            outputText = "You win! Scissors beats Paper"
        } else if (computerSanitized == "scissors") {
            winner = 0
            outputText = "Tie! Scissors is Scissors"
        }
    } else {
        winner = 0
        outputText = "Uh oh! Player made incorrect play"
    }

    score[winner] +=1
    document.querySelector("#computer").textContent = computerSelection
    document.querySelector("#player").textContent = playerSelection
    document.querySelector("#winner").textContent = outputText
    document.querySelector("#score-computer").textContent = score[2]
    document.querySelector("#score-player").textContent = score[1]

    if (score.reduce((partialSum, a) => partialSum + a, 0) >= 5 ) {
        if (score[1] > score[2]) {
            alert("Game over. You won!")
        } else if (score[2] > score[1]) {
            alert("Game over. You Lost!")
        } else {
            alert("Game over. Tie!")
        }
    } else if (score[1] >= 3) {
        alert("Game Finished. You won!")
    } else if (score[2] >= 3) {
        alert("Game Finished. You lost!")
    }
}
