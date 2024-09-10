const faturamentoMensal = require('./dados.json');  // Supondo que o arquivo JSON esteja na mesma pasta

function calcularFaturamento(faturamento) {
    const valoresValidos = faturamento.filter(d => d.valor > 0).map(d => d.valor);
    
    const menorValor = Math.min(...valoresValidos);
    const maiorValor = Math.max(...valoresValidos);
    
    const mediaMensal = valoresValidos.reduce((acc, val) => acc + val, 0) / valoresValidos.length;
    
    const diasAcimaDaMedia = valoresValidos.filter(valor => valor > mediaMensal).length;
    
    return { menorValor, maiorValor, diasAcimaDaMedia };
}

// Teste
const resultado = calcularFaturamento(faturamentoMensal);
console.log('Menor valor de faturamento:', resultado.menorValor);
console.log('Maior valor de faturamento:', resultado.maiorValor);
console.log('Dias com faturamento acima da média:', resultado.diasAcimaDaMedia);
