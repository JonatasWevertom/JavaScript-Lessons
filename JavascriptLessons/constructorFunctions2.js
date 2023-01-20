// Criar um objeto postagem com construtor
// Titulo, mensagem, autor, visualizaçoes, comentarios[], estaAoVivo

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
};

const postagem1 = new Postagem('titulo', 'mensagem', 'autor');

console.log(postagem1);
