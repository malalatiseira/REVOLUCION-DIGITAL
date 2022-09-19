
function dias() {
    do {
        var diaSemana = prompt("¿Qué día es hoy?");
        if (diaSemana == null) {
            alert('Salió del ejercicio.');
            console.log("Salió.");
        } else {
            switch (diaSemana) {
                case "lunes":
                    alert("Hoy es lunes. Camine durante 2hs.");
                    break;
                case "martes":
                    alert("Hoy es martes. Camine durante 2hs y trote durante 30min");
                    break;
                case "miércoles":
                    alert("Hoy es miércoles. 15 abdominales y 30min de cardio");
                    break;
                case "jueves":
                    alert("Hoy es jueves. Trote durante 1hora y camine durante 1hs");
                    break;
                case "viernes":
                    alert("Hoy es viernes. Haga cardio por 30hs y trote durante 1hs");
                    break;
                case "sábado":
                    alert("Hoy es sábado. Trote 2hs y elongue durante 10min.");
                    break;
                case "domingo":
                    alert("Hoy es domingo. Camine durante 2 hs y camine 30min.");
                    break;
                default:
                    alert("Escribe el día de la semana en minúsculas");
                    diaSemana = "error";
                    console.log(diaSemana);
            }
        }
    } while (diaSemana == "error");
}

do {
    var diaSemana = prompt("¿Qué día es hoy?");
    if (diaSemana == null) {
        alert('Salió del ejercicio.');
        console.log("Salió.");
    } else {
        switch (diaSemana) {
            case "lunes":
                alert("Hoy es lunes. Camine durante 2hs.");
                break;
            case "martes":
                alert("Hoy es martes. Camine durante 2hs y trote durante 30min");
                break;
            case "miércoles":
                alert("Hoy es miércoles. 15 abdominales y 30min de cardio");
                break;
            case "jueves":
                alert("Hoy es jueves. Trote durante 1hora y camine durante 1hs");
                break;
            case "viernes":
                alert("Hoy es viernes. Haga cardio por 30hs y trote durante 1hs");
                break;
            case "sábado":
                alert("Hoy es sábado. Trote 2hs y elongue durante 10min.");
                break;
            case "domingo":
                alert("Hoy es domingo. Camine durante 2 hs y camine 30min.");
                break;
            default:
                alert("Escriba el día de la semana en minúsculas");
                diaSemana = "error";
                console.log(diaSemana);
        }
        }
    } while (diaSemana == "error");


function bucle() {
    for (i = 20; i <= 70; i++) {
        document.write("El número es: " + i + "<br>");
    }
    document.write("<input type='button' value='Salir del ejercicio' onclick='window.history.go(0);'>");
}

function hola_mundo() {
    console.clear();
    do {
        var veces = prompt("¿Cuantas veces quiere que aparezca HOLA MUNDO en pantalla?");
        
        if (veces == null) {
            alert('Salió del ejercicio.');
            console.log("Salió.");
        }
       
        else if (Number.isInteger(+veces) === true && veces > 0) {
          
            for (i = 0; i < veces; i++) {
                document.write("Hola Mundo! <br>");
            }
            document.write("Se mostró " + i + " veces.<br>");
         
        }
   
        else {
            alert(veces + " Debe ingresar un número entero que sea mayor a 0.");
            veces = 0;
        }
       
    } while (veces == 0);
}


function limpiar() {
    document.getElementById("ej1").style.visibility = "hidden";
    console.clear();
}