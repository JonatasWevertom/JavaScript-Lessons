// Objeto Postagem de um Blog

//Porpriedades:
/*
titulo
mensagem
autor
visualizaçoes
comentarios
    (autor, mensagem)
estaAoVivo
*/

let postagem = {
    titulo: 'titulo',
    menagem: 'mensagem',
    autor: 'autor',
    vizualizacoes: 'vizualizacoes',
    comentarios: [
        { autor: 'autor', mensagem: 'mensagem' },
        { autor: 'autor', mensagem: 'mensagem' },
    ],
    estaAoVivo: 'estaAoVivo',
};

console.log(postagem);
