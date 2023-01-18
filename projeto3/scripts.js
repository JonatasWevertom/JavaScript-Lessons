// divisivel por 3 fizz
// divisivel por 5 buzz
// divisivel por ambos fizzbuzz
// não divisivel por nenum dos dois, retorna o proprio valor
// se nao for numero retorna 'Nan'

function fizzBuzz(entrada) {
    if (typeof entrada == 'number') {
        if (entrada % 3 === 0 && entrada % 5 === 0) {
            return 'FizzBuzz';
        }
        else if (entrada % 3 === 0) {
            return 'Fizz';
        }
        else if (entrada % 5 === 0) {
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
