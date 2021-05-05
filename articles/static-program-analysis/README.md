# Análise estática de código

Em primeiro momento isso vai parecer algo de sete cabeças, mas na verdade é bem mais simples do que parece.

[adicionar imagem sete cabeças]

## O que é isso?

Imagine que você tenha esses padrões de desenvolvimento:

- Strings devem ser declaradas com aspas duplas
- Não deve conter ponto e vírgula
- Identação do código está sendo feita com espaços
- Tamanho de identação é de 4 espaços

E você já cansou de pegar códigos que estavam fora desse padrão, bom, dado essa introdução lhe apresento a anélise estática do código.

Existem três tipos de verificações, são elas:

## Verificação por estilo

R: Considera elementos como identação, espaços e tabs, convenção de nomes, número de parâmetros, alinhamento na vertical, formato e presença de comentários, dentre outros.
Ferramenta: Checkstyle

-> Verificação por boas práticas
R: Aplica uma gama de regras para verificar se práticas corretas estão sendo realizadas, como evitar duplicação de código, garantir o correto uso de encoding, implementação do método clone(), tamanho de métodos e classes, tamanho de parâmetros, uso do padrão Singleton, criação desnecessária de variáveis locais e muitas outras.
Ferramenta: PMD

-> Verificação por bugs
R: Trata de encontrar erros no sistema. Isto é importante para antecipar a identificação de problemas no software (até antes mesmo de sua execução pelo cliente)
Ferramenta: Firebug

Observação sobre as ferramentas:
A verificação das ferramentas PMD e Checkstyle é realizada sobre código-fonte não compilado (arquivo com extensão .java), mas a verificação com Firebug analisa bytecodes (arquivos compilados do Java, com extensão .class). Desta forma, para análises envolvendo Firebug, uma compilação prévia é necessária. Isso é tratado pelo seu respectivo plugin, de forma que se faz transparente ao desenvolvedor.

Extensões recomendadas

- ESLint
- Prettier
