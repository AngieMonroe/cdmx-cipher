window.cipher = {
 encode : (offset,string) => {
   //llamo el primer parametro de la función desde un input
   string = document.getElementById ("textoIngresado").value;
   console.log (string)
   //llamo segundo parametro de la función mediante un input
   offset = parseInt(document.getElementById ("clave").value);
   console.log (offset);
   //creo variables que me ayudarán a almacenar información durante el
   //recorrido del for
   let valorAscii = 0;
   //comentario
   let resultPosition = 0;
   let resultOffset = 0;
   let resultResiduo = 0;
   let positionNew = 0;
   let cambiandoAletra = "";
   let cifrado = "";
   //se comienza el recorrido por el string para identificar cada uno
   //de los caracteres ingresados
   for (let i = 0; i < string.length; i++) {
     //Almaceno el valor ascii de cada caracterer
     valorAscii = string.charCodeAt(i);
     console.log (valorAscii);
     //Creo condicionales para que de acuerdo al valor de ascii se realice la operación
     //correspondiente al caracter y así identificar si es mayúsculas o minúsculas
     if (valorAscii >= 65 && valorAscii <= 90) {
       resultPosition = valorAscii - 65;
       resultOffset = resultPosition + offset;
       resultResiduo = resultOffset % 26;
       positionNew = resultResiduo + 65;
       /*positionNew = valorAscii - 65 + offset % 26 + 65
         console.log (positionNew);*/
     }
     else
     if (valorAscii >= 97 && valorAscii <= 122) {
       resultPosition = valorAscii - 97;
       resultOffset = resultPosition + offset;
       resultResiduo = resultOffset % 26;
       positionNew = resultResiduo + 97;
       /*positionNew = valorAscii - 97  + offset % 26) + 97;
         console.log (positionNew);*/
     }
     else {
     console.log (valorAscii);
      positionNew = valorAscii;
     }
     console.log (positionNew);
     cambiandoALetra = String.fromCharCode(positionNew);
     cifrado += cambiandoALetra;
     }
     document.getElementById("resultadoMensaje").innerHTML= cifrado;
 },

 decode : (offset,string) => {
   //llamo el primer parametro de la función desde un input
   string = document.getElementById ("textoIngresado").value;
   console.log (string)
   //llamo segundo parametro de la función mediante un input
   offset = parseInt(document.getElementById ("clave").value);
   console.log (offset);
   //creo una variable vacia que sera el resultado del recorrido que se hará
   let valorAscii = 0;
   let resultPosition = 0;
   let resultOffset = 0;
   let resultResiduo = 0;
   let positionNew = 0;
   let cambiandoAletra = "";
   let descifrar = "";
   //se comienza el recorrido por el string para identificar cada uno
   //de los caracteres ingresados
   for (let i = 0; i < string.length; i++) {
     //Creo una variable que me guardara el valor ascii de cada caracteres
     //primer error si coloco el i, no jala, pero si no lo coloco solo me devuelve
     //el valor de la primer letra
     valorAscii = string.charCodeAt(i);
     console.log (valorAscii);
     //Creo condicionales para que de acuerdo al valor de ascii se realice la operación
     //correspondiente al caracter
     if (valorAscii >= 65 && valorAscii <= 90) {
       resultPosition = valorAscii + 65;
       resultOffset = resultPosition - offset;
       resultResiduo = resultOffset % 26;
       positionNew = resultResiduo + 65;
       /*positionNew = valorAscii - 65 + offset % 26 + 65
         console.log (positionNew);*/
     }
     else
     if (valorAscii >= 97 && valorAscii <= 122) {
       resultPosition = valorAscii - 122;
       resultOffset = resultPosition - offset;
       resultResiduo = resultOffset % 26;
       positionNew = resultResiduo + 122;
       /*positionNew = valorAscii - 97  + offset % 26) + 97;
         console.log (positionNew);*/
     }
     else {
     console.log (valorAscii);
      positionNew = valorAscii;
     }
     console.log (positionNew);
     cambiandoALetra = String.fromCharCode(positionNew);
     descifrar += cambiandoALetra;
     }
     document.getElementById("resultadoMensaje").innerHTML= descifrar;
 }
};
