# Producto Final
## Cifrado César:
En este producto final se requieren crear dos funciones **(cipher y decipher)** para cifrar y descifrar una frase.

Pasos:
1. La web muestra un cajetin con dos botones **(cifrar y descifrar)** y un espacio donde escribir la frase que el usuario quiere cifrar o descifrar.
2. El usuario deberá escribir una frase en el espacio y dar click en el botón de su elección.
3. La web devuelve una frase cifrada o descifrada (según lo seleccionado por el usuario).

### Pseudocódigo
~~~
//1. Cifrando frase

//Creando función para cifrar
funcion cifrado de frase {

  //Pidiendo una frase al usuario
  Crear una variable 'frase' con la información introducida por el usuario;

  //Obtener el caracter ASCII de cada letra y almacenar en un array
  Crear un array vacío;
  Para i = 0 Hasta 'Longitud de la frase'-1 Con Paso i+1 Hacer
    inputPhrase.push(phrase.charCodeAt(i));
  }

    //Aplicar fórmula
    for (j = 0; j < phrase.length; j++) {
        if (inputPhrase[j]>= 65 && inputPhrase[j]<= 90){ //Para letras MAYUSCULAS
            inputPhrase[j] = (inputPhrase[j] - 65 + 33)%26 + 65
        }else if (inputPhrase[j]>= 97 && inputPhrase[j]<= 122){
            inputPhrase[j] = (inputPhrase[j] - 97 + 33)%26 + 97
        }else{
            inputPhrase[j] = inputPhrase [j]
        }
    }

    //Transformar número en letra (Caracter ASCII)
    var outputPhrase = [];
    for (j = 0; j < phrase.length; j++) {
      outputPhrase.push(String.fromCharCode(inputPhrase[j]))
    }

  //Convertir el array en string y mostrar frase cifrada al usuario
  document.getElementById('resultado').innerHTML = outputPhrase.join('')

}

//2. Descifrando frase

//Creando función para descifrar
function decipher (phrase) {

//Pidiendo una frase al usuario
var phrase = document.getElementsByTagName("input")[0].value;

  //Obtener el caracter ASCII de cada letra y almacenar en un array
  var inputPhrase = [];
  for (i = 0; i < phrase.length; i++) {
    inputPhrase.push(phrase.charCodeAt(i));
  }

    //Aplicar fórmula
    for (j = 0; j < phrase.length; j++) {
        if (inputPhrase[j]>= 65 && inputPhrase[j]<= 90){ //Para letras MAYUSCULAS
            inputPhrase[j] = (- 33)%26 + inputPhrase[j]
        }else if (inputPhrase[j]>= 97 && inputPhrase[j]<= 122){
            inputPhrase[j] = (- 33)%26 + inputPhrase[j]
        }else{
            inputPhrase[j] = inputPhrase [j]
        }
    }

    //Transformar número en letra (Caracter ASCII)
    var outputPhrase = [];
    for (j = 0; j < phrase.length; j++) {
      outputPhrase.push(String.fromCharCode(inputPhrase[j]))
    }

  //Convertir el array en string y mostrar frase cifrada al usuario
  document.getElementById('resultado').innerHTML = outputPhrase.join('')

}

~~~

### Diagrama de flujo
A continuación se detalla en un diagrama de flujo:

[Diagrama Cifrado César](https://drive.google.com/file/d/0B8fqMV-mBqZgVEpkQVZMMW5OTjg/view?usp=sharing)
