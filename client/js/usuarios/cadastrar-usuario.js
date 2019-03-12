function pegarCampos() {
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
        profissao: profissao
    }
}

function limparCampos() {
    document.getElementById('nome').value = ''
    document.getElementById('email').value = ''
    document.getElementById('senha').value = ''
    document.getElementById('data_nascimento').value = ''
    document.getElementById('instituicao').value = ''
    document.getElementById('profissao').value = ''
}

function cadastrarUsuario() {
    let uri = 'http://127.0.0.1:3001/adicionar-usuario'
    let dados = this.pegarCampos()

    axios.post(uri, dados)
        .then(function (response) {
            console.log(response)
            let resposta = response.data
            if (resposta == 'Dado adicionado com sucesso') {
                alert('Usuário adicionado com sucesso!')
                this.limparCampos()
            } else
                alert('Houve algum erro ao adicionar o usuário')
        })
        .catch(function (error) {
            console.log(error)
        })
}

function voltar() {
    window.location.replace('listar-usuarios.html')
}