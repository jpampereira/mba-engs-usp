# Paradigmas de Desenvolvimento de Software I

Os paradigmas podem ser ententidos como abordagens (formas de pensar) de desenvolvimento de software. Hoje é comum que a maioria das linguagens modernas sejam multiparadigmas, isto é, implementam diversos tipos de paradigmas, de acordo com as necessidades de cada desenvolvedor. Essa pluralidade de paradigmas tornou esse tema a base de qualquer projeto de desenvolvimento, acima de outros aspectos como padrões arquiteturais e de projeto.

Apesar de serem especificadas as décadas em que cada paradigma nasceu, eles sofreram alterações ao longo do tempo.

## :one: Paradigma Imperativo (Década de 50)

- Foi um dos primeiros estilos de programação adotados, onde o foco era controlar diretamente os recursos do computador (*hardware*), quase bem próximo de linguagem de máquina.

- Exemplos:
  - Assembly;
  - Fortran.

- Eram formados por comandos sequenciais, uso de variáveis para armazenar dados e controle explícito do fluxo de execução, onde é descrito no código de forma procedural tudo o que precisa ser realizado.

- Esse paradigma é a base da programação estrruturada.

## :two: Paradigma Funcional (Década de 50)

- Baseado na teoria matemática das funções.

- Exemplos:
  - Lisp;
  - Haskel.

- A característica desse paradigma é evitar estados mutáveis e efeitos colaterais, priorizando funções puras e imutabilidade.

- Oferece vantagens em programação concorrente e processamento de dados, sendo muito utilizado em problemas de matemática e computação científica, assim como em frameworks modernos para manipulação de dados e concorrência.

## :three: Paradigma Procedural (Década de 60)

- Esse paradigma surgiu como uma evolução natural do Imperativo, ao introduzir estruturas que organizam o código em procedimentos ou sub-rotinas. Isso ajudou a tornar o código mais modular e reutilizável.

- Exemplos:
  - C;
  - Fortran;
  - COBOL;
  - Pascal.

- O código é organizado em procedimentos ou funções que podem ser chamados para realizar tarefas específicas. O programa é construído como uma sequência de chamadas a esses procedimentos, o que facilita o fluxo controlado de execução.

- Possui melhor modularidade se comparado ao Imperativo Puro, permitindo a reutilização de código e redução de redundância.

  ![Paradigma Procedural](imagens/Paradigma%20Procedural.png)

## :four: Paradigma Estruturado (Década de 60)

- Foi uma evolução do Paradigma Procedural.

- Conforme os programas se tornaram mais complexos, surgiu a necessidade de criar uma estrutura mais organizada para o código.

- Exemplos:
  - C;
  - Pascal.

- Introdução de estruturados de controle, como loops e condicionais, facilitando a manutenção e legibilidade do código.

- Esse paradigma abriu caminho para o desenvolvimento de programas mais organizados, reduzindo a codificação spaghetti, isto é, um código desorganizado e de difícil leitura.

- Antes da criação desse paradigma, era muito comum o uso do comando `go to`, que controlava a ordem de execução das linhas do programa, tornando a leitura e entendimento muito mais complicados.

## :five: Paradigma Lógico (Década de 70 e 80)

- Criado para aplicações de inteligência artificial e resolução de problemas baseados em lógica.

- Exemplos:
  - Prolog;
  - Datalog.

- Foca em declarar relações e regras de fatos que descrevem o problema, deixando para o computador a busca de soluções lógicas.

- Embora não seja amplamente utilizado para aplicações comerciais, é essencial em áreas de IA, como linguagens naturais e inferência lógica.

## :six: Paradigma Orientado a Objetos (OO) (Década de 80)

- Surgiu como resposta a necessidade de modularidade e reutilização de código para sistemas cada vez mais complexos.

- Exemplos:
  - Java;
  - C++.

- Organiza o código em "objetos" que representam entidades do mundo real ou conceitual, encapsulando dados e comportamentos.

- Tornou-se o paradigma dominante em desenvolvimento corporativo e jogos, promovendo a criação de bibliotecas reutilizáveis e ajudando a gerenciar a complexidade de sistemas granes.

- Criação de vários conceitos como herança, polimorfismo, encapsulamento, abstração etc.

## :seven: Paradigma Reativo (2000 em diante)

- Com o aumento da demanda por sistemas em tempo real e responsivos, o paradigma reativo se tornou mais relevante.

- Ferramentas e tecnologias:
  - RxJS;
  - Reactor;
  - Frameworks de programação reativa.

- Utiliza fluxos de dados assíncronos e programação orientada a eventos, onde mudanças en uma parte do sistema reagem automaticamente a mudanças em outra.

- Essencial para aplicações modernas como dashboards em tempo real, plataformas de streaming e sistemas distribuídos.

## :eight: Paradigmas Concorrentes e Paralelos (ao longo das décadas)

- Com a chegada dos processadores multicore, a programação concorrente e paralela tornou-se necessária para aproveitar melhor o hardware.

- Ferramentas e tecnologias:
  - Threads;
  - OpenMP;
  - MPI;
  - Frameworks de atores como Akka.

- Foco na execução simultânea de tarefas para aumentar o desempenho e a eficiência de aplicativos que processam grandes volumes de dados.

- Essencial para áreas como computação científica, simulações e big data, ajudando a criar programas mais rápidos e capazes de processar grandes volumes de dados em paralelo.
  
  ![Paradigmas Concorrentes e Paralelos](imagens/Paradigmas%20Concorrentes%20e%20Paralelos.png)

## :nine: Paradigma Imperativo e Declarativo

Todos os paradigmas apresentados acima e suas linguagens são separados em duas categorias: Imperativos e Declarativos.

  ![Paradigmas Imperativos e Declarativos](imagens/Paradigmas%20Imperativos%20e%20Declarativos.png)

Fazer essas classificações nos dias de hoje para as linguagens não faz tanto sentido já que em sua maioria são multiparadigmas.

| Paradigma Imperativo | Paradigma Declarativo |
| :---: | :---: |
| Como fazer | O que fazer |
| Mais verboso | Menos verboso |
| Variáveis mutáveis | Imutabilidade (apenas saídas) |
| Comandos sequenciais | Conjunto de statements |
| Mais explícito | Menos explícito |
| Maoior foco no fluxo de dados | Maior foco na lógica |
| Mais legível e alterável | Mais difícil de entender |
| Mias difícil de escalar | Mais fácil de escalar |

Preparando uma xícara de café usando os paradigmas:

- **Imperativo:** João, pegue a cafeteira. Coloque água até o nível indicado. Abra o compartimento do pó de café. Coloque três colheres de pó. Feche o compartimento. Coloque a cafeteira na vase. Aperte o botão de ligar. Aguarde até o café ficar pronto. Pegue uma xícara e coloque o café nela.

- **Declarativo:** João, faça uma xícara de café.

Exemplo de código:

- **Imperativo:**

  ```Python
  # Lista de números
  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  # Variável para armazenar a soma dos números pares
  soma_pares = 0

  # Loop para iterar pela lista e somar os pares
  for numero in numeros:
    if numero % 2 == 0: # Verifica se o número é par
      soma_pares += numero # Adiciona o número par à soma

  print("Soma dos números pares:", soma_pares)
  ```

- **Declarativo:**

  ```Python
  # Lista de números
  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  # Soma dos números pares usando funções de alta ordem
  soma_pares = sum(filter(lambda x: x % 2 == 0, numeros))

  print("Soma dos números pares:", soma_pares)
  ```
