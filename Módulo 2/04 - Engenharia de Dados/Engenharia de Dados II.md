# Engenharia de Dados II

## :one: Robustez

Dado é o ouro digital, porém, um dado errado vale de nada. Portanto, um banco de dados deve ser robusto para garantir a integridade de seus dados.

Devemos garantir a integridade em diferentes vias: entre usuário e banco, entre os dados de uma mesma tabela e entre dados de diferentes tabelas.

### :arrow_right: Usuário x Banco

#### :arrow_right::arrow_right: Transações

Transações são um conjunto de uma ou mais operações enviadas a um banco de dados por vez. Esse conceito garante a integridade dos dados e que usuários não consigam realizar alterações de forma concorrente.

- Exemplo: Desejamos comprar lugares em uma peça de teatro, porém, podemos ter a concorrência de outra pessoa, que da sua casa, também está tentando comprar. As transações devem garantir que quem "chegar" primeiro ficará com o assento.

O conceito de transação traz uma sensação de execução local com isolamento e proteção contra perdas.

#### :arrow_right::arrow_right: Locking Protocol

É um conjunto de regras que garantem que, mesmo que várias pessoas executem querys ao mesmo tempo, o resultado líquido será o mesmo que teria ocorrido se as mesmas tivessem sido executadas em fila.

O lock irá garantir que o objeto consultado não possa ser acessado por meio de outras transações.

### :arrow_right: Entre entidades

Para garantir a integridade dos dados, seja entre os dados de uma mesma tabela ou entre dados de tabelas diferentes, é possível estabelecer diversos tipos de restrições: restrições de chave, de relacionamento e gerais.

#### :arrow_right::arrow_right: Restrições de Chave

Um subconjunto mínimo de campos de uma relação que identifica um registro como único. Sendo assim, não é possível que existam duas linhas em uma tabela identicas em todas as colunas.

Conhecemos essa restrição como chaves primárias (ou em inglês, *Primary Key - PK*).

Portanto, dois registros podem ter todos os seus atributos iguais, menos aqueles classificados como chaves primárias, garantindo a unicidade dos dados.

Utilizar chaves primárias permite a criação de consultas mais performáticas, uma vez que cria uma espécie de índice na tabela.

#### :arrow_right::arrow_right: Restrição de Relacionamento

Quando falamos de manter a integridade de dados entre tabelas diferentes utilizamos as chaves estrangeiras (ou em inglês, *Foreign Key - FK*). Utilizamos elas para referenciar um registro de uma tabela dentro de outra.

Exemplo: No sistema de uma universidade possuímos a tabela ALUNOS que traz todas as informações pessoais de um aluno, como nome completo, data de nascimento, cpf etc. Também possuímos a tabela CURSOS que traz todos os cursos existentes na universidade, como engenharia, direito, medicina, computação etc. Como fazemos para relacionar um aluno ao curso no qual ele está matriculado?

- Conhecendo já o conceito de chaves primárias e sabendo da importância delas, ao projetar a tabela CURSOS provavelmente inserimos uma coluna ID como chave primária que serve de identificador único para cada curso.

- Se criarmos uma coluna CURSO_ID na tabela ALUNOS, podemos conectar essa coluna com a ID de CURSO. Para criar essa conexão definimos a coluna CURSO_ID em ALUNO como chave estrangeira de ID em CURSO.

Portanto, podemos entender a restrição de relacionamento como a relação entre as chaves primária e estrangeira de diferentes tabelas.

Não é obrigatório que o nome das colunas sejam os mesmos, mas seu conteúdo deve ser identico (em TIPO e VALOR).

Uma mesma tabela pode possuir diversas chaves estrangeiras que referenciam várias outras tabelas.

Essa relação facilita o uso de operações de junção.

## :two: Formas Normais

São uma série de regras que garantem que um banco de dados foi bem projetado. Tem como objetivo garantir informação sem redundância e eficiência na obtenção dos dados.

Existem várias formas normais, porém, nem todos os bancos possuem recursos para implementar todas elas e muitos autores entendem que conhecer as três primeiras já é o suficiente para a construção de bases de dados otimizadas.

Normalizar um banco é o ato de aplicar as formas normais para que o banco tenha as melhores práticas de estrutura.

[Link de referência](https://www.hashtagtreinamentos.com/o-que-sao-formas-normais-em-bancos-de-dados-sql?gad_source=1&gclid=CjwKCAjw7s20BhBFEiwABVIMrSWyZ8NQ8K1fY0h4dWhXua2bSDC8gHJqTmUnefc2ZrSzp2H-8W0KFhoCoaYQAvD_BwE)

### :arrow_right: 1ª Forma Normal (1FN)

"*Cada linha é uma informação. Não podem existir grupos repetidos ou atributos com mais de um valor.*"

Ou seja, devemos utilizar chaves primárias para garantir a unicidade dos registros e caso um mesmo atributo possa assumir vários valores ao mesmo tempo (Atributos multivalorados), esses dados devem ser dispostos em uma nova tabela e deve-se utilizar os conceitos de chave primária e estrangeira para relacionar as duas tabelas.

O professor utilizou o seguinte exemplo: seja uma tabela de alunos da USP/Esalq contendo todas as suas informações pessoais. Um mesmo aluno pode conter vários telefones (residêncial, celular, trabalho etc.).

- Nessa situação, qual a melhor coisa a se fazer?

  - Colocar todos os telefones dentro da tabela de ALUNOS na coluna TELEFONE separados por ponto-e-vírgula?
  - Criar uma nova tabela TELEFONES e utilizar como chave estrangeira a chave primária de ALUNOS, assim sendo possível colocar cada um dos telefones do aluno em uma linha diferente e resgatar todos os números do mesmo com grande facilidade.

A 1ª Forma Normal indica que a segunda opção é o caminho mais adequado.

A 1FN também fala da remoção de atributos compostos. Um bom exemplos nesse caso é o campo de endereço de um aluno, que geralmente é composto da rua, bairro, cidade, estado e CEP onde reside. É comum ver casos onde essas informações são inseridas em uma mesma coluna, porém, é necessário que elas sejam quebradas em diferentes colunas, facilitando sua manipulação e para remover redundâncias.

### :arrow_right: 2ª Forma Normal (2FN)

"*Todas as colunas que não participam da chave primária são dependentes de todas as colunas que compõe a chave primária.*"

O professor utilizou o seguinte exemplo: temos uma tabela ALUNOS_CURSOS que traz informações relacionadas a um aluno, além da descrição do curso que ele participa. Sua chave estrangeira nesse caso é o CPF do aluno.

- Pensando na segunda forma normal, faz sentido as informações de curso estarem na mesma tabela, sendo que a chave primária diz respeito ao aluno e ALUNO e CURSO são entidades diferentes? A resposta é **NÃO**.

  - Nesse caso, um modelo de dados bem projetado colocaria as informações de curso em uma tabela a parte e inseriria um campo CURSO_ID em ALUNO contendo uma chave estrangeira que referencia a chave primária do curso no qual aquela pessoa está matriculada na tabela CURSO;

  - Caso uma pessoa pudesse se matricular em mais de um curso, seria necessária então uma terceira tabela intermediária que relacionaria ALUNOS e seus CURSOS.
  
  - Qual dos caminhos seguir vai depender da regra de negócio de cada organização.

O importante aqui é entender que um bom modelo agrupa dados de um mesmo escopo em cada uma das tabelas e caso seja necessário relacionar esses escopos, utilizamos chaves primárias e estrangeiras.

### :arrow_right: 3ª Forma Normal (3FN)
