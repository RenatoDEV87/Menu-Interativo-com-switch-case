# Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

# Exercício 04 – Menu Interativo com switch-case

---

## 📑 Índice

1. [📖 Descrição](#descrição)  
2. [💻 Código](#código)  
3. [🚀 Como Executar](#como-executar)   
4. [🛠️ Tecnologias Utilizadas](#tecnologias-utilizadas)  
5. [📜 Licença](#licença)  

---

## Descrição

Este programa em JavaScript apresenta um **menu interativo no console**, onde o usuário pode escolher entre três opções:

1. Ver uma mensagem de saudação  
2. Calcular a soma de dois números  
3. Sair do programa  

A lógica é implementada utilizando a estrutura de controle `switch-case`, ideal para iniciantes aprenderem como lidar com múltiplas opções de entrada.

---

## Código

Abaixo está o código-fonte do programa:

```JavaScript
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

```

---

## Como Executar

🛠️ Instruções para executar localmente

1. Instale o Node.js se ainda não tiver: https://nodejs.org

2. Abra o terminal e instale o prompt-sync (usado para entrada do usuário):

```
npm install prompt-sync
```

3. Salve o arquivo como `exercicio_04.js` e execute com:

```
node exercicio_04.js
```

---

## Tecnologias Utilizadas

- Linguagem: JavaScript
- Node.Js

---

## Licença

Este projeto está licenciado sob a MIT License.


