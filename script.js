document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-in-out');
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const themeSwitcher = document.getElementById('theme-switcher');
    let darkMode = false;

    // Alternar menu lateral
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Alternar modo claro/escuro
    themeSwitcher.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        darkMode = !darkMode;
        themeSwitcher.textContent = darkMode ? '🌙' : '💡';
    });

    const onScroll = () => {
        const windowHeight = window.innerHeight; // Altura da janela visível
        const scrollY = window.scrollY; // Quantidade de rolagem vertical
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top + scrollY; // Posição do topo do elemento
            const elementBottom = elementTop + element.offsetHeight; // Posição do fundo do elemento
            
            // Verifica se o elemento está dentro da área visível da página
            if (elementBottom > scrollY && elementTop < (scrollY + windowHeight)) {
                element.classList.add('visible'); // Torna o elemento visível
            } else {
                element.classList.remove('visible'); // Esconde o elemento
            }
        });
    };

    // Adiciona o evento de scroll
    window.addEventListener('scroll', onScroll);
    
    // Chama a função inicialmente para aplicar o efeito aos elementos visíveis logo de cara
    onScroll();
});