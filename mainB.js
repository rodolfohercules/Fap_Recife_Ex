###### 2ª Lista de Lista de exercícios Lógica, fundamentos de programação e Orientação a Objetos ###### 

25 - 

// Função para ler o salário-base do funcionário
function lerSalarioBase() {
    const salarioBase = parseFloat(prompt("Digite o salário-base do funcionário:"));
  
    if (isNaN(salarioBase) || salarioBase < 0) {
      console.log("Você digitou um valor inválido para o salário-base. Por favor, digite um número positivo.");
      return null;
    } 
  
    /* 
  A função lerSalarioBase() é responsável por ler o salário-base do funcionário usando prompt(). é verificado se o valor digitado é um número válido e maior ou igual a zero. Se não, será exibido uma mensagem de erro e retorna null.
  
  */
  
    return salarioBase;
  }
  
  // Função para calcular o salário a receber
  function calcularSalarioReceber(salarioBase) {
    const gratificacao = salarioBase * 0.05; // 5% de gratificação
    const imposto = salarioBase * 0.07; // 7% de imposto
    const salarioReceber = salarioBase + gratificacao - imposto;
    return salarioReceber;
  }
  
  // Função principal que lê o salário-base, calcula o salário a receber e exibe o resultado
  function main() {
    const salarioBase = lerSalarioBase();
  
    if (salarioBase !== null) {
      const salarioReceber = calcularSalarioReceber(salarioBase);
      console.log(`O salário a receber do funcionário é: R$ ${salarioReceber.toFixed(2)}`);
    }
  }
  
  // Executa o programa
  main();



  --------------------------------------------------------------------------------

  27 - 

  /*Função para gerar valores aleatórios inteiros, o Math é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. o Math.floor() ele é responsável para fazer o arrendodamento para o número inteiro mais próximo. */

function gerarValoresAleatorios() {
    const valor1 = Math.floor(Math.random() * 100); // Gera um número inteiro entre 0 e 99
    const valor2 = Math.floor(Math.random() * 100); // Gera um número inteiro entre 0 e 99
    const valor3 = Math.floor(Math.random() * 100); // Gera um número inteiro entre 0 e 99
  
    return [valor1, valor2, valor3];
  }
  
  // Função principal que gera os valores e exibe o resultado
  function main() {
    const valoresAleatorios = gerarValoresAleatorios();
    console.log("Valores aleatórios gerados:", valoresAleatorios);
  }
  
  // Executa o programa
  main();
  
  --------------------------------------------------------------------------------

  28 - 

  // Função para ler o total de horas normais e horas extras trabalhadas em um ano
function lerHorasTrabalhadas() {
    const horasNormais = parseFloat(prompt("Digite o total de horas normais trabalhadas em um ano:"));
    const horasExtras = parseFloat(prompt("Digite o total de horas extras trabalhadas em um ano:"));
  
    if (isNaN(horasNormais) || isNaN(horasExtras) || horasNormais < 0 || horasExtras < 0) {
      console.log("Você digitou valores inválidos para as horas. Por favor, digite números positivos.");
      return null;
    }
  
    //Caso seja digitado um número menor que zero, será imprimido na no console uma mensagem de erro, informando ao usuário que digite um número maior que zero.
  
    return { horasNormais, horasExtras };
  }
  
  // Função para calcular o salário anual do trabalhador
  function calcularSalarioAnual(horasNormais, horasExtras) {
    const salarioHoraNormal = 10; // R$ 10,00 por hora normal
    const salarioHoraExtra = 15; // R$ 15,00 por hora extra
    const salarioAnual = (horasNormais * salarioHoraNormal + horasExtras * salarioHoraExtra) * 12;
    return salarioAnual; // Aqui é calculado suas horas normais de trabalho x o salário base mais suas horas extras x 12 meses de trabalho.
  }
   
  // Função principal que lê as horas trabalhadas, calcula o salário anual e exibe o resultado
  function main() {
    const horasTrabalhadas = lerHorasTrabalhadas();
  
    if (horasTrabalhadas !== null) {
      const salarioAnual = calcularSalarioAnual(horasTrabalhadas.horasNormais, horasTrabalhadas.horasExtras);
      console.log(`O salário anual do trabalhador é: R$ ${salarioAnual.toFixed(2)}`);
    }
  }
  
  // Executa o programa
  main();

  
  --------------------------------------------------------------------------------

  32 - 

  // Função para determinar os 100 primeiros múltiplos de 3
function calcularMultiplosDeTres() {
    const multiplos = []; // É iniciado um array vazio, para que seja adicionado usando o método push().
    let contador = 1; // Contador para ser feito um incrimento no app.
  
    while (multiplos.length < 100) { //Enquanto for verdadeiro o comprimento menor que 100 [value], continue...
      const numero = contador * 3;
      multiplos.push(numero); //adicionando ao array multiplos.
      contador++; //incrementando o contador.
    }
  
    return multiplos;
  }
  
  // Função principal que calcula os múltiplos e exibe o resultado
  function main() {
    const multiplosDeTres = calcularMultiplosDeTres();
    console.log("Os 100 primeiros múltiplos de 3 são:");
    console.log(multiplosDeTres.join(", ")); // O Método join, junta todos os elementos de um array, em uma string e retorna esta string. No exemplo separando os número pela ",", caso deixe o " " vazio, será separado somente pelo espaço.
  }
  
  // Executa o programa
  main();
  

  --------------------------------------------------------------------------------



