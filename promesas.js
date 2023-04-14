const estatusPedido = () => {
    return Math.random() < 0.8;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(estatusPedido()) {
            resolve('pedido exitoso');
        } else {
            reject('ocurrio un error, intentelo de nuevo');
        }
    });
});


miPedidoDePizza
    .then((confirmacion) => {
        console.log(confirmacion);
    })
    .catch((rechazar) => {
        console.log(rechazar);
    });