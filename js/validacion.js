function validar(){
   var campos =  document.querySelectorAll('[class="form-control"]');
//    var nombre = document.getElementById("nombre").Value;
//    var apellido = document.getElementById("apellido").Value;
//    var email = document.getElementById("email").Value;
//    var telefono = document.getElementById("telefono").Value;
//    var sugerencia = document.getElementById("mensaje").Value;
    expregemail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i ;
   
   
    console.log('enviando formulario');
    console.log(campos);

    if(campos[0].value === ""){
        alert("Ingrese su nombre");
        campos[0].focus();
        return false
    }
    else if(campos[1].value === ""){
        alert("Ingrese su apellido");
        campos[1].focus();
        return false
    }
    else if(campos[2].value === ""){
        alert("Ingrese un email");
        campos[2].focus();
        return false
    }
    else if (!expregemail.test(campos[2].value)){
        alert("Ingrese un email válido");
        campos[2].focus();
        return false

    }
    else if(campos[4].value === ""){
        alert("Ingrese sugerencia");
        campos[4].focus();
        return false
    }



   return false
}