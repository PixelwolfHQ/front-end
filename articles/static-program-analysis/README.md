- É feito na IDE
- Ajudar a encontrar os problemas mais cedo
- Verifica a qualidade do código-fonte

- Tipos de verificação

-> Verificação por estilo
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
