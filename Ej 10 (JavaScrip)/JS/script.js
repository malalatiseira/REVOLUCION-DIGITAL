//1 EJERCICIO
function ej1() {
    let nombre = "Programación" + " Fácil.";
    let saludo = "Les doy la bienvenida a ";
    //variable agregada al ejercicio original
    let comision = " Ustedes integran la Comisión E.";
    let fraseCompleta = saludo + nombre + comision;
    console.log(fraseCompleta);
    alert("Ver el resultado.");
}

//2 EJERCICIO
function ej2() {
    let frase = "JavaScript " + " es un lenguaje" + " esencial para crear" + " sitios web poderosos.";
    console.log(frase);
    alert("Ver el resultado");
}

//3 EJERCICIO
function ej3() {
    let numeroString1 = "10";
    let numeroString2 = "20";
    let numeroString3 = "30";
    
    let concatenaNumeros = "1er número: " + numeroString1 + ", 2do número: " + numeroString2 + ", 3er número: " + numeroString3;
    console.log(concatenaNumeros);
    alert("Debe completar la información");
}

//4 EJERCICIO
function edad_nom() {
    do {
        var age = prompt("¿Cual es tu edad?");
        if (age == null) {
            alert('No se puede ejecutar');
            console.log("Salió.");
        }
       
        else if (Number.isInteger(+age) === true) {
            console.log(age);
            
            var name1 = prompt("¿Cual es tu nombre?");
            //pregunta si cancela
            if (name1 == null) {
                alert('No se puede ejecutar');
                console.log("Salió.");
            }
            
            else {
                alert("Tarea completada con éxito!");
                console.warn("El nombre es ", name1, " la edad es ", age);
            }
        }
       
        else {
            age = 0;
            alert("Debe completar este *campo obligatorio*");
        }
        
    } while (age == 0);
}
//

function entrada() {
    do {
        edad = prompt("Introduce tu edad");
        //pregunta si elige cancelar
        if (edad == null) {
            alert('No se puede ejecutar');
            console.log("Salió.");
        }
        else if (Number.isInteger(+edad) === true) {
            if (edad >= 18) {
                do {
                    sexo = prompt("Introduce tu sexo (hombre/mujer)");
                    if (sexo == null) {
                        alert('No se puede ejecutar');
                        console.log("Salió.");
                    }

                    else if (sexo.toLowerCase() === "hombre" || sexo.toLowerCase() === "mujer") {
                        if (sexo.toLowerCase() == "hombre") {
                            alert("Todo en orden, ahora puedes ingresar.");
                        }
                        
                        else if (edad >= 20) {
                            alert("Todo en orden, ahora puedes ingresar.");
                        }
                        else {
                            alert("No puedes ingresar, debes tener +18 años.");
                        }
                    }
                 
                    else {
                        sexo = "error";
                        alert("Por favor introduce si eres 'hombre' o 'mujer'.");
                        console.log(sexo, " Debe completar este campo obligatorio.");
                    }
                   
                } while (sexo == "error");
            }
            else {
        
                alert("No puedes ingresar, debes tener +18 años.");
            }
        }
        
        else {
            alert("No pudimos chequear la información que nos proporcionó");
            console.log(edad, "NO es entero");
            edad = 0;
        }
       
    } while (edad == 0);
}

function limpiar() {
    document.getElementById("ej1").style.visibility = "hidden";
    console.clear();
}