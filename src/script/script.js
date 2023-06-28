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


var link = `http://localhost:3000/cotacao`;
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

function fazRequisicao() {
    var str = "";
    for (i = 0; i < dados.length; i++) {
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
                    <td><button class="btn btn-danger" id="btn-apaga" onclick="deleta(${i})">Apagar</button></td>
                    <td><button class="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#modalEditar${i}">Editar</button></td>
                    <div class="modal" id="modalEditar${i}">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h3>Editar informações</h3>
                                    <button class="btn btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div class="modal-body">
                                    <label for="exampleInputEmail1" class="form-label">Identificador</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="${i}" disabled>
                                    <label for="exampleInputEmail1" class="form-label">Numero do pedido</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="${dados[i].numeroDoPedido}">
                                    <label for="exampleInputEmail1" class="form-label">Nome</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="${dados[i].nome}">
                                    <label for="exampleInputEmail1" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="${dados[i].email}">
                                    <label for="exampleInputEmail1" class="form-label">Celular</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="${dados[i].celular}">
                                    <label for="exampleInputEmail1" class="form-label">CPF</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="${dados[i].cpf}">
                                    <label for="exampleInputEmail1" class="form-label">CNPJ</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="${dados[i].cnpj}">
                                    <label for="exampleInputEmail1" class="form-label">Cidade de origem</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="${dados[i].cidadeOrigem}">
                                    <label for="exampleInputEmail1" class="form-label">Cidade de destino</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="${dados[i].cidadeDestino}">
                                    <label for="exampleInputEmail1" class="form-label">Número do pedido</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="${dados[i].numeroDoPedido}">
                                    <label for="exampleInputEmail1" class="form-label">Tipo de serviçõ</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="${dados[i].tipoServico}">
                                </div>
                                <div class="modal-footer">
                                    <button class="btn btn-success" onclick="">Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </tr>
          `
    }
    console.log(str)
    var paiPlanilha = document.getElementById("paiPlanilha");
    paiPlanilha.innerHTML = str;
}

function deleta(){
    fetch("http://localhost:3000/cotacao", {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(() => location.reload());
}
// document.getElementById("openModal").addEventListener("click", function () {
//     document.getElementById("modal").style.display = "block";
// });

// document.getElementsByClassName("close")[0].addEventListener("click", function () {
//     document.getElementById("modal").style.display = "none";
// });
//>>>>>>> 5439d0aa4a25c3aab68b1c7e602a7c18dc0d8250:src/script.js
