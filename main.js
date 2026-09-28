const f = document.getElementById("formulario")

f.addEventListener("submit", function(e){
    e.preventDefault();

    const v1 = Number(document.getElementById("num1").value)
    const v2 = Number(document.getElementById("num2").value)

    const soma = v1+v2

    document.getElementById("resultado").textContent=soma

})