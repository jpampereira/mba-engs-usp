# Cloud Computing (IaaS, PaaS, SaaS) I

## :one: O que é?

Computação em Nuvem (*Cloud Computing* ou apenas *Cloud*) é um modelo de entrega de serviços de computação pela internet. Ela permite o acesso on-demand a recursos compartilhados como servidores, armazenamento, aplicativos, redes etc. Um dos principais benefícios desse modelo é ajudar a reduzir significamente os custos de infraestrutura.

## :two: História e Evolução

[Brief History Cloud Computing](https://www.dataversity.net/brief-history-cloud-computing/)

Muitas vezes podemos ter a impressão de que a computação em nuvem foi criada junto do nascimento dos principais provedores de serviço desse modelo como AWS, GCP, Azure, IBM Cloud etc, porém, a ideia de compartilhar recursos de computação de forma distribuída remonta ao início da era da computação (década de 1960). Nos anos 1990 nós já conseguiamos acessar serviços de e-mail, por exemplo, através de browsers como o Netscape e o Internet Explorer e essa aplicação de e-mail estava executando em um servidor desconhecido pelo usuário, justamente a mesma ideia de nuvem dos dias de hoje.

Empresas como as já citadas ajudaram a consolidar o modelo de plataforma de nuvem, mas o conceito de ter um aplicativo sendo executado em um servidor desconhecido pelos usuários e podendo ser acessado pelos mesmos, existe anteriormente a criação dessas empresas.

A tecnologia de virtualização e o aumento de banda larga foram os principais impulsionadores para a adoção generalizada da computação em nuvem, sendo hoje uma tendência no mundo da tecnologia.

## :three: Benefícios e Desafios

Benefícios:

- **Escalabilidade e Flexibilidade:** ambientes de data center tradicionais não são facilmente escaláveis, pois envolve a inserção de novas máquinas físicas, o que gera custos, esforço físico, alocar profissionais para realizar essa tarefa, além da necessidade de preparar a infraestrutura do ambiente (energia, refrigeração etc.). E também não são muito flexíveis, pois quando a demanda diminui, não basta apenas desligarmos as máquinas que não estiverem sendo utilizadas, elas ainda terão custo de manutenção e será um desperdício deixá-las lá sem uso nenhum. Nos ambientes de nuvem, o cliente não precisa se preocupar com provisionamento, manutenção etc. pois tudo isso estará sendo tratado pela provedora;
- **Disponibilidade:** como mencionado anteriormente, a alocação de recursos computacionais da forma tradicional exige esforço físico e financeiro, sendo difícil uma empresa de pequeno porte conseguir manter sua infraestrutura funcional em 99% do tempo como uma provedora de nuvem consegue, até porque essas empresas possuem SLA (Service Level Agreement), que garante a alta disponibilidade das suas aplicações;
- **Redução de Custos:** Como também já mencionado, o modelo tradicional exige compra de equipamentos físicos, preparação do ambiente em questões de energia, refrigeração, cabeamento etc., alocação de funcionários entre outras coisas, enquanto na cloud o custo é apenas do uso da plataforma e dos seus serviços.

Desafios:

- **Segurança:** Entre as várias questões de segurança temos o controle de acesso. O físico não é preciso se preocupar (responsabilidade da cloud), poré, o lógico é de responsabilidade do cliente;
- **Privacidade e Conformidade:** Uma dúvida pode ser gerada: minha empresa possuí dados sigilosos que estão armazenados em um serviço de armazenamento de dados em um provedor de Nuvem. O quão esses dados estão protegidos? O quão seguro eles estão sendo que essas máquinas são compartilhadas com outras empresas do mundo? Os dados seguem sendo da empresa ou agora são provedora? Plataformas de nuvem possuem termos de uso sobre o sigílo de dados, diferentemente de ferramentas gratuítas, que fazem receita em cima dos dados que geram (como por exemplo, Facebook);
- **Migração de Dados:** Outra desafio é quando uma empresa deseja migrar todo seu datacenter de vários anos para uma nuvem. Como fazer isso sem gerar grande impacto?

## :four: Modelos de Serviço

É importante conhecer esses modelos para sabermos onde estão as responsabilidades de cliente e provedora em cada um dos serviços.

Na imagem abaixo podemos visualizar o modelo de responsabilidade compartilhada, onde conseguimos ter noção das responsabilidades de cliente e provedora em cada um dos serviços.

![Modelo de responsabilidade compartilhada](Imagens/Modelo%20de%20responsabilidade%20compartilhada.png)

### :arrow_right: Infrastructure as a Service (IaaS)

"Está apenas um passo acima do on-premise".

A provedora fornece infraestrutura básica de computação, armazenamento e rede. Por exemplo: provisionamento de máquinas virtuais, storages etc. Nesse modelo, é exigido da parte do cliente um maior gerenciamento dos recursos como sistema operacional, configurações de máquina e todas as aplicações que você instalar, pois a provedora apenas cuida do provisionamento e manutenção do hardware (servidor, rede e disco).

Alguns serviços que são IaaS são o Elastic Compute Cloud (EC2) da AWS, do Microsoft Azure Virtual Machines e o Google Compute Engine, todas ferramentas que permitem a criação de máquinas virtuais.

- Nessas máquinas virtuais o cliente pode fazer o que bem entender, desde colocar aplicações inteiras para funcionar até utilizar apenas como um computador comum, acessar internet, utilizar aplicativos desktop etc.

Casos de uso:

- Hospedagem de sites;
- Migração de aplicações legadas para a nuvem;
- Armazenamento de arquivos;
- Backup de Dados;
- Desenvolvimento e teste de aplicativos.

O principal caso de uso de IaaS é para ser uma opção inicial quando desejamos modernizar um determinado sistema que encontra em infraestrutura on-premise. Assim, para não ter grandes impactos iniciais, primeiramente migramos essa aplicação, colocamos ela em uma máquina virtual (exemplo, EC2) para que possamos desalocar o servidor do nosso datacenter, porém, ela segue funcionando da mesma forma. Com o tempo vamos utilizando os serviços de PaaS e SaaS da nuvem para modernizar o sistema até que não seja mais necessária a máquina virtual.

Uma desvantagem (ou desafio) do IaaS é que ele exige que o usuário tenha um conhecimento mínimo para configurar e gerenciar esse ambiente.

Quando falamos em migrar de datacenters próprios para provedores de nuvem, estamos falando de transformar CAPEX (despesas para aquisição de ativos, como imóveis, infraestrutura etc.) em OPEX (despesas do dia a dia), o que traz diferença considerável, pois você deixa de precisar se preocupar com aquisição dessa infra, provisionamento e manutenção e concentrar seus esforços apenas no sistema.

- Os fatores de flexibilidade e escalabilidade devem ser levados em consideração quando estamos analisando a migração. Dificilmente utilizamos todo poder computacional que nossas máquinas on-premise oferecem, porém, como a escalabilidade desses ambientes é mais complicada, é de praxe que elas por segurança tenham mais recursos do que de fato precisam. Na nuvem, por conta do provisionamento ser muito mais rápido, podemos alocar apenas os recursos necessários para que nossa aplicação funcione;

- Exemplo: nosso servidor do datacenter continha 128 cores de CPU e 256 GB de RAM, porém, nossa aplicação utiliza apenas 60 cores de CPU e 128 GB de RAM. Quando formos dimensionar a máquina na nuvem, podemos alocar apenas o que é preciso, o que também traz economia para a empresa e caso seja necessário mais pode computacional, é fácil de alocá-lo.

### :arrow_right: Platform as a Service (PaaS)

A provedora fornece um ambiente de desenvolvimento e implantação completo de aplicativos. Nesse cenário não é necessário que o cliente se preocupe com questões de atualização de sistema operação, provisionamento de máquinas virtuais, ambiente de execução etc., se preocupando apenas com as aplicações que serão implementadas e os seus acessos e dados.

Serviços de provisionamento de bancos de dados são um exemplo de PaaS.

- Na AWS temos o DynamoDB e o Amazon RDS.

### :arrow_right: Software as a Service (SaaS)

A provedora fonrece aplicativos prontos para uso pela Internet, como por exemplo, o Google Docs, Google Spreedsheet, Google Drive, One Drive, Microsoft 365, Dropbox, Outlook, Gmail etc. Nesse caso o usuário deve se preocupar apenas com o acesso ao seu perfil na plataforma e aos dados que armazena dentro dela, de resto, tudo é de responsabilidade da provedora (atualização, correção de bugs, provisionamento de recursos etc.).

Quando trabalhamos como arquiteto de soluções, devemos sempre priorizar o uso de ferramentas SaaS quando estamos projetando uma solução baseada nos requisitos do cliente, pois são muito mais simples, práticas e baratas de se utilizar. Caso não seja possível utilizar o SaaS, vá para as soluções PaaS.

Empresas que não são de fato do mundo de tecnología (bancos, telecomunicações, varejo etc.) devem dar preferência a esse tipo de serviço, pois seu negócio principal é serviço e não cuidar de questões de infraestrutura.

## :five: Tipos de Implantação

Tudo o que falamos até o momento associamos as nuvens públicas, porém, é possível ter uma nuvem privada, onde a empresa monta a estrutura dentro da sua própria rede utilizando soluções como VMWare ou HyperV, por exemplo. Porém, podemos considerar isso apenas uma modernização do uso de datacenters, uma vez que você ainda terá de cuidar do hardware, da virtualização e dos serviços que estão sendo executados dentro delas, não aproveitando as principais vantagens que as nuvens públicas oferecem. Existem também as nuvens híbridas.

## :six: Provedores de Cloud Populares

As três principais provedoras de cloud do mundo hoje são a AWS, Azure e GCP. A Microsoft é a maior empresa provedora de Cloud do mundo, pois seus produtos SaaS impactam muitas pessoas (Outlook, Microsoft 365, Xbox, LinkedIn, Dynamics). A AWS por sua vez, é o mais utilizado quando o assunto é serviços de IaaS e PaaS. Já o Google Cloud Platform (GCP) é o mais recente de todos.

Um profissional que trabalha com Cloud não deve se restringir a uma única provedora de nuvem. Se você sabe utilizar uma delas, a curva de aprendizagem para aprender uma próxima será bem menor. Claro que terão diferença (custos, configuração dos serviços etc.) e você terá que se familiarizar, porém, os serviços bases todas as provedoras tem.

![Comparativo dos serviços oferecidos pelas provedoras](Imagens/Comparativo%20do%20serviços%20oferecidos%20pelas%20provedoras.png)

Além dos big players, existem outras provedoras menores de serviços de cloud no mundo. A Alibaba Cloud, por exemplo, é a líder de mercado de computação em nuvem na China. No Brasil, a Locaweb fornecia uma série de serviços no modelo SaaS além de uma plataforma de IaaS chamada de LocaWeb Cloud. Mais recentemente a Magazine Luiza criou seu serviço de Cloud chamado Magalu Cloud e já oferece serviços IaaS básicos como máquinas virtuais, serviços de storage, bancos de dados, redes virtuais e Kubernetes.

Muitas empresas tentando fugir da dependência de um único provedor de cloud. Essa estratégia se chama multicloud. A ideia nesse caso é analisar os serviços de cada cloud e identificar aqueles que fazem mais sentido no seu negócio.

- Tentar limitar um provedor de cloud por projeto.

## :seven: Redes

A arquitetura de rede em nuvem refere-se à forma como os recursos de rede são organizados na nuvem.

Leaf-spine (nuvem privada) e hub-spoke (nuvem pública) são topologias de rede comumente usadas na nuvem. Organização física.

VLANs e VxLAN são tecnologias usadas para separar o tráfego de rede em diferentes redes virtuais. Organização lógica.

## :eight: Tipos de Armazenamento

Existem vários tipos de armazenamento em nuvem, incluindo SAN, NAS e armazenamento de objetos.

- SAN é um sistema de armazenamento em rede que fornece acesso aos dados em alta velocidade;
- NAS é um sistema de armazenamento de arquivos que permite o compartilhamento de arquivos em diferentes plataformas;
- O armazenamento de objetos é uma forma escalável e econômica de armazenar grandes quantidades de dados não estruturados (mais utilizado). São utilizados não apenas para documento, mas para construção de Data Lakes e outros usos de armazenamento especializado.

## :nine: Estratégias de Armazenamento

As estratégias de armazenamento em nuvem incluem backup, arquivamento e recuperação de desastres.

- O backup é a cópia dos dados para proteção contra perda de dados;
- O arquivamento é o armazenamento a longo prazo de dados que não são mais frequentemente acessados;
- A recuperação de desastre envolve a restauração de dados após uma interrupção do serviço.

## :one::zero: Orquestração

As nuvens oferecem serviços basicamente crus, onde você consegue definir uma ferramenta de orquestração de containers, qual versão dela deseja utilizar etc e fazer o gerenciamento de containers através dela. Algumas literaturas categorizam esses serviços como um novo modelo: CaaS (Container as a Service). As principais plataformas são o Docker Swarm e o Kubernetes

- AWS: Elastic Container Service (ECS), Elastic Kubernetes Service (EKS);
- GCP: Google Container Engine (GCE), Google Kubernetes Engine (GKE);
- Azure: Azure Kubernetes Service (AKS).
