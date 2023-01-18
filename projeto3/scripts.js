// divisivel por 3 fizz
// divisivel por 5 buzz
// divisivel por ambos fizzbuzz
// não divisivel por nenum dos dois, retorna o proprio valor
// se nao for numero retorna 'Nan'

function fizzBuzz(entrada) {
    const tres = 3;
    const cinco = 5;

    if (typeof entrada == 'number') {
        if (entrada % tres === 0 && entrada % cinco === 0) {
            return 'FizzBuzz';
        }
        else if (entrada % tres === 0) {
            return 'Fizz';
        }
        else if (entrada % cinco === 0) {
            return 'Buzz';
        }
        else {
            return entrada;
        };
    }
    else {
        return 'Nan'
    };
};

const resultado = fizzBuzz(15);
console.log(resultado);
