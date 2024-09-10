function pertenceAFibonacci(num) {
    let a = 0, b = 1;
    
    if (num === 0 || num === 1) return true;  // 0 e 1 pertencem à sequência
    
    let fib = a + b;
    
    while (fib <= num) {
        if (fib === num) return true;  // Encontrou o número na sequência
        a = b;
        b = fib;
        fib = a + b;
    }
    
    return false;  // Número não pertence à sequência
}

// Teste
const numero = 21;  // Troque por qualquer número para verificar
if (pertenceAFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
