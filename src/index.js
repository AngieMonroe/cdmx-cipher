let str1 = document.getElementById ("textoIngresado");
let str2 = document.getElementById ("textoIngresado");
let clave = document.getElementById ("clave");
//crear una función para cifrar el Mensaje
const cifrar1= () => {
  let string = str1.value;
  let offset = parseInt(clave.value);

 document.getElementById("resultadoMensaje").innerHTML = cipher.encode(offset,string);

};

//Creando función para descifrado
const descifrar1 = () => {
  let string = str2.value;
  let offset = parseInt(clave.value);

document.getElementById("resultadoMensaje").innerHTML = cipher.decode(offset,string);

};
