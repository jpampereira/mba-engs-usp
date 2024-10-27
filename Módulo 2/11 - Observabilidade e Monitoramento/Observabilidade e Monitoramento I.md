# Observabilidade e Monitoramento I

Enquanto estamos na fase de desenvolvimento de uma aplicação não precisamos lidar com certas responsabilidades que são específicas de ambientes produtivos. Podemos fazer uma analogia com a construção de um avião comercial. Durante a fase de construção, podemos trocar as peças, replanejar o projeto, realizar experimentos, porém, na hora da viagem esse avião deve estar funcionando da forma esperada para que não ocorram acidentes. Voltando para o desenvolvimento de software, enquanto estamos desenvolvendo a aplicação não focamos em pontos, como ela ser escalável, pouco custosa e que tenha alta disponibilidade. Porém, quando essa aplicação subir, ela deve funcionar conforme o esperado, caso contrário, impactará a experiência do usuário.

Outro ponto importantíssimo quando estamos falando de ambientes produtivos, seja no cenário da aviação ou de software, é o monitoramento e a observabilidade. Esses dois conceitos, que são distintos, nos concedem visibilidade do projeto durante o seu funcionamento, permitindo rastrearmos possíveis inconsistências, que se transformam em melhorias para que essas não voltem a ocorrer.

## :one: Monitoramento x Observabilidade

![Monitoramento x Observabilidade](Imagens/Monitoramento%20x%20Observabilidade.png)

## :two: Monitoramento

### :arrow_right: Definição

É o processo de coletar, analisar e usar dados sobre o desempenho de um sistema, infraestrutura ou aplicação com base em métricas predefinidas. O objetivo é detectar anomalias, falhas e problemas de desempenho. Ele se baseia em alertas configurados antecipadamente, sendo eficaz para monitorar eventos e condições específicas.

### :arrow_right: Características

- **Proativo:** O monitoramento é configurado para observar métricas-chave, com o uso de CPU, memória, tempo de resposta e disponibilidade.;
- **Métricas Definidas:** Baseia-se em métricas pré-configuradas, com o uso de recursos, contagem de erros ou latência;
- **Alertas:** Envia notificações automáticas quando essas métricas ultrapassam limites (*threshold* ou limiar) estabelecidos (por exemplo, CPU acima de 80%);
- **Visão Superficial:** Ele oferece uma visão clara sobre a "saúde" do sistema, mas é limitado àquilo que foi previamente configurado para monitorar. Se um problema não foi antecipado, ele pode passar despercebido.

### :arrow_right: Exemplo

Quando você configura um monitoramento para alertá-lo se o uso da CPU de um servidor ultrapassar 90%. Quando esse limite é atingido, você recebe um alerta para investigar.

### :arrow_right: Analogia

É como um sistema de alarme. Ele é configurado para soar quando algo específico dá errado (como portas abertas ou movimento detectado). Ele avisa se algo conhecido falha, mas não pode prever o inesperado.

### :arrow_right: SRE (Site Reliability Engineers)

Segundo engenheiros do Google, esses são os quatro pontos que devem sempre ser monitorados em uma aplicação:

1. **Latência:** Tempo de resposta de uma requisição;
2. **Tráfego:** Tudo o que está sendo feito no site, como número de usuário ativos, requisições realizadas etc.
3. **Erros:** Erros específicos que indicam inconsistência;
4. **Saturação:** Se os recursos estão chegando no limite.

## :three: Observabilidade

### :arrow_right: Definição

É um conceito mais amplo e profundo, focado na capacidade de entender o comportamento interno de um sistema complexo apenas examinando suas saídas (logs, métricas, traces). Enquanto o monitoramento mede coisas predefinidas, a observabilidade permite que você descubra problemas não antecipados, explorando dados mais detalhados.

### :arrow_right: Exemplo

Ao notar que o tempo de resposta de uma aplicação está aumentando, você usa ferramentas de observabilidade para investigar os logs, traces e métricas de múltiplos serviços e descobre que o problema está em uma interação lenta com o banco de dados.

### :arrow_right: Analogia

É como uma câmera de segurança inteligente. Ela grava todos os eventos e você pode investigar o que aconteceu mesmo que o alarme não tenha soado. Se houver um comportamento estranho que você não antecipou, você tem os dados para anlisá-lo e entender melhor o que ocorreu.

### :arrow_right: Ferramentas

Temos opções pagas como o Datadog e o New Relic ou versões gratuítas e open source como o Open Telemetry e o Elastic Stack ELK.

### :arrow_right: Pilares

#### :arrow_right::arrow_right: Logs

São registros textuais gerados por aplicações, sistemas operacionais, servidores ou outros componentes de softwares para descrever eventos, ações e estados ocorridos em determinado momento.

Uma ótima analogia é quando comparamos um log a uma foto: Ambos são um registro de algo que aconteceu no passado.

Eles geralmente incluem informações como:

- **Timestamp (Data e Hora):** Quando o evento ocorreu;
- **Nível de Log:** Indica a severidade do evento, como INFO, DEBUG, ERROR, WARNING, etc;

  | Nível | Descrição |
  | :---: | :---: |
  | DEBUG | Informações detalhadas usadas para depuração. |
  | INFO | Informações sobre operações normais. |
  | WARNING | Potenciais problemas que não afetam o sistema, mas podem necessitar de atenção. |
  | ERROR | Error que impactam partes do sistema, mas não o desativam completamente. |
  | CRITICAL/FATAL | Erros críticos que podem resultar em falha total ou interrupção significativa do serviço. |

- **Mensagem:** Uma descrição do evento, o que aconteceu ou o status do sistema;
- **Contexto:** Informações adicionais como ID de usuário, nome do serviço, ou qualquer dado que ajude a identificar a causa ou impacto do evento.

É importante centralizar os logs da aplicação em uma única plataforma e que seja possível correlacionar os logs de diferentes componentes. Para isso é imprescindível que eles sejam estruturados de forma que possam ser compreendidos. Além disso, é importante um ponto de atenção sobre a retenção e rotação desses logs, para que os custos de armazenamento e processamento não acabem se tornando elevados.

#### :arrow_right::arrow_right: Métricas

São medições quantificáveis de um sistema. Elas fornecem uma visão em tempo real de como os recursos estão sendo utilizados e como as aplicações estão se comportando, facilitando a detecção de anomalias e o diagnóstico de problemas.

As métricas são simples, agregadas (é possível extrair a média, mediana, p-95, máximo, mínimo, etc) e leves em termo de armazenamento, sendo ideais para monitoramento contínuo.

##### Categorias

- Métricas de sistema (Infraestrutura):

  - **CPU:** Percentual de uso de CPU de uma máquina ou serviço;
  - **Memória:** Quantidade de memória sendo utilizada;
  - **Rede:** Quantidade de dados sendo enviados e recebidos;
  - **Disco:** Espaço em disco disponível e taxa de leitura/gravação.

- Métricas de aplicação:

  - **Taxa de Erros:** Percentual de requisições que resultaram em erros;
  - **Latência:** Tempo médio de resposta de uma requisição;
  - **Taxa de Requisições:** Quantidade de requisições recebidas por segundo;
  - **Uso de Banco de Dados:** Consultas por segundo, tempo de resposta das queries, conexões abertas;

- Métricas de negócio:

  - **Número de Usuários Ativos:** Quantidade de usuários acessando a ferramenta;
  - **Transações Completadas:** Quantidade de compras ou ações importantes realizadas pelos usuários;
  - **Conversão:** Percentual de visitantes que realizaram uma ação desejada;
  - **Receita por Minuto:** Valor monetário gerado em um período específico.

A métrica não precisa ser necessariamente gerada pela aplicação durante as ocorrências. Uma alternativa é capturar os logs, de tempos em tempos, e gerar as métricas a partir dele.

##### Tipos

- **Contínuas:** Representa valores que podem variar em intervalos contínuos de tempo. Exemplo: Uso de CPU ou latência de requisição;
- **Contagem:** São incrementados ou acumulados ao longo do tempo. Exemplo: Número de requisições processadas por um serviço;
- **Derivadas:** Calculadas a partir de outras métricas. Exemplo: Taxa de erro derivada de dividir o número de erros pelo total de requisições. Disponibilidade é outro exemplo, pois é a taxa de *uptime* dividido pelo *uptime* + *downtime*.

##### Correlação

O sistema de observabilidade nos permite ter o entendimento completo do problema pois possibilita correlacionarmos as métricas de diferentes categorias. Exemplo: se o número de requisições aumentar, isso consequentemente vai aumentar o uso do banco de dados e de memória/CPU da aplicação a ponto dela ficar sobrecarregada. Enquanto ela realiza o escalonamento, nesse meio tempo, ela irá produzir um aumento na latência para atender as requisições dos usuários. Esse aumento na demora do usuário para obter a resposta pode ser decisivo para ele não comprar mais o produto ou cancelar o serviço (*churn*). A partir disso pode ser realizado um estudo para ajuste no limiar de escalonamento da aplicação para que esse aumento na latência não ocorra.

##### Pontos Importantes

É importante que a coleta dessas métricas seja feita de forma automatizada e que seu registro seja temporal para que possamos definir qual o melhor nível de granularidade a ser utilizado. A partir dessas métrics é esperado que sejam definidos alertas baseados em limiares predefinidos para que as equipes interessadas/responsáveis sejam notificadas quando ocorrerem (hoje existem plataformas que permitem a criação de alertas dinâmicos baseado em contexto). A partir dessas métricas, deve ser possível visualizá-las em gráficos e dashboards.

##### Benefícios

- **Detecção Precoce de Problemas:** Monitorar métricas permite identificar falhas ou degradações de desempenho antes que elas impactem usuários;
- **Aprimoramento Contínuo:** O monitoramento regular de métricas ajuda a identificar padrões de uso e possível otimizações;
- **Escalabilidade:** Métricas de infraestrutura ajudam a planejar o escalonamento de recursos à medida que o sistema cresce.

##### SLA e SLO

O SLA (ou Acordo de Nível de Serviço) é um contrato formal entre um provedor de serviço e um cliente que define o nível de serviço esperado. Geralmente inclui penalidades ou compensações se esses níveis de serviço não forem atingidos. Um exemplo comum é um SLA que garante 99,9% de disponibilidade de um serviço ao longo do mês.

O SLO (ou Objetivo de Nível de Serviço) é um subconjunto de um SLA, focando nos objetivos que o provedor de serviço define para manter o acordo. Ele define métricas técnicas mensuráveis, como tempo de resposta, taxa de erro, disponibilidade, etc. O SLO é a métrica que se monitora par verificar se o SLA está sendo cumprido.

- As métricas coletadas no sistema ao longo do tempo fornecem dados históricos que ajudam a definir SLOs realistas;

- Exemplo: Se as métricas históricas mostram que a latência média de uma aplicação é 150ms, um SLO de 200ms de latência máxima pode ser estabelecido com confiança.

Exemplos:

- O SLA de disponibilidade que se cair abaixo de 99,9%, a provedora será penalizada (por exemplo, desconto para o cliente).  O SLO nesse caso será que o sistema deverá estar disponível 99,9% do tempo e para isso será monitorado o *uptime* e *downtime* do sistema.

- O SLA definie que se a latência exceder 200ms consistentemente, compensações ou melhorias devem ser implementadas. O SLO será que o tempo de resposta de uma requisição não deve ultrapassar 200ms em 95% das vezes. Para isso, será monitorada a latência, através da sua média histórica e seus percentis (P95, P99, etc).

O uso de métricas para monitorar SLO e SLA trazem transparência, garantindo que o cliente saiba que o serviço está funcionando conforme o acordado, além de permitir a proatividade das equipes para que tratem os problemas antes deles violarem o SLA e possibilite a melhoria contínua, uma vez que o acompanhamento das métricas ao longo do tempo permite que os SLOs e SLAs sejam ajustados de forma que reflitam a situação atual do sistema.

#### :arrow_right::arrow_right: Rastreamento (Tracing)

É o processo de rastrear o caminho completo de uma requisição enquanto ela percorre os diferentes serviços e componentes de um sistema distribuído.

O objetivo é monitorar e entender o comportamento de aplicações distribuídas, como microsserviços, identificando gargalos de desempenho, falhas, ou pontos de lentidão em todo o ciclo de vida de uma requisição.

Vamos entender na prática como o Tracing funciona. No exemplo abaixo temos um desenho que representa os microsserviços que compõe uma aplicação. O microsserviço A conversa com os B, C, D e E; o C conversa com o F e o D com o E:

![Tracing 1](Imagens/Tracing%201.png)

Seja o microsserviço A o ponto de interação do usuário com o sistema. Ele faz uma requisição e recebe a resposta em 301 milissegundos. Porém, definimos como limiar que as requisições não deveriam ultrapassar os 200 milissegundos. Pelo desenho abaixo vemos que o gargalo que está causando esse problema encontra-se na comunicação entre os microsserviços D e E:

![Tracing 2](Imagens/Tracing%202.png)

Porém, vamos visualizar esse trajeto no formato que as ferramentas de observabilidade exibem. Temos na barra azul o tempo de vida da requisição e nas linhas abaixo, em ordem cronológica, o quanto cada microsserviço consumiu de tempo. Vemos que a barra do D é bem maior em comparação com as outras. O microsserviço D possui subrotinas e vemos que na segunda subrotina houve um erro, este responsável possivelmente responsável pelo aumento no tempo excessivo para tratamento da requisição.

![Tracing 3](Imagens/Tracing%203.png)

Com a ferramenta de tracing conseguimos identificar rapidamente o ponto que estava ocasionando o aumento da latência e com uma análise minuciosa desse ponto, foi possível identificar o erro que gerou essa demora.

#### :arrow_right::arrow_right: Alertas

Vamos analisar um caso prático para entender como podemos configurar os alertas do sistema.

Seja o seguinte caso representado pelo histograma da latência pela quantidade de requisições:

![Caso Prático 1](Imagens/Caso%20Prático%201.png)

Vemos que a maioria das requisições são atendidas em um tempo inferior a 100 milissegundos, porém, há uma pequena parcela onde esse limiar é excecido chegando a casos onde chega até 150 milissegundos. Nosso objetivo é mitigar esses casos.

Se analisarmos o histórico da métrica de requisições por segundo ao longo de um dia, verificamos que por volta das 13 horas atingimos o pico máximo de requisições:

![Caso Prático 2](Imagens/Caso%20Prático%202.png)

Partindo pra outra métrica, temos o histórico do tempo de resposta, em milissegundos, ao longo dessas mesmas 24 horas e identificamos um aumento considerável a partir do meio dia, que se estende mais ou menos até o meio da tarde, então retornando para um valor aceitável:

![Caso Prático 3](Imagens/Caso%20Prático%203.png)

Se cruzarmos o histórico das duas métricas, vamos ver que o aumento no tempo de resposta ocorre no período onde há maior número de requisições, o que mostra a correlação entre elas:

![Caso Prático 4](Imagens/Caso%20Prático%204.png)

Isso mostra que a infraestrutura atualmente existente não suporta com qualidade períodos onde o sistema é mais requisitado.

A partir desse estudo, podemos visualizar o histórico de métricas monitoradas da aplicação, como CPU, memória, disco etc e definir limiares seguros para alerta e escalonamento, evitando que o impacto seja sentido pelo usuário final.

O Objetivo principal de um alrta é detectar rapidamente incidentes ou potenciais falhas, como picos de latência, aumento da taxa de erro, ou quedas na disponibilidade de um sistema. Alertas são disparados quando uma condição específica, geralmente definida por métricas, logs ou traces, ultrapassa um limiar ou atende a uma regra configurada.

- Exemplos:

  - Se a CPU de um servidor estiver acima de 90% por mais de 5 minutos;
  - Se a taxa de erro de uma API for maior que 1% das requisições.

Algumas boas práticas são:

- Evitar alerta em excesso (*Alert Fatigue*);
- Definir limiares claros;
- Priorizar alertas críticos;
- Automatização de respostas: Por exemplo, se a memória de uma aplicação atingir o limiar de alerta, enviá-lo e de forma paliativa realizar o aumento dos recursos até que o limite seja reestabelecido;
- Integrar alertas com ferramentas de notificação.
