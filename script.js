let score = JSON.parse(localStorage.getItem('score')) || { win: 0, lose: 0, tie: 0 };
updateScore();

function pickComputerMove() {
    const randomNum = Math.random();
    if (randomNum < 1 / 3) {
        return 'rock';
    } else if (randomNum < 2 / 3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function game(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'tie';
        } else if (computerMove === 'paper') {
            result = 'you lose';
        } else if (computerMove === 'scissors') {
            result = 'you win';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'you win';
        } else if (computerMove === 'paper') {
            result = 'tie';
        } else if (computerMove === 'scissors') {
            result = 'you lose';
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'you lose';
        } else if (computerMove === 'paper') {
            result = 'you win';
        } else if (computerMove === 'scissors') {
            result = 'tie';
        }
    }

    if (result === 'you win') {
        score.win++;
    } else if (result === 'you lose') {
        score.lose++;
    } else if (result === 'tie') {
        score.tie++;
    }

    updateScore();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You: ${playerMove}   -    Computer:${computerMove}`;
    localStorage.setItem('score', JSON.stringify(score));
}

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.win} Losses: ${score.lose} Ties: ${score.tie}`;
}

function resetScore() {
    score = { win: 0, lose: 0, tie: 0 };
    localStorage.removeItem('score');
    updateScore();
}