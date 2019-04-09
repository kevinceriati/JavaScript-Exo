console.log("exercice 5");


$(document).ready(function () {

$('img').on('click', function(){
    var userChoice = $(this).attr('alt');
    $('#userChoice').text('Joueur : ' + userChoice);
    computerChoice = getComputerChoice(); 
    determineWinner(userChoice, computerChoice);
});


function getComputerChoice() {

    let computerChoice = Math.floor(Math.random()*3);
    console.log('computer choose :');
    switch (computerChoice) {
        case 0:
            console.log('rock');
            computerChoice = 'rock';          
            break;

        case 1:
            console.log('paper');
            computerChoice = 'paper';
            break;

        case 2:
            console.log('scissors');
            computerChoice = 'scissors';
            break;
    }
    $('#computerChoice').text('Computer : ' + computerChoice);
    return computerChoice;
}

function determineWinner(userChoice, computerChoice) {
    var resultat;

    if (userChoice === computerChoice) {
        resultat = 'Tied';
        $('#winner').css('color', 'grey');
    }

    else if (userChoice === 'rock' && computerChoice === 'scissors') {
        resultat = 'won';
        $('#winner').css('color', 'green');
    }

    else if (userChoice === 'paper' && computerChoice === 'rock') {
        resultat = 'won';
        $('#winner').css('color', 'green');
    }

    else if (userChoice === 'scissors' && computerChoice === 'paper') {
        resultat = 'won';
        $('#winner').css('color', 'green');
    }

    else {
        resultat = 'lost';
        $('#winner').css('color', 'red');
    }

    $('#winner').text('Résultat : ' + resultat);
}
});
