// JavaScript - Objeto Endereço

// Criar um objeto endereço que contem:
// Rua
// Cidade
// Cep
// ExibirEndereço(endereco)

let endereco = {
    rua: 'Av. Prudente de Morais',
    cidade: 'Natal',
    cep: '55555-555',
};

function exibirEndereco(valor) {
    // console.log(`${endereco.rua}, ${endereco.cidade}, ${endereco.cep}`);

    for (let chave in valor) {
        console.log(`${chave}: ${valor[chave]}`);
    };
};

exibirEndereco(endereco);
