// Declaração global para o número de linhas e colunas
const rows = 3;
const cols = 3;

let board = [];
let currentPlayer = 'X';

// Função para iniciar ou reiniciar o jogo.
function startGame() {
    const gameBoard = document.getElementById('gameBoard'); // Certifique-se de buscar o elemento no início da função.
    // Limpa o conteúdo do tabuleiro e reinicia o array.
    gameBoard.innerHTML = '';
    board = Array(rows).fill().map(() => Array(cols).fill(''));
    currentPlayer = 'X';
    
    // Preenche o tabuleiro com células.
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

// Função chamada quando uma célula é clicada.
function cellClicked() {
    const row = this.dataset.row;
    const col = this.dataset.col;

    // Verifica se a célula já está ocupada.
    if (board[row][col] !== '') return;

    // Preenche a célula e atualiza o texto.
    this.innerText = currentPlayer;
    this.classList.add(currentPlayer); // Adiciona a classe 'X' ou 'O' para aplicar o estilo.
    board[row][col] = currentPlayer;

    // Verifica se o jogador ganhou.
    if (checkWinner(currentPlayer)) {
        highlightWinningCells(currentPlayer);
        setTimeout(() => alert(currentPlayer + ' ganhou!'), 100);
        setTimeout(startGame, 500); // Reinicia o jogo após um pequeno atraso.
        return;
    }

    // Verifica empate.
    if (checkDraw()) {
        alert('Empate!');
        startGame();
        return;
    }

    // Alterna o jogador.
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Verifica se há um vencedor.
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

// Verifica se há empate.
function checkDraw() {
    return board.flat().every(cell => cell !== '');
}

// Destaca as células vencedoras.
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

// Inicia o jogo assim que o DOM é carregado.
document.addEventListener('DOMContentLoaded', startGame);
