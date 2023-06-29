//<<<<<<< HEAD:src/script/script.js
// CAPTCHA //
function generateCaptcha() {
    var captchaText = "";
    var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * possibleChars.length);
        captchaText += possibleChars.charAt(randomIndex);
    }

    var canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 75;
    var context = canvas.getContext("2d");
    context.fillStyle = "#fff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = "40px Arial";
    context.fillStyle = "#000";
    context.fillText(captchaText, 30, 55);

    document.getElementById("captchaImage").src = canvas.toDataURL();

    document.getElementById("captchaText").value = captchaText;
}
function validateCaptcha() {
    var captchaText = document.getElementById("captchaText").value;
    var userText = document.getElementById("captchaInput").value;

    if (userText == captchaText) {
        alert("CAPTCHA corretamente resolvido!");
    } else {
        alert("CAPTCHA incorreto!");
    }

    document.getElementById("captchaInput").value = "";
    generateCaptcha();

    return false;
}

function troca() {
    var solApagado = document.getElementById("solApagado");
    solApagado.style.display = "none";
    var sol = document.getElementById("sol");
    var principal = document.getElementById("principal");
    var footer = document.getElementById("footer");
    var i = 2;
    sol.addEventListener("click", troca)
    solApagado.addEventListener("click", troca)
    if (i % 2 == 0) {
        sol.style.display = "none";
        solApagado.style.display = "";
        principal.setAttribute("style", "background-color: black; color: white;");
        footer.setAttribute("style", "background-color: black; color: white;");
    } else {
        solApagado.style.display = "none";
        sol.style.display = "";
        principal.removeAttribute("style");
    }
    i++;
    console.log(i);
}
var dados = [];
function pegaDados() {
    fetch("http://localhost:3000/cotacao", { method: 'GET', })
        .then(res => res.json())
        .then(res => {
            for (i = 0; i < res.length; i++) {
                dados.push(res[i]);
            }
            fazRequisicao();
        })

}
var link = `http://localhost:3000/cotacao`;

function fazRequisicao() {
    var str = "";
    for (i = 0; i < dados.length; i++) {
        console.log("pimba " + i)
        str += `<tr>
                    <th scope="row">${i}</th>
                    <th scope="row">${dados[i].numeroDoPedido}</th>
                    <td>${dados[i].nome}</td>
                    <td>${dados[i].email}</td>
                    <td>${dados[i].celular}</td>
                    <td>${dados[i].cpf}</td>
                    <td>${dados[i].cnpj}</td>
                    <td>${dados[i].cidadeOrigem}</td>
                    <td>${dados[i].cidadeDestino}</td>
                    <td>${dados[i].numeroDoPedido}</td>
                    <td>${dados[i].tipoServico}</td>
                    <td><button class="btn btn-danger" id="btn-apaga" onclick="deleta(${dados[i].id})">Apagar</button></td>
                    <td><button class="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#modalEditar${dados[i].id}">Editar</button></td>
                    <div class="modal" id="modalEditar${dados[i].id}">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h3>Editar informações</h3>
                                    <button class="btn btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div class="modal-body">
                                    <label for="exampleInputEmail1" class="form-label">Identificador</label>
                                    <input type="email" class="form-control" id="iden${dados[i].id}" aria-describedby="emailHelp" value="${i}" disabled>
                                    <label for="exampleInputEmail1" class="form-label">Numero do pedido</label>
                                    <input type="email" class="form-control" id="numero${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].numeroDoPedido}">
                                    <label for="exampleInputEmail1" class="form-label">Nome</label>
                                    <input type="email" class="form-control" id="nome${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].nome}">
                                    <label for="exampleInputEmail1" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].email}">
                                    <label for="exampleInputEmail1" class="form-label">Celular</label>
                                    <input type="email" class="form-control" id="celular${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].celular}">
                                    <label for="exampleInputEmail1" class="form-label">CPF</label>
                                    <input type="email" class="form-control" id="cpf${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].cpf}">
                                    <label for="exampleInputEmail1" class="form-label">CNPJ</label>
                                    <input type="email" class="form-control" id="cnpj${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].cnpj}">
                                    <label for="exampleInputEmail1" class="form-label">Cidade de origem</label>
                                    <input type="email" class="form-control" id="cidadeO${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].cidadeOrigem}">
                                    <label for="exampleInputEmail1" class="form-label">Cidade de destino</label>
                                    <input type="email" class="form-control" id="cidadeDes${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].cidadeDestino}">
                                    <label for="exampleInputEmail1" class="form-label">Número do pedido</label>
                                    <input type="email" class="form-control" id="nPed${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].numeroDoPedido}">
                                    <label for="exampleInputEmail1" class="form-label">Tipo de serviçõ</label>
                                    <input type="email" class="form-control" id="tipo${dados[i].id}" aria-describedby="emailHelp" value="${dados[i].tipoServico}">
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-success" onclick="atualiza(${dados[i].id})">Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </tr>
                  `
        console.log(str)
        var paiPlanilha = document.getElementById("paiPlanilha");
        paiPlanilha.innerHTML = str;
    }
}



function deleta(id) {
    fetch("http://localhost:3000/cotacao/" + id, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(() => location.reload());
}

function atualiza(id) {
    var cotacao = JSON.stringify({
        id: document.getElementById('iden'+id).value,
        numeroDoPedido: document.getElementById('numero'+id).value,
        nome: document.getElementById('nome'+id).value,
        email: document.getElementById('email'+id).value,
        celular: document.getElementById('celular'+id).value,
        cpf: document.getElementById('cpf'+id).value,
        cnpj: document.getElementById('cnpj'+id).value,
        cidadeOrigem: document.getElementById('cidadeO'+id).value,
        cidadeDestino: document.getElementById('cidadeDes'+id).value,
        tipoServico: document.getElementById('tipo'+id).value
    })
    fetch(`http://localhost:3000/cotacao/` + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: cotacao
    })
        .then(res => res.json())
        .then(() => {
            pegaDados();
            location.reload();
        });
}
// document.getElementById("openModal").addEventListener("click", function () {
//     document.getElementById("modal").style.display = "block";
// });

// document.getElementsByClassName("close")[0].addEventListener("click", function () {
//     document.getElementById("modal").style.display = "none";
// });
//>>>>>>> 5439d0aa4a25c3aab68b1c7e602a7c18dc0d8250:src/script.js


/*==========================================================================*/

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let tel = document.querySelector('#tel')
let labelTelefone = document.querySelector('#labelTelefone')
let validTelefone = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmeSenha = document.querySelector('#confirmeSenha')
let labelConfirmeSenha = document.querySelector('#labelConfirmeSenha')
let validConfirmeSenha = false

let msgError = document.querySelector('#msgError')
let msgSucces = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 3) {
        labelNome.setAttribute('style', 'color: red')
        validNome = false
    }
    else {
        labelNome.setAttribute('style', 'color: green')
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 3) {
        labelUsuario.setAttribute('style', 'color: red')
        validUsuario = false
    }
    else {
        labelUsuario.setAttribute('style', 'color: green')
        validUsuario = true
    }
})


tel.addEventListener('keyup', () => {
    if (tel.value.length < 10 && tel.value.length < 13) {
        labelTelefone.setAttribute('style', 'color: red')
        validTelefone = false
    }
    else {
        labelTelefone.setAttribute('style', 'color: green')
        validTelefone = true
    }
})


senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red')
        validSenha = false
    }
    else {
        labelSenha.setAttribute('style', 'color: green')
        validSenha = true
    }
})

confirmeSenha.addEventListener('keyup', () => {
    if (senha.value != confirmeSenha.value) {
        labelConfirmeSenha.setAttribute('style', 'color: red')
        validConfirmeSenha = false
    }
    else {
        labelConfirmeSenha.setAttribute('style', 'color: green')
        validConfirmeSenha = true
    }
})



function cadastrar() {
    if (validNome && validUsuario && validTelefone && validSenha && validConfirmeSenha) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push({
            nomeCad: nome.value,
            userCad: usuario.value,
            telCad: tel.value,
            senhaCad: senha.value
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        

        window.location.href = './index.html'
    }
    else {
        alert('Preencha todos os campos corretamente')
    }
}

function entrar(){
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) =>{
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    if(usuario.value == userValid.user && senha.value == userValid.senha){
      window.location.href = './home.html'

      let token = Marth.random().toString(16).substr(2) + Marth.random().toString(16).substr(2)
      localStorage.setItem('token', token)

      localStorage.setItem('userLogado', JSON.stringify(userValid))
    }
    else{
        alert('Uusário ou senha incorreto')
    }

}

let userLogado = []

userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = `Ola ${userLogado.nome}`

if(localStorage.getItem('token') == null){
  alert('voce precisa estar logado para acessar a pagina')
  window.location.href = './index.html'
}

function sair(){
    window.location.href = './index.html'
}