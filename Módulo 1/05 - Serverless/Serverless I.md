# Serverless I

Como será o futuro? Todo código que você escreve é lógica de negócios, isto é, você não precisará mais se preocupar com questões relacionadas a codificação que não dizem respeito a lógica de negócio da aplicação, permitindo entregas mais rápidas e simples.

O que é serverless?

- Sem provisionamento de infraestrutura;
- Dimensionamento automático;
- Pague pelo valor (o valor gasto pela empresa estará diretamente relacionado com o seu código);
- Altamente disponível e seguro.

Os aplicativos sem servidor abrangem muitas categorias diferentes de serviços:

- **Computação:** AWS Lamba, AWS Fargate;
- **Armazenamento de Dados:** Amazon Simples Storage Service (S3), Amazon Aurora Serverless, Amazon DynamoDB, Proxy;
- **Integração:** Gateway de API, Amazon Simple queue Service (Amazon SQS), Amazon Simple Notification Service (Amazon SNS), Step Functions, AWS AppSync, Amazon Event Bridge.

## :one: O que é Amazon API Gateway?

O Amazon API Gateway é um serviço totalmente gerenciado (sem servidor) que facilita aos desenvolvedores criar, publicar, manter, monitorar e proteger APIs em qualquer escala.

API Gateway é uma porta de entrada que lida com preocupações comuns, permitindo que os desenvolvedores se concentrem na lógica de negócios.

- Estrangulamento;
- Cache;
- Autorização;
- Chaves de API;
- Planos de uso;
- Mapeamento de solicitação/resposta.

![API Gateway](Imagens/API%20Gateway.png)

### :arrow_right: Tipos de Endpoint

- **Otimizado para bordas:** Utiliza o CloudFront para reduzir a sobrecarga da conexão TLS (reduz o tempo de ida e volta);

  - Indicado para um cenário onde os clientes estão geograficamente bem distribuídos globalmente;
  - Utiliza o conceito de CDN (*Content Delivery Network*).

- **Regional:** Tipo de API recomendado para casos de uso geral;
  
  - Projetado para construir APIs para clientes na mesma região.

- **Privado:** Acessível apenas na VPC (e em redes conectadas à VPC).

  - Projetado para construir APIs usadas internamente ou por microsserviços privados.

### :arrow_right:  Exemplo de Arquitetura de API

![Exemplo de Arquitetura de API](Imagens/Exemplo%20de%20Arquitetura%20de%20API.png)

### :arrow_right: Protocolos Suportados

- APIs RESTful

  - Solicitação/Resposta;
  - Métodos HTTP como GET, POST, etc.;
  - Comunicação de curta duração (limite de 29 segundo - que já é tempo demais! Geralmente as interações duram na casa dos milisegundos);
  - Apátrida (Sem estado).

- APIs WebSocket

  - WebSocket sem servidor;
  - Canal de comunicação de duas vias;
  - Comunicação de longa duração;
  - Com estado.

### :arrow_right: Integrações que Podem Ser Realizadas

Qualquer tipo de serviço pode ser utilizado com backend.

![Integrações com API Gateway](Imagens/Integrações%20com%20API%20Gateway.png)

Um exemplo de solução que utiliza o API Gateway é o Pix do Itaú.

Essa solução cai como uma luva no contexto do Itaú, pois o número de clientes é gigantesco, milhares de transações são realizadas por minuto e a provedora cuida do provisionamento sem necessidade da empresa se preocupar. Ela se preocupa apenas com as regras de negócio que estão sendo executadas ali.

### :arrow_right: O ciclo de uma solicitação

Os passos abaixo são considerados o mínimo de segurança que sua API deve ter. Lembre-se: Não é porque sua API está em uma rede privada ou funciona apenas através de uma VPN que ela está isenta de falhas de segurança.

A maioria dos ataques ocorrem na camada 7 (Aplicação) e não na camada 4 (Rede) do modelo OSI.

![Ciclo de Solicitação API Gateway](Imagens/API%20Gateway%20-%20Ciclo%20de%20Solicitação.png)

Os passos são os seguintes:

1. **Amazon WAF**: Utilizar alguma lista de controle de acesso, para identificar quem pode ou não enviar solicitações pra API;

2. **Autenticar:** Autenticação do usuário é feita para ver se ele tem acesso e se é ele mesmo que está tentando acessar a API. Pode ser feita utilizando o AWS Identity and Access Management (IAM);

3. **Autorizador:** O usuário utiliza um autorizador Lambda, um token JWT ou o Amazon Cognito e o sistema verifica se ele tem acesso aquele determinado recurso;

4. **Autorizar:** O acesso a integração é liberado para a requisição seguir em frente.

**NUNCA** realize as etapas de autenticação e autorização diretamente no back-end da aplicação, isso pode ser uma tremenda falha de segurança, pois caso o hacker tendo acesso ao back-end, mesmo sem autorização, ele pode descobrir brechas de segurança através de bibliotecas e conseguir invadir os recursos.

Todo esse processo é muito rápido e demora de 3 à 5 milisegundos.

O API Gateway faz todas essas etapas, então utilize e não faça através de hardcode: gasto de tempo de desenvolvimento e gasto de processamento no back-end.

Utilizar os serviços nas Regiões de Norte da Virgínia e Oregon pois tem os melhores preços e índices de disponibilidade.

## :two: O que é FAAS?

### :arrow_right: Introdução

FAAS (Function As A Service) é diferente de Serverless. Acontece que FAAS foi uma das primeiras, senão a primeira implementação de Serverless que estourou, portanto, sempre que se fala nesse tema, logo se associa a essa abordagem, porém, vai muito além disso. Vimos, por exemplo, que serviços como S3 (armazenamento de objetos), DynamoDB (banco de dados) e API Gateway são exemplos de aplicações Serverless com outros objetivos além de permitir rodar um script sem se preocupar com o provisionamento de infraestrutura.

Na imagem abaixo temos uma visão alto nível do FAAS: funções, que podem ser escritas em qualquer linguagem de programação, que resolvem um pequeno problema.

![FAAS - Visão Alto Nível](Imagens/FAAS%20-%20Visão%20Alto%20Nível.png)

Por exemplo, em uma aplicação bancária, na funcionalidade de pagamento, precisamos verificar se o cliente tem saldo, se a conta destino é válida, realizar a transação etc. Cada uma dessas etapas pode ser uma função lambda diferente.

O AWS Lambda cobra por uso e não por instância, logo, não é mais custoso e facilita manutenção e uma falha em um dos pontos não afeta os demais.

O custo está diretamente relacionado com a qualidade do código. Isso porque a precificação é feita de acordo com o número de solicitações e o tempo de duração das execuções (GB por segundo). Portanto, se o seu código não é otimizado, você corre sérios riscos de pagar mais do que deveria.

### :arrow_right: Arquivos

Os arquivos que compõe o serviço que irá rodar no AWS Lambda ficam compactados e armazenados em um bucket do S3.

Esses arquivos tem limite de tamanho: máximo de 50 MB de arquivos compactados e 250 MB descompactados. Porém, devemos tentar manter no máximo 10MB máximo, sendo o ideal apenas 1MB.

Conforme a imagem abaixo mostra, os arquivos da função ficam separados em camadas. Na camada mais de cima Código de Função, é onde vão ficar os arquivos do script que devem ser executados e nas demais camadas (Camada de Função) os arquivos de dependência.

![Composição de um Lambda](Imagens/Composição%20de%20um%20Lamba.png)

No YAML de declaração da função especificamos os arquivos que fazem parte de cada camada e eles são compactados separadamente.

### :arrow_right: Como Funciona

Na imagem abaixo temos o esquema do funcionamento do AWS Lambda:

![Esquema de Funcionamento AWS Lambda](Imagens/Esquema%20de%20Funcionamento%20AWS%20Lambda.png)

O AWS Lambda pode ser invocado de três formas:

- **Síncrono:** Quando o chamador espera a resposta da função;

  - Útil quando você precisa de uma resposta imediata;
  - Erros retornados ao chamador;
  - Retorna aceleradores quando você atinge o limite de simultaneidade;
  - Exemplo de evento que utiliza chamada síncrona: API Gateway.

- **Assíncrono:** Quando o chamador não espera uma resposta da função;

  - Chamador obtem apenas uma confirmação da função Lambda de que a requisição dele está sendo processada;
  - Utiliza uma fila interna e pode persistir requisições por até seis horas;
  - Suporta duas à três retentativas, destinos e DLQ.

- **Mapeamento de Origem de Eventos:** Integração com fontes de eventos específicas;

  - Comportamento similar ao síncrono;
  - Diferença é que requisições chegam em lotes.

Exemplos de serviços que invocam o AWS Lambda de cada uma das formas apresentadas acima:

![Serviços AWS x Forma de Invocação do Lambda](Imagens/Serviços%20AWS%20x%20Forma%20de%20Invocação%20do%20Lambda.png)

Os ambientes de execução (EE - Execution Environment) processa uma solicitação por vez e é onde de fato o seu código irá ser executado.

O AWS faz o aprovisionamento das máquinas de acordo com a necessidade

Há uma trava para no máximo 1000 execuções em paralelo, porém, da pra abrir um ticket pra AWS pra aumentar esse limite em caso de necessidade

- O professor já  viu 1 milhão em paralelo.

![Ciclo de vida do ambiente de execução](Imagens/Ciclo%20de%20vida%20do%20ambiente%20de%20execução.png)

O processo de criação da MicroVM, descompactação do código e ficar pronto pra executar é chamado de **Code Start**.

Você não é cobrado pelas MicroVMs criadas, apenas pelo tempo de utilização das mesmas.

Uma MicroVM utiliza o conceito de containers, porém, são mais rápidos, pois containers processam requisições em paralelo, enquanto MicroVMs atendem uma requisição por vez.

Criar um Lambda para cada endpoint da API.

## :three: Observabilidade

Podemos considerar que você tem observabilidade bem implementada quando temos: métricas, log e rastreamento.

Esses mecanismos não tem como objetivo resolver problemas mais rápido e sim identificá-los com maior velocidade. Como resolver pode ser mais demorado ou não, dependendo de cada cenário.

### :arrow_right: Métricas

REST

- Contagem de chamadas de API;
- Latência;
- 4XXs e 5XXs;
- Latência de integração;
- Contagem de ocorrências de cache;
- Contagem de falhas de cache.

HTTP

- Contagem de chamadas de API;
- Latência;
- 4XXs e 5XXs;
- Latência de integração;
- Dados processados.

WebSocket

- Contagem de conexões;
- Contagem de mensagens;
- Erro de integração;
- Erro de cliente;
- Erro de execução;
- Latência de integração.

Além dessas métricas, também existirão as personalizadas, que são criadas a partir do negócio no qual a aplicação está envolvida.

### :arrow_right: Logs

Tenha logs padronizados preparados para informações do tipo ERROR, INFO e DEBUG. Logs padronizados facilitam a busca de informações.

### :arrow_right: Rastreamento

Quer diminuir o tempo de um War Room? Tenha uma aplicação rastreável!

É possível visualizar todo o caminho percorrido por uma requisição e verificar métricas relacionadas a cada um dos pontos pelo qual ela passou.
