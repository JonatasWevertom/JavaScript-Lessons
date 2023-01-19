const mouse = {
    cor: 'red',
    marca: 'dazz',
}

mouse.velocidade = 5000;
mouse.trocarDPI = function () {
    console.log('Mudando DPI...');
}

delete mouse.cor;
delete mouse.marca;

console.log(mouse);
