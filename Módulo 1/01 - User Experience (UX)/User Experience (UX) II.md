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
    - A grande lição é: apresente feedbacks de acordo com o contexto do usuário. Por exemplo, o Waze diz para o usuário para onde ele deve seguir, se virar esquerda, direta, etc., uma vez que o usuário que muita das vezes é o condutor, não irá conseguir utilizar a visão para receber o feedback.

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
    - Utilizar esses padrões gera CONSISTÊNCIA.

12. **Navegação Social:**

    ![Recomendações do Sistema de Navegação - Navegação Social](Imagens/Recomendações%20para%20o%20sistema%20de%20navegação%20-%20Navegação%20Social.png)

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

7. **Índice Remissivo ou Autosuggest:**

    ![Elementos do Sistema de Navegação - Índice Remissivo e Autosuggest](Imagens/Elementos%20do%20Sistema%20de%20Navegação%20-%20Índice%20Remissivo%20e%20Autosuggest.png)

    - O Índice Remissivo em interfaces funciona exatamente como os de livros;
    - Eles vem sendo substituídos pelo Autosuggest, onde o usuário vai inserindo a pergunta da busca e já vai recebendo sugestões de conteúdos de acordo com o que foi inserido.

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

## :two: Sistema de Busca

Componente do produto que determina as perguntas que o usuário pode fazer (queries) e o conjunto de respostas que irá obter.

Quando implementar

- Produtos com grande volume de conteúdo;
- Produtos com muitas informações para consulta;
- Produtos com conteúdo muito dinâmico e um histórico grande (sites de notícias e serviços de streaming);
- Sistemas corporativos formados por vários subsistemas descentralizados.

Quando não implementar

- Quando há pouco volume de conteúdo (hotsites ou aplicativos com poucas páginas);
- Para compensar um sistema de navegação ruim;
- Caso os usuários não gostem ou não saibam usar a busca (por exemplo, sites infantis).

### :arrow_right: Comportamentos Comuns dos Usuários ao Utilizar a Busca

1. **Múltiplas Interações:**

    ![Comportamentos de Usuários com a Busca - Múltiplas Interações](imagens/Comportamento%20do%20Usuário%20ao%20Utilizar%20Sistema%20de%20Busca%20-%20Múltiplas%20Interações.png)

    - Quando estamos realizando uma consulta simples, é normal que ao realizar a primeira busca já encontremos o resultado que desejamos. Porém, em situações onde o conteúdo buscado é mais complexo, é normal que sejam necessárias várias buscas até se encontrar o que deseja;

    - Nesse segundo caso o usuário faz uma pergunta, analisa as respostas obtidas, verifica que o conteúdo retornado não é exatamente o que deseja e realizar uma nova consulta, refinando a resposta. Esse processo é repetido até que o usuário obtenha o que deseja.

2. **Uso Integrado dos Sistemas de Busca e Navegação:**

    ![Comportamentos de Usuários com a Busca - Integração Sistema de Busca e Navegação](imagens/Comportamento%20do%20Usuário%20ao%20Utilizar%20Sistema%20de%20Busca%20-%20Uso%20integrado%20dos%20sistemas%20de%20busca%20e%20navegação.png)

    - A integração entre o sistema de busca e navegação é comumente chamado de "Menusca";

    - A plataforma oferece uma barra de pesquisa e os resultados retornados são seções do aplicativo, onde o usuário acesso o que for do seu interesse, realizar a navegação, verifica as informações contidas nele, retorna para o buscador se achar necessário e realiza o processo novamente.

### :arrow_right: Interação Básica com o Sistema de Busca

![Interação Básica com o Sistema de Busca](imagens/Interação%20básica%20com%20o%20sistema%20de%20busca.png)

- Devemos entender que a interação do usuário com o sistema de busca não é linear, pois ele poder realizar várias perguntas e analisar vários resultados, antes de acessar um dos resultados retornados e avaliar seu detalhamento.

### :arrow_right: Componentes do Sistema de Busca

![Componentes do Sistema de Busca](imagens/Componentes%20do%20Sistema%20de%20Busca.png)

- A Ajuda é necessária quando o sistema possui uma interface complicada.

### :arrow_right: Recomendações para a Interface de Busca

1. **Ofereça suporte às perguntas e aos modos de busca que o usuário costuma fazer:**

    ![Recomendações para a Interface de Busca - Oferecer Suporte](Imagens/Recomendações%20do%20Sistema%20de%20Busca%20-%20Suporte%20às%20Perguntas.png)

    - Nos exemplos acima verificamos que as plataformas oferecem um sistema de busca personalizado de acordo com as necessidade do usuário de cada tipo de serviço;
    - No sistema de compra de passagens aéreas, é normal que o usuário busque por passagens (produto vendido pela companhia) que atendam as seguintes especificações: origem, destino, número de passageiros, data de ida e volta;
    - No sistema de reserva de hospedagem, o usuário busca por lugares que estejam no local e data de interesse dele;
    - No sistame de compra ou aluguel de imóveis, o usuário geralmente realizar essa busca por localidade (cidade e bairro), no caso de aluguel pode definir o período que deseja alugar, além do número de quartos da habitação, etc.

2. **Facilite a digitação das palavras chave:**

    - Como já comentado, o processo de busca realizado pelo usuário nem sempre é linear, portanto, o quanto mais pudermos facilitar a busca, a experiência do usuário será mais prazerosa.

    ![Recomendações para a Interface de Busca - Facilite a Digitação de Palavras Chave 1](Imagens/Recomendações%20do%20Sistema%20de%20Busca%20-%20Facilite%20a%20Digitação%20de%20Palavras%20Chave%201.png)

    - Na busca do YouTube, a plataforma fornece o sistema de autopreenchimento de palavras de acordo com buscas anteriores e as mais realizadas pelos usuários;
    - O Apple Watch e o iPhone, por sua vez, fornecem a Siri, o Assistente que permite realizar a busca por Voz;

    ![Recomendações para a Interface de Busca - Facilite a Digitação de Palavras Chave 2](Imagens/Recomendações%20do%20Sistema%20de%20Busca%20-%20Facilite%20a%20Digitação%20de%20Palavras%20Chave%202.png)

    - A plataforma da Azul permite que o usuário realize a busca de passagens aéres sem a necessidade de se utilizar o mouse.

    ![Recomendações para a Interface de Busca - Facilite a Digitação de Palavras Chave 3](Imagens/Recomendações%20do%20Sistema%20de%20Busca%20-%20Facilite%20a%20Digitação%20de%20Palavras%20Chave%203.png)

    - O iFood não exige que o usuário insira o seu endereço para fornecer os restaurantes próximos. Ele consegue essa informação através do GPS;
    - O Desrotulando é uma plataforma que permite ao usuário ver informações nutricionais sobre produtos do se interesse. Como os produtos são identificados pelo seu código de barra, ao invés do usuário ter que inserir manualmente o valor, oferece a possibilidade de transmitir essa informação utilizando um scanner com a câmera do celular;
    - O Shazam permite a identificação de músicas utilizando o microfone do celular ou computador.

3. **Faça a caixa de busca grande:**

    ![Recomendações para a Interface de Busca - Caixa de Busca Grande](Imagens/Recomendações%20do%20Sistema%20de%20Busca%20-%20Caixas%20de%20Pesquisa%20Grandes.png)

    - Colocar caixas de busca grandes diz para o usuário que ele pode inserir várias palavras chaves para realizar a busca;
    - Quanto mais informação ele inserir, mais precisa será a busca realizada.

4. **Evite a busca avançada:**

    ![Recomendações para a Interface de Busca - Evite busca avançada](Imagens/Recomendações%20do%20Sistema%20de%20Busca%20-%20Evite%20a%20busca%20avançada.png)

    - Pesquisas avançadas podem acabar assustando os usuários, pela quantidade de campos e até mesmo a complexidade das informações inseridas;
    - Caso ela seja necessária mesmo assim, uma alternativa é utilizar a divulgação progressiva, isto é, exibir apenas os campos mínimos que o usuário precisa para realizar a pesquisa e colocar um botão que abre uma outra parte da interface para inserir mais informações caso o usuário deseje.

### :arrow_right: Recomendações para a Página de Resultados

1. **Facilite o acesso aos itens encontrados:** Procure trazer as informações que o usuário procura diretamente na página de resultados, sem a necessidade de clicar em um link que o redireciona para outra página para então visualizar o conteúdo.

2. **Ofereça filtros e sugestões para refinar os resultados:**

    ![Recomendações para Página de Resultados - Ofereça filtros e sugestões para refinar os resultados](Imagens/Recomendações%20da%20Página%20de%20Resultados%20-%20Oferecer%20filtros%20e%20sugestões%20para%20refinar%20resultados.png)

    - Quando realizamos a busca de um determinado em uma plataforma de e-commerce, como a Amazon no exemplo acima, geralmente elas oferecem após trazer o resultado uma série de filtros, personalizados para cada tipo de produto. Então, quando o usuário pesquisa por celular, filtros de celular são trazidos também para permitir que o mesmo refine sua pesquisa para ser mais específico. Quando pesquisa por televisão, os tipos de filtros são relacionados a esse produto, que se diferem de celular. Por exemplo, quando pesquisamos por uma televisão, um dos atributos no qual levamos em consideração é o seu tamanho em polegadas. Já quando estamos falando de celular, esse não é um dos principais atributos pesquisados, sendo muito mais importante a capacidade de armazenamento do dispositivo.

3. **Ordene os Resultados:**

    ![Recomendações para Página de Resultados - Ordene os resultados](Imagens/Recomendações%20da%20Página%20de%20Resultados%20-%20Ordene%20os%20resultados.png)

    - Sempre ordene os resultados da pesquisa utilizando algum critério;
    - O mais comum é a ordenação baseada na relevância do produto, isto é, quantos deles já foram adquiridos pelos usuários da plataforma, quantas vezes a página já foi acessada, quais possuem as melhores notas, etc.;
    - Porém, podemos também oferecer outros tipos de filtro, como data, preço, etc. para permitir que o usuário personalize a resposta de acordo com o que deseja.

4. **Mostre a quantidade de itens encontrados:**

    ![Recomendações para Página de Resultados - Mostre a quantidade de itens encontrados](Imagens/Recomendações%20da%20Página%20de%20Resultados%20-%20Mostre%20a%20quantidade%20de%20itens%20encontrados.png)

    - Não é necessário ter um grande destaque na página;
    - Mas essa informação ajuda principalmente usuários mais experientes, que vão se basear na quantidade de itens encontrados para definir se devem restringir ainda mais as buscas, se precisam aumentar ou se a quantidade de resultados é adequada, sem a necessidade de ler os conteúdos retornados.

5. **Pagine os Resultados:**

    - A paginação dos resultados é recomendada, caso contrário, tornará a página lenta;
    - Temos três abordagens de paginação:

        ![Recomendações para Página de Resultados - Pagine os Resultados](Imagens/Recomendações%20da%20Página%20de%20Resultados%20-%20Pagine%20os%20resultados.png)

        - A paginação tradicional, onde utilizamos setinhas para ir de uma página à outra.

        ![Recomendações para Página de Resultados - Pagine os Resultados 2](Imagens/Recomendações%20da%20Página%20de%20Resultados%20-%20Pagine%20os%20resultados.png)

        - O scroll infinito, onde clicamos em um botão para exibir mais produtos, porém, àqueles apresentados anteriormente permanecem na página;
        - Esse modelo facilita a comparação de itens que encontram-se em páginas diferentes.

        - A terceira abordagem é o scroll infinito automático, estratégia comumente utilizada em redes sociais. Porém, existem diversas críticas a esse modelo pois ele tem o intuito de manter o usuário permaneça o maior tempo possível na plataforma, dando uma sensação parecida às máquinas caça-níqueis.

6. **Faça a mesma busca em várias bases simultâneamente (*Federated Search*):** Caso a sua aplicação utilize diferentes bases de dados para construir as respostas, faça todas essas buscas de uma única vez.

7. **Facilite a realização de uma nova busca:**

    ![Recomendações para Página de Resultados - Facilite a realização de uma nova busca](Imagens/Recomendações%20da%20Página%20de%20Resultados%20-%20Facilite%20a%20realização%20de%20uma%20nova%20busca.png)

    - Como já comentado, é comum que um usuário não se sinta satisfeito com o resultado de uma busca e deseja alterá-la para obter outras respostas. Porém, pode ser que ele deseje apenas inserir mais alguma palavra chave e não quer apagar o que já escreveu anteriormente. No exemplo acima o usuário pesquisou por "poster do Batman" e na página de resultado a barra de pesquisa veio preenchida com o mesmo conteúdo, facilitando esse ajuste na busca se assim ele desejar.

8. **Indexe apenas o conteúdo útil:**

    ![Recomendações para Página de Resultados - Indexe Apenas o Conteúdo Útil](Imagens/Recomendações%20da%20Página%20de%20Resultados%20-%20Indexe%20apenas%20conteúdo%20útil.png)

    - Na página do meio, o usuário realizou uma busca no Google por notícias relacionadas a empresa "Vale";
    - O primeiro resultado é uma notícia do próprio site da vale sobre um determinado assunto;
    - O segundo resultado também encaminha o usuário para uma página da Vale, porém, que funciona como um sumário, sendo necessário que ele clique novamente em algum link para ser encaminhado para as notícias de fato;
    - Essa página de sumário não deveria ser indexada na página de resultados pois os conteúdos ao qual ela se referencia já são apresentados nos resultados do Google;
    - É possível fazer esse controle do que deve ser indexado ou não através de meta tags.

9. **Apresente os resultados rapidamente:**

    ![Recomendações para Página de Resultados - Apresente os resultados rapidamente](Imagens/Recomendações%20da%20Página%20de%20Resultados%20-%20Resultados%20rapidamente.png)

    - Devemos entender a interação entre o usuário e o sistema como um diálogo e ninguém gosta de uma conversa travada, onde uma pessoa demora muito tempo para responder a outra. Portanto, devemos tomar cuidado com essa questão;
    - O ideal é que os resultados sejam retornados em até meio segundo;
    - Até 1 segundo o usuário aceita os resultados, mas já começa a ficar irritado;
    - Acima de 10 segundos você já perdeu seu usuário para outra plataforma.

### :arrow_right: Recomendações para a Página Sem Resultados

1. **Informe que não foram encontrados resultados:**

    ![Recomendações para a Página Sem Resultados - Informe que não foram encontrados resultados](Imagens/Recomendações%20para%20Página%20Sem%20Resultados%20-%20Informe%20que%20não%20foram%20encontrados%20resultados.png)

    - Deixe claro para o usuário que não foi possível encontrar resultados para a pesquisa informada;
    - Evite colocar sugestões de outras pesquisas para não deixar o usuário confuso. Ele pode não entender que aquilo são recomendações e achar que ela que fez uma pesquisa errada.

2. **Apresente dicas de como utilizar a busca:**

    ![Recomendações para a Página Sem Resultados - Apresente dicar de como utilizar a busca](Imagens/Recomendações%20para%20Página%20Sem%20Resultados%20-%20Apresente%20dicas%20de%20como%20usar%20a%20busca.png)

3. **Facilite a realização de uma nova busca:**

    ![Recomendações para a Página Sem Resultados - Facilite a realização de uma nova busca](Imagens/Recomendações%20para%20Página%20Sem%20Resultados%20-%20Facilite%20a%20realização%20de%20uma%20nova%20busca.png)

    - Foi informado para o usuário que não foi encontrado nenhum resultado para a pesquisa realizada, porém, a barra de busca encontra-se na mesma página para realizar uma nova busca.

4. **Ofereça links para outros serviços e para área de atendimento:**

    ![Recomendações para a Página Sem Resultados - Ofereça links para outros serviços e para a área de atendimento](Imagens/Recomendações%20para%20Página%20Sem%20Resultados%20-%20Ofereça%20links%20para%20outros%20serviços%20e%20para%20a%20área%20de%20atendimento.png)

    - Na imagem acima o usuário pesquisou por determinado conteúdo pela barra de pesquisa do iPhone e nenhum resultado foi encontrado. Porém, a própria plataforma ofereceu outros sistemas de busca para que o usuário procure por resultados dentro deles;
    - Uma outra possibilidade é oferecer para o usuário que caso ele não encontre o que deseja através da pesquisa, se ele deseja entrar em contato com um atendimento humanizado.

### :arrow_right: Recomendações para a Ajuda

Explique na ajuda:

- O que está sendo procurado;
- Como as perguntas podem ser formuladas;
- Quais são as opções para refinar a busca;
- O que fazer se a lista de resultados é muito grande;
- O que fazer se não foram obtidos resultados;
- O que fazer se os resultados não interessam.

![Recomendações para a Ajuda](Imagens/Recomendações%20para%20a%20Ajuda.png)

### :arrow_right: Análise do log da busca

É muito comum que ao realizar uma busca, o usuário digite as palavras com algum erro de digitação, como no exemplo abaixo, onde foi realizada uma busca por chapéus, porém, o usuário escreveu a palavra de forma errada. Apesar disso, a plataforma foi capaz de compreender o que o usuário queria e trazer os resultados esperados.

![Análise do Log da Busca 1](Imagens/Análise%20do%20Log%20da%20Busca.png)

Na imagem abaixo temos uma tabela real das 50 principais buscas no site do Buscapé, uma plataforma de comparação de preços, que não deu match com nenhum resultado. É importante que todas as empresas mantenham um log desse tipo de suas buscas e trabalhe em cima delas para melhorar a experiência do usuário.

![Análise do Log da Busca 2](Imagens/Análise%20do%20Log%20da%20Busca%202.png)

Uma forma de melhorar a experiência do usuário seria realizar um processo de curadoria em cima dessas pesquisas e entender o que faz sentido que seja ajustado na plataforma para que dê match em um determinado conteúdo.

## :three: Heurísticas

### :arrow_right: O que são Heurísticas?

São princípios, regras, diretrizes e boas práticas de design.

Elas traduzem o senso comum de um bom projeto e servem para avaliar a qualidade da experiência oferecida, facilitar a crítica durante o desenvolvimento, e prever a eficácia das soluções propostas.

### :arrow_right: Tipos de Heurísticas

Heurísticas Genéricas:

- Tentam cercar todos os tipos de problemas que uma interface pode ter;
- São aplicáveis a grande maioria dos produtos e dispositivos.
- Exemplos:
  - Dez Heurísticas de Nielsen;
  - Oito regras de ouro de Shneiderman;
  - Heurísticas de Arquitetura de Informação de Abby Covert.

Heurísticas Específicas:

- Apresentam recomendações para um tipo restrito de interface (internet bankings, videogames, e-commerces, etc.) ou para devices (smartphones, desktops, terminais de autoatendimento, etc.);
- Exemplos:
  - Heurísticas de Arquitetura de Informação Pervasiva de Resmini e Rosati;
  - Heurísticas para avaliação de sistemas interativos cross-channel;
  - Heurísticas de Jogabilidade para jogos de computador;
  - Content Analysis Heuristics;
  - E-commerce User Experience;
  - Baymard Institute Guidelines;
  - Diretrizes de Stanford para credibilidade na web;
  - Design Social Interfaces.

### :arrow_right: Dez Heurísticas de Nielsen

1. A interface deve sempre manter os usuários informados sobre o que está acontecendo, com feedback adequado em tempo razoável:

    - No exemplo abaixo da área de seguros do Banco do Brasil, o usuário preencheu seus dados pessoais e ao clicar em "Iniciar Cálculo", a barrinha de progresso aumentou, porém, retornou para a mesma página, fazendo com que o usuário fique sem entender nada. Se ele olhar para a parte de baixo da tela, ele verá a informação de que é obrigatório informar mais um número de telefone além do celular. Caso essa mensagem de erro estivesse melhor posicionada (na área de atenção do usuário) e a barra de progresso refletisse a realidade, a experiência do usuário seria melhor.

        ![Heurísticas de Nielsen - Feedback Adequado 1](Imagens/Heurísticas%20de%20Nielsen%20-%20Feedback%20adequado%201.png)

        ![Heurísticas de Nielsen - Feedback Adequado 2](Imagens/Heurísticas%20de%20Nielsen%20-%20Feedback%20adequado%202.png)

2. Equivalência entre o sistema e o mundo real (falar a linguagem do usuário):

    - A voz do povo é a voz de Deus!
    - O sistema deve falar a linguagem dos usuários, com palavras, frases, ícones e conceitos familiares, em vez de usar termos técnicos;
    - Siga as convenções do mundo real, trazendo informações de maneira natural e lógica conforme o modelo mental do usuário;
    - No exemplo abaixo, vemos as versões de 2016 e 2021 do site da polícia rodoviária federal. Na versão mais antiga, para se consultar o status de um boletim de ocorrência tinha um campo chamado "Comunicação C", que nada mais é do que o nome técnico utilizado internamente na PRF para se referir ao número do protocolo do BO. Acontece que quem não é desse universo não conhece esse termo, causando problemas durante a consulta a plataforma. Na versão mais recente isso já foi readequado utilizando a linguagem acessível ao povo:

        ![Heurísticas de Nielsen - Falar a linguagem do usuário](Imagens/Heurísticas%20de%20Nielsen%20-%20Falar%20a%20linguagem%20do%20usuário.png)

3. Controle do Usuário e Liberdade (Saídas Claramente Marcadas):

    - É comum os usuários escolherem caminhos ou executarem funções por engano dentro do sistema e necessitarem de "saídas de emergência" para abandonar essas situações indesejadas sem ter que passar por um caminho longo ou refazer a tarefa desde o início;
    - É o usuário que controla o sistema, por isto ele precisa, a qualquer momento, poder abortar ou desfazer uma operação e retornar ao estado anterior.

4. Consistência e Padrões:

    - Consistência significa que as mesmas coisas funcionam do mesmo jeito e são apresentadas da mesma forma;
    - A consistência facilita o uso do produto porque o usuário aproveita seu aprendizado anterior, minimiza sua necessidade de memorização e oferece previsibilidade das ações;
    - No exemplo abaixo, na primeira imagem temos a página das Casas Bahia em 2017 e ela chamava o carrinho de compras dela de "caminhão de compras", já havendo uma inconsistência com o padrão utilizado pelo mercado que chama de "carrinho" ou "sacola" de compras. Porém, além dessa inconsitência com o mercado, as Casas Bahia cometia uma inconsistência interna, porque quando você acessava o caminhão, a página se chamava carrinho. Nas versões mais recentes, representada pela segunda imagem, as Casas Bahia já usa o desenho de um carrinho de compras e usa o modelo utilizado também por outros e-commerces:

        ![Heurísticas de Nielsen - Consistência 1](Imagens/Heurísticas%20de%20Nielsen%20-%20Consistência%201.png)

        ![Heurísticas de Nielsen - Consistência 2](Imagens/Heurísticas%20de%20Nielsen%20-%20Consistência%202.png)

5. Prevenção de Erros:

    - Melhor do que boas mensagens de erro é um design cuidadoso que evita a ocorrência de erros;
    - Elimine as condições de erro ou apresente aos usuários uma opção de confirmação antes de executar a ação;
    - Também vale apresentar opções de conserto direto e rápido.

6. Reconhecer ao invés de relembrar (Minimizar a carga de memória do usuário):

    - Utilize objetos, ações e opções de fácil entendimento cognitivo e deixe-os visíveis para minimizar a carga de memória do usuário. Por exemplo, o Windows é muito mais fácil do que o DOS pois o primeiro utiliza ícones para acessar as funcionalidades enquanto o segundo necessita que o usuário decore comandos;
    - Ele não deve ter que lembrar informações de uma parte do diálogo para outra;
    - As instruções para utilizar o sistema devem ser visíveis ou facilmente recuperáveis sempre que apropriado;
    - A interface deve mostrar os elementos de diálogo e permitir que o usuário faça suas escolhas sem a necessidade de lembrar um comando específico.
    - No exemplo abaixo temos a página do banco HSBC para simulação um financiamento de um imóvel e tem um campo que solicita a idade do imóvel em dias. Porém, o formulário pede para que o usuário insira o valor na mão, necessitando que ele faça essa conta, enquanto seria bem mais fácil colocar um campo no formato de calendário para o usuário inserir a data de nascimento (?) do imóvel e deixar que o sistema realize o cálculo:

        ![Heurísticas de Nielsen - Facilitar para o usuário](Imagens/Heurísticas%20de%20Nielsen%20-%20Facilitar%20para%20o%20usuário.png)

7. Flexibilidade e Eficiência de Uso (Atalhos):

    - Normalmente despercebidos pelos novatos, os atalhos ajudam a acelerar a interação dos usuários experientes de modo que a interface consegue proporcionar uma boa experiência para ambos;
    - Atalhos, como as teclas de função, o menu contextualizado (botão direito) e o botão "Voltar" entre outros servem para recuperar informações que estão em níveis mais profundos;
    - Eles permitem que os usuários executem com maior velocidade as ações mais frequentes.

8. Auxiliar o usuário a reconhecer, diagnosticar e recuperar ações erradas (boas mensagens de erro):

    - As mensagens de erro devem ter uma linguagem simples (sem códigos) indicando com precisão o problema e sugerindo uma solução;
    - Elas devem ajudar o usuário a entender e resolver o seu problema sem assustá-lo, culpá-lo ou intimidá-lo.

9. Ajuda e Documentação:

    - O ideal é que o produto seja tão fácil de usar, seja tão intuitivo, que não necessite de ajuda ou documentação;
    - Mas se for necessária, a ajuda deve estar facilmente acessível, com informações fáceis de pesquisar e focada nas tarefas do usuário, com instruções passo a passo de como chegar ao objetivo, sem ser muito extensa.

10. Estética e Design Minimalista:

    - As interfaces não devem conter informações irrelevantes ou raramente necessárias competindo em visibilidade e atenção com informações relevantes;
    - Por isto a interface deve apresentar exatamente a informação que o usuário precisa no momento, nem mais nem menos.

## :four: Metodologia de Projeto de UX

### :arrow_right: O que compõe um projeto de UX?

Algumas coisas que são presentes em qualquer outro projeto:

- Escopo;
- Prazo;
- Recursos;
- Pessoas;

Coisas específicas de UX:

- Quem são os usuários;
- Ambiente de uso;
- Contexto dos usuários.

O professor passou um vídeo de uma empresa que foi desafiada por um programa de notícias estadunidense a criar um modelo de carrinho de supermercado inovador em apenas cinco dias. A reportagem mostra o processo realizado pelo time de design até chegar o produto final. Durante o projeto foram reunidas pessoas de diferentes áreas do conhecimento e com diferentes pontos de vista trazendo informações relacionadas a carrinhos de supermercado, como número de acidentes com crianças, quantidade de roubos, etc. Também foram realizadas entrevistas com os usuários para entender as dores que eles e quais as opiniões deles sobre o objeto. Juntando todas essas informações, foram levantadas e debatidas ideias que poderiam ser implementadas e até mesmo criado protótipos para demostrar essas ideias. Por fim foi realizada uma votação e as melhores ideias de cada protótipo compuseram a versão final da cadeira.
É importante a mensagem de que apesar da versão final trazer melhorias para o dia a dia dos usuários, ela ainda precisa de melhorias, o que mostra que o processo de avaliação da experiência do usuário deve ser continuo e não apenas durante fase de desenvolvimento ou quando aparecem problemas.

### :arrow_right: Pensamento Criativo

O processo de pensamento criativo pode ser exemplificado pela imagem abaixo que é conhecido como diamante:

![Pensamento Criativo - Diamong](Imagens/Pensamento%20Criativo%20-%20Diamond.png)

Esse processo é muito comum nas reuniões de brainstorm.

Como a imagem mostra, o pensamento criativo é divido em duas etapas:

- Pensamento Divergente:
  - Incentive as ideias selvagens pois essas ideias acabam trazendo outras ideias mais realistas
  - Uma ideia puxa a outra
  - Criar opções

- Pensamento Convergente:
  - Avaliar
  - Fazer escolhas

### :arrow_right: O Modelo de Processo Criativo "Double Diamond"

A partir do diamante criado para exemplificar a ideia do pensamento criativo, foi criado pela Design Council, em 2005, um modelo de processo criativo chamado "Double Diamond", pois ele possui dois diamantes daquele apresentado no tópico anterior.

A ideia é que esse modelo pudesse ser replicado para qualquer tipo de processo de design de produto, e não apenas para a área de UX e também foi a base para o Design Thinking.

![Double Diamond](Imagens/Double%20Diamond.png)

Muitas vezes o projeto chega para a área de design com uma especificação de uma linha, pobre, com poucos detalhes, portanto, é necessário expandir o problema proposto para entendê-lo com mais propriedade. Essa é a etapa de "Descobrir" e no vídeo do professor ela é representada pela parte onde o time de design realiza pesquisas de informações sobre os carrinhos de supermercados e também fazem pesquisas de campos com os usuários desse objeto para entender mais.

Após fazer essa expansão do problema, agora é a etapa de "Definir" o que feito. No vídeo essa é a parte onde após a coleta de todas as informações, as mesmas são apresentadas ao restante dos colegas, mostrando o que cada um coletou. O mais rico dessa parte é que o grupo é formado por pessoas de diferentes áreas do conhecimento, portanto, os pontos tratados em suas pesquisas variam de acordo com a sua perspectiva de mundo, gerando diferentes ideias que não necessariamente surgiriam caso a equipe fosse composta de pessoas com o mesmo perfil. Ao final dessa fase o escopo do problema é definido, gerando o "Design Brief".

Após essas duas primeiras etapas, então vem o segundo diamante, onde é necessário expandir novamente em "Desenvolver" para propor e definir o que será feito para resolver o problema proposto e na última fase de convergência "Entregar", é onde é colocado de fato a mão na massa até gerar o produto final. No vídeo a primeira etapa é representada pela parte onde são criados os protótipos por cada um dos subgrupos formados e a definição do que será reaproveitado de cada um deles e por fim a construção do carrinho com as melhores ideias propostas pelos membros do grupo.

### :arrow_right: Processo do Design Thinking

Na imagem a baixo podemos ver o modelo de processo do Design Thinking. Podemos encontrar alguns modelos um pouco diferentes que variam de acordo com quem idealizou o modelo. O mostrado abaixo é um dos mais conhecidos.

![Design Thinking](Imagens/Design%20Thinking.png)

Vemos a semelhança dele com o modelo Double Diamond. As etapas de "Empatizar" e "Definir" equivalem ao primeiro diamante, onde os membros do time realizam as pesquisas e depois realizam o brainstorm, respectivamente. Enquanto "Idealizar", "Propotipar" e "Testar" dizem respeito ao segundo diamante, onde se define as soluções para o problema, cria protótipos e os testa.

Valores do Design Thinking:

- **Empatia:** Empatia é a capacidade de se colocar no lugar do outro. Porém, não conseguimos nos colocar literalmente no lugar do outro pois a experiência de cada um é muito particular. Por conta disso, é importante trazer o usuário para perto do projeto, das conversas, definições, etc;
- **Colaboração:** Nenhum grande projeto saiu da cabeça de uma só pessoa;
- **Prototipação:** Você não irá acertar de primeira, portanto, faça protótipos para testar o seu produto e coletar dados de onde pode melhorar e ir repetindo esse processo até entender que o produto atingiu um nível de maturidade consistente.

### :arrow_right: Design Squiggle

Abaixo temos uma representação visual do que é o processo de design, onde se inicialmente existe muitos ruídos e aplicando-se os processos de design, como os apresentados nos tópicos anteriores, chegasse a um cenário de clareza e para onde o projeto deve caminhar.

![Design Squiggle](Imagens/Design%20Squiggle.png)

### :arrow_right: Design Centrado no Usuário

Duas disciplinas são importantes quando estamos tratando do design centrado no usuário:

1. **Visão da Interação Humano-Computador:**

    - Focar desde o início do projeto no usuário e nas suas tarefas (antes mesmo das tecnologias que serão utilizadas);
    - Avaliar e medir o uso do produto (Teste de usabilidade);
    - Design iterativo (a ideia é implementar, testar e repetir esse ciclo pra ir melhorando o projeto) e interativo (testes junto do usuário);
    - No vídeo apresentado os membros da equipe antes de tudo querem entender as necessidades dos usuários do produto (carrinho de supermercado), então realizam entrevistas tanto com os clientes desses mercados quanto com quem trabalha nesses locais e assim que finalizam o protótipo levam para serem testados nos próprios mercados.

2. **Visão da Ciência da Informação:**

    - Como as pessoas adquirem conhecimento?
    - Na visão da ciência da informação o foco é no usuário em entender suas situações particulares de uso de informação e no que ocorre antes, durante e depois das suas interação com o sistema (visão holística);
    - No vídeo isso é apresentado quando pessoas de diferentes áreas são consultadas e cada uma dela trás uma visão do produto: a visão do vendedor e do cliente sobre o carrinho, o carrinho dentro do mercado, fora do mercado, no estacionamento, com crianças, adultos e idosos, etc., procurando entender o cenário do carrinho de supermercado por completo.

### :arrow_right: Princípios para uma Metodologia de Projeto de UX

![Metodologia de Projeto de UX](Imagens/Metologia%20de%20Projeto%20de%20UX.png)

Focando agora em um projeto de UX, seus projetos são compostos geralmente por cinco fases, especificadas na imagem acima.

Podemos dizer que as duas primeiras etapas são o duplo diamante apresentado em tópicos anteriores, onde são feitas as pesquisas e a equipe de design tenta inicialmente entender o problema que eles precisam resolver e buscar soluções. A etapa de especificação é aquela onde os designers criam as telas, utilizando o figma ou outras ferramentas de modelagem. Na etapa de implementação é quando a especificação é repassada aos desenvolvedores que começam a implementar tudo o que foi planejado. Nessa etapa é importante que o design esteja sempre disponível, pois dúvidas e problemas sempre vão surgir, muitas vezes necessitando de algumas revisões das especificações. Por fim, esse produto é colocado em produção e então feitas avaliações para entender a satisfação do cliente e o que o produto pode melhorar. Os vários ciclos mostram que esse processo ocorre indefinidamente, sempre havendo melhorias a serem realizadas no projeto.

É muito importante saber também implementar os conceitos de design centrado no usuário.

## :five: Reflexão

"*O cliente é o visitante mais importante em nossa casa. Ele não depende de nós; nós que somos dependentes dele. Ele não é interrupção do nosso trabalho, ele é o propósito do mesmo. Ele não é estranho em nosso negócio, ele faz parte do mesmo. Nós não estamos fazendo um favor ao serví-lo, ele está fazendo um favor em nos dar uma oportunidade.*" - Mahatma Gandhi

## :six: Perguntas

1. **O que o professor acha sobre todos os sites e aplicativos apresentarem a mesma cara?**

    Essa convergência entre aplicativo acaba funcionando como um processo de seleção natural, onde as melhores práticas de mercado acabam prevalecendo e sendo replicadas entre as diferentes plataformas que não querem ficar para traz. Por um lado isso é bom para os usuários, pois cria consistência entre as páginas, facilitando seus usos, porém, acaba criando páginas com pouca personalidade, o que pode acabar sendo um diferencial de sucesso. O jeito é buscar um equilíbrio entre utilizar as melhores práticas de mercado mas tentar manter uma personalidade que diferencie o seu produto dos demais existentes.

2. **Como novas tecnologias emergentes como Realidade Aumentada e Inteligência Artificial podem ajudar na experiência do usuário?**

    Primeiro passo é entender se de fato aquela tecnologia trará algum benefício para o usuário. O professor deu o exemplo de um banco que criou uma página web em 3D anos atrás, em um estilo gameficado onde o usuário para realizar as tarefas do banco como conversar com o gerente, realizar transferências, etc. precisaria controlar um boneco e andar com ele até o local da agência onde aquela tarefa se encontra. Isso realmente traz algum ganho? Não é muito mais prático apenas colocar um formulário em 2D para o usuário preencher?
    Por outro lado o professor deu o exemplo do JusBrasil, já mencionado em uma resposta da aula 1, onde eles estão utilizando o chatGPT para realizar a "tradução" de termos jurídicos para pessoas que não são do meio.
