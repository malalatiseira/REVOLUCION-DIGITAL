var nombre= prompt ("Tu nombre.");
var numerito = prompt ('Ingresa un numero,'+nombre);

 if (numerito<0){
    document.write("Es negativo.")
}
 else {document.write ("Es positivo") 
}
if (numerito=="0"){
    document.write('El numero ingresado es cero, '+nombre+' . No puedo definir si es positivo o negativo.')
}
console.log(nombre);
console.log(numerito);