$(document).ready(function() {
    // Configurações do carrossel
    const carouselSettings = {
        loop: true,          // Permite que o carrossel volte ao início ao chegar ao final
        margin: 10,          // Define a margem entre os itens
        nav: false,          // Desabilita os botões de navegação
        responsive: {        // Define o número de itens exibidos conforme a largura da tela
            0: {
                items: 1     // Exibe 1 item para telas com largura de até 599px
            },
            600: {
                items: 3     // Exibe 3 itens para telas com largura entre 600px e 999px
            },
            1000: {
                items: 5     // Exibe 5 itens para telas com largura de 1000px ou mais
            }
        }
    };

    // Inicializa o carrossel com as configurações especificadas
    $('.owl-carousel').owlCarousel(carouselSettings);
});
