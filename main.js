let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let botonBorrar = document.getElementById('limpiar');
let mensaje = document.getElementById('mensajeValidacion');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@()?_.;/^#$*%&'

    if( numeroDigitado < 8){
        alert('La cantidad de caracteres tiene que ser mayor que 8');
    }

    let password = '';
    for(let i = 0; i < numeroDigitado; i++ ){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+= caracterAleatorio;
    }

    contrasena.value = password;

    // Validar la contraseña luego de generarla
    validarpassword(password);


function limpiar(){
    // Limpiar el campo de contraseña
    contraseña.value() = '';

    // Limpiar el campo de contraseña
    cantidad.value() = '';
    mensaje.textContent = '';  // limpia el mensaje de validacion si lo hubiera
}

// Even listener al boton para limpiar los campos
botonBorrar.addEvenlistener('click', limpiar);

// Varificacion de la seguridad
function validarpassword(){
    const password = contrasena.value();

    let numero = /\d/;
    let minuscula = /[a-z]/;
    let mayuscula = /[A-Z]/;
    let caracterEspecial = /[!@()?_.;/^#$*%&]/;

    //Verificacion de la seguridad de la contraseña
    if (!numero.test(password)) {
        mensaje.textContent = "La contraseña es Débil: debe contener al menos un número.";
        mensaje.style.color= "red";
    }
        else if (!minuscula.test(password)){
            mensaje.textContent = "La contraseña es Débil: debe contener al menos una letra minúscula.";
            mensaje.style.color= "red";
        }
        else if (!mayuscula.test(password)){
            mensaje.textContent = "La contraseña es Débil: debe contener al menos una letra mayúscula.";
            mensaje.style.color= "red";
        }
        else if (!caracterEspecial.test(password)){
            mensaje.textContent = "La contraseña es Débil: debe contener al menos un carácter especial.";
            mensaje.style.color= "red";
        }
        else {
            mensaje.textContent = "La contraseña es fuerte";
            mensaje.style.color = "green";
        }
}
        
            
            





