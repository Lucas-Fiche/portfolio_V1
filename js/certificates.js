// Script específico para a página de certificados

document.addEventListener('DOMContentLoaded', function() {
    // Referências aos elementos da página
    const certificateCards = document.querySelectorAll('.certificate-card');
    
    // Animação de entrada para os certificados
    function animateCertificates() {
        certificateCards.forEach((card, index) => {
            // Aplicar um pequeno delay para cada card, criando um efeito em cascata
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }
    
    // Inicialmente, definir certificados como invisíveis
    certificateCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Iniciar animação após um pequeno delay
    setTimeout(animateCertificates, 300);
    
    // Adicionar comportamento de zoom para as imagens de certificados
    const certificateLinks = document.querySelectorAll('.certificate-link');
    
    certificateLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Aqui você pode implementar a lógica para abrir o certificado em tamanho maior
            // Por exemplo, abrir um lightbox ou redirecionar para uma página com a imagem em tamanho completo
            
            // Para este exemplo, vamos apenas exibir um alerta
            alert('Certificado será aberto em tamanho completo em uma implementação real.');
        });
    });
});