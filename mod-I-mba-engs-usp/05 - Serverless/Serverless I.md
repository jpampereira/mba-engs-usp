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

Utilizar os serviços nas Regiões de Norte da Vrigínia e Oregon pois tem os melhores preços e índices de disponibilidade.
