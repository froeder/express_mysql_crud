function pegaCampos() {
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    return dados = {
        email: email,
        senha: senha
    }
}

function limpaCampos() {
    document.getElementById('email').value = ''
    document.getElementById('senha').value = ''
}

function login() {
    let dados = this.pegaCampos()
    let uri = 'http://127.0.0.1:3001/login'

    axios.post(uri, dados)
        .then(function (response) {
            let user = response.data[0]
            if (user) {
                window.location.replace('home.html')
            } else {
                alert('Usuário nao encontrado')
                this.limpaCampos()
            }

        })
        .catch(function (error) {
            console.log(error);
        });
}

function cadastrarUsuario() {
    window.location.replace('auth/cadastrar-usuario.html')
}