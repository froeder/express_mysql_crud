function pegarTabela() {
    return document.getElementById('usuarios')
}

function excluirUsuario() {
    console.log('cliquei')
    let table = this.pegarTabela()
    let email = ''
    let uri = 'http://127.0.0.1:3001/deletar-usuario'

    for (var i = 0; i < table.rows.length; i++) {
        let teste = email
        console.log('for')

        table.rows[i].onclick = function () {
            console.log('onclick')
            //rIndex = this.rowIndex;
            teste = this.cells[2].innerHTML
            email = teste
            let aux = email
            let dados = {
                email: aux
            }

            axios.post(uri, dados)
                .then(response => {
                    console.log(response)
                    alert('Usuário deletado com sucesso')
                    window.location.reload()
                })
                .catch(error => {
                    console.log(error)
                    alert('Erro ao deletar o usuário')
                })

        };

    }
}