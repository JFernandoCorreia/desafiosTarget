const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const total = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);

for (let estado in faturamentoEstados) {
    const percentual = (faturamentoEstados[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
