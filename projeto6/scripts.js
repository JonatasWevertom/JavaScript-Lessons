//Criar um método para ler propriedades de um objeto
//exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor',
};

function exibirPropriedades(filme) {
    for (key in filme) {
        if (typeof (filme[key]) === 'string') {
            console.log(key + ":", filme[key]);
        };
    };
};

exibirPropriedades(filme);
