let name = "John";
let surname = "Doe";
let age = 22;
console.log(name, surname, age)

//let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

/*for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0){
        console.log("Fizz");
    }
    else if (i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
  }
*/

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let choice = getRandomInt(3);
    let result
    switch(choice){
        case 0:
            result = "Rock"
            break
        case 1:
            result = "Scissors"
            break
        case 2:
            result = "Paper"
            break
    }
    return result
}

function getHumanChoice(){
    while (true) {
        let choice = prompt("Choose ");
        if(choice === "Rock" || choice === "Scissors" || choice === "Paper"){
            return choice
        }
        else{
            console.log("You entered wrong choice");
            getHumanChoice()
        }  
    }
}

function playGame(){
    let HumanScore = 0
    let ComputerScore = 0
    function playRound(humanChoice, computerChoice){
        if(humanChoice === "Rock" && computerChoice === "Rock"){
            console.log("Tie")
        }
        else if(humanChoice === "Rock" && computerChoice === "Scissors"){
            console.log("Human won")
            HumanScore += 1
        }
        else if(humanChoice === "Rock" && computerChoice === "Paper"){
            console.log("Computer won")
            ComputerScore += 1
        }
        else if(humanChoice === "Scissors" && computerChoice === "Rock"){
            console.log("Computer won")
            ComputerScore += 1
        }
        else if(humanChoice === "Scissors" && computerChoice === "Scissors"){
            console.log("Tie")
        }
        else if(humanChoice === "Scissors" && computerChoice === "Paper"){
            console.log("Human won")
            HumanScoreScore += 1
        }
        else if(humanChoice === "Paper" && computerChoice === "Rock"){
            console.log("Human won")
            HumanScore += 1
        }
        else if(humanChoice === "Paper" && computerChoice === "Scissors"){
            console.log("Computer won")
            ComputerScore += 1
        }
        else if(humanChoice === "Paper" && computerChoice === "Paper"){
            console.log("Tie")
        }
    }
    for (let i = 0; i <= 4; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log("Human choice - ",humanChoice, "| Computer choice - ", computerChoice);
        playRound(humanChoice, computerChoice);
        console.log("Human score - ", HumanScore, "Computer score - ", ComputerScore);
    }
    if (HumanScore > ComputerScore) {
        console.log("Total win - Human")
    }
    else if (HumanScore === ComputerScore){
        console.log("Tie")
    }
    else{
        console.log("Total win - Computer")
    }
}

playGame()