/*let estado = document.getElementById("estado");
estado.value = 11;

let fecha = document.getElementById("fecha");

let hoy = new Date();
fechaCadena =hoy.getFullYear();
console.log(fechaCadena);
fechaCadena += "-";
console.log(fechaCadena);
fechaCadena += ('0' + (hoy.getMonth() + 1)).slice(-2);
console.log(fechaCadena);
fechaCadena += "-";
console.log(fechaCadena);
fechaCadena += ('0' + hoy.getDate()).slice(-2);
console.log(fechaCadena);
fecha.value = fechaCadena;*/




// Fecha actual (local) en el input date y limitar fechas futuras
const fecha = document.getElementById("fecha");
(function setHoy() {
  const hoy = new Date();
  const yyyy = hoy.getFullYear();
  const mm = String(hoy.getMonth() + 1).padStart(2, "0");
  const dd = String(hoy.getDate()).padStart(2, "0");
  const isoLocal = `${yyyy}-${mm}-${dd}`;
  fecha.value = isoLocal;   // valor por defecto = hoy
  fecha.max = isoLocal;     // evitar fechas futuras
})();

// Prevenir espacios en las contraseñas mientras se escribe
["contrasena1", "contrasena2"].forEach((id) => {
  const el = document.getElementById(id);
  el.addEventListener("keydown", (e) => {
    if (e.key === " ") e.preventDefault();
  });
  el.addEventListener("input", (e) => {
    // si pegan texto con espacios, los eliminamos
    e.target.value = e.target.value.replace(/\s/g, "");
  });
});

const form = document.getElementById("formRegistro");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // no enviar si no pasa validaciones

  const pass1 = document.getElementById("contrasena1").value;
  const pass2 = document.getElementById("contrasena2").value;

  // Mínimo 8 chars, al menos 1 mayúscula y 1 número, sin espacios
  const regex = /^(?=.*[A-Z])(?=.*\d)[^\s]{8,}$/;

  if (!regex.test(pass1)) {
    alert(
      "La contraseña debe tener mínimo 8 caracteres, al menos una letra mayúscula, un número y no contener espacios."
    );
    return;
  }

  if (pass1 !== pass2) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  // Validar campos requeridos del navegador
  if (!form.checkValidity()) {
    alert("Por favor completa todos los campos requeridos.");
    return;
  }

  alert("Registro exitoso ✅");
    form.reset();
});
