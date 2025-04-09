document.addEventListener('DOMContentLoaded', function() {
    // Script para destacar o menu conforme o scroll
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.menu a');
    const topNavbar = document.getElementById('top-navbar');
    
    // Rolagem suave para o menu lateral
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtém o ID da seção alvo a partir do atributo href
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Rola suavemente para a seção alvo com offset e velocidade personalizada
                const offset = 80; // Ajuste para garantir que o título fique bem visível
                scrollToElementWithOffset(targetSection, offset, 1200); // 1200ms = rolagem um pouco mais rápida
            }
        });
    });
    
    // Função de rolagem suave personalizada com offset
    function scrollToElementWithOffset(element, offset, duration) {
        const startingY = window.pageYOffset;
        const elementY = window.pageYOffset + element.getBoundingClientRect().top;
        const targetY = elementY - offset; // Subtrair o offset para parar antes do elemento
        const diff = targetY - startingY;
        const easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 };
        let start;
        
        if (!diff) return;
        
        // Rolagem com requestAnimationFrame para suavidade
        window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp;
            
            const time = timestamp - start;
            const percent = Math.min(time / duration, 1);
            const easedPercent = easing(percent);
            
            window.scrollTo(0, startingY + diff * easedPercent);
            
            if (time < duration) {
                window.requestAnimationFrame(step);
            }
        });
    }
    
    function activeMenu() {
        // Encontra a seção atual
        let current = '';
        let scrollPosition = window.scrollY + 150; // Aumentado para melhor detecção da seção ativa
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Ajuste para ativar o menu antes de chegar totalmente à seção
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        // Atualiza o menu ativo
        menuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
        
        // Mostra/esconde a barra de navegação superior
        if (window.scrollY > 150) {
            topNavbar.classList.add('visible');
        } else {
            topNavbar.classList.remove('visible');
        }
    }
    
    // Sempre ativar o scroll listener
    window.addEventListener('scroll', activeMenu);
    
    // Animação de digitação
    const text = "Computer Science Student at IDP and Systems Analysis and Development Student at IESB";
    const typedTitle = document.getElementById('typed-title');
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typedTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // velocidade da digitação (ms)
        }
    }
    
    // Iniciar animação de digitação após 500ms
    setTimeout(typeWriter, 500);
});