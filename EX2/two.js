const rows = 3;
const cols = 3;

let board = [];
let currentPlayer = 'X';

function startGame() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';
    board = Array(rows).fill().map(() => Array(cols).fill(''));
    currentPlayer = 'X';
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', cellClicked);
            gameBoard.appendChild(cell);
        }
    }
}

function cellClicked() {
    const row = this.dataset.row;
    const col = this.dataset.col;

    if (board[row][col] !== '') return;

    this.innerText = currentPlayer;
    this.classList.add(currentPlayer); 
    board[row][col] = currentPlayer;

    if (checkWinner(currentPlayer)) {
        highlightWinningCells(currentPlayer);
        setTimeout(() => alert(currentPlayer + ' ganhou!'), 100);
        setTimeout(startGame, 500); 
        return;
    }

    if (checkDraw()) {
        alert('Empate!');
        startGame();
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner(player) {
    for (let i = 0; i < rows; i++) {
        if (board[i].every(cell => cell === player)) return true;
    }
    for (let j = 0; j < cols; j++) {
        if (board.map(row => row[j]).every(cell => cell === player)) return true;
    }
    if (board.map((row, idx) => row[idx]).every(cell => cell === player)) return true;
    if (board.map((row, idx) => row[cols - 1 - idx]).every(cell => cell === player)) return true;
    return false;
}

function checkDraw() {
    return board.flat().every(cell => cell !== '');
}

function highlightWinningCells(player) {
    for (let i = 0; i < rows; i++) {
        if (board[i].every(cell => cell === player)) {
            document.querySelectorAll(`[data-row="${i}"]`).forEach(cell => cell.classList.add('winner'));
        }
    }
    for (let j = 0; j < cols; j++) {
        if (board.map(row => row[j]).every(cell => cell === player)) {
            document.querySelectorAll(`[data-col="${j}"]`).forEach(cell => cell.classList.add('winner'));
        }
    }
    if (board.map((row, idx) => row[idx]).every(cell => cell === player)) {
        for (let i = 0; i < rows; i++) {
            document.querySelector(`[data-row="${i}"][data-col="${i}"]`).classList.add('winner');
        }
    }
    if (board.map((row, idx) => row[cols - 1 - idx]).every(cell => cell === player)) {
        for (let i = 0; i < rows; i++) {
            document.querySelector(`[data-row="${i}"][data-col="${cols - 1 - i}"]`).classList.add('winner');
        }
    }
}

document.addEventListener('DOMContentLoaded', startGame);
