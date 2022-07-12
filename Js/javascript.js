var butao = document.body.querySelector('button#butao')
butao.addEventListener('click', clicar)

function clicar() {
    var index_cardapio = document.body.querySelector("a#index-cardapio-01")
    index_cardapio.href = 'cardapio-01/pagina-01.html'

    var nome = document.body.querySelector('input#input-nome')
    var gmail = document.body.querySelector('input#input-gmail')

    if (gmail.value == '' || nome.value == '') {
        alert("Favor preencher todos os requisitos")
        index_cardapio.href = '#'
    }
}