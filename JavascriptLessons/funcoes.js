// Tipo de função que nao tem retorno, quando utilizada com objetos chamasse atributo
function dizerNome() {
    console.log("Jonatas");
}

dizerNome();

// Tipo de função que nao tem retorno, quando utilizada com objetos chamasse metodo
function multiplicarPorDois(num) {
    return num * 2;
}

// tipo de saida via console que exibe chamando diretamente a função e passando o parametro.
console.log(multiplicarPorDois(5));

// atribuição de uma funcao a uma variavel para usar repetidas vezes
let resultado = multiplicarPorDois(5);

// saida via console simplificada usando variavel
console.log(resultado);
