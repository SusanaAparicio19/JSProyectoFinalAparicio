
let nombre = document.getElementById("nombre");
nombre.onkeyup=()=>{
    if(nombre.value.length < 3 ){
        nombre.style.backgroundColor='rgb(244, 193, 193)';
    }else{
        nombre.style.backgroundColor='rgb(188, 244, 217)';
    }
}

let apellido = document.getElementById("apellido");
apellido.onkeyup=()=>{
    if(apellido.value.length < 2 ){
        apellido.style.backgroundColor='rgb(244, 193, 193)';
    }else{
        apellido.style.backgroundColor='rgb(188, 244, 217)';
    }
}

let email = document.getElementById("email");
email.addEventListener('input',() =>{
    if(!email.value.includes('@') || !email.value.includes(".")){
        document.getElementById('mensaje').innerText='Recorda colocar el @ y el .';
    }else{
        document.getElementById('mensaje').innerText='';
    }
})


let botonVaciarForm = document.getElementById("borrar_contacto");
    botonVaciarForm.addEventListener("click", respuestaDelClick);
    function respuestaDelClick(){
        nombre.value = '';
        apellido.value = '';
        email.value = '';
        novedades.value = '';
    }

let formContacto = document.getElementById("formularioContacto");
formContacto.addEventListener('submit', validar);

function validar(evento){
    if((nombre.value =='') || (apellido.value =='') || (email.value =='')){
        evento.preventDefault();
        alert('ERROR AL INGRESAR LOS DATOS\n Por favor ingrese Nombre, Apellido o Email validos !!');
    }else{
        alert('MENSAJE ENVIADO\n Te responderemos a la brevedad\n 46 Soles');
    }
}