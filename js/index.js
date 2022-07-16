const 
displayValorAnterior = document.getElementById('valor-anterior'),
displayValorActual = document.getElementById('valor-actual'),
botonesNumeros = document.querySelectorAll('.numero'),
botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});