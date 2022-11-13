
const valorTicket = 200;
const emailValido = email => {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test (email);  
}

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 20; 


let nombre = document.getElementById ('nombre');
console.log (nombre);
let apellido = document.getElementById ('apellido');
console.log (apellido);
let email = document.getElementById ('email');
console.log (email);
let cantidad = document.getElementById ('cantidad');
console.log (cantidad);
let categoria = document.getElementById ('categoria');
console.log (categoria);


//------------ VALIDACIONES --------------------------------
function quitarClaseError () {
   let x = document.querySelectorAll (".form-control, .form-select");
   let i;
   for (i = 0; i < x.length; i++ ){
      x [i].classList.remove ('is-invalid');
   }
}

function resetTotalPagar () {
   quitarClaseError ();
   totalPagar.innerHTML = "";
}

function totalPagar () {
   quitarClaseError (); 
   
   if (nombre.value === "") {
      alert ( "Por favor, escribí tu nombre");
      nombre.classList.add ("is-invalid");
      nombre.focus ();
      return;
   }

   if (apellido.value === "") {
      alert ( "Por favor, escribí tu apellido");
      apellido.classList.add ("is-invalid");
      apellido.focus ();
      return;
   }

   if (!emailValido (email.value)) {
      alert ( "Por favor, escribí un email válido");
      email.classList.add ("is-invalid");
      email.focus ()
      return;
   }
   
   if ((cantidad.value <= 0))   {
      alert ("Por favor, ingresá la cantidad correcta de tickets");
      cantidad.classList.add ("is-invalid");
      cantidad.focus ();
      return;
   }

   if (categoria.value === "") {
      alert ( "Por favor, escribí la categoría");
      categoria.classList.add ("is-invalid");
      categoria.focus ();
      return;
   }


// ----------------- LOGICA -------------------------
let totalValorTickets = (cantidad.value) * valorTicket;

//if (categoria.value == 0) {
//   totalValorTickets = totalValorTickets;
//}
//else if (categoria.value == 1) {
//   totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
//}
//else if (categoria.value == 2) {
//   totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
//}
//else if (categoria.value == 3) {
//   totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
//}



switch (categoria.value) {
   case "0":
    totalPagar.innerHTML = (totalValorTickets = totalValorTickets);
    break;
      
    case "1":
    totalPagar.innerHTML = (totalValorTickets = (totalValorTickets - (descuentoEstudiante/100*totalValorTickets)))
    break;

    case "2":
    totalPagar.innerHTML = (totalValorTickets = (totalValorTickets-(descuentoTrainee/100*totalValorTickets)))
    break;
    
    case "3":
    totalPagar.innerHTML = (totalValorTickets =(totalValorTickets-(descuentoJunior/100*totalValorTickets)))
    break;
    
    default:
    break;
} 
   totalPagar.innerHTML = totalValorTickets;
}
 
btnBorrar.addEventListener ('click', resetTotalPagar);
btnResumen.addEventListener ('click', totalPagar);
