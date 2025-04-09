// Script para o efeito de digitação no título

function initTypingEffect() {
    const text = "Computer Science Student | Systems Analysis and Development Student";
    const typedTitle = document.getElementById('typed-title');
    
    // Se o elemento não existir, não fazer nada
    if (!typedTitle) return;
    
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typedTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // velocidade da digitação (ms)
        }
    }
    
    // Iniciar animação após 500ms
    setTimeout(typeWriter, 500);
}