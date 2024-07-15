# Cloud Computing (IaaS, PaaS, SaaS) II

## :one: Organização

O Azure possui uma conta gratuíta por tempo limitado para novos usuários. Caso você já possua uma conta, é possível seguir no modelo *pay as you go*, isto é, pague apenas pelo que utilizar.

O nível hierarquico mais alto de uma conta no Microsoft Azure é o diretório.

- Antigamente essa funcionalidade se chamava Microsoft Active Directory e hoje é o Microsoft Entra ID;
- Um diretório pode ser acessado por vários usuários;
- Solução de mercado consolidada.

Abaixo do diretório temos as assinaturas (*Subscriptions*), que permite nós criarmos ambientes separados por projetos.

- É normal separarmos uma assinatura para cada tipo de ambiente de um projeto, isto é, desenvolvimento, homologação e produção.

Dentro de uma assinatura, temos os *resource groups*, que exatamente como o nome diz, agrupam recursos.

- Recursos nesse caso são as instâncias de serviços do Azure utilizados;
- Podemos agrupar instâncias que compõe um mesmo projeto ou uma parte de um projeto.
- É possível visualizar e também planejar toda parte de custos a nível de assinatura ou de grupo de recursos.

Existem empresas que fazem o caminho inverso, onde saem de ambientes em nuvem e voltam a investir em on-premises, alegando questões de custo. Isso muitas vezes está relacionado a falta de gestão de recursos, o que de fato acaba encarecendo a experiência mais do que o necessário.

Todo serviço que criarmos devemos associar a uma assinatura e grupo de recursos.

## :two: Cloud Shell

É comum que os provedores de nuvem ofereçam um CLI através da interface gráfica de acesso.

É possível realizar todas as operações realizadas através de GUI pela linha de comando, porém, isso é mais utilizado por usuário avançados da ferramenta.

Uma grande utilidade desse terminal é quando lidamos com CI/CD e possuímos scripts que automatizam a integração e deploy de soluções. Podemos utilizar esse shell para testar se nossos scripts estão funcionando corretamente.

## :three: Cloud Adoption Framework (CAF)

Conjunto de boas práticas para a criação e gerenciamento de serviços em nuvem.

## :four: Storage Accounts

O serviço IaaS de Storage Accounts permite a criação de instâncias para armazenamento de dados, podendo funcionar no modelo clássico, similar ao S3 da AWS ou o File Buckets do GCP, ou em outros modelos como Data Lakes, tabelas NoSQL, Sistema de Arquivos ou fila de arquivos.

Na criação de um storage, nas configurações básicas, devemos apontar a *subscription* e *resource group* no qual ele será alocado, além de definir um nome (CAF define regras de nomenclatura de serviços), qual região ele será alocado, o tipo de performance (padrão ou de alta performance, para cenários onde se necessita de baixa latência) e a forma de redundância desses arquivos.

- Entende-se região como o conjunto de dois ou mais data centers localizados em uma mesma região geográfica que se conectam e funcionam como um só, permitindo a redundância dos serviços e que o SLA deles seja cumprido;

- Entre os tipos de redundância, temos a local, onde o Azure cria o mesmo storage em três discos diferentes. Outro tipo é a redundância geográfica, onde a instância é armazenada em datacenters diferentes dentro de uma mesma região.

- Existem outras configurações adicionais que podem ser aplicadas de acordo com a necessidade de cada usuário, como questões de segurança, acesso e redes.

## :five: Networks

É possível criarmos redes virtuais (*virtual networks*) para agruparmos as instâncias dos nossos serviços dentro de uma mesma rede, permitindo adicionar mais uma camada de segurança, limitando acesso e utilizando serviços de firewall, DDoS e de conexão segura. Este é um serviço IaaS.

## :six: App Services

O App Services é um PaaS oferecido pelo Azure para a criação de aplicações webs, sejam elas páginas estáticas, com back-end e até banco de dados. Apenas com algumas configurações, o serviço cria todo o serviço para você e ainda permite definir a fonte do código desde containers registries até o seu próprio GitHub.
