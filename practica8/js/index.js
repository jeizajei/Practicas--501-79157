 let nombre = 'PlayStation 6';
        let apellido = 'Sony';
        console.log('Nombre: ' + nombre);
        console.log('Apellido: ' + apellido);
        console.log(nombre + ' ' + apellido);
        let completo = nombre + ' ' + apellido;
        let nombreCompleto = document.getElementById

        let edad = 30;

        if(edad >= 18){
            console.log('Eres mayor de edad');
        } else {
            console.log('Eres menor de edad');
        }

        let diaSemana = 'Miércoles';

        switch(diaSemana){
            case 'Lunes':
                console.log('Hoy es lunes');
                break;
            case 'Martes':
                console.log('Hoy es martes');
                break;
            case 'Miércoles':
                console.log('Hoy es miércoles');
                break;
            case 'Jueves':
                console.log('Hoy es jueves');
                break;
            case 'Viernes':
                console.log('Hoy es viernes');
                break;
            case 'Sábado':
                console.log('Hoy es sábado');
                break;
            case 'Domingo':
                console.log('Hoy es domingo');
                break;
            default:
                console.log('No es un día de la semana');
        }

        let numero1 = 5;
        let numero2 = 10;
        let suma = numero1 + numero2;
        console.log('La suma es: ' + suma);

        function sumar(a, b){
            return a + b;
        }

        console.log('La suma es: ' + sumar(3, 7));


        let radio = 5;
function areaCirculo(r){
    return Math.PI * r * r;
}

// === Correcciones mínimas ===
const valorRadio = document.getElementById('radio');     // antes buscabas 'valorRadio'
const resultado = document.getElementById('resultado');  // ahora sí existe en el HTML
const formulario = document.querySelector('form');       // 'formulario' no es un selector válido
const botonCalcular = document.getElementById('botonCalcular');

// Puedes usar el submit del formulario (mejor) o el click del botón.
// Opción A: manejar el submit (recomendado, no cambia tu UI)
formulario.addEventListener('submit', function(event){
    event.preventDefault();
    const r = parseFloat(valorRadio.value);
    if (isNaN(r) || r < 0) {
        resultado.textContent = 'Ingresa un radio válido (≥ 0).';
        return;
    }
    const area = areaCirculo(r);
    resultado.textContent = 'El área del círculo es: ' + area.toFixed(2);
});