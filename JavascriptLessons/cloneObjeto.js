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

// Forma 1 usando Object.assign({})
const tablet = Object.assign({
    carcaca: 'aluminium'
}, celular);

console.log(tablet);

// Forma 2 usando spread operator.
const tablet2 = {...celular};

console.log(tablet2);
