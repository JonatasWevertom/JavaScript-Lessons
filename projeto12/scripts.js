function Endereco(rua, cidade, cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
};

const endereco1 = new Endereco('Av. Bernardo vieira', 'Natal', '55555-555');
const endereco2 = new Endereco('Av. Bernardo vieira', 'Natal', '55555-555');

function saoIguais(endereco1, endereco2) {
    // comparar se as propriedades são iguais

    for (let chave in endereco1) {
        return endereco1[chave] === endereco2[chave];
    };
};

function temEnderecoMemoriaIguais(endereco1, endereco2) {
    // comparar se a referencia do objeto aponta para o mesmo local na memória 

    return endereco1 === endereco2;
};

console.log(saoIguais(endereco1, endereco2));
console.log(temEnderecoMemoriaIguais(endereco1, endereco2));
