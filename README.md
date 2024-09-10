# Desafios de Programação - Soluções

Este repositório contém as soluções para os desafios de programação solicitados, utilizando **JavaScript** e  **Node.js** . Abaixo, cada desafio está descrito e explicado.

## Índice

1. [Desafio 1: Cálculo de Soma com Laço While](#desafio-1-c%C3%A1lculo-de-soma-com-la%C3%A7o-while)
2. [Desafio 2: Sequência de Fibonacci]()
3. [Desafio 3: Análise de Faturamento Diário](#desafio-3-an%C3%A1lise-de-faturamento-di%C3%A1rio)
4. [Desafio 4: Percentual de Faturamento por Estado]()
5. [Desafio 5: Inversão de String](#desafio-5-invers%C3%A3o-de-string)

---

## Desafio 1: Cálculo de Soma com Laço While

**Descrição:** Dado o código abaixo, calcular o valor final da variável `SOMA` ao final do laço.

```
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);

```

**Resultado:** O valor final de `SOMA` é  **91** .

---

## Desafio 2: Sequência de Fibonacci

**Descrição:** Verificar se um número informado pertence à sequência de Fibonacci, que começa em 0 e 1, e o próximo valor sempre é a soma dos dois anteriores.

**Solução:**

<pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9">javascript</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-main-surface-secondary px-2 font-sans text-xs text-token-text-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copiar código</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">function pertenceAFibonacci(num) {
    let a = 0, b = 1;
  
    if (num === 0 || num === 1) return true;
  
    let fib = a + b;
  
    while (fib <= num) {
        if (fib === num) return true;
        a = b;
        b = fib;
        fib = a + b;
    }
  
    return false;
}

// Teste
const numero = 21;
console.log(pertenceAFibonacci(numero) ? `${numero} pertence à sequência de Fibonacci.` : `${numero} não pertence à sequência de Fibonacci.`);
</code></div></div></pre>

**Resultado:** Verifica se um número pertence à sequência de Fibonacci e retorna uma mensagem.

---

## Desafio 3: Análise de Faturamento Diário

**Descrição:** Dado um JSON com o faturamento diário de uma distribuidora, calcular:

* O menor valor de faturamento;
* O maior valor de faturamento;
* O número de dias em que o faturamento foi superior à média mensal.

**Solução:**

<pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9">javascript</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-main-surface-secondary px-2 font-sans text-xs text-token-text-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copiar código</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">const faturamentoMensal = require('./dados.json');

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
</code></div></div></pre>

**Resultado:** Calcula os valores mínimo, máximo e dias com faturamento acima da média.

---

## Desafio 4: Percentual de Faturamento por Estado

**Descrição:** Dado o faturamento mensal de uma distribuidora por estado, calcular o percentual de cada estado em relação ao total.

**Solução:**

<pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9">javascript</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-main-surface-secondary px-2 font-sans text-xs text-token-text-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copiar código</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">const faturamentoEstados = {
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
</code></div></div></pre>

**Resultado:** Calcula o percentual de participação de cada estado no faturamento total.

---

## Desafio 5: Inversão de String

**Descrição:** Escreva um programa que inverta os caracteres de uma string sem usar funções prontas.

**Solução:**

<pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9">javascript</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-main-surface-secondary px-2 font-sans text-xs text-token-text-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copiar código</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">function inverterString(str) {
    let invertida = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
  
    return invertida;
}

// Teste
const stringOriginal = "Exemplo de string";
console.log('String invertida:', inverterString(stringOriginal));
</code></div></div></pre>

**Resultado:** Inverte a string manualmente, sem usar funções prontas.


## Requisitos

* Node.js instalado.
* O arquivo `dados.json`   foi utilizado para solução do Desafio 3.
