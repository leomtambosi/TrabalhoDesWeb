
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        const destinoID = this.getAttribute('href'); 
        const destino = document.querySelector(destinoID); 

        destino.scrollIntoView({
            behavior: 'smooth' 
        });
    });
});
