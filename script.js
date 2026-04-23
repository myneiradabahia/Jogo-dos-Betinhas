function handleMove(cell, index) {
            if (board[index] !== "" || !isGameActive) return;

              if (isLastMove(index) && !checkWinIfMoved(index, currentPlayer)) {
                statusDisplay.innerText = "Movimento proibido! Causaria empate.";
                statusDisplay.style.color = "#ff4b4b";
                setTimeout(() => {
                    statusDisplay.innerText = `Vez do Jogador ${currentPlayer}`;
                    statusDisplay.style.color = "#00f2fe";
                }, 1500);
                return;
            }

            executeMove(index, currentPlayer);

            if (isGameActive && mode === "ia") {
                isGameActive = false;
                statusDisplay.innerText = "IA pensando...";
                setTimeout(aiTurn, 300);
            } else if (isGameActive && mode === "amigo") {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                statusDisplay.innerText = `Vez do Jogador ${currentPlayer}`;
            }
        }

        function isLastMove(index) {
            const emptyCells = board.filter(c => c === "").length;
            return emptyCells === 1;
        }

        function checkWinIfMoved(index, player) {
            let tempBoard = [...board];
            tempBoard[index] = player;
            return checkWin(tempBoard, player);
        }

function setGameMode(mode) {
    if (mode === 'convidar') {
        window.open('https://github.com/myneiradabahia/Jogo-dos-Betinhas', '_blank');
    }
}

function setGameMode(mode) {
    if (mode === 'convidar') {
        const urlJogo = 'https://myneiradabahia.github.io/Jogo-dos-Betinhas/';
        const mensagem = encodeURIComponent('Ei, vem jogar o Jogo dos Betinhas comigo! ' + urlJogo);
        
        window.open('https://api.whatsapp.com/send?text=' + mensagem, '_blank');
    }
}
