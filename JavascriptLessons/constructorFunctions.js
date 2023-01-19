function criarCelular(marca, tamanhoTela, capacidadeBateria) {
    return {
        marca,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...");
        },
    };
}

function Celular(marca, tamanhoTela, capacidadeBateria) {
    (this.marca = marca),
        (this.tamanhoTela = tamanhoTela),
        (this.capacidadeBateria = capacidadeBateria),
        (this.ligar = function () {
            console.log("Fazendo Ligação...");
        });
}

const celular1 = new Celular("Apple", 7, 6000);

console.log(celular1);
