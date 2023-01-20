// Array de objetos de faixa de preço para ser usado em algum site de E-Comerce

let faixas = [
    { tooltip: 'até R$700', minimo: 0, maximo: 700 },
    { tooltip: 'de R$700 até R$1000', minimo: 700, maximo: 1000 },
    { tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 999999 },
];

// ou faz
// Factory Function
function criarFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    };
};

let faixas2 = [
    criarFaixaPreco('até R$700', 1, 700),
    criarFaixaPreco('de R$700 até R$1000', 700, 1000),
    criarFaixaPreco('R$1000 ou mais', 1000, 999999),
];

// Ou faz
// Constructor Function
function CriarFaixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
};

let faixas3 = [
    new CriarFaixaPreco('até R$700', 1, 700),
    new CriarFaixaPreco('de R$700 até R$1000', 700, 1000),
    new CriarFaixaPreco('R$1000 ou mais', 1000, 999999),
];

console.log(faixas);
console.log(faixas2);
console.log(faixas3);
