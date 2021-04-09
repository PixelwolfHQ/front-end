# λ Programação funcional - Parte 1 - Os conceitos

### O que é

Programação funcional (FP) é um paradigma de desenvolvimento de software, que tem como princípios básicos alguns pontos, são eles: Funções puras, evitar estado compartilhado, imutabilidade e evitar efeitos colaterais.
Programação funcional é declarativa e o estado flui através da composição das suas funções puras, diferente de POO onde o estado geralmente é compartilhado.

### Origem

Programação funcional é baseada no cálculo lambda, trabalho do matemático e teórico da computação Alonzo Church, você pode ler mais sobre cálculo lambda [aqui](http://www.inf.ufsc.br/~j.barreto/PF/CalLambda.htm)

### Funções puras

A definição de uma função pura é muito simples, ela precisa cobrir dois pontos, são eles:

- Dado um mesmo argumento, ela deve sempre ter o mesmo retorno;
- Não tem efeitos colaterais, ou seja, não sofre interferência.

### Side effects

Side effect ou efeito colateral, é qualquer alteração no estado de uma aplicação, que pode ser observado de fora da função e que é diferente do seu valor de retorno. Exemplos de side effects são:

- Alterar uma variável de escopo global e/ou fora do escopo da sua função;
- Renderizar algo na tela;
- Requisições HTTP.

É claro que em algum momento nós teremos que fazer algo (ou tudo) desta lista, sem isso, aplicações não existem, mas é importante entender esses pontos nos alertam pra isolar esses casos do restante da aplicação, isso vai fazer o processo de desenvolvimento e testes mais fácil.

### Imutabilidade

Objetos imutáveis, são aqueles que, depois de definidos, não podem sofrer alteração nos seus valores.

Esse é um conceito de extrema importância na programação funcional, pois sem isso, o fluxo de dados na aplicação pode se perder facilmente.

Outro ponto importante para quem trabalha com javascript é não confundir o uso de `const` com imutabilidade, utilizar `const` não garante que um objeto não pode ter seu valor alterado, garante apenas que ele não pode ser atribuído novamente.
