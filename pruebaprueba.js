var print = function(cadena) {
    console.log(cadena);
}

print("hola");

function mainfunction(otraFuncion, valor) {
    otraFuncion(valor);
}
mainfunction(print, "Mundo");