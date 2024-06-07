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

### :arrow_right: Otimização de Recursos Computacionais

O método clássico para alocação de um serviço era colocarmos todos os componentes relacionados à aplicação em um mesmo servidor dedicado (servidor HTTP, back-end, cache, banco de dados etc) e no máximo em soluções de grande escala, separarmos a base de dados em um segundo servidor, também dedicado.

![Método Clássico de alocação de serviços](Imagens/Método%20Clássico%20-%20Aplicação%20direto%20na%20máquina%20host.png)

Com o surgimento da tecnologia de virtualização tornou-se possível separarmos logicamente os recursos computacionais de uma mesma máquina entre os componentes da aplicação. Essas instâncias lógicas são conhecidas como máquinas virtuais (*Virtual Machines* - VMs - ou máquinas *guest*). A cada uma delas é associada um sistema operacional próprio e uma determinada quantidade de recursos computacionais (processamento e memória). A quantidade determinada deve ser de acordo com o que o usuário considera suficiente para que a VM atinja a sua finalidade, isto é, faça o componente funcionar corretamente.

- A virtualização não resolve alguns problemas, como o fato que o dimensionamento dessas máquinas virtuais não acaba com a ociosidade de recursos computacionais, uma vez que é necessário pré-determinar a quantidade de recursos que a máquina virtual terá e não necessariamente eles estarão 100% em uso a todo instante, havendo horários de pico e horários de ociosidade;

- A máquina precisará alocar recursos em seu sistema operacional *host* (sistema operacional da máquina real) para que seja possível executar o HyperVisor, tecnologia que permite a virtualização.

![Aplicação executando em máquinas virtuais](Imagens/Aplicação%20executando%20em%20máquinas%20virtuais.png)

Seja o caso de uma aplicação sendo executada diretamente em um servidor, ou seja, com todos os componentes da aplicação funcionando diretamente no sistema operacional *host*. Desejamos transportar essa máquina para a Cloud devido a todo o *hype* que essa vertente está tendo nos últimos anos. Nesse momento podemos cometer nosso primeiro equívoco: achar que instanciando uma máquina virtual de mesma capacidade no provedor (utilizando, por exemplo, o serviço do EC2) e colocar a aplicação para executar nela, que tudo estará funcionando exatamente da mesma forma e que vamos estar obtendo as vantagens que um ambiente de nuvem oferece.

- Uma máquina virtual se comparada a uma máquina real (ou máquina host), possui um delay para a execução das instruções. No caso de um ambiente virtualizado, a aplicação precisa conversar com o SO da máquina guest, que conversa com o hardware (no caso, como é virtualizado, a conversa é com o HyperVisor), só então conversar com o SO host que conversa com o hardware da máquina, onde de fato a instrução será executada. No caso de um ambiente real, essa comunicação é direta com o SO da máquina host, sendo mais rápido. Essa diferença é na casa dos micro ou milissegundos e pode ser imperceptível do ponto de vista do usuário. Mas não podemos dizer que é igual;
- Não necessariamente se tornará mais barato;

![Servidor On Premisses x Instância Cloud](Imagens/On%20Premisses%20x%20Cloud.png)

O primeiro passo é ao invés de configurarmos todos os componentes da aplicação dentro de uma única máquina virtual, é utilizarmos os diferentes serviços que o provedor oferece, que já são especializados de acordo com as nossas necessidades, logo, são desenvolvidos da forma mais otimizada possível e respeitam todos os requisitos de segurança como backup, redundância etc. A utilização dos serviços retira a responsabilidade de desenvolvimento e disponibilidade dos componentes do lado do cliente, ficando a cargo da provedora que possui um SLA muito rígido em relação a isso.

![Granularidade - Utilização de Serviços Cloud](Imagens/Granularidade%20-%20Utilização%20de%20Serviços%20Cloud.png)

Entendido esses pontos, ainda sim você pode cometer outro grande equívoco que pode te trazer prejuízos financeiros desnecessários. Nesse caso estamos falando da distribuição de recursos nas instâncias.

Quando configuramos instâncias dos serviços dentro do provedor, em alguns casos vamos nos deparar com a necessidade de determinar o tamanho das máquinas virtuais onde estes serão executados (no caso, definir a quantidade de recursos computacionais como processamento, memória, quantidade de disco para armazenamento etc). Podemos cometer o erro de instanciar máquinas grandes para que tenhamos uma "gordura" em momentos de maior tráfego, porém, se analisarmos o seguinte caso, podemos ver que essa pode não ser uma boa ideia.

![Simulação de gastos máquina grande](Imagens/Simulação%20de%20gastos%20máquina%20grande.png)

Na imagem acima vemos que temos instânciadas, duas (boa prática, por questões de redundância)  máquinas m5.2xlarge, que possuem 8 vCPUs e 32 GB de memória RAM cada. Vemos que até 11 usuários essas duas máquinas são suficientes para processar todas as requisições e acima disso novas instâncias são criadas conforme necessidade, respeitando o princípio da elasticidade/escalabilidade de ambientes de nuvem. Porém, se analisarmos, abaixo dos 11 usuários conectados, temos um grande gap entre a quantidade de recursos disponíveis e o que de fato é utilizado. Essa diferença permanece quando novas instâncias são criadas, uma vez que são alocados 8 vCPUs e 23 GB de RAM por vez, que não necessariamente serão utilizados em sua totalidade. O valor pago se estamos utilizando uma pequena porcentagem de recursos da instância ou sua totalidade é o mesmo. Podemos concluir que a quantidade de recursos desse componente está superestimado e que ajustes podem ser feitos para reduzir o custo de 737,28 dólares mensais.

Algo que devemos entender é a importância de desenvolvermos aplicações bem otimizadas, que consumam recursos conforme a necessidade e em momentos de ociosidade (ou estado de IDLE) este seja o mínimo possível. Tendo isso em mente, devemos definir o tamanho máximo da máquina da instância de acordo com a quantidade mínima necessária para que a aplicação funcione em estado de IDLE, ou seja, para que a aplicação consiga ser executada. Além disso, a escalabilidade dos recursos deve ser feita de forma proporcional ao tráfego, sem deixar gaps de recursos ociosos. Na imagem abaixo vemos que, para a mesma aplicação do gráfico anterior, se trocarmos por máquinas m5.large, com 2 vCPUs e 8GB de RAM, conseguimos atender a aplicação em cenários de poucas requisições e os recursos são escalados de forma que não se formam gaps entre a quantidade disponível e a quantidade utilizada. Apesar de estarmos alocando mais máquinas quando a quantidade de requisições aumenta, essas máquinas são bem mais baratas por terem menor poder computacional, gerando um custo mensal de 501,12 dólares, uma redução de 32% no valor, se comparado ao cenário anterior e muito mais condizente com a quantidade de recursos de fato utilizados para se atender as requisições.

![Simulação de gastos máquina pequena](Imagens/Simulação%20de%20gastos%20máquina%20pequena.png)

Outra vantagem de utilizarmos instâncias menores é que em cenários onde uma das instâncias falha, as demais não são sobrecarregadas. Seja o cenário 1 onde temos a aplicação funcionando em cima de máquinas m5.2xlarge e o cenário 2 onde utilizamos máquinas m5.large. No cenário 1, caso seja atingida a quantidade de 6000 requisições, teremos instanciadas 4 máquinas, enquanto no cenário 2 teremos 16. Caso uma das máquinas do cenário 1 falhe, significa uma perda de 25% dos recursos computacionais até que essa máquina seja reposta, enquanto no segundo cenário representa uma perda de 6,25%. Se considerarmos que 25% de perda de capacidade é significativo, entendemos que as demais máquinas serão sobrecarregadas, podendo gerar um efeito em cascata que cause problemas nas demais. Por sua vez, a perda de 6,25% de recursos pode passar despercebida com as demais conseguindo dar conta. Com isso podemos concluir que utilizar máquinas menores, além de tornar o uso de recursos muito mais otimizado, faz com que mais máquinas sejam alocadas em cenários de altro tráfego e pequenos pontos de falha nas instâncias causem menor impacto na aplicação como um todo.

## :eight: Arquitetura

Quando pensamos na arquitetura devemos nos preocupar tanto com a arquitetura da aplicação quanto a de infraestrutura. Essas devem trabalhar juntas, caso contrário, se uma delas for mal elaborada a outra ficará comprometida.

Quando estamos falando de arquitetura de infraestrutura de aplicações em nuvem, podemos utilizar um dos frameworks mais conhecidos pelo mercado, desenvolvido pela AWS e depois replicado por demais provedores: Well Architected Frameworks.

Princípios:

- Pare de adivinha suas necessidades de capacidade. Teste na prática quanto de infraestrutura será necessário para atender a sua solução;
- Sistemas de teste em escala de produção. Testes de funcionalidade podem ser feitos em ambientes reduzidos, porém, é necessário realizar testes de estresse com carga similar ao de um ambiente de produção;
- Automatize tendo em mente a experimentação arquitetônica;
- Considere arquiteturas evolucionárias. Muitas soluções iniciam como monolítos, pois são muito mais simples e em muitos cenários iniciais é o suficiente, porém, pode ser necessário com a expansão  da aplicação a adoção de outras arquiteturas mais flexíveis como microsserviços. Portanto, desenvolva seu software de forma que seja possível lá na frente desmembrá-lo em módulos sem grandes esforços;
- Impulsione arquiteturas usando dados. Utilize dados de logs para entender o comportamento do sistema e de seus usuários para definir soluções que atendam suas necessidades;
- Melhore durante os dias de jogo. Não espere um grande problema acontecer, como uma indisponibilidade ou ataque de negação de serviço, por exemplo, para descobrir se sua equipe será capaz de contorná-los. Crie dias de jogos, onde são feitas simulações de problemas em ambientes produtivos para treinar a equipe e perceber virtudes e dificuldades dos membros, para corrigí-las.

Pilares:

- Excelência Operacional;
- Segurança;
- Confiabilidade;
- Eficiência de Desempenho;
- Otimização de Custos;
- Sustentabilidade.

Princípios da Arquitetura Eficiente:

- Acoplamento fraco;
- Gestão de dados independente;
- Independência de camadas;
- Versionamento;
- Testes;
- Automação de deploys / pipelines;
- Monitoramento;
- Plano de Contingência;
- Autorreparação;
- Análise e evolução constante.
