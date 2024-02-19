# Microsserviços II

## :one: Fundamentos

Na primeira aula vimos o que são os Microsserviços:

- Microsserviços é um padrão de desenvolvimento de software onde um sistema é dividido em partes menores, denominados serviço, que realizam uma tarefa específica. A esse componente deve ser vinculado um sistema de armazenamento independente.

- Os serviços se comunicam através de APIs. Existem vários tipos de APIs, como SOAP, gRPC e GraphQL, porém, o mais popular é o REST. Apesar da sua popularidade, não existe nenhuma regra que obrigue o uso de APIs do tipo REST quando estivermos escrevendo um serviço, sendo possível adotar os modelos quando entendesse que são mais adequados para a situação.

- Eles podem ser escritos em qualquer linguagem de programação, utilizar qualquer sistema de gerenciamento de banco de dados ou outro software e hardware qualquer, desde que faça sentido para o contexto em que serão aplicados. Porém, existem linguagens e tecnologías que evoluíram mais ao longo do tempo e podemos considerá-las mais adequadas para esse padrão.

Além do Microsserviços, temos outros dois padrões para desenvolvimento de software: Monolítos e SOA.

Princípios para Projetar Microsserviços:

1. Serviços Autônomos Independente;
2. Escalabilidade;
3. Descentralização;
4. Serviços Resilientes;
5. Balanceamento de carga em tempo real;
6. Disponibilidade;
7. Entrega Contínua por meio da integração de DevOps;
8. Integração de API e monitoramento contínuo;
9. Isolamento de falhas;
10. Auto-Provisionamento.

![Monolíto vs SOA vs Microsserviço](Imagens/Monolíto%20vs%20SOA%20vs%20Microsserviços.png)

## :two: Quando usar microsserviços?

### :arrow_right: Monolith First

No artigo [Monolith First](https://martinfowler.com/bliki/MonolithFirst.html), Martin Fowler levanta discussão se sempre o padrão de Microsserviços é o mais adequado para todo e qualquer projeto e se não devemos mais criar aplicações monolíticas pois elas são ultrapassadas. Na aula anterior foi apresentado um gráfico que mostrava que a complexidade inicial para a construção de uma aplicação baseada em microsserviços era muito maior se fizessemos de forma monolítica, mas que ao longo do tempo esse esforço seria compensado sendo muito mais fácil de mantê-la e evoluí-la. Acontece que precisamos analisar a situação: questões técnicas de projeto, tempo hábil, habilidades do time de desenvolvimento etc. e pode ser que sim em alguns casos criar a aplicação como monólito pode ser benéfico, sendo possível evoluí-la para Microsserviços quando se obter maturidade e conhecimento pleno sobre a aplicação que se tem.

![Monolith First](Imagens/Monolith%20First.png)

### :arrow_right: Microservice Prerequisites

Em outro artigo [Microservice Prerequisites](https://martinfowler.com/bliki/MicroservicePrerequisites.html), Martin Fowler menciona a necessidade de se realizar um pré check para verificar se sua organização, as pessoas e os recursos disponíveis permitem que trabalhemos nesse modelo. Esses pré requisitos são:

1. Ambientes de rápido provisionamento: Nuvem Pública e Automação;
2. Uso de softwares de monitoração desde recurso dos ambientes até log das aplicações;
3. Desenvolvimento rápido de aplicações (por exemplo, Framework);
4. Pipeline de Desenvolvimento (Integração e Entrega Contínua);
5. Ambiente com Cultura DevOps.

### :arrow_right: Antipatterns

Devemos ter cuidado com algumas questões quando estamos pensando em adotar o modelo de microsserviço em um projeto na nossa organização:

![Antipatterns](Imagens/Antipatterns.png)

### :arrow_right: When Microservices Are a Bad Idea

Outro artigo que procura discutir a necessidade ou não dos Microsserviços é o [When Microservices Are a Bad Idea](https://semaphoreci.com/blog/bad-microservices). Ele se baseia no artigo de Martin Fowler para realizar a discussão e traz de cara os seguintes pontos:

1. Quase todos os projetos de sucesso que utilizam o modelo de microsserviços eram inicialmente monolítos que em um determinado momento ficaram tão grandes que estão se fez necessário quebrá-los em partes menores;

2. Quase todos os projetos que tentaram implementar utilizando o modelo de Microsserviços desde o início falharam;

3. Isso significa que você não deve iniciar seu projeto como um microsserviço há não ser que tenham certeza de que ele será grande o suficiente para que isso realmente valha a pena.

Se você trabalha no contexto de uma startup, onde há uma maior pressão para que as coisas evoluam rapidamente e a empresa ainda está buscando seu espaço, pode fazer mais sentido você utilizar uma arquitetura mais simples de primeira, para ter entregas de valor mais rapidamente e porque muito provavelmente ainda levará um tempo para que vocês precisem lidar com questões de escalonamento.

Apesar de ser possível alocar aplicações baseadas em Microsserviços em ambientes On Premisses, isso pode ser um desafio, pois não teremos a nossa disposição ferramentas para automatização de deploy, tão importantes em um contexto onde estamos lidando com diversos componentes.

Existem duas situações onde a adoção do modelo de Microsserviços se torna a única alternativa para seguir em frente: quando está difícil de realizar alterações e adicionar novas funcionalidades sem quebrar algo ou caso tenhamos problemas relacionados a performance e encontramos dificuldade para escalar o monolíto.

![Produtividade Monolíto vs Microsserviço](Imagens/Produtividade%20Monolíto%20vs%20Microsserviço.png)

E sim, é possível escalar um monolíto de várias formas:

1. Criar múltiplas instâncias do monolíto e utilizar um balanceador de carga para distribuir o tráfego;

2. Distribuir o código do front-end através de CDNs;

3. Utilizar cache para reduzir a carga em cima do banco de dados;

4. Implementar funcionalidades com alta demanda utilizando técnicas de Edge Computing e Serverless.

Os autores citam também os pré requisitos mencionados por Martin Fowler e que devemos entender que esse tipo de mudança pode levar anos e exige preparação.

Conclusão: não mude de uma arquitetura monolítica para microsserviços há não ser que você tenha um bom motivo.

## :three: Padrões de Arquitetura / Design Patterns

Os Padrões de Projeto são similares a esboços para uma construção, que podem ser ajustados para resolver um problema, baseado em microsserviços. Sendo assim, ele não é um código e sim um conceito que já foi estudado e sua efetividade comprovada, que irá ajudar na resolução de um problema. Por ele ser um conceito, ele pode ser adaptado para se encaixar a determinado contexto (lembrar das APIs RESTful e que ele é um modelo ideal de interface de programação, mas se não for pertinente ao projeto, não é necessário seguí-lo 100%, sendo então considerada apenas uma API REST).

Livro de Referência: Microsservices Patterns - Chris Richardson.

Os Padrões de Projeto para Microsserviços podem ser separados em cinco categorias:

- **Padrões de Decomposição:** Explicam como decompomos uma aplicação em pequenos serviços. Por exemplo, uma aplicação monolítica e transformá-la em microsserviços (cenário mais comum);

- **Padrões de Integração:** Cobre aspectos de comunicação entre os microsserviçõs, recomendando como eles podem se comunicar entre só e com outros sistemas e como agregar resultados de vários serviços antes de enviá-los de volta ao usuário;

- **Padrões de Banco de Dados:** Estratégias para armazenamento dos dados gerados pelos microsserviços e lidar com questões como sincronização, integridade, atomicidade, compartilhamento, ACID etc;

- **Padrões de Observabilidade:** Como monitorar e rastrear a integridade e desempenho dos microsserviços? Por exemplo, enviar uma notificação quando ocorrer uma falha em um microsserviço;

- **Padrões de Preocupações Transversais:** Outros padrões que auxiliam na criação, manutenção e proteção dos microsserviços.

![Padrões de Projetos para Microsserviços](Imagens/Padrões%20de%20Projeto%20para%20Microsserviços.png)

Como são muitos Padrões, o professor selecionou alguns daqueles que ele considera mais importantes.

### :arrow_right: Padrão de Decomposição: Strangler

Como já foi falado anteriormente, os principais casos de projetos de sucesso que utilizam o modelo de microsserviços não partiram do zero e sim a partir da transformação de uma estrutura anteriormente monolítica. Sendo assim, esse padrão é muito utilizado pois ele justamente trata desse cenário.

Essa alteração é gradual, portanto, o sistema legado e as novas versões irão coexistir por um tempo até que seja feita toda a migração para microsserviços.

![Padrões de Projeto para Microsserviços - Strangler - Parte 1](Imagens/Padrões%20de%20Projeto%20para%20Microsserviços%20-%20Strangler%20-%20Parte%201.png)

Como vemos na imagem acima, as funcionalidades vão sendo migradas pouco a pouco para microsserviços e sendo removidas do monolíto, até que no final tudo tenha sido atualizado.

Durante a fase de migração, é necessário fazer uso de um proxy para direcionar as requisições para a estrutura correta (legado ou microsserviços), de forma que o serviço permaneça funcionando e as alterações possam ser realizadas de forma planejada.

![Padrões de Projeto para Microsserviços - Strangler - Parte 2](Imagens/Padrões%20de%20Projeto%20para%20Microsserviços%20-%20Strangler%20-%20Parte%202.png)

Podemos separar esse processo em três etapas:

1. **Transformação:** Quando se percebe que a mudança na arquitetura será necessária;

2. **Coexistência:** Por conta da mudança gradual, por um tempo a aplicação terá uma parte do sistema no formato legado (monolíto) e outra em microsserviço, tudo isso coordenado por um proxy;

3. **Eliminação:** Todas as funcionalidades foram migradas para microsserviços e o monolíto pode ser removido.

| Vantagens | Desvantagens |
| :---: | :---: |
| Migração simples de um serviço para um ou mais serviços | Não é adequado para sistemas pequenos e de baixa complexidade |
| Serviços antigos seguem funcionando até que haja a sua refatoração | Não pode ser utilizado em sistemas que as solicitações para o back-end não podem ser interceptadas e roteadas |
| Permite adicionar novos serviços enquanto atualiza os antigos | Se a camada de proxy ou fachada (façade) não for projetada adequadamente, pode se tornar um ponto único de falha ou gargalo de desempenho |
| Pode ser utilizado para controle de versão de APIs | Requer um plano de reversão do serviço refatorado para a versão antiga caso algo dê errado, de forma segura e rápida |

No artigo [How to break a Monolith into Microservices](https://martinfowler.com/articles/break-monolith-into-microservices.html), Martin Fowler explica como realizar essa migração.

### :arrow_right: Padrão de Integração: API Gateway

Esse padrão é semelhante ao padrão de fachada (Façade) do design orientado a objetos e é recomendado para projetar e criar aplicativos grande e/ou complexos baseados em microsserviços com vários aplicativos clientes.

A API Gateway fornece um endpoint único de acesso a aplicação que funciona como um proxy reverso, abstraindo detalhes de implementação da solução e fazendo o roteamento das requisições para os microsserviços de acordo com as requisições dos usuários.

É possível adicionar funcionalidades adicionais a essa camada como autenticação da API, transformação de requisições e respostas etc.

Você deve considerar utilizar esse padrão quando:

- O número de dependências de um microsserviço é gerenciável e não cresce com o tempo;
- O sistema de chamada exige uma resposta síncrona do microsserviço;
- Requisito de baixa latência;
- Quando é preciso expor uma API para coletar dados de vários microsserviços.

**Caso de uso:** um cliente realiza pagamentos mensais regulares em uma plataforma de seguros. Essa plataforma é formada por quatro microsserviços: Cliente, Comunicação, Pagamentos e Vendas.

- O microsserviço "Cliente" atualiza o banco de dados do cliente com os detalhes do pagamento mensal;

- O microsserviço "Vendas" atualiza o banco de dados de vendas com informações relevantes que ajudam a equipe de vendas a acompanhar o cliente em busca de oportunidades de venda cruzada;

- O microsserviço de "Comunicação" envia um e-ail de confirmação ao cliente após o pagamento ser processado com sucesso;

- Por fim, o microsserviço "Pagamentos" é o sistema geral que o cliente utiliza para fazer seus pagamentos.

Existem desafios para a utilização desse padrão para o caso de uso:

- As chamadas síncronas são feitas para sistemas downstream, portanto, qualquer latência causada por esses subsistemas afeta o tempo geral de resposta.

- Os custos operacionais são mais altos porque o serviço "Pagamentos" aguarda as respostas dos outros microsserviços antes de responder a chamada. O tempo total de execução é, portanto, relativamente maior em comparação com um sistema assíncrono.

- O tratamento de erros e a repetição são tratados separadamente para cada microsserviço dentro do microsserviço de "Pagamentos", não pelos microsserviços individualmente.

Nas imagens abaixo temos duas propostas de implementação desse caso de uso utilizando os serviços disponível na nuvem da AWS:

![Padrões de Projeto para Microsserviços - API Gateway - Parte 1](Imagens/Padrões%20de%20Projeto%20para%20Microsserviços%20-%20API%20Gateway%20-%20Parte%201.png)

![Padrões de Projeto para Microsserviços - API Gateway - Parte 2](Imagens/Padrões%20de%20Projeto%20para%20Microsserviços%20-%20API%20Gateway%20-%20Parte%202.png)

### :arrow_right: Padrão de Banco de Dados: CQRS

O padrão de Segregação de Responsabilidade de Consulta de Comando (CQRS - *Command Query Responsability Segregation*) divide um aplicativo em duas partes: o lado que trata comandos DML (*Data Manipulation Language*), como `INSERT`, `UPDATE` e `DELETE` e outro que trata comandos DQL (*Data Query Language*), que são comandos de consulta, ou mais precisamente, o `SELECT`.

Esse padrão é ideal quando há diferentes requisitos de taxa de throughput, latência ou consistência para cada um desses tipos de comandos. Por exemplo, se há uma demanda muito maior por comandos de se comparado a comandos de manipulação ou se é necessário que a latência da seleção seja bem menor, esse modelo se torna ideal.

Na imagem abaixo temos um exemplo de funcionamento desse padrão: o usuário interaje com as **Write APIs** quando desejam realizar comandos de manipulação. É comum que nessa API hajam algumas verificações como autenticação e autorização antes da execução dos comandos. Após a persistência das alterações, os dados então gravados na **Write database** são sincronizados com o **Read database** através de um evento. A partir de então, esses dados podem ser acessados pelos usuários através das **Read APIs**.

![Padrões de Projeto para Microsserviços - CQRS](Imagens/Padrões%20de%20Projeto%20para%20Microsserviços%20-%20CQRS.png)

### :arrow_right: Padrão de Banco de Dados: SAGA

O padrão saga é utilizado para gerenciamento de falhas que ajuda a estabelecer a consistência em aplicativos distribuídos e coordena as transações entre vários microsserviços para manter a consistência de dados.

Um microsserviço publica um evento para cada transação e a próxima transação é iniciada com base no resultado do evento. Ele pode seguir dois caminhos diferentes, dependendo do êxito (*Happy path*) ou da falha das transações.

Na imagem abaixo podemos ver a aplicação desse padrão, onde cada etapa, como por exemplo, **ProcessPayment** tem um caminho em caso de sucesso (**UpdateCustomerAccount**) e outro em caso de erro (**SetOrderFailed**).

![Padrões de Projeto para Microsserviços - SAGA](Imagens/Padrões%20de%20Projeto%20para%20Microsserviços%20-%20SAGA.png)

Analogia com uma saga, onde o protagonista passa por desafios ao longo da sua jornada. Aqui, os dados atravessam diversas etapas antes de chegar no seu objetivo final.

### :arrow_right: Padrão de Preocupações Transversais: Circuit Breaker (Disjuntor)

Esse padrão ajuda a evitar a ocorrência de falhas em cascata, quando microsserviços estiverem indisponíveis ou com alta latência. O padrão pode impedir que um microsserviço repita uma chamada para outro quando a mesma já causou interrupções ou falhas repetidas.

Por isso a analogia com um disjuntor: no contexto de um circuito elétrico de uma casa, caso seja identificada alguma anomalia na rede, o disjuntor abre o circuito em um determinado ponto para evitar que ele ou até mesmo eletrodomésticos e eletrônicos sejam danificados e para evitar acidentes.

O padrão também é usado para detectar quando o serviço de chamada está funcionando novamente.

Seja o exemplo abaixo onde temos dois microsserviços: "Order" e "Payment".

Quando não há falhas o serviço de pedidos encaminha todas as requisições para o serviço de pagamentos pelo Circuit Breaker:

![Padrões de Projeto para Microsserviços - Circuit Breaker - Parte 1](Imagens/Padrões%20de%20Projeto%20para%20Microsserviços%20-%20Circuit%20Breaker%20-%20Parte%201.png)

Se o serviço de pagamentos atingir o tempo limite, o disjuntor poderá detectar e rastrear a falha:

![Padrões de Projeto para Microsserviços - Circuit Breaker - Parte 2](Imagens/Padrões%20de%20Projeto%20para%20Microsserviços%20-%20Circuit%20Breaker%20-%20Parte%202.png)

Se o tempo limite for identificado, o disjuntor irá abrir o circuito e começará a não passar mais as requisições para o microsserviço de pagamentos automaticamente devolverá as requisições do serviço de pedidos com uma mensagem de erro:

![Padrões de Projeto para Microsserviços - Circuit Breaker - Parte 3](Imagens/Padrões%20de%20Projeto%20para%20Microsserviços%20-%20Circuit%20Breaker%20-%20Parte%203.png)

O disjuntor de tempos em tempos irá verificar periodicamente se o serviço de pagamentos está funcionando corretamente:

![Padrões de Projeto para Microsserviços - Circuit Breaker - Parte 4](Imagens/Padrões%20de%20Projeto%20para%20Microsserviços%20-%20Circuit%20Breaker%20-%20Parte%204.png)

Caso tenha sucesso, o circuito é novamente fechado e as chamadas passam a ser encaminhas novamente:

![Padrões de Projeto para Microsserviços - Circuit Breaker - Parte 5](Imagens/Padrões%20de%20Projeto%20para%20Microsserviços%20-%20Circuit%20Breaker%20-%20Parte%205.png)

### :arrow_right: Identificando limites de microsserviços

Qual o tamanho de um microsserviço?

Tomar cuidado para não criar um microsserviço monolítico.

Como definir o microsserviço?

- Cada serviço tem uma única responsabilidade;

- Se há conversa excessiva entre dois microsserviços, talvez eles devessem ser um só;

- Cada microsserviço deve ser pequeno o suficiente para ser criado e mantido por uma equipe pequena que trabalha de forma independente;

- Microsserviços não devem ter interdependência que necessite de sincronismo;

- Não devem ser acoplados de forma firme e podem evoluir de forma independente;

- Os serviços não devem criar problemas de consistência ou integridade dos dados. As vezes é importante manter a consistência dos dados colocando a funcionalidade em um único microsserviço.

### :arrow_right: Etapas para Construção de uma Aplicação Baseada em Microsserviços

![Etapas para Construção de uma Aplicação Baseada em Microsserviços - Parte 1](Imagens/Etapas%20para%20Construção%20de%20uma%20Aplicação%20baseada%20em%20Microsserviços%20-%20Parte%201.png)

![Etapas para Construção de uma Aplicação Baseada em Microsserviços - Parte 2](Imagens/Etapas%20para%20Construção%20de%20uma%20Aplicação%20baseada%20em%20Microsserviços%20-%20Parte%202.png)

## :four: Métodos Ágeis / DevOps

## :five: Ferramentas, Liguagens e Frameworks

## :six: Modelos de Maturidade
