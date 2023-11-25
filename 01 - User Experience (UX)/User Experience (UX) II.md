# User Experience (UX) II

## :one: Sistema de Navegação

### :arrow_right: O que é navegar?

Navegar é alcançar um destino que está fora do campo de visão do ponto de partida. É um processo cognitivo onde o navegador identifica sua posição e seu destino em um mapa, traça uma rota ligando esses dois pontos e segue por essa rota no mundo físico identificado, de tempos em tempos, sua posição no mapa para corrigir eventuais desvios.

### :arrow_right: Analogia

Quando desejamos ir até um determinado local que nunca fomos anteriormente ou se já fomos, ainda não temos o caminho fixado em nossa memória, uma atitude muito comum é utilizarmos um mapa (ou mais recente, aplicativos de mapas como o Google Maps ou Waze), nos encontrarmos nesse mapa, traçarmos um caminho para o destino e ir seguindo esse caminho. Todo esse processo de definir o caminho, alternativas de desvio caso se um caminho se mostre mais demorado do que o outro, definir em qual rua virar, etc. são processos cognitivos que nos permitem alcançar nossos objetivos. Devemos pensar que esses mesmos processos serão realizados quando o usuário estiver navegando por uma interface para atingir algum fim.

Os carros podem ser considerados uma extensão das pernas, as máquinas de escrever ou computadores podem ser considerados uma extensão das mãos e as interfaces digitais podem ser consideradas uma extensão da vida dos seres humanas, sendo os seres humanos representados nela através do ponteiro do mouse. Logo, muitas das ações que realizamos no mundo físico serão replicadas para o mundo digital.

Podemos imaginar que quando vamos iniciar o projeto de uma interface, inicialmente ela é um terreno vazio e que a criação da página deve ser comparada a construção de uma cidade, que possui ruas por onde seus cidadãos se locomovem para ir de um lugar à outro, assim como os sites tem o seu sistema de navegação, que permite que o usuário saia de uma página A para uma página B seguindo um processo cognitivo.

### :arrow_right: O que é Sistema de Navegação?

Componente do produto que especifica as maneiras de navegar, de se mover pelo seu espaço virtual e hipertextual.

Sua função é indicar ao usuário sua localização e mostrar o caminho correto para encontrar as informações que necessita auxiliando-o a realizar suas tarefas.

Sem um sistema de navegação o usuário não consegue chegar ao seu destino e, literalmente, se perde.

### :arrow_right: Por que as pessoas se perdem ao navegar em uma interface?

Esquemas ou modelos de ambientes genéricos

- O professor começou a descrever uma cidade no interior de São Paulo onde seus pais nasceram detalhando os estabelecimentos e as ruas da cidade. No final da descrição, ele disse que a cidade era parecida com qualquer outra cidade típica do interior de São Paulo. Nesse momento, nossos cérebros começaram a resgatar as cidades de interior, seja de São Paulo ou outro estado, e começamos a formar um modelo de como essa cidade deve se parecer;

- Esse é um processo cognitivo natural, que acontece quando estamos tendo a percepção de algo pela primeira vez e procuramos buscar por outras experiências semelhantes para que nos ajude nessa situação;

- Outra analogia que pode ser feita é com o fato de sempre quando estamos em uma cidade litorânea, geralmente utilizamos o mar como referência. Isso pelo fato desse já ser um modelo muito comum adotado em outras cidades do litoral e que chegando em uma nova que nunca haviamos estado, vamos aplicar essa mesma regra;

- O mesmo se aplica a interfaces digitais. Se formos analisar páginas de e-commerce, serviços de streaming, loja de departamento, redes sociais, etc. todas elas possuem modelos similares se compararmos com outras do mesmo segmento (Consistência), o que facilita nossa navegação por cada uma dessas plataformas, pois podemos replicar alguns dos conhecimentos que obtemos em uma nas demais.

Mapas espaciais cognitivos

- A vivência com o ambiente vai permitindo que memorizemos ele;

- Primeiro memorizamos pontos de referências, depois rotas e por fim quando vamos ver conseguimos navegar com facilidade por lugares que nunca estivemos antes;

- Analogia com a pessoa de uma cidade, que vai ter maior familiaridade com a região se comparada a outra que vive em outro local. Enquanto nas cidades temos as placas de trânsito que vão indicando as coisas para os cidadãos conseguirem se locomover, temos também elementos na interface que auxiliam na navegação, como por exemplo, o menu de opções.

### :arrow_right: As três perguntas do sistema de navegação

![As três perguntas do sistema de navegação](Imagens/As%20três%20perguntas%20do%20sistema%20de%20navegação.png)

### :arrow_right: Recomendações para o projeto do sistema de navegação

1. **Fácil de aprender:**

    ![Recomendações do Sistema de Navegação - Fácil de Aprender](Imagens/Recomendações%20para%20o%20sistema%20de%20navegação%20-%20Fácil%20de%20aprender.png)

    - Não é todo usuário que estará a disposto a gastar um tempo para aprender a mexer na sua interface, portanto, faça ela de forma que seja fácil de ser compreendida;
    - Na imagem acima, temos dois editores de texto, o VI, disponível e comumente utilizado em ambientes Unix Like, enquanto o segundo é o Notepad++. A maioria dos usuários preferirá utilizar o Notepad++, por ser muito mais moderno e ter um sistema de navegação intuitivo e muito próximo de outras soluções do mercado, como bloco de notas, VS Code, etc. onde são utilizados botões e o ponteiro do mouse para realizar as atividades. O VI, por sua vez, necessita que o usuário aprenda uma série de comandos utilizando caractéres para poder realizar suas operações básicas, como abrir uma linha, sair de uma linha, salvar o arquivo, sair, etc., tendo menor preferência dos usuários por conta dessa complexidade.

2. **Ter Consistência (Recomendação mais importante da Usabilidade):**

    ![Recomendações do Sistema de Navegação - Ter consistência](Imagens/Recomendações%20para%20o%20sistema%20de%20navegação%20-%20Ter%20consistência.png)

    - No exemplo da imagem acima, temos a interface do Word, editor de texto da Microsoft através das suas versões 2003, 2007 e 2010. Acontece que da versão 2003 para a 2007, houve uma mudança na organização dos ícones da plataforma, o que causou certo incomodo nos usuários que eram bastante acostumados com a versão anterior. A maior mudança foi que o menu "Arquivo" agora era acessado através do logo do Microsoft Office, localizado no campo superior esquerdo da interface do editor. Acontece que muitos usuários não sabiam que aquele símbolo era clicável, causando grande confusão. Na versão seguinte, de 2010, vemos que a Microsoft decidiu dar um passo atrás e retornas com o menu "Arquivo" na forma escrita;
    - A dica é: quando for realizar alguma alteração no sistema de navegação da sua plataforma, tomar cuidado para não gerar mudanças bruscas e caso gere, que explique pro usuário como o novo modelo funciona e suas vantagens.

3. **Apresentar Feedback:**

    ![Recomendações do Sistema de Navegação - Apresentar Feedback](Imagens/Recomendações%20para%20o%20sistema%20de%20navegação%20-%20Apresentar%20Feedback.png)

    - Na imagem acima vemos um rádio do modelo Pioneer muito utilizado em automóveis antigamente. A principal ação que o usuário poderia realizar era a troca de estações. Para isso ele apertava o botão "List", em seguida girava o botão para selecionar a estação e por último o apertava para começar a tocar a estação selecionada;
    - O grande problema é que o feedback apresentado pelo rádio é visual, isto é, ele não emite nenhum som e o condutor, caso seja ela que esteja manipulando o rádio, precisa olhar para o visor para confirmar se selecionou a estação correta, o que pode acabar gerando acidentes;
    - A gran de lição é: apresente feedbacks de acordo com o contexto do usuário. Por exemplo, o Waze diz para o usuário para onde ele deve seguir, se virar esquerda, direta, etc., uma vez que o usuário que muita das vezes é o condutor, não irá conseguir utilizar a visão para receber o feedback.

4. **Ser Eficiente:**

    ![Recomendações do Sistema de Navegação - Ser Eficiente](Imagens/Recomendações%20para%20o%20sistema%20de%20navegação%20-%20Ser%20eficiente.png)

    - A imagem acima é o passo a passo no site do Itaú para que um cliente consiga cancelar uma aplicação;
    - Nem sempre será possível aderir o modelo "Três cliques do objetivo", porém, também não precisamos de tantas telas para se realizar uma tarefa, poderiam ser menos.

5. **Ter Rótulos Claros:**

    ![Recomendações do Sistema de Navegação - Ter Rótulos Claros](Imagens/Recomendações%20para%20o%20sistema%20de%20navegação%20-%20Ter%20Rótulos%20Claros.png)

    - Na imagem acima temos o comparativo da barra de navegação do Facebbok em 2019 e 2022 e podemos perceber que a mais recente é muito mais clara e fácil de se compreender, seja por conta da adição dos rótulos mas também pelo uso de ícones mais adequados;
    - E ainda poderiam haver mais melhorias, como por exemplo, alterar "Marketplace" para "Loja", facilitando a compreensão de muitos usuários brasileiros.

6. **Ter Clareza Visual:**

    ![Recomendações do Sistema de Navegação - Ter Clareza Visual 1](Imagens/Recomendações%20para%20o%20sistema%20de%20navegação%20-%20Ter%20Clareza%20Visual%201.png)

    - Na imagem acima podemos visualizar a antiga versão do site do Cinemark. A pergunta que fica é: onde clicamos para comprar ingressos para uma sessão? Talvez com um esforço considerável e meio que na tentativa e erro vamos descobrir que é clicando no desenho de ingresso ao lado do "3D LEG", o que não é muito intuitivo para o usuário.

    ![Recomendações do Sistema de Navegação - Ter Clareza Visual 2](Imagens/Recomendações%20para%20o%20sistema%20de%20navegação%20-%20Ter%20Clareza%20Visual%202.png)

    - Nessa segunda imagem, temos a versão mais recente do aplicativo do Cinemark e vemos que existe um botão bem claro "COMPRE AQUI".

7. **Equilibrar Flexibilidade e Confusão:**

    Flexibilidade:

    - Posso ir para qualquer lugar!
    - Permite que o usuário vá rapidamente de um ponto a outro na interface;
    - Fornece muitos atalhos.

    Confusão:

    - Para onde vou?
    - Muitas opções de navegação confundem o usuário;
    - Demora para escolher onde clicar.

    O usuário deve ser capaz de encontrar o equilibrio entre essas duas vertentes.

    ![Recomendações do Sistema de Navegação - Flexibilidade e Confusão](Imagens/Recomendações%20para%20o%20sistema%20de%20navegação%20-%20Flexibilidade%20e%20Confusão.png)

    - No exemplo da imagem acima, temos o site da Magazine Luiza, que nas páginas onde o usuário visualiza e seleciona os produtos do seu interesse, a plataforma oferece uma série de flexibilidades, oferecendo links de outros produtos relacionados que podem também ser de interesse do consumidor, permite seguir para a efetuação do pagamento, etc. o que acaba tornando também a página confusa, pela série de informações que ela contém. Porém, quando o usuário segue para as etapas de realização do pagamento, vemos telas bem mais limpas e com botões bem claros do que deve ser realizado. Isso acontece pois o momento do pagamento é o ponto crítico para o site de vendas, e apresentar uma interface confusa nesse momento pode fazer o usuário se perder e a plataforma perder a venda por besteira;
    - Portanto, a estratégia utilizada foi dar mais flexibilidade e gerar mais confusão quando ainda o usuário está na fase de escolha e quando ele partir para a parte que importa, que é o pagamento, o foco todo dele será direcionado para a finalização daquela tarefa;

8. **Divulgação Progressiva:**

    ![Recomendações do Sistema de Navegação - Divulgação Progressiva](Imagens/Recomendações%20para%20o%20sistema%20de%20navegação%20-%20Divulgação%20Progressiva.png)

9. **Suportar as necessidades e comportamentos do usuário:**

    ![Recomendações do Sistema de Navegação - Suportar as necessidades e comportamentos do usuário](Imagens/Recomendações%20para%20o%20sistema%20de%20navegação%20-%20Suportar%20as%20necessidades%20e%20comportamentos%20do%20usuário.png)

    - Na imagem acima temos os exemplos de dois e-commerces com finalidades diferentes. Devemos entender que só porque as duas plataformas são voltadas para o mesmo segmento, não significa que elas devem adotar as mesmas estratégias, uma vez que seus produtos e as necessidades de seus clientes são diferentes. Vamos sugerir algumas mudanças nas duas plataformas que poderiam ajudaas na experiência do usuário;
    - No primeiro caso, temos o site de uma casa de câmbio. Da forma que o site é apresentado, é possível inserir diversas moedas dentro de um carrinho e no final realizar a compra de todas elas. Esse é um processo muito repetido em diversos e-commerces, porém, a pergunta que fica é: é necessário que essa plataforma também siga esse modelo? Se formos pensar, geralmente quando compramos uma determinada moeda, é porque vamos viajar para o local em que ela é aceita e dificilmente compramos diferentes moedas. Logo, uma alternativa seria eliminar a necessidade de um carinho e permitir que no que o usuário selecione a quantia de determinada moeda, que ele já vá para o pagamento, tornando-se um processo muito mais rápido já que possui menos etapas;
    - No segundo caso temos o exemplo de um site de hortifrutti, portanto, estamos falando de itens de feira como legumes, verduras e frutas. Geralmente quando vamos realizar essa espécie de compra, compramos vários produtos de uma só vez. Uma alternativa para tornar a experiência do usuário mais prática é permitir que da página de vitrine ele consiga inserir os produtos no carrinho, sem a necessidade de entrar na página específica do produto, necessitando de interação com um menor número de telas. Outra melhoria que poderiamos fazer é exibir compras realizadas anteriormente pelo usuário e permitir que ele as repita sem a necessidade de selecionar todos os produtos de novo, já que muitas vezes esses produtos são comprados rotineiramente nas mesmas quantidades e tipos;
    - A lição que fica é: apesar de existirem modelos para interface de cada segmento, não significa que tudo o que elas aplicam irá funcionar para o seu tipo de negócio. É necessário pensar no seu produto e nas necessidades e comportamentos dos seus usuários.

10. **Alinhar-se com o objetivo do produto:**

    ![Recomendações do Sistema de Navegação - Alinhar-se com o objetivo do produto](Imagens/Recomendações%20para%20o%20sistema%20de%20navegação%20-%20Alinhar-se%20com%20o%20objetivo%20do%20produto.png)

    - No exemplo da imagem acima temos o Instagram, a ideia dele é ser uma rede social de fotos e que permite a interação do usuário através dos comentários, curtidas e compartilhamentos. Portanto, ela irá destacar as fotos, seu principal produto e irá fornecer funcionalidades como o scroll infinito, permitindo que você tenha conteúdo ilimitado e permaneça utilizando a plataforma.

11. **Aproveitar os padrões de navegação da plataforma tecnológica:**

    ![Recomendações do Sistema de Navegação - Aproveitar os padrões de navegação da plataforma tecnológica](Imagens/Recomendações%20para%20o%20sistema%20de%20navegação%20-%20Aproveitar%20os%20padrões%20de%20navegação%20da%20plataforma%20tecnológica.png)

    - O browser via notebook possui o botão de voltar, bastante utilizado pelos usuários, portanto, não exclua o seu uso da navegação do seu site;
    - Nos smartphones é muito comum, por padrão, a barra de opções do aplicativo ser disponibilizada no canto inferior da tela, portanto, aproveite esse padrão já que ele é bem estabelecido com a comunidade;
    - utilizar esses padrões gera CONSISTÊNCIA.

12. **Navegação Social:**

    ![Recomendações do Sistema de Navegação - navegação Social](Imagens/Recomendações%20para%20o%20sistema%20de%20navegação%20-%20Navegação%20Social.png)

    - Nesse caso a interface irá fornecer caminhos que não foram projetados pelo arquiteto de informações e sim por outros usuários que passaram por situações semelhantes àquelas que você está passando no momento;
    - Cerca de 10% das vendas da Amazon decorrem desse sistema "Clientes que compraram este item também compraram".

### :arrow_right: Elementos do Sistema de Navegação

1. **Logo**

    ![Elementos do Sistema de Navegação - Logo](Imagens/Elementos%20do%20Sistema%20de%20Navegação%20-%20Logo.png)

    - Além de fornecer uma identificação de onde o usuário se encontra, muitas vezes o logo é um atalho para a página inicial do site.

2. **Menu**

    ![Elementos do Sistema de Navegação - Menu Global e Local](Imagens/Elementos%20do%20Sistema%20de%20Navegação%20-%20Menu%20Global%20e%20Local.png)

    - O menu global traz todas categorias existentes na plataforma e o menu local traz os temas relacionados àquela categoria superior.

    ![Elementos do Sistema de Navegação - Menu Horizontal](Imagens/Elementos%20do%20Sistema%20de%20Navegação%20-%20Menu%20Horizontal.png)

    - O menu horizontal tem um limite que é o número de itens que tem como limite a largura da tela no qual a interface é exibída;
    - Esse tipo de menu é ideal quando temos um determinado número de categorias no menu e sabemos que elas não irão se alterar por muito tempo.

    ![Elementos do Sistema de Navegação - Menu Vertical](Imagens/Elementos%20do%20Sistema%20de%20Navegação%20-%20Menu%20Verticaal.png)

    - Único problema desse tipo de menu é que ele ocupa bastante espaço na página.

    ![Elementos do Sistema de Navegação - Menu Fechado e Aberto](Imagens/Elementos%20do%20Sistema%20de%20Navegação%20-%20Menu%20Fechado%20e%20Aberto.png)

    ![Elementos do Sistema de Navegação - Menu pull-down](Imagens/Elementos%20do%20Sistema%20de%20Navegação%20-%20Menu%20pull-down.png)

    - Tomar cuidado para que os nomes das categorias reflitam com eficiência as opções que elas englobam, para não gerar situações onde o usuário fica abrindo todos os menus até encontrar a ferramenta que deseja utilizar.

    ![Elementos do Sistema de Navegação - Menu em árvore](Imagens/Elementos%20do%20Sistema%20de%20Navegação%20-%20Menu%20em%20árvore.png)

    - Ideal quando temos um sistema hierárquico grande.

    ![Elementos do Sistema de Navegação - Menu hamburguer](Imagens/Elementos%20do%20Sistema%20de%20Navegação%20-%20Menu%20hamburguer.png)

    - Muito comum em aplicativos responsivos.

    ![Elementos do Sistema de Navegação - Menu Contextual](Imagens/Elementos%20do%20Sistema%20de%20Navegação%20-%20Menu%20contextual.png)

    - Esse menu geralmente é um atalho para usuário avançados, porém, suas opções também devem constar no menu principal para ser utilizado por usuários iniciantes na ferramenta.

    ![Elementos do Sistema de Navegação - Pie Menu](Imagens/Elementos%20do%20Sistema%20de%20Navegação%20-%20Pie%20Menu.png)

    - Muito utilizado em video games.

3. **Breadcrumb:**

    ![Elementos do Sistema de Navegação - Breadcrumb](Imagens/Elementos%20do%20Sistema%20de%20Navegação%20-%20Breadcrumb.png)

    - Podemos fazer uma analogia com a história de João e Maria e as migalhas de pão que eles jogaram ao longo do trajeto deles na floresta para saberem o caminho pelo qual eles vieram para se necessário saber voltar;
    - A ideia do Breadcrumb é nós conseguirmos visualizar o caminho percorrido;
    - Ajuda a reforçar os mapas espaciais cognitivos e a memorização do caminho percorrido para se atingir determinado objetivo, tornando possíveis novas visitas a plataforma mais simples pois o usuário já saberá o caminho a percorrer.

4. **Passo a passo:**

    ![Elementos do Sistema de Navegação - Passo a passo](Imagens/Elementos%20do%20Sistema%20de%20Navegação%20-%20Passo%20a%20passo.png)

    - Uma vantagem desse modelo é o alinhamento de expectativas do usuário, pois ele logo de cara sabe por quantas etapas ele terá de passar;
    - Mas deve ser tomado um cuidado: se existirem muitos passos, isso pode assustar o usuário e ele acabar desistindo de utilizar a ferramenta.

5. **Cross Content:**

    ![Elementos do Sistema de Navegação - Cross Content](Imagens/Elementos%20do%20Sistema%20de%20Navegação%20-%20Cross%20Content.png)

    - Exibe conteúdos similares ao que está sendo exibído.

6. **Mapa do Site:**

    ![Elementos do Sistema de Navegação - Mapa do Site](Imagens/Elementos%20do%20Sistema%20de%20Navegação%20-%20Mapa%20do%20site.png)

    - Traz uma noção de tudo o que o site oferece;
    - Limitar a no máximo três níveis hierárquicos o menu;
    - Serve como atalho para as funcionalidades.

### :arrow_right: Posicionamento dos Elementos de Navegação

![Estudo Sobre Posicionamento dos Elementos de Navegação](Imagens/Estudo%20sobre%20posicionamento%20dos%20elementos%20de%20navegação.png)

- Um estudo solicitou que usuários clicassem na grade onde eles imaginariam que determinado elemento de navegação deveria estar posicionado;

- Quando mais cinza um quadrado, significa que mais pessoas selecionaram áquele lugar;

- Isso mostra que de fato por conta das experiências vivenciadas pelos usuários com interfaces anteriores, eles já possuem uma expectativa de onde determinados elementos estarão posicionados.

### :arrow_right: Bibliotecas de Componentes de Interface

Algumas bibliotecas que podemos utilizar para ver exemplos de componentes de interface como menus, paginação, etc. para pegarmos referências e nos ajudar a ter ideias de como construir nossos próprios componentes:

- UI Patterns (ui-patterns.com)
- Pttrns (pttrms.com)
- Welie Interaction Design Patterns (welie.com)
- UI Garage (uigarage.net)
- Mobile Patterns (mobile-patterns.com)
- Mobbin (mobbin.design)
- Games Inspiration (gamesinspiration.com)
- Design System Repo (designsystemrepo.com)
