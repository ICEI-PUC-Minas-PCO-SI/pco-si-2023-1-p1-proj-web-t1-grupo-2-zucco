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

// máscaras do formulário serviços
const masks = {
    cpf (value){
        console.log(value) 
        return value
            .replace(/\D/g, '') // \D/g busca global na string p verificar se existe algum valor q nao eh numero e n vai subtituir por nada 
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')  //  captura para limitar a quantidade de numeros que o cpf pede

             // (\d{3}) serve p pegar 3 numeros e criar um grupo de captura, dps serão 4 numeros seguidos um do outro, \d- indica uma outra captura, ou seja, o quarto numero, // $1 indica um grupo de captura, ou seja, transforma as capturas em variáveis automaticamente
    },


    cnpj (value) {
        return value
            .replace(/\D/g, '') // removendo qlqr coisa q n seja numero
            .replace(/(\d{2})(\d)/, '$1.$2') // precisa-se de dois numeros seguidos de mais uma captura  (terceiro numero) 
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{4})(\d)/, "$1-$2")   //  casar com 5 numeros seguidos (captura com 4 numeros + captura com mais um numero)  
            .replace(/(-\d{2})\d+?$/, '$1')  //  captura para limitar a quantidade de numeros que o cnpj pede
    },

    phone (value) {
        return value
        .replace(/\D/g, '') // removendo qlqr coisa q n seja numero
        .replace(/(\d{2})(\d)/, '($1) $2') // capturas para quando tiver 3 numeros digitados no campo celular, ficará automaticamente no formato de num cel: (11) 9
        .replace(/(\d{4})(\d)/, '$1-$2') // quando digitar 4 numero seguidos do 5 numero sera acrescetado o "-" para separar
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3') // se tiver 9 numeros um migra para o lado esquerdo, se tiver 8 fica 4 pra cada lado
        .replace(/(-\d{4})\d+?$/, '$1') //  captura para limitar a quantidade de numeros que um celular pede.
    }, 
    
}

//  para pegar todos os inputs
document.querySelectorAll('input').forEach(($input) =>  {
    const field = $input.dataset.js // pegar informações da propriedade data-js

    $input.addEventListener('input', (e) => { 
       
        e.target.value = masks[field](e.target.value) // isso faz com q o retorno dessa função seja atribuido ao valor do campo de formulario e.target.value e [field]- dependendo do campo ele vai procurar no objeto masks a função necessaria a ser executada e criar a mascara

    }, false ) // pra cada input atribuir um evento, e função de call back q sempre será executada quando algum valor entrar no campo de cpf

}) // adicionar evento nos elementos do formulario (preparar aplicação p funcionar os dados)