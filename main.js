$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.prevenDefault();
        const endereçoDaNovaImagem = $('#endereço-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endereçoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overkay-imagem-link">
                <a href="${enderecoDaNovaImgem}" target="black" tiltle="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fade.in(5000);
        $('#endereco-de-nova-imagem').val('')
    })
})
