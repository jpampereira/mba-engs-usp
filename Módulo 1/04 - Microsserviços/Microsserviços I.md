# Microsserviços I

## :one: Fundamentos

### :arrow_right: Histórico

![Linha do Tempo de Evolução Tecnológica](Imagens/Linha%20do%20Tempo%20de%20Evolução%20Tecnológica.png)

![Linha do Tempo de Evolução Tecnológica - Parte 2](Imagens/Linha%20do%20Tempo%20de%20Evolução%20Tecnológica%20-%20Parte%202.png)

### :arrow_right: Definição

Microsserviços é um estilo arquitetural que, de maneira superficial, quebra uma grande aplicação em pequenos serviços, responsáveis cada um por realizar uma ou mais tarefas.

Entre as vantagens que podemos destacar desse modelo arquitetural é a otimização no tempo de manutenção do software, uma vez que suas funcionalidades e responsabilidades estão bem divididas. Além disso, esse estilo permite a reutilização de componentes em diferentes partes de um projeto ou entre projetos.

Não é uma bala de prata, ou seja, não resolve todos os problemas, é necessário avaliar o seu contexto e os requisitos do sisteam para definir se essa arquitetura é a ideal para a solução.

Trabalha bastante com REST APIs.

### :arrow_right: Preparação

A arquitetura de microsserviços acaba combinando diversos outros conceitos, tecnologías e padrões que são intrínsecos ao modelo:

- Desenvolvimento de Software Ágil;
- DevOps;
- Arquiteturas Orientadas à Serviço (SOA);
- APIs;
- CI/CD;
- Design Patterns.

### :arrow_right: O que são Web Services?

Um serviço web é qualquer software disponibilizado pela Internet (seja através de plataformas em nuvem ou On Premisses) que usa um formato padronizado, como eXtensible Markup Language (XML) ou JavaScript Object Notation (JSON), para a solicitação e resposta de uma interação atarvés de Application Programming Interface (API).

![Serviços Web](Imagens/Serviços%20Web.png)

O cliente é representado por um notebook, porém, ele pode ser qualquer outro dispositivo que se conecta com a rede, como smartphones e dispositivos IoT.

### :arrow_right: O que significa API?

API significa *Application Programming Interface* (Interface de Programação de Aplicação). No contexto de APIs, a palavra Aplicação refere-se a qualquer software com uma função distinta.

A interface pode ser pensada como um contrato de serviço entre duas aplicações. Esse contrato define como as duas se comunicam usando solicitações e respostas.

A documentação de suas respectivas APIs contém informações sobre como os desenvolvedores devem estruturar essas solicitações e respostas.

APIs são mecanismos que permitem que dois componentes de software se comuniquem usando um conjunto de definições e protocolos.

Por exemplo, o sistema de software do instituto meteorológico contém dados meteorológicos diários. A aplicação para previsão do tempo em seu telefone "fala" com esse sistema por meio de APIs e mostra atualizações meteorológicas diárias no telefone.

A arquitetura da API geralmente é explicada em termos de cliente e servidor. A aplicação que envia a solicitação é chamada de cliente e a aplicação que envia a resposta é chamada de servidor.

- As operações podem ser síncronas ou assíncronas.

- Então. no exemplo anterior, o banco de dados meteorológico do instituto é o servidor e o aplicativo móvel é o cliente.

### :arrow_right: O que é API Web?

Uma API Web ou API de serviço da Web é uma interface de processamento de aplicações entre um servidor da Web e um navegador da Web.

A API REST é um tiupo especial de API Web que usa o estilo de arquitetura padrão explicado acima.

Os diferentes termos que abrangem as APIs, como APIs Java ou APIs de serviço, existem porque, historicamente, as APIs foram criadas antes da World Wide Web. As APIs Web modernas são APIs REST e os termos podem ser usados de forma intercambiável.

**Lembre-se: A maioria dos serviços Web são APIs, mas nem todas as APIs são serviços Web.**

### :arrow_right: O que são integrações de API?

As integrações de API são componentes de software que atualizam automaticamente os dados entre clientes e servidores.

Alguns exemplos de integrações de API são quando os dados automáticos são sincronizados com a nuvem por meio da galeria de imagens do seu telefone ou a data e a hora são sincronizadas automaticamente no seu laptop quando você viaja para um local com outro fuso horário.

### :arrow_right: Acessibilidade de APIs

- **APIs privadas:** Elas são internas a uma empresa e são usadas apenas para conectar sistemas e dados dentro da empresa;

- **APIs públicas:** Estas são abertas ao público e podem ser usadas por qualquer pessoas. Pode ou não haver alguma autorização e custo associados a esses tipos de APIs;

- **APIs de parceiros:** Estas são acessíveis apenas por desenvolvedores externos autorizados para auxilir as parcerias entre empresas.

- **APIs compostas:** Estas combinam duas ou mais APIs distintas para atender a requisitos ou comportamentos complexos do sistema.

### :arrow_right: O que é um Endpoint?

Os endpoints da API são os pontos de contato finais no sistema de comunicação da API. Estes incluem URLs de servidores, serviços e outros locais digitais específicos de onde as informações são enviadas e recebidas entre sistemas. Os endpoints da API são fundamentais para as empresas por dois motivos principais:

- **Segurança:** Os endpoints da API tornam o sistema vulnerável a ataques. O monitoramento da API é crucial para impedir o uso indevido.

- **Performance:** Os endpoints da API, especialmente os de alto tráfego, podem causar gargalos e afetar a performance do sistema.

### :arrow_right: Principais Tipos de APIs

- **APIs REST:**

  - Mais populares e flexíveis encontradas na Web atualmente;

  - O cliente envia solicitações ao servidor como dados;

  - O servidor usa essa entrada do cliente para iniciar funções internas e retorna os dados de saída ao cliente.

- **APIs RPC:**

  - Essas APIs são conhecidas como *Remote Procedure Calls* (chamadas de Procedimento Remoto);

  - O cliente conclui uma função (ou um procedimento) no servidor e o servidor envia a saída de volta ao cliente.

- **APIs SOAP:**

  - Essas APIs usam o SOAP - *Simple Object Access Protocol* (Protocolo de Acesso a Objetos Simples);

  - Cliente e servidor trocam mensagens usando XML.

- **GraphQL:**

  - É uma especificação, uma linguagem de consulta de API e um conjuntos de ferramentas. GraphQL opera em um único endpoint usando HTTP;

  - Ela prioriza fornecer aos clientes exatamente os dados que eles solicitam e nada mais;

  - Foi projetada para tornas as APIs rápidas, flexíveis e amigáveis ao desenvolvedor;

  - Como alternativa ao REST, oferece aos desenvolvedores de front-end a capacidade de consultar vários bancos de dados, microsserviços e APIs com um único endpoint de GraphQL.

- Existem também APIs baseadas em Websockets, além de outros.

Não existe um tipo melhor que o outro, é necessário analisar o contexto e as necessidades do cliente para definir o caminho que será adotado. Na imagem abaixo temos uma tabela que faz o comparativo entre os tipos mencionados:

![Comparação entre os principais tipos de APIs](Imagens/Comparação%20entre%20os%20principais%20tipos%20de%20APIs.png)

### :arrow_right: REST

O modelo REST (REpresentational State Transfer) representa uma das possibilidades para a criação de web services, com utilização semântica dos métodos HTTP (GET, POST, PUT e DELETE).

O criador do modelo REST foi Roy Fielding, um dos principais autores da especificação HTTP e cofundador do projeto Apache HTTP Server. O termo foi apresentado pela primeira vez em 2000 na tese de doutorado de Roy Fielding *Architectural Styles and the Design of Network-based Software Architectures*.

Uma requisição HTTP é equivalente a uma chamada de um método (operação) em um objeto (recurso) residente no servidor.

Principais características de uma requisição REST:

![Funcionamento API REST](Imagens/Funcionamento%20API%20REST.png)

- A principal característica da API REST é a ausência de estado (*stateless*). A ausência de estado significa que os servidores não salvam dados do cliente entre as solicitações.

- As solicitações do cliente ao servidor são semelhantes aos URLs que você digita no navegador para visitar um site. A resposta do servidor corresponde a dados simples, sem a renderização gráfica típica de uma página Web.

Benefícios das APIs REST:

![Benefícios das APIs REST](Imagens/Benefícios%20das%20APIs%20REST.png)

Como proteger uma API Rest? Todas as APIs devem ser protegidas por meio de autenticação e monitoramento adequados. As duas principais maneiras de proteger APIs REST incluem:

- **Tokens de autenticação:** Eles são utilizados para autorizar os usuários a fazer a chamada de API. Os tokens de autenticação verificam se os usuários são quem afirmam ser e se têm direitos de acesso para aquela chamada de API específica. Por exenplo, quando você faz login em seu servidor de e-mail, seu cliente de e-mail usa tokens de autenticação para acesso seguro.

- **Chaves de API:** As chaves de API verificam o programa ou a aplicação que faz a chamada de API. Elas identificam a aplicação e garantem que ela tenha os direitos de acesso necessários para fazer a chamada da API específica. As chaves de API não são tão seguras quanto os tokens, mas permitem o monitoramento da API para coletar dados sobre o uso.

### :arrow_right: APIs REST vs RESTful

Uma API RESTful segue ou implementa todas as exigências e restrições do estilo de arquitetura definido pelo criador do modelo REST (Roy Fielding) no processo de construção de uma aplicação.

As exigências para uma API ser RESTful são:

- Arquitetura cliente-servidor;
- Comunicação stateless;
- Cache;
- Interface uniforme;
- Sistema de camadas.

Significa que uma API que não segue todas essas exigências está errada? Não! Várias APIs não seguem todos os pontos destacados. Única coisa é que não poderemos dizer que nossa API é RESTful e sim apenas REST.

## :two: Microsserviços

### :arrow_right: O que são Microsserviços?

São uma combinação de abordagens arquitetônicas e organizacionais para o desenvolvimento de software em que as aplicações são compostas por serviços independentes que se comunicam por meio de APIs bem definidas.

As arquiteturas de microsserviços facilitam a escalabilidade e agilizam o desenvolvimento de aplicativos, habilitando a inovação e acelerando o tempo de introdução de novos recursos e os ciclos de implantação no mercado.

"*O termo 'Arquitetura de microsserviços' surgiu nos últimos anos para descrever uma maneira específica de projetar aplicativos de software como conjuntos de serviços implementáveis independentemente. Embora não exista uma definição precisa desse estilo arquitetônico, existem certas características comuns em torno da organização, em relação à capacidade de negócios, implantação automatizada, inteligência nos terminais e controle descentralizado de linguagens e dados.*" - Martin Fowler

### :arrow_right: Aplicações Monolíticas vs Microsserviços

![Aplicações Monolíticas vs Microsserviços](Imagens/Aplicações%20Monolíticas%20vs%20Microsserviços.png)

Para entender os benefícios dos microsserviços, considere primeiro uma aplicação monolítica:

- Os três processos (usuários, tópicos e mensagens) de uma aplicação monolítica estão altamente acoplados. Eles funcionam como um único serviço;

- Se um processo da aplicação apresenta um pico de demanda, toda a arquitetura deverá ser dimensionada;

- Adicionar ou melhorar recursos torna-se mais complexo à medida que a base de código cresce, o que limita a experimentação e dificulta a implementação de novas ideias;

- A disponibilidade de aplicações monolíticas também fica em risco porque muitos processos dependentes e altamente acoplados aumentam o impacto da falha de um único processo.

Agora suponha que a mesma aplicação seja executada em uma arquitetura de microsserviços:

- Cada processo da aplicação é criado como um componente independente que é executado como um serviço. Os serviços se comunicam usando operações de API leves.

- Cada serviço executa uma única função que pode oferecer suporte a várias aplicações. Como os serviços são executados de maneira independente, eles podem ser atualizados, implantados e dimensionados para atender à demanda por funções específicas de uma aplicação;

- Uma arquitetura de microsserviços permite iteração, automação e agilidade geral muito mais rápidas. Inicie, falhe e recupere: tudo rapidamente.

Nas imagens abaixo temos um exemplo de aplicação de reserva de viagens (vôo, hotel etc.) apresentado primeiramente na arquitetura de um monolíto e em seguida utilizado microsserviços:

![Exemplo Monolíto](Imagens/Exemplo%20Monolíto.png)

![Exemplo Microsserviço](Imagens/Exemplo%20Microsserviço.png)

Podemos ver na segunda imagem que cada uma das funcionalidades do site de agendamento e gerenciamento de vôos, hotéis e viagens foram implementadas separadamente, contendo inclusive um banco de dados diferente para cada. Isso facilita a escalabilidade e o desenvolvimento desses componentes separadamente.

No gráfico abaixo podemos verificar que de primeira, uma aplicação monolítica é muito mais fácil de se implementar, porém, quando há a necessidade de realizar melhorias e novas implementações, esse processo é muito custoso. Por outro lado, a arquitetura de microsserviços exige um maior esforço inicial, porém, a longo prazo, é muito mais simples de evoluir.

![Esforço x Tempo Monolíto e Microsserviço](Imagens/Gráfico%20Monolíto%20x%20Microsserviço.png)

Porém, existem cenários onde os monolítos são mais adequados enquanto outros onde os microsserviços se encaixam melhor. Tudo depende do cenário da sua aplicação. Na tabela abaixo podemos ver os prós e contras de cada arquitetura.

![Prós e Contras Monolítos vs Microsserviços](Imagens/Prós%20e%20Contras%20Monolítos%20vs%20Microsserviços.png)

### :arrow_right: Características de Microsserviços

- **Descentralizados:** toda parte de desenvolvimento, implantação e operação é descentralizado, podendo ser realizados por diferentes equipes;
- **Independentes:** os microsserviços podem ser implementados, melhorados e dimensionados sem afetarem uns aos outros;
- **Especializados:** cada microsserviço se propõe a resolve um único problema;
- **Poliglota:** aplicações implementadas em microsserviços podem conter diferentes sistemas operacionais, linguagens de programação e tecnologias de armazenamento de dados;
- **Caixas pretas:** não é necessário saber como um microsserviço funciona, precisamos apenar ter acesso a sua API;
- **Você cria, você executa:** fácil implementação, teste e integração, principíos do DevOps.

## :three: Arquitetura de Microsserviços

### :arrow_right: Evolução da Arquitetura

![Evolução da Arquitetura](Imagens/Evolução%20da%20Arquitetura.png)

### :arrow_right: Diferentes Formas de Implementar Microsserviços

![Diferentes Formas de Implementar Microsserviços](Imagens/Diferentes%20Formas%20de%20Implementar%20Microsserviços.png)

### :arrow_right: Evolução da Infraestrutura

![Evolução da Infraestrutura](Imagens/Evolução%20Infraestrutura.png)

### :arrow_right: Arquitetura Hexagonal

A Arquitetura Hexagonal (ou o nome original em inglês, *Ports and Adapters Architectures*), definida por Alistair Cockburn, em meados dos anos 90, tem como ideia central utilizar de interfaces, chamadas de portas e adaptadores para isolar a regra de negócio da aplicação das demais questões, como tecnologias de bancos de dados, filas e mensageria, requisições HTTP, integrações com outros sistemas etc.

Essa arquitetura permite que os desenvolvedores se concentrem no domínio da aplicação e não precisem lidar com questões de projeto. Além disso, permite a troca de bibliotecas, frameworks, bancos de dados com maior facilidade.

![Arquitetura Hexagonal](Imagens/Arquitetura%20Hexagonal.png)

Na imagem acima temos uma representação visual da arquitetura hexagonal. Do lado esquerdo temos os adaptadores primários, que recebem as requisições que serão tratadas pela regra de negócio de diferentes origens e as encapsulam para que cheguem na camada mais interna de forma padronizada. Do lado direito temos os adaptadores secundários, onde as regras de negócio encaminham os resultados para as saídas mas sem precisar se importar com as particularidades das tecnologias utilizadas, pois há uma interface que as abstrai.

### :arrow_right: The Twelve-Factor App

Um grupo de desenvolvedores criou um manifesto com doze pontos que eles entendem como princípios para construção de uma boa aplicação web ou SaaS. Esse manifesto ficou conhecido como [The Twelve-Factor App](https://12factor.net/).
