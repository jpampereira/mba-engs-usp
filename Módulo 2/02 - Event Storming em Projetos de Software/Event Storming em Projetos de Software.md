# Event Storming em Projetos de Software

## :one: Introdução

Uma organização é comumente separada em setores. Esse setores muitas vezes parecem várias empresas dentro de uma só (independência entre as áreas) e ocorre que falta oléo na engrenagem entre essas áreas, formando o que chamamos de silos organizacionais. Isso acaba gerando problemas no espaço organizacional, como:

- Falta de comunicação;
- Perda de eficiência;
- Redundância de trabalho;
- Resistência;
- Tomada de decisão fragmentada.

Na imagem abaixo podemos observar como o problema dos silos organizacionais acaba gerando um efeito dominó de problemas:

![O problema do espaço organizacional](Imagens/O%20problema%20do%20espaço%20organizacional.png)

- Prioridades conflitantes por conta dos objetivos e questões locais de cada silo;
- Fragmentação do conhecimento entre as áreas;
- As prioridades conflitantes e o conhecimento fragmentado exigem que mais pessoas participem das reuniões, dificultando a sincronização das agendas de cada equipe, consequentemente aumentando o custo do consenso;
- O alto custo para o consenso e a necessidade de concordância entre várias áreas com conhecimentos diferentes acaba causando um acumulo nas decisões que precisam ser tomadas;
- As pessoas acabam medo de alterar as coisas para não causar uma "quebra";
- Esse ciclo vicioso acaba gerando uma organização obstruída.

Como o Event Storming pode ajudar:

![Como o Event Storming pode ajudar no problema do espaço organizacional](Imagens/Como%20o%20Event%20Storming%20pode%20ajudar%20no%20problema%20do%20espaço%20organizacional.png)

O Event Storming foi criado por Alberto Brandolini e é uma técnica para entendimento do domínio das aplicações através dos seus eventos e focada no planejamento de projetos de software. Essa técnica é realizada em workshops envolvendo experts do domínio (visão de alto nível) e a área técnica.

- Para facilitar o entendimento entre a parte técnica e não técnica é empregado um esforço para utilização da linguagem ubiqua, permitindo o entendimento entre todas as partes.

Por se tratar de uma visão mais alto nível, sem entrar em especificadades de código, podemos utilizar o Event Storming como a primeira etapa de planejamento do projeto.

Ferramenta para fazer o Event Storming online: Excalidraw.

## :two: Workshop

O Workshop foi inicialmente idealizado para funcionar presencialmente, porém, com a pandemia e a dificuldade das pessoas estarem presentes fisicamente em um local, ele foi adaptado para funcionar de forma remota, existindo diferentes ferramentas que permitem sua reprodução a distância.

![Workshop Físico](Imagens/Workshop%20físico.png)

O Workshop é composto por pessoas com pensamentos diferentes e que tenham algum interesse ou possam contribuir para a idealização do software.

### :arrow_right: Blocos

As notas adesivas são chamadas de blocos. Cada um dos blocos é representado por uma cor e a legenda dessas cores fica em um quadro visível a todos.

#### :arrow_right::arrow_right:Eventos

Talvez seja o bloco mais importante de todos, pois se conseguimos mapear todos os eventos, conseguimos planejar um software do inicio ao fim sem a necessidade de implementar uma única linha de código.

Uma aplicação é um conjunto de eventos que acontecem.

Eventos são coisas que já aconteceram, portanto, devem ser representados por verbos no passado.

Mapeiam o domínio da aplicação

São relevantes para os experts do dominio e ajuda a área técnica a entender como deve implementar o sistema.

Exemplos:

- Item adicionado ao carrinho;
- Fatura emitida;
- Pagamento aprovado;
- Assinatura confirmada;
- Usuário cadastrado.

Os eventos podem ser resultado de blocos de comandos, sistemas externos, resultado de um tempo que passou (exemplo: período de testes finalizado) ou oriundo de outro eventos que acionam uma determinada política.

#### :arrow_right::arrow_right: Pessoas

Os eventos são gerados a partir de outros blocos, sendo aquele o gatilho inicial a "Pessoa".

A pessoa pode ser definida como qualquer usuário ou componente que gera uma interação com o software, como: cliente, viajante, usuário VIP, usuário aleatório, troll raivoso.

A definição vai depender do contexto de cada aplicação.

Pessoas podem gerar mais de um evento.

### :arrow_right::arrow_right: Comandos

Usuários engatilham comandos. Comandos são ações que geram eventos.

O Event Storming não está interessado em detalhes técnicos, ele quer apenas mapear o domínio da aplicação.

![Blocos: Evento, Pessoa e Comando](Imagens/Blocos%20-%20Evento,%20Pessoa%20e%20Comando.png)

No exemplo acima temos um usuário que deseja executar a função de cadastrar conta e existem três possíveis eventos para esta situação.

#### :arrow_right::arrow_right: Sistemas externos

É tudo aquilo que não é engatilhado pelo usuário e não faz parte do domínio do nosso sistema.

Exemplos:

- Google Authenticator;
- Whatsapp;
- E-mail;
- Gateway de pagamento;
- Gerador de nota fiscal.

#### :arrow_right::arrow_right: Query Model/Informação

O bloco de informações é importante para que os comandos consigam realizar a tomada de decisão dentro do seu fluxo de execução.

![Bloco de Informação](Imagens/Bloco%20de%20Informação.png)

No exemplo acima temos um exemplo de sistema para compra de passagens de ônibus, onde em tenho um usuário denominado "Viajante" que deseja realizar o comando "Comprar ticket" e o nosso sistema deve interagir com um gateway externo para realizar essa ação.

- O bloco de informações é destacado em verde e contém as informações necessárias para que o comando "Comprar ticket" consiga executar sua tarefa;
- O que você precisa definir pra conseguir comprar um ticket de ônibus? Origem, destino, horário e preço.

#### :arrow_right::arrow_right: Policy (Política)

Blocos de políticas ficam entre um evento e um comando. Eles definem um comando que deve ser realizado sempre que ocorra determinado evento.

Com isso começamos a encadear nosso blocos gerando uma cronologia de eventos.

![Bloco de Políticas](Imagens/Bloco%20de%20Políticas.png)

No exemplo acima, sempre que um cadastrado for finalizado a política de boas vindas é acionada, executando o comando de enviar o pacote de boas vindas.

#### :arrow_right::arrow_right: Agregados

Podemos entender o bloco de Agregados como nossas Entidades.

![Bloco Agregados](Imagens/Bloco%20Agregados.png)

Apesar do Event Storming não estar interessado em parte de implementação, podemos trazer uma analogia com código para facilitar o entendimento desse bloco:

![Analogia em código para o bloco Agregados](Imagens/Analogia%20em%20código%20para%20o%20bloco%20Agregados.png)

- Podemos comparar os Agregados as nossas classes no paradigma de POO, que armazenam os atributos e métodos de um mesmo domínio. No caso exemplificado, todos os comandos e eventos relacionados a assinatura são vinculados a classe com mesmo nome, sendo essa classe quem contém as regras de negócio a serem executadas;
- Quando interagimos com um comando, é como se estivessemos chamando o método de um objeto no formato `objeto.metodo`.

Podemos entender o bloco Comando como o gatilho, o bloco Agregado como quem de fato irá executar a ação, pois contém as regras de negócio, e o bloco de Evento a saída.

![Interação com blocos agregados](Imagens/Interação%20com%20blocos%20agregados.png)

#### :arrow_right::arrow_right: Hotspots e Oportunidades

Blocos de Hotsposts servem para mapear problemas, riscos etc., enquanto blocos de Oportunidades servem para capturar ideias.

![Blocos Hotspots e Oportunidades](Imagens/Blocos%20Hotspots%20e%20Oportunidades.png)

Essas notas devem ficar próximas aos pontos onde elas fazem menção.

Podemos utilizar "Arrow Votings" para realizar uma votação entre os membros do Workshop para tomar uma decisão sobre qual oportunidade será debatida ou qual ponto de risco será dada a devida atenção.

#### :arrow_right::arrow_right: Exemplo com todos os blocos

![Exemplo com todos os blocos](Imagens/Exemplo%20com%20todos%20os%20blocos%20agregados.png)

#### :arrow_right::arrow_right: Bounded Contexts

![Bounded Contexts](Imagens/Bounded%20Contexts.png)

Durante o Event Storming é importante nós começarmos a identificar as barreiras do nosso sistema. Quando falamos de barreiras elas podem ser formadas por divergências criativas entre os participantes do workshop, podem representar os limites entre as áreas atribuições das áreas ou até mesmo sinalizar funcionalidades de contextos diferentes.

Para sinalizar essas barreiras utilizamos uma tira amarela no nosso quadro, como mostrado abaixo:

![Bounded Contexts - Quadro](Imagens/Bounded%20Contexts%20-%20Quadro.png)

Delimitar esses contextos pode nos ajudar a dividir nosso software em microsserviços.

No exemplo prático dado pelo professor, ele estabeleceu limites e dividiu a aplicação entre microsserviços de:

- Gestão de planos e assinaturas;
- Criação de ambientes de trabalho (projetos e datasets);
- Funcionalidades.

Essa divisão ajuda na construção de softwares escaláveis.

### :arrow_right: Por onde começamos

O idealizador do método de Event Storming recomenda que comecemos mapeando todo os possíveis eventos, pois a partir deles se torna mais simples definir os demais blocos.

Após o mapeamento desses eventos, devemos dispor eles em ordem cronológica, da esquerda para a direita e criar seus fluxos utilizando os demais blocos.

- Alguns fluxos e eventos não possuem relação causal e estarem dentro de um mesmo contexto. Nesse caso podemos colocá-los no que chamamos de raias diferentes, como se eles fossem executados em paralelo sem relação nenhuma;

- Visualmente esses fluxos são dispostos um abaixo do outro no planner;

- Exemplo: as funcionalidades de criação de gráficos e criação de modelos fazem parte de um mesmo contexto, porém, uma não é necessária para a outra ocorrer. Nesse caso, elas podem ser colocadas em raias diferentes.

- Contextos também podem ser colocados em raias diferentes caso não exista uma relação entre eles.
