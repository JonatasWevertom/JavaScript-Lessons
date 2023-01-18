// Exercicio Nota Escolar
// Obter a média a partir de um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const notas = [70, 70, 80];
// 75.33

function calcularMedia(notas) {
    let soma = 0;

    for (let nota of notas) {
        soma += nota;
    };

    return (soma / notas.length);
};

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    if (media < 59) return 'F';
    if (media >= 60 && media < 70) return 'D';
    if (media >= 70 && media < 80) return 'C';
    if (media >= 80 && media < 90) return 'B';
    if (media >= 90 && media <= 100) return 'A';
};

console.log(mediaDoAluno(notas));
