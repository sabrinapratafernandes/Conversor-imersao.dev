function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);

    var elementoValorConvertidoEmReal = document.getElementById(
        "valorConvertidoEmReal"
    );

    var valorEmBitcoin = valorEmDolarNumerico / 42060.1;
    var valorFixadoBitcoin = valorEmBitcoin.toFixed(6);
    console.log(valorEmBitcoin);

    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    var valorConvertidoBitcoin =
        " <br/> Seu valor em Bitcoin é igual a: BTC " + valorFixadoBitcoin;
    elementoValorConvertidoEmReal.innerHTML =
        valorConvertido + valorConvertidoBitcoin;
}

function ConverterEmEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmEuro = valorEmDolarNumerico * 6;
    console.log(valorEmEuro);

    var elementoValorConvertidoEmEuro = document.getElementById(
        "valorConvertidoEmEuro"
    );

    var valorEmBitcoin = valorEmDolarNumerico / 42060.1;
    var valorFixadoBitcoin = valorEmBitcoin.toFixed(6);
    console.log(valorEmBitcoin);
    var valorConvertidoBitcoin =
        " <br/> Seu valor em Bitcoin é igual a: BTC " + valorFixadoBitcoin;

    var valorConvertido = "O resultado em Euro é € " + valorEmEuro;
    console.log(valorConvertidoEmEuro);
    elementoValorConvertidoEmEuro.innerHTML =
        valorConvertido + valorConvertidoBitcoin;
}
