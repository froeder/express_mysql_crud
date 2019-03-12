function voltar() {
    window.location.replace('../home.html')
}

function adicionarUsuario() {
    window.location.replace('cadastrar-usuario.html')
}

function editarUsuario() {
    var table = document.getElementById('usuarios');
    let id = ''

    for (var i = 1; i < table.rows.length; i++) {
        let teste = id

        table.rows[i].onclick = function () {
            //rIndex = this.rowIndex;
            teste = this.cells[0].innerHTML
            id = teste
            let aux = id

            window.location.replace('editar-usuario.html?id=' + aux + '')
        };

    }

}

function excluirUsuario() {

}