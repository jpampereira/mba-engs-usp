# Infra As Code (IAC) I

"*Para aprender a usar é necessário saber como a ferramenta funciona, e para saber como ela funciona é necessário saber como ela foi construída.*"

"*Sem virtualização não existe Infra As Code.*"

"*Over Engineering é quando um time utiliza soluções muito rebuscadas antes da necessidade. Por exemplo, quando estamos em processo de MVP, não precisamos utilizar soluções mais rebuscadas, pois estamos em um cenário reduzido e ainda tentando validar a solução. Caso ela venha a se comprovar útil, então devemos começar a pensar em opções mais adequadas. Tudo sem o seu tempo.*"

## :one: História da Infraestrutura em Nuvem

Anos 90:

- Não existiam Data centers, então os servidores eram implantados dentro dos provedores de acesso à internet;
- Os servidores eram computadores comuns que não tinham mais potência para serem usados como desktops (hoje a visão se inverteu: os servidores são muito mais poderosos do que os desktops);
- Pagávamos pelo serviço e não pela solução (pagávamos pela alocação do nosso antigo desktop em um hack e não pelo que era consumido de recursos);
- Não havia redundância de energia (no máximo um *Nobreak* para suportar pequenas quedas de energia);
- Não havia redundância de link;
- Não havia redundância de dados (se você quisesse, você precisava comprar um segundo HD e você mesmo instalá-lo na sua máquina);
- Não havia segurança de infraestrutura (nem lógica e nem física);
- E toda interação com o hardware era feita através de A.P.I (Alguém que Pressiona o Interruptor - era necessário você solicitar para alguém da provedora ir lá e apertar o interruptor ou você mesmo ir lá buscar a máquina para formatá-la e reconfigurá-la).

Anos 2000:

- Serviços como CPanel começam a ganhar mercado (era o mais próximo que tinhamos de virtualização: permitia a divisão da máquina em diferentes contas para que os usuários consigam executar pequenas tarefas distintas);
- Processadores multi-core se tornam mais populares;
- Os link ficam mais poderosos;
- Data centers de hospedagem mais bem estruturados surgem (salar fechadas, climatizadas, com geradores, Nobreaks mais fortes);
- Os serviços de hospedagem evoluem para ambientes compartilhados dentro de hardwares mais fortes (virtualização);
- A interação com o hardware ainda é por A.P.I (Mas existiam algumas exceções como o CPanel que permitia o reboot do seu usuário, porém, não do hardware, já que existiam outros trabalhando na mesma máquina);
- Ganha-se uma vantagem com máquinas virtualizadas, o reboot remoto do ambiente virtual;
- É o começo de uma versão tímida do que viria a ser Infra As Code.

De 2003 à 2006:

- A Amazon precisa de soluções que não existem no mercado para o seu e-commerce (nenhuma das oferecidas atendia ela);
  - Alta escalabilidade para suportar picos de tráfego;
  - Elasticidade para reduzir custo operacional quando não tiver demanda;
  - Flexibilidade para diferentes tipos de projetos;
  - Extensibilidade para derivar serviços a partir de outros serviços;
  - Redundância de dados, energia e link;
  - Segurança.
- Surge o S3;
  - Serviço de Armazenamento do AWS - Storage;
  - Utilizado para armazenamento de fotos e vídeos da plataforma de e-commerce.
- Surge o SQS;
  - Serviço de Enfileiramento de Mensagens do AWS;
  - Permitiu a Amazon tornar seu serviço assíncrono: o usuário não precisava mais ficar esperando a confirmação do pagamento para seguir navegando pela plataforma. Quando o usuário submete a sua compra, o serviço de SQS é disparado e a solicitação é encaminhada para uma fila de cobrança que ao ser concluída um e-mail para o usuário é enviado validando a ação.
- Surge o EC2;
  - Serviço de Virtualização do AWS;
- Surgem diversos outros serviços derivados como SNS (Serviço de Broker/Mensageria), RDS (Plataforma de Bancos de Dados) etc.
- Todos esses serviços da AWS possuem uma camada de segurança que faz redundância geográfica dos dados garantindo que eles não serão perdidos, atendendo um dos requisitos levantados pela empresa.

Diferencias do hardware em nuvem

- Hardware compartilhados com alto controle sobre o consumo de recursos;
- Redundância (em um mesmo Datacenter ou em diferentes localidades);
  - Múltiplas placas de rede;
  - Múltiplos links;
  - Múltiplas fontes de alimentação;
  - Múltiplas redes elétricas com alimentação de emergência;
- Segurança física e lógica;
- Controle e monitoramento remoto do hardware em nível granular

## :two: Arquitetura Client/Server x Arquitetura Cloud

Além da revolução em questões relacionados ao hardware, a nuvem também causou uma transformação na forma em como arquitetamos nossas soluções.

Por limitações de hardware, era comum a construção de soluções utilizando a arquitetura cliente/servidor, onde a máquina usuária se conectava a uma máquina alocada no provedor e essa continha tudo o que era necessário para que a aplicação funcionasse: servidor HTTP, certificados SSL, banco de dados, cache, back-end. Era muito caro o uso de máquinas compartilhadas (principalmente nos anos 90 e barateou nos anos 2000) e ainda mais se utilizassemos máquinas dedicas para os serviços. O máximo que se tinha eram aplicações com mais de um servidor, onde um era cópia do outro e esses recebiam requisições através de um balanceador de carga.

![Arquitetura Cliente/Servidor](Imagens/Arquitetura%20Cliente%20e%20Servidor.PNG)

Agora o usuário não conversa diretamente com o servidor e sim com uma infraestrutura de borda chamada **Hedge**. Ela é chamada assim pois ela fica no meio do caminho entre a sua máquina local e a infraestrutura da cloud, também conhecida como rede privada virtual (**VPC**). A provedora de nuvem é responsável pela segurança da infraestrutura utilizada pela sua solução (e não pela aplicação em sí), portanto, o Hedge possui mecanismos como Firewall, tabelas de roteamento, tratamento para tentativas de invasão, tratamento para força bruta etc. Esse componente é transparente para o cliente da Cloud, porém, é possível customizar algumas coisas conforme sua necessidade, como por exemplo, o serviço de **IAM** (Identity and Access Management), onde é possível configurarmos permissões de acesso àquela infraestrutura. É possível fazer outras coisas nessa camada de borda como configurar certificados SSL, retirando a necessidade de que isso seja feito na camada da aplicação e liberando processamento de criptografia e transferindo essa responsabilidade para a infraestrutura da provedora. Além do IAM, também temos o **Security Group**.

Portanto, quando uma requisição é feita, ela bate primeiro no Hedge e no IAM, onde são realizadas as verificações, e caso seja liberado, essa segue para a aplicação solicitada. Os serviços da AWS e a própria aplicação do cliente podem utilizar o serviço do IAM através de sua API para verificar se o usuário tem permissão de fazer a ação solicitada. Diferentemente do modelo Cliente/Servidor onde o usuário concentra todos os componentes da aplicação em uma única infraestrutura física, na nuvem esses componentes ficam "espalhados", onde apesar de estarem dentro de uma mesma VPC, por baixo dos panos os serviços não estão sendo executados na mesma máquina e talvez nem na mesma localização geográfica.

![Arquitetura Cloud](Imagens/Arquitetura%20Cloud.PNG)

## :three: Onion Architectural Vision

A visão arquitetural no formato de cebola permite visualizarmos as diferentes camadas que compõe um serviço. No caso da arquitetura da infraestrutura de provedores de nuvem, existem quatro camadas.

- **Hardware**;
- **Controle e Telemetria:** Os grandes provedores de nuvem fabricam seus próprios hardwares, portanto, desenvolvem módulos que vem acoplados aos equipamentos (via hardware ou software) que permite realizar sua monitoração (recursos, temperatura etc) e executar comandos remotamente;
- **Comutação e Provisionamento:** Os hardwares conversam uns com os outros. Quando você cria uma instância em um serviço (por exemplo, criou um novo bucket no S3), não é apenas uma máquina que gerencia todos os pontos relacionados a ele, apesar disso ficar transparente para o usuário. Por traz diferentes máquinas compartilham responsabilidades que eu conjunto foram esse serviço. Sendo assim, é necessário que existam mecanismos de comunicação entre eles;
- **API:** A existência de uma interface é necessária para que seja possível controlar tudo isso via console gráfico da AWS ou através de aplicações, sendo possível contruir seu próprio controlador (inclusive, o controle é maior quando feito direto via API, enquanto via console gráfico você fica mais limitado).

![Onion Architectural Vision](Imagens/Onion%20Architectural%20Vision.PNG)

## :four: Provedores

É possível utilizar toda essa infraestrutura de nuvem apresentada até o momento através de diferentes provedores, como a Google Cloud, a Amazon Web Services, o Azure, Oracle Cloud etc. Existem também provedores nacionais, sendo os principais a Hostinger, a Locaweb e a UOL Host. Porém, os provedores nacionais acabam não sendo a principal escolha pois as empresas pensam muitas vezes em escalar suas aplicações em escala global.

## :five: Isolamento

O paradigma de nuvem trouxe muitas vantagens quando estamos falando de infraestrutura:

### :arrow_right: Físico

- Restrições vantajosas:
  - Não é necessário que operadores estejam presencialmente no data center;
  - Não é necessário que operadores acessem fisicamente os servidores;

- Ganhos de Produtividade:
  - Monitoramento remoto de cada elemento do ecossistema;
  - Monitoramento automatizado;
  - Análise de telemetria e desempenho do hardware;
  - Migração remota de recursos lógicos;
  - Identificação automatizada de degradação ou falhas de hardware;
  - Manutenção programada.

- Melhorias de Segurança:
  - Acesso reduzido ao hardware;
  - Redução de chances de vazamento ou comprometimento de dados;
  - Redução ocorrências de acidentes e erros humanos;
  - Controle de danos e compartimentação de efeitos colaterais.

- Ganhos Financeiros:
  - Aumento da capacidade de escala de gestão dos recursos tecnológicos;
  - Redução de incidentes;
  - Redução de consumo de recursos energéticos;
  - Preços mais competitivos e flexíveis.

### :arrow_right: Lógico

- Estabilidade:
  - Redundância de recursos;
  - Redução de pontos de falha;
  - Balanceamento de recursos;
  - Migração de recursos e aplicações sem interferência dos operadores do data center.

- Produtividade:
  - Independência no controle da infraestrutura;
  - Integração via código ou ferramentas de terceiros para gestão automatizada;
  - Acesso às métricas de infraestrutura e aplicações para análise e otimização;
  - Abstração de infraestrutura para consumo e desenvolvimento de serviços;
  - Versionamento e controle de ambientes.

- Segurança:
  - Dados transitórios criptografados;
  - Dados estacionários criptografados;
  - Alta granularidade nos níveis de permissões;
  - Alta granularidade de rede em nível lógico.

- Controle:
  - Autonomia de segurança;
  - Autonomia de provisionamento;
  - Autonomia de escalabilidade;
  - Autonomia de controle de acesso.

- Custos:
  - Consumo de recursos controlado pelo cliente em tempo real;
  - Automação;
  - Integração;
  - Controle aberto e transparente de custos.

## :six: Inovação

- Acesso a hardware e software de última geração sem imobilizar patrimônio: antes era necessário adquirir as máquinas e até mesmo as licenças de software, o que envolvia altos custos e quando eles se tornavam obsoletos, era necessário uma nova investida. Hoje basta instanciar uma nova máquina na provedora ou realizar a assinatura de um software de forma muito mais simples e sem envolver altos custos logo no ínicio e repassar a responsabilidade de disponibilizar a infraestrutura mais atualizada possível para a provedora.

- Integração de APIs de terceiros que utilizam sua própria conta para executar aplicações e serviços de última geração. Você não precisa mais desenvolver a ferramenta, basta apenas contratá-la.

- A facilidade de qualquer um se tornar um provedor de serviços especializados. Utilizando o serviço de um terceiro, você pode criar um novo serviço em cima desse, com uma roupagem específica sua e revendê-lo.
  - Exemplo: criar um serviço de armazenamento de arquivos no estilo DropBox utilizando a estrutura do S3 por baixo;
  - O Heroku é um exemplo de serviço construído em cima da AWS. Ele é mais caro do que se utilizassemo direto o AWS, porém, traz maior facilidade pois abstrai algumas questões.

- A granularidade permite criar, validar e, evoluir ou encerrar projetos com rapidez e baixos custos.

- Consumir serviços e softwares sob demanda sem a necessidade de aquisição de licenças e sem carência de uso.

## :seven: Granularidade

A AWS hoje possui aproximadamente 276 serviços diferentes, porém, esse número muda a todo instante. Isso significa que é humanamente impossivel conhecer todos eles para conseguir trabalhar com plataformas de nuvem, portanto, tenha calma.

Cada serviço foi desenhado com uma finalidade. Quando você tiver uma necessidade, busque qual funcionalidade do provedor faz mais sentido e nesse momento você busca aprender sobre ele. Ou seja, aprenda sobre um serviço conforme a necessidade.

Comece aprendendo sobre serviços mais fundamentais, isto é, que quase toda aplicação utiliza, coo o EC2, o S3, o RDS etc. Procure se especializar dentro de um único provedor e só depois procure conhecer esses serviços nos demais.

### :arrow_right: Abstração de Serviços

Os serviços podem ser abstraídos tornando-se novos serviços. Heroku roda em cima da AWS. Custa mais caro do que você utilizar a infraestrutura da Amazon direto, mas ele te poupa tempo.

Quanto mais próximo da computação pura mais barato é o custo computacional CPU/Memória. Em contrapartida, quanto mais abstraído maior é o custo/tempo.

Processos de consumo constante custam mais barato em serviços computacionais como o EC2. Por outro lado, processos de consumo esporádico e oscilante custam mais barato em serviços elásticos com Lambda, Fargate, Kubernetes e similares. O mesmo vale para bancos de dados.

Exemplo: utilizar uma instância de banco de dados através do RDS custa mais caro do que utilizar através de uma máquina EC2, porém, você não precisa se preocupar com questões de backup, redundância de dados, recuperação de desastres etc.
