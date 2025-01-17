const container = document.querySelector("#out")
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const p = document.createElement("p")
const roundresult = document.createElement("p")
const compresult = document.createElement("p")
let HumanScore = 0;
let ComputerScore = 0;


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let choice = getRandomInt(3);
    let result;
    switch(choice){
        case 0:
            result = "Rock";
            compresult.textContent = result
            container.appendChild(compresult)
            break;
        case 1:
            result = "Scissors";
            compresult.textContent = result
            container.appendChild(compresult)
            break;
        case 2:
            result = "Paper";
            compresult.textContent = result
            container.appendChild(compresult)
            break;
    }
    return result;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === "Rock" && computerChoice === "Rock"){
        roundresult.textContent = "Tie"
        container.appendChild(roundresult)
    }
    else if(humanChoice === "Rock" && computerChoice === "Scissors"){
        roundresult.textContent = "Human won"
        container.appendChild(roundresult)
        HumanScore += 1;
    }
    else if(humanChoice === "Rock" && computerChoice === "Paper"){
        roundresult.textContent = "Computer won"
        container.appendChild(roundresult)
        ComputerScore += 1;
    }
    else if(humanChoice === "Scissors" && computerChoice === "Rock"){
        roundresult.textContent = "Computer won"
        container.appendChild(roundresult)
        ComputerScore += 1;
    }
    else if(humanChoice === "Scissors" && computerChoice === "Scissors"){
        roundresult.textContent = "Tie"
        container.appendChild(roundresult)
    }
    else if(humanChoice === "Scissors" && computerChoice === "Paper"){
        roundresult.textContent = "Human won"
        container.appendChild(roundresult)
        HumanScore += 1;
    }
    else if(humanChoice === "Paper" && computerChoice === "Rock"){
        roundresult.textContent = "Human won"
        container.appendChild(roundresult)
        HumanScore += 1;
    }
    else if(humanChoice === "Paper" && computerChoice === "Scissors"){
        roundresult.textContent = "Computer won"
        container.appendChild(roundresult)
        ComputerScore += 1;
    }
    else if(humanChoice === "Paper" && computerChoice === "Paper"){
        roundresult.textContent = "Tie"
        container.appendChild(roundresult)
    }
}

function roun(but){
    playRound(but, getComputerChoice())
    p.textContent = ("Computer score = " + ComputerScore + " Human score = " + HumanScore)
    container.appendChild(p)
}

rock.addEventListener("click", () =>{
    roun("Rock")
})

paper.addEventListener("click", () =>{
    roun("Paper")
})

scissors.addEventListener("click", () =>{
    roun("Scissors")
})
