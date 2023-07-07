    var solApagado = document.getElementById("solApagado");
    solApagado.style.display = "none";
    var sol = document.getElementById("sol");
    var footer = document.getElementById("gerenciadora");
    var principal = document.getElementById("principal");
    // var footer = document.getElementById("footer");
    var i = 2;
    sol.addEventListener("click", troca)
    solApagado.addEventListener("click", troca)
function troca() { 
    if (i % 2 == 0) {
        sol.style.display = "none";
        solApagado.style.display = "";
        // footer.setAttribute("style", "background-color: black; color: white;");
        principal.setAttribute("style", "background-color: black; color: white;");
        // footer.setAttribute("style", "background-color: black; color: white;");
    } else {
        solApagado.style.display = "none";
        sol.style.display = "";
        principal.removeAttribute("style");
    }
    i++;
    console.log(i);
}