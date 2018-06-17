window.cipher = {
 encode : (offset,string) => {
   //creo variables que me ayudarán a almacenar información durante el
   //recorrido del for
   let valorAscii = 0;
   let positionNew = 0;
   let cambiandoAletra = "";
   let cifrado = "";
   //se comienza el recorrido por el string para identificar cada uno de los caracteres ingresados
   for (let i = 0; i < string.length; i++) {
     //Almaceno el valor ascii de cada caracterer
     valorAscii = string.charCodeAt(i);
     console.log (valorAscii);
     //Creo condicionales para que de acuerdo al valor de ascii se realice la operación
     //correspondiente al caracter y así identificar si es mayúsculas, minúsculas o simbolos.
     //Mayusculas
     if (valorAscii >= 65 && valorAscii <= 90) {
       positionNew = ((((valorAscii - 65) + offset) % 26) + 65);
      console.log (positionNew);
     }
     //minusculas
     else
     if (valorAscii >= 97 && valorAscii <= 122) {
       positionNew = ((((valorAscii - 97 ) + offset) % 26) + 97);
         console.log (positionNew);
     }
     //Signos y numeros
     else {
     console.log (valorAscii);
      positionNew = valorAscii;
     }
     //Ahora la nueva posición se convierte en caracter
     cambiandoALetra = String.fromCharCode(positionNew);
     //se almacena cada letra dentro la variable cifrado
     cifrado += cambiandoALetra;
     console.log(cifrado);
     }
//se retorna el resultado de la función
     return cifrado;
 },

//////////////////
//Esta función deberá realizar lo controrio que hizo la función anterior
 decode : (offset,string) => {
   let valorAscii = 0;
   let positionNew = 0;
   let cambiandoAletra = "";
   let descifrar = "";
   for (let i = 0; i < string.length; i++) {
     valorAscii = string.charCodeAt(i);
     console.log (valorAscii);
     //Creo condicionales para que de acuerdo al valor de ascii se realice la operación
     //La nueva formula debe considerar que los espacios que se avanzaron ahora debe retroceder empleara
     //encontrar el caracter original del mensaje.
     if (valorAscii >= 65 && valorAscii <= 90) {
       positionNew = ((((valorAscii + 65 ) - offset) % 26) + 65);
         console.log (positionNew);
      }
     else
     if (valorAscii >= 97 && valorAscii <= 122) {
       positionNew = ((((valorAscii - 122) - offset) % 26) + 122);
         console.log (positionNew);
     }
     else {
     console.log (valorAscii);
      positionNew = valorAscii;
     }
     console.log (positionNew);
     cambiandoALetra = String.fromCharCode(positionNew);
     descifrar += cambiandoALetra;
     }

     return descifrar;
 }
};
