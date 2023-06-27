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

var solApagado = document.getElementById("solApagado");
solApagado.style.display = "none";
var sol = document.getElementById("sol");
var principal = document.getElementById("principal");
var footer = document.getElementById("footer");
var i = 2;

function troca(){
    if(i % 2 == 0){
        sol.style.display = "none";
        solApagado.style.display = "";
        principal.setAttribute("style", "background-color: black; color: white;");
        footer.setAttribute("style", "background-color: black; color: white;");
    } else{
        solApagado.style.display = "none";
        sol.style.display = "";
        principal.removeAttribute("style");
    }
    i++;
    console.log(i);
}
sol.addEventListener("click", troca)
solApagado.addEventListener("click", troca)

const baseUrl = "http://localhost:3000";


var str = "";

function fazRequisicao(tipo){
    var link = `http://localhost:3000/cotacao`;
    fetch(link, {method: 'GET',})
      .then(res => res.json())
      .then(res => {
        for(i = 0 ; i < res.length ; i++){
            str += `<tr>
                        <th scope="row">${i}</th>
                        <th scope="row">${res[i].numeroDoPedido}</th>
                        <td>${res[i].nome}</td>
                        <td>${res[i].email}</td>
                        <td>${res[i].celular}</td>
                        <td>${res[i].cpf}</td>
                        <td>${res[i].cnpj}</td>
                        <td>${res[i].cidadeOrigem}</td>
                        <td>${res[i].cidadeDestino}</td>
                        <td>${res[i].numeroDoPedido}</td>
                        <td>${res[i].tipoServico}</td>
                    </tr>
          `
        }
        console.log(str)
        var paiPlanilha = document.getElementById("paiPlanilha");
        paiPlanilha.innerHTML = str;
      })
}

function deleta(){
    //Delete
    fetch(link,{method: 'DELETE',})
      .then(res => res)
      //Atualiza a página para exibir todas as informações
      .then(() => location.reload());
}

var cotacao = {
    "numeroDoPedido": "588",
    "nome": "Raul",
    "email": "raulneto@gmail.com",
    "celular": "3788995577",
    "cpf": "35684572616",
    "cnpj": "300300000269",
    "cidadeOrigem": "Divinopolis",
    "cidadeDestino": "Contagem",
    "tipoServico": "Cotacao"
  };

function subir(){
    fetch('http://localhost:3000/cotacao', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cotacao)
    })
    .then(res => res.json())
}
//=======

document.getElementById("openModal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
  });

  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
  });
//>>>>>>> 5439d0aa4a25c3aab68b1c7e602a7c18dc0d8250:src/script.js
