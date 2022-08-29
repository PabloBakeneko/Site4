let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#log')

logado.innerHTML = `Bem vindo ${userLogado.nome}`

function sair() {
    localStorage.removeItem('token')
    window.location.href = ''
}