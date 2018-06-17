//Declaro variables que serán las encargadas de identificar de donde viene la información del html.
let str1 = document.getElementById ("textoIngresado");
let clave = document.getElementById ("clave");
//Creo una función que será la encargada de guardar el valor que se obtiene del html.
//Esta función se activa al momento de dar click sobre el boton correspondiente de cifrar.
//Tambien se empleara para invocar al objeto cipher y obtener el resultado.
const cifrar1= () => {
  let string = str1.value;
  let offset = parseInt(clave.value);

 document.getElementById("resultadoMensaje").innerHTML = cipher.encode(offset,string);

};

//Ya que la función se activa al momento de dar click, es importante diferenciar ambas funciones.
const descifrar1 = () => {
  let string = str1.value;
  let offset = parseInt(clave.value);

document.getElementById("resultadoMensaje").innerHTML = cipher.decode(offset,string);

};
