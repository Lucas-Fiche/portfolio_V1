// JavaScript principal - Inicialização e funções comuns

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar os componentes
    console.log('Inicializando site...');
    
    // Chamar funções de inicialização dos outros scripts
    if (typeof initTypingEffect === 'function') {
        initTypingEffect();
    }
    
    if (typeof initScrollNav === 'function') {
        initScrollNav();
    }
});

// Utilitários compartilhados
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}