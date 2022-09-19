var antigüedad = "2021";

function Func() {
    
    if (!document.querySelector('input[name="ipais"]:checked')) {
        alert("No ha seleccionado un país");
    }
    else { 
        var pais = document.getElementsByName("ipais");
        if (pais[0].checked) {
            var pais = pais[0].value;
            var continente = "Europa";
        }
        else {
            var pais = pais[1].value; 
            var continente = "Latinoamérica";
        }
        var pais_y_continente = pais + " está en " + continente;
        console.log(pais, continente, antigüedad);
        alert(pais_y_continente);
    }
}