const prompt = require('prompt-sync')();

// Exibe o menu de opções para o usuário
console.log("Escolha uma opção:");
console.log("1 - Ver saudação");
console.log("2 - Calcular soma de dois números");
console.log("3 - Sair");

let opcao = prompt("Digite o número da opção desejada: ");

switch (opcao) {
  case "1":
    console.log("Olá! Seja bem-vindo ao programa!");
    break;

  case "2":
    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));
    console.log(`A soma dos dois números é: ${num1 + num2}`);
    break;

  case "3":
    console.log("Saindo do programa. Até logo!");
    break;

  default:
    console.log("Opção inválida. Por favor, escolha 1, 2 ou 3.");
    break;
}
