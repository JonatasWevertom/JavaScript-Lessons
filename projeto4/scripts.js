// Velocidade máxima de até 70
// a cada 5km acima do limite você ganha 1 ponto
// Math.Floor()
// caso pontos maior que 12 - > "Carteira Suspendida"

function verificarVelocidade(velocidade) {
    const velMax = 70;
    const kmPorPonto = 5;
    const pontoMax = 12;

    if (velocidade > velMax) {
        const pontos = Math.floor((velocidade - velMax) / kmPorPonto);

        if (pontos >= pontoMax) {
            console.log("Carteira Suspensa");
        }
        else {
            console.log('Pontos por velocidade excedida:', pontos);
        }
    }
    else {
        console.log("Ok");
    };
};

verificarVelocidade(130);
