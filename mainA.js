###### 2ª Lista de Lista de exercícios Lógica, fundamentos de programação e Orientação a Objetos ###### 



1 - 

let numeroInteiro = 2.97;
console.log(numeroInteiro)
2.97
console.log(typeof numeroInteiro)
number.

//Na realidade seria mais viavel ser declarada como float.

--------------------------------------------------------------------------------

2 - 

function lerCaractere(event) {
  const charCode = event.keyCode || event.which;
  const caractere = String.fromCharCode(charCode);
  console.log('Caractere escolhido:', caractere);
}

document.addEventListener('keypress', lerCaractere);

/*No Js não há uma função nativa equivalente ao getche() ou getch() para ler um caractere diretamente do terminal
sem a necessidade de pressionar a tecla Enter. Mas o comportamento mais semelhante se chama ( keypress ) diretamente no navegador.*/

--------------------------------------------------------------------------------

4 - 

//Deste modo acho o jeito mais tranquilo de formatar a data.

function formatarData(data) {
  const partes = data.split('/');
  const dia = partes[0];
  const mes = partes[1];
  const ano = partes[2];
  const dataFormatada = `${ano}/${mes}/${dia}`;
  return dataFormatada;
}

// Função principal para ler e exibir a data formatada

const data = prompt('Digite uma data no formato dd/mm/aaaa:');

  // Formata a data no novo formato
  const dataFormatada = formatarData(data);

  // Exibe a data formatada
  console.log('Data formatada:', dataFormatada);
}

// Chama a função principal
lerEExibirDataFormatada();


--------------------------------------------------------------------------------


5 - 

// Função para calcular a décima parte do número.

function calcularDecimaParte(numero) {
  return numero / 10;
}

// Função principal para ler e exibir o resultado
function lerENumeroEDecimaParte() {
  // Lê o número inteiro do usuário
  const numeroInteiro = parseInt(prompt('Digite um número inteiro:'), 10);

  // Calcula a décima parte do número
  const decimaParte = calcularDecimaParte(numeroInteiro);

  // Exibe o resultado
  console.log('A décima parte do número é:', decimaParte);
}

// Chama a função principal
lerENumeroEDecimaParte();

--------------------------------------------------------------------------------

6 - 

// Função para calcular a soma
function calcularSoma(numero1, numero2) {
  return numero1 + numero2;
}

// Função para calcular a subtração
function calcularSubtracao(numero1, numero2) {
  return numero1 - numero2;
}

// Função para calcular a multiplicação
function calcularMultiplicacao(numero1, numero2) {
  return numero1 * numero2;
}

// Função para calcular a divisão
function calcularDivisao(numero1, numero2) {
  return numero1 / numero2;
}

--------------------------------------------------------------------------------

7 - 

// Função para converter temperatura de Celsius para Fahrenheit

function celsiusParaFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Função para converter temperatura de Celsius para Kelvin

function celsiusParaKelvin(celsius) {
  return celsius + 273.15;
}

// Função principal para ler a temperatura e realizar as conversões

function lerETransformarTemperatura() {

    const temperaturaCelsius = parseFloat(prompt('Digite a temperatura em graus Celsius:'));

  // Converte a temperatura para Fahrenheit
  const temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);

  // Converte a temperatura para Kelvin
  const temperaturaKelvin = celsiusParaKelvin(temperaturaCelsius);

  // Exibe os resultados
  console.log('Temperatura em Fahrenheit:', temperaturaFahrenheit);
  console.log('Temperatura em Kelvin:', temperaturaKelvin);
}

// Chama a função principal
lerETransformarTemperatura();

--------------------------------------------------------------------------------

8 - 

// Função para converter um ângulo em graus para radianos
function grausParaRadianos(anguloGraus) {
  return anguloGraus * (Math.PI / 180);
}

// Função principal para ler o ângulo e realizar a conversão
function lerEConverterAngulo() {
  // Lê o ângulo em graus do usuário
  const anguloGraus = parseFloat(prompt('Digite o ângulo em graus:'));

  // Converte o ângulo para radianos
  const anguloRadianos = grausParaRadianos(anguloGraus);

  // Exibe o resultado
  console.log('Ângulo em radianos:', anguloRadianos);
}

// Chama a função principal
lerEConverterAngulo();


--------------------------------------------------------------------------------

9 - 

function lerNumeroInteiro() {
  const numero = prompt("Digite um número inteiro:");
  return parseInt(numero);
}

function calcularAntecessorSucessor(numero) {
  const antecessor = numero - 1;  // Testei também com número-- (costumo usar mais este método)
  const sucessor = numero + 1;  //testei também com número++ (costumo usar mais este método)
  return { antecessor, sucessor };
}

function main() {
  const numero = lerNumeroInteiro();

  if (!isNaN(numero)) {
    const resultado = calcularAntecessorSucessor(numero);
    console.log(`O antecessor de ${numero} é ${resultado.antecessor}`);
    console.log(`O sucessor de ${numero} é ${resultado.sucessor}`);
  } else {
    console.log("Você digitou um valor inválido. Por favor, digite um número inteiro.");
  }
}

main();


--------------------------------------------------------------------------------

11 - 

// Função para ler o tamanho dos lados do retângulo
function lerLadosRetangulo() {
  const comprimento = parseFloat(prompt("Digite o comprimento do retângulo:"));
  const largura = parseFloat(prompt("Digite a largura do retângulo:"));

  if (isNaN(comprimento) || isNaN(largura) || comprimento <= 0 || largura <= 0) {
    console.log("Você digitou valores inválidos. Por favor, digite números positivos.");
    return null; //Este if verifica se o value do comprimento, largura tem o valor igual ou menor que 0, caso seja verdadeiro, será solicitado uma nova digitaçao de valores. 
  }

  return { comprimento, largura };
}

// Função para calcular a área do retângulo
function calcularAreaRetangulo(comprimento, largura) {
  return comprimento * largura;
}

// Função principal que lê os lados, calcula a área e exibe o resultado
function main() {
  const lados = lerLadosRetangulo();

  if (lados !== null) {
    const area = calcularAreaRetangulo(lados.comprimento, lados.largura);
    console.log(`A área do retângulo é: ${area.toFixed(2)}`);
  }
}

// Executa o programa
main();
 
--------------------------------------------------------------------------------

12 -

/* A fórmula usada para calcular um triângulo retângulo:

Área = (base * altura) / 2

*/

// Função para ler a base e a altura do triângulo retângulo
function lerBaseAlturaTriangulo() {
  const base = parseFloat(prompt("Digite o valor da base do triângulo:"));
  const altura = parseFloat(prompt("Digite o valor da altura do triângulo:"));

  if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
    console.log("Você digitou valores inválidos. Por favor, digite números positivos.");
    return null;
  } //Este if é para comparação se a base/altura é menor ou igual a zero, caso seja true, ele ira dar um console.log informando ao usuário que digite um valor real maior que 0.

  return { base, altura };
}

// Função para calcular a área do triângulo retângulo
function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Função principal que lê a base e a altura, calcula a área e exibe o resultado
function main() {
  const triangulo = lerBaseAlturaTriangulo();

  if (triangulo !== null) {
    const area = calcularAreaTriangulo(triangulo.base, triangulo.altura);
    console.log(`A área do triângulo retângulo é: ${area.toFixed(2)}`);
  }
}

// Executa o programa
main();



--------------------------------------------------------------------------------

14 - 

function lerNotas() {
  const notas = []; //Array onde as notas serao adicionadas.

  for (let i = 1; i <= 4; i++) {
    const nota = parseFloat(prompt(`Digite a nota ${i}:`));
    
    if (isNaN(nota)) {
      console.log(`Você digitou uma nota inválida. Por favor, digite um número.`);
      return null;
    }
    
    notas.push(nota); // O método push é utilizado para adicionar ao array notas o value digitado pelo aluno na const nota.
  }

  return notas;
}

//Function para verificacao se o comprimento do array está correto em 4 notas.
function calcularMedia(notas) {
  if (!notas || notas.length !== 4) {
    return null;
  }

  const somaNotas = notas.reduce((acc, nota) => acc + nota, 0);
  return somaNotas / notas.length;
}

// Função principal que lê as notas, calcula a média e exibe o resultado
function main() {
  const notas = lerNotas();

  if (notas) {
    const media = calcularMedia(notas);

    if (media !== null) {
      console.log(`A média obtida pelo aluno é: ${media.toFixed(2)}`);
    } else {
      console.log("Erro ao calcular a média. Por favor, insira exatamente quatro notas.");
    }
  }
}

main(); // Chama a fuction main e executa o app, fazendo o calculo das notas.

--------------------------------------------------------------------------------


21 - 


function converterParaMinuscula(letra) {
  return letra.toLowerCase(); // Este método retorna o valor da string que foi chamada convertido para minúsculo.
}

// Função principal que lê a letra, converte para minúscula e exibe o resultado
function main() {
  const letraMaiuscula = prompt("Digite uma letra maiúscula:");

  if (letraMaiuscula.length === 1 && /^[A-Z]$/.test(letraMaiuscula)) {
    const letraMinuscula = converterParaMinuscula(letraMaiuscula); //Caso nao seja digitado uma letra maiuscula, cairá no else.
    console.log(`A letra minúscula correspondente é: ${letraMinuscula}`);
  } else {
    console.log("Por favor, digite exatamente uma letra maiúscula.");
  }
}

// Executa o programa
main();






