//Criar função somar que retorna soma de todos os multiplos de 3 e 5 em um intervalo.

function somar(limite) {
    let mult3 = 0;
    let mult5 = 0;
    const tres = 3;
    const cinco = 5;

    if (limite % tres === 0 || limite % cinco === 0) {
        for (let i = 0; i <= limite; i++) {
            if (i % tres === 0) {
                mult3 += i;
            }
            if (i % cinco === 0) {
                mult5 += i;
            };
        };

        console.log(mult3 + mult5);
    };
};

somar(15);
