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
    mensagem: 'mensagem',
    autor: 'autor',
    visualizacoes: 'visualizacoes',
    comentarios: [
        { autor: 'autor', mensagem: 'mensagem' },
        { autor: 'autor', mensagem: 'mensagem' },
    ],
    estaAoVivo: 'estaAoVivo',
};

console.log(postagem);
