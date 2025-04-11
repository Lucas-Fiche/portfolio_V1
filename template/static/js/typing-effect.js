// Script para o efeito de digitação no título

function initTypingEffect() {
    const texts = [
        "Computer Science Student at IDP",
        "Systems Analysis and Development Student at IESB",
        "Estudante de Ciência da Computação no IDP",
        "Estudante de Análise e Desenvolvimento de Sistemas no IESB"
    ];
    const typedTitle = document.getElementById('typed-title');

    // Se o elemento não existir, não fazer nada
    if (!typedTitle) return;

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentText = texts[textIndex];
        const visibleText = currentText.substring(0, charIndex);
        typedTitle.innerHTML = visibleText;

        if (!isDeleting && charIndex < currentText.length) {
            charIndex++;
            setTimeout(typeWriter, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeWriter, 50);
        } else {
            if (!isDeleting) {
                isDeleting = true;
                setTimeout(typeWriter, 1000); // espera antes de apagar
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeWriter, 500); // espera antes de digitar próxima
            }
        }
    }

    // Iniciar animação após 500ms
    setTimeout(typeWriter, 500);
}
