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
    var varUsuario = document.getElementById("txtUsuario").value;
    var varPassword = document.getElementById("txtPassword").value;
    var control = true;

    if (varUsuario.length == 0 && control) {
        alert("Debe ingresar el usuario. Intente de nuevo");
        document.getElementById("txtUsuario").focus();
        control = false;
    }

    if (varPassword.length == 0 && control) {
        alert("Debe ingresar el password. Intente de nuevo");
        document.getElementById("txtPassword").focus();
        control = false;
    }
     

    if (control)
    {
        document.getElementById("Usuario").value = varUsuario;

        // LOGGIN: SSO Asure AD
        if (varUsuario == "jose.cela@softtek.com" && varPassword == '123') {

           // window.location.href = "/PanelAdmin/index?txtUsuario=" + txtUsuario;
            return true;
        }
        else {
            alert("Usuario Incorrecto");
            return false;
        }
    }
}
