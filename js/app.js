//Pidiendo una frase al usuario
cipher (prompt ("Ingrese una frase a cifrar"))
decipher (prompt ("Ingrese una frase a descifrar"))

// 1. Cifrando frase
function cipher (phrase) {

  //Obtener el caracter ASCII de cada letra y almacenar en un array
  var inputPhrase = [];
  for (i = 0; i < phrase.length; i++) {
    inputPhrase.push(phrase.charCodeAt(i));

    //Aplicar fórmula de Cifrado César, obtener letra de cada caracter ASCII y almacenar en un array
    var outputPhrase = [];
    for (j = 0; j < phrase.length; j++) {
      outputPhrase.push(String.fromCharCode((inputPhrase[j] - 65 + 33) % 26 + 65));

    }
  }

  //Convertir el array en string y mostrar frase cifrada al usuario
  document.write("La frase cifrada es " + outputPhrase.join(''))

}

//2. Descifrando frase
function decipher (phrase1) {

  //Obtener el caracter ASCII de cada letra y almacenar en un array
  var inputPhrase1 = [];
  for (i = 0; i < phrase1.length; i++) {
    inputPhrase1.push(phrase1.charCodeAt(i));

    //Aplicar fórmula de Cifrado César, obtener letra de cada caracter ASCII y almacenar en un array
    var outputPhrase1 = [];
    for (j = 0; j < phrase1.length; j++) {
      outputPhrase1.push(String.fromCharCode((inputPhrase1[j] - 65 - 33) % 26 + 65));

    }
  }

  //Convertir el array en string y mostrar frase cifrada al usuario
  document.write("La frase descifrada es " + outputPhrase1.join(''))

}
