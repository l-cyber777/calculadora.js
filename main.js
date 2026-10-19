function calcular() {
    var compra = Number(document.getElementById("valor").value)
    var desconto = 0

    if (compra > 500) {/*condição*/
        /*o que vai acontecer se a condição for verdadeira*/
        desconto = compra * 0.1
    }
    else if (compra > 100) {/*condição2*/
        /*o que vai acontecer se a condição 2 for verdadeira*/
        desconto = compra * 0.05
    }
    else {
        /*o que vai acontecer se a condição for falsa*/
        desconto = 0
    }

    var total = compra - desconto

    document.getElementById("resultado").innerHTML =
        "Valor da compra: R$ " + compra.toFixed(2) + "<br>" +
        "Valor do desconto: R$ " + desconto.toFixed(2) + "<br>" +
        "Valor com desconto: R$ " + total.toFixed(2)
}