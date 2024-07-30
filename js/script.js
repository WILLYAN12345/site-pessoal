var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
event.preventDefault();

  //Chama a function
  multiplicar();

});


//Função somar
  function multiplicar () {

    let numero1 = Number(document.getElementById("primeiro_numero").value);

    console.log(numero1);


    let numero2 = Number(document.getElementById("segundo_numero").value);

    console.log(numero2);

    let produto = numero1 * numero2;

    console.log(produto);

    //verificar se o produto de dois numeros é par
    if (produto % 2 == 0 ) {
      console.log("é par");
      document.getElementById("resultado").value = "é par";
    } else {
      document.getElementById("resultado").value = "é impar";
    }

}
