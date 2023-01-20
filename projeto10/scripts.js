// Criar função para mostrar os números primos de uma sequencia

function primo(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    };
    
    return true;
};

function exibirPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        if (primo(numero)) console.log(numero);
    };
};

exibirPrimos(15);
