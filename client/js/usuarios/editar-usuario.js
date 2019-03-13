function voltar() {
    window.location.replace('listar-usuarios.html')
}

function pegarCampos() {
    let id = document.getElementById('id').value
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let data_nascimento = document.getElementById('data_nascimento').value
    let instituicao = document.getElementById('instituicao').value
    let profissao = document.getElementById('profissao').value

    return {
        nome: nome,
        email: email,
        senha: senha,
        data_nascimento: data_nascimento,
        instituicao: instituicao,
        profissao: profissao,
        id: id
    }
}

function editarUsuario() {
    let uri = 'http://127.0.0.1:3001/editar-usuario'
    let dados = this.pegarCampos()
    axios.put(uri, dados)
        .then(response => {
            alert(response.data)
            console.log(response)
        })
        .catch(error => {
            console.log(error)
            alert('Erro ao salvar')
        })

}