// Seleciona todos os links que possuem href iniciando com "#"
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link

        const destinoID = this.getAttribute('href'); // Obtém o ID do destino
        const destino = document.querySelector(destinoID); // Seleciona o elemento de destino

        destino.scrollIntoView({
            behavior: 'smooth' // Rola suavemente até o destino
        });
    });
});
