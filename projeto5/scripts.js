// Receber um intervalo de valores para avaliar
// função exibe se os valores do intervalo são par ou impar

function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0) {
            console.log(i, 'PAR')
        }
        else {
            console.log(i, 'IMPAR')
        };
    };
};

exibirTipo(5);
