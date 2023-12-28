function getComputerChoice() {
    num = Math.floor(Math.random() * 3)
    options = ["Rock", "Paper", "Scissors"]
    console.log("Computer chose " + options[num])
    return options[num]
}

function playRound(playerSelection, computerSelection) {
    playerSanitized = playerSelection.toLowerCase()
    computerSanitized = computerSelection.toLowerCase()

    if (playerSanitized == "rock") {
        if (computerSanitized == "rock") {
            return [0, "Tie! Rock is Rock"]
        } else if (computerSanitized == "paper") {
            return [2, "You Lose! Paper beats Rock"]
        } else if (computerSanitized == "scissors") {
            return [1, "You win! Rock beats Scissors"]
        }
    } else if (playerSanitized == "paper") {
        if (computerSanitized == "rock") {
            return [1, "You win! Paper beats Rock"]
        } else if (computerSanitized == "paper") {
            return [0, "Tie! Paper is Paper"]
        } else if (computerSanitized == "scissors") {
            return [2, "You Lose! Scissors beats Paper"]
        }
    } else if (playerSanitized == "scissors") {
        if (computerSanitized == "rock") {
            return [2, "You lose! Rock beats Scissors"]
        } else if (computerSanitized == "paper") {
            return [1, "You win! Scissors beats Paper"]
        } else if (computerSanitized == "scissors") {
            return [0, "Tie! Scissors is Scissors"]
        }
    } else {
        return [0, "Uh oh! Player made incorrect play"]
    }
}

function game() {
    score = [0, 0, 0]
    winning_score = 3

    while (1) {
        let playerChoice = prompt("Enter your play (rock, paper scissors): ")
        const [winner, output] = playRound(playerChoice, getComputerChoice())
        score[winner] +=1
        console.log(output)

        if (score[1] >= winning_score) {
            console.log("You won!")
            return
        } else if (score[2] >= winning_score) {
            console.log("Computer wins!")
            return
        }
        console.log("Next round")
    }
}

game()