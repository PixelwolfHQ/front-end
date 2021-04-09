# O problema

### O famoso código Hadouken

![Baixo, frente + soco = Hadouken](hadouken.jpg)

18 horas em plena sexta-feira, você doido para jogar um game e se depara com um código desse.
A vontade é de sair gritando, mas você como uma ótimo profissional, vai refatorar o código e deixar ele brilhando o/ o/

Eis que eu te apresento o Object Calisthenics

![](https://media.giphy.com/media/1AdZgkFXp5Ybrj6dZ1/giphy.gif)

# O que é Object Calisthenics?

É um conjunto de boas práticas e regras criado pelos desenvolvedores Java, mas que servem para as demais linguagens.
Ao todo são 9 regras, vou explicar as mais simples e eficientes.

Essas regras vão ajudar na manutenção do código, nos testes e até mesmo na compreensão.

# Regras

> OBS: A linguagem utilizada é JavaScript, mas nada impede que você aplique os conceitos em outras linguagens.

## Um nível de identação por método

```javascript
function displayPyramid(numberOfLine) {
  for (let index = 0; index < numberOfLine; index++) {
    let output = "";
    const limit = numberOfLine - index;
    for (let secondIndex = 1; secondIndex < limit; secondIndex++) {
      output += " ";
    }
    for (let thirdIndex = 1; thirdIndex <= 2 * index + 1; thirdIndex++) {
      output += "*";
    }
    console.log(output);
  }
}
```

### Podemos extrair os dois laços for por duas funções separadas.

```javascript
function getBlankSpace(numberOfLine, currentLineIndex) {
  let output = "";
  const limit = numberOfLine - currentLineIndex;
  for (let index = 1; index < limit; index++) {
    output += " ";
  }
  return output;
}

function getFilledPyramid(currentLineIndex) {
  let output = "";
  for (let index = 1; index <= 2 * currentLineIndex + 1; index++) {
    output += "*";
  }
  return output;
}

function displayPyramid(numberOfLine) {
  for (let index = 0; index < numberOfLine; index++) {
    let output = "";
    output += getBlankSpace(numberOfLine, index);
    output += getFilledPyramid(index);
    console.log(output);
  }
}
```

## Não use ELSE

```javascript
function printSeat(ticketCode) {
  if(ticketCode.startsWith("A") || ticketCode.startsWith("B") {
    printVipSeat();
  } else {
    printBasicSeat();
  }
}
```

### Faça um retorno antecipado

```javascript
function printSeat(ticketCode) {
  if(ticketCode.startsWith("A") || ticketCode.startsWith("B") {
    return printVipSeat();
  }
  return printBasicSeat();
}
```

### Benefícios:

- Reduz a complexidade e aumenta a legibilidade do fluxo lógico
- Reduz a duplicação de validações mais complexas, te forçando a criar métodos para determinada validação
- Te força a pensar em um código mais limpo

## Não use abreviações

```javascript
let temp = 1;
const n = 5;
for (let i = 1; i <= n; i++) {
  temp *= i;
  console.log(`${i}! = ${temp}`);
}
```

### Deixe seu código mais claro, uma mudança simples dessa evita que o seu colega perca horas tentando adivinha o que cada variável faz

```javascript
let temporary = 1;
const count = 5;
for (let index = 1; index <= count; index++) {
  temporary *= index;
  console.log(`${index}! = ${temporary}`);
}
```

### Benefícios:

- Revelar a intenção da variável

## Referências

[Clean Code — Object Calisthenics in Javascript](https://medium.com/@davidsen/clean-code-object-calisthenics-f6f4dec07c8b)

[Desenvolva um código melhor com Object Calisthenics](https://imasters.com.br/desenvolvimento/desenvolva-um-codigo-melhor-com-object-calisthenics)

[Writing cleaner code with Object Calisthenics](https://dev.to/pbouillon/writing-cleaner-code-with-object-calisthenics-1ea0)

[Object Calisthenics](https://williamdurand.fr/2013/06/03/object-calisthenics/)
