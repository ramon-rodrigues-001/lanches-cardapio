var butao = document.body.querySelector('button#butao')
butao.addEventListener('click', clicar)

function clicar() {
    var nome = document.body.querySelector('input#input-nome')
    var gmail = document.body.querySelector('input#input-gmail')

    if (gmail.value == '' || nome.value == '') {
        alert("Favor preencher todos os requisitos")
    }
}