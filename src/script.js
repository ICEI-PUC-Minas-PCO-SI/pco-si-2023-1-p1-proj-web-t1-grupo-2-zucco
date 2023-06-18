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