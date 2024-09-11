function saveComment() {
    // Obtém o valor do textarea
    const commentBox = document.getElementById('commentBox');
    const commentText = commentBox.value.trim();

    // Verifica se o comentário não está vazio
    if (commentText) {
        // Cria um novo elemento para o comentário
        const commentSection = document.getElementById('commentSection');
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.textContent = commentText;

        // Adiciona o comentário à seção de comentários
        commentSection.appendChild(commentDiv);

        // Limpa o textarea
        commentBox.value = '';
    } else {
        alert('Por favor, digite um comentário.');
    }
}
