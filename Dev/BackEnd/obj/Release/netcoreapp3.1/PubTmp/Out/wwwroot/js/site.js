// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function SeleccionPais(idPais, nombrePais, idIdioma, idioma, banderaRuta) {

    document.getElementById("idPais").value = idPais;
    document.getElementById("nombrePais").value = nombrePais;
    document.getElementById("idIdioma").value = idIdioma;
    document.getElementById("idioma").value = idioma;
    document.getElementById("banderaRuta").value = banderaRuta;
    return true;
}

function ValidarInicioSesion()
{
    var txtUsuario = document.getElementById("txtUsuario").value;
    var txtPassword = document.getElementById("txtPassword").value;
    var control = true;

    if (txtUsuario.length == 0 && control) {
        alert("Debe ingresar el usuario. Intente de nuevo");
        document.getElementById("txtUsuario").focus();
        control = false;
    }


    if (control)
    {
        if (txtUsuario == "jose.cela@softtek.com" && txtPassword == 'ABC123') {
            window.location.href = "/PanelAdmin/index";
        }
        else {
            alert("Usuario Incorrecto");
        }
    }
}