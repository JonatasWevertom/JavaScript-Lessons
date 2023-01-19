const celular = {
    marca: 'Asus',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75,
    },
    capacidadeBateria: 5000,
    ligar: function () {
        console.log('Fazendo ligação...');
    },
};

function criarCelular(marca, tamanhoTela, capacidadeBateria) {
    return {
        marca,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log('Fazendo ligação...');
        },
    };
};

const celular1 = criarCelular('Apple', 7, 6000);

console.log(celular1);
