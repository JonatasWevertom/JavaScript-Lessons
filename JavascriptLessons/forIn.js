const pessoa = {
    nome: "Jonatas",
    idade: 27,
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

let cores = ["Vermelho", "Azul", "Verde"];

for (let indice in cores) {
    console.log(indice, cores[indice]);
}
