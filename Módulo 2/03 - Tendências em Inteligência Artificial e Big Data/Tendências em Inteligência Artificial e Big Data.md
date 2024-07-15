# Tendências em Inteligência Artificial e Big Data

IA é apenas uma ferramenta para a maioria das empresas. Só é tratado como core business em empresas que constroem modelos, como: Google, IBM etc.

Devemos olhar a IA como uma ferramenta auxiliar e não como algo que irá nos substituir.

- Exemplo: O ChatGPT é um bom auxiliar durante o desenvolvimento para relembrar comandos e tirar dúvidas.

## :one: Big Data

Big Data não é uma ferramenta ou um aplicativo e sim um conceito. Segundo a definição da Gartner:

"*Big data é um conjunto de informações em alto volume, alta velocidade e/ou alta variedade, que demanda formas inovadoras e custo-efetivas de processamento de informações, permitindo uma visão aprimorada, tomada de decisões e automação de processos.*"

Os três V's clássicos do Big Data:

- **Volume:**

  - Temos mais dados pois o armazenamento se tornou muito mais barato, além de termos muitas mais fontes de coleta;
  - É o conceito que a maioria das pessoas associa o BIG do nome, porém, apenas o volume não significa nada.

- **Variedade:**

  - Além das diferentes fontes e formas de coleta, hoje trabalhamos com dados em diferentes formatos:
    - Estruturados: Tabelas; dia-a-dia empresarial; em geral linhas e colunas; bancos de dados relacionais;
    - Semi Estruturados: JSON e XML. Usualmente utilizados para transferência de dados entre sistemas. Dificilmente é utilizado como forma de leitura já que apesar de possuir uma estrutura, é de difícil compreensão por pessoas de fora do escopo de tecnologia;
    - Não Estruturados: Posts, imagens, áudio, vídeo, livros (nosso dia-a-dia).
  - Quanto menos estruturado o dado, maior sua complexidade e necessidade de recursos para trabalhá-los.
  
- **Velocidade:**

  - Além da forma como os dados são armazenados ter mudado ao longo do tempo também houve uma mudança conceitual onde pensávamos em dados antes como estoque e agora como fluxo, isto é, antes a quantidade de dados era muito menor e eles não mudavam rapidamente, hoje os dados envelhecem muito rápido;
  - Os dados são pereciveis, eles não tem valor intrínseco, tem valor em apenas um determinado momento.

Outros 2 V's importantíssimos:

- **Veracidade:** talvez o ponto mais importante, pois sem integridade os dados valem nada;
- **Valor:** Devemos usar dados pra dar algum resultado. Sozinho um dado não tem valor, ele agrega valor apenas quando trabalhamos em cima dele para gerar alguma informação.

Portanto, Big Data não é sobre armazenar grandes quantidades de dados e sim sobre gerar algum valor sobre eles.

- Se dado é o novo petróleo (combustível), então o analytics é o motor.

## :two: Modelo Preditivo

Um modelo preditivo é uma função matemática capaz de identificar padrões por meio de uma série de dados previamente coletados.

O professor deu o exemplo de "como podemos determinar se algo é um cachorro?" e definiu cinco perguntas e caso as cinco fossem respondidas positivamente, poderiamos dizer que aquela coisa era um cachorro. Vamos adotar valores booleanos e definir 1 para respostas positivas e 0 para respostas negativas. Portanto, podemos confirmar com total certeza que algo é um cachorro quando a soma das resposta é igual a 5, isto é 5/5 ou 100%.

Se definirmos cada pergunta como uma porção de uma equação matemática, podemos definir o modelo preditivo para definir se algo é um cachorro da seguinte forma:

```Matemática
P(cachorro) = 0.2*(pergunta1) + 0.2*(pergunta2) + 0.2*(pergunta3) + 0.2*(pergunta4) + 0.2*(pergunta5)
```

Claro que uma IA não gera um modelo de predição da forma como foi apresentado. Essa é apenas uma explicação lúdica de como funciona um modelo. O importante aqui é entender que todo modelo de predição é uma equação matemática, onde os dados de entrada são as variáveis desse modelo e esses possuem pesos, definidos durante a fase de treinamento do mesmo.

## :three: Simplificando a IA

Podemos dividir as IAs em três categorias:

- **Super IA:** É aquela que vemos nos filmes de ficção. São máquinas autoconscientes. Ainda não existem mas há estudos para que sejam construídas de forma ética e segura;
- **IA Geral:** Procura soluções para problemas para os quais ela não foi especificamente treinada. Ela não existe mas estamos mais perto do que as super. Podemos achar que o ChatGPT é um exemplo, já que ele responde perguntas de diferentes temas, porém, ele não é pois é baseado puramente em um modelo matemático;
- **IA Restrita:** Maior parte dos modelos que conhecemos e estão no nosso dia a dia são construídos com objetivos específicos.
  - Um modelo criado pra um determinado propósito não pode ser replicado em outro contexto;
  - Cada contexto necessita de uma nova modelagem;
  - Exemplo: algoritmo do melhor caminho do waze não pode ser utilizado pelo ifood para te recomendar um restaurante de acordo com os seus gostos.

### :arrow_right: Machine Learning

Outro termo muito na moda no mundo de tecnologia é o Machine Learnig (Aprendizado de Máquina). Resumindo: seu objetivo é simular a forma de aprendizagem dos humanos, baseada em exemplos, para construir os modelos. Isso permite fazermos previsões de forma mais rápida, barata e assertiva, além de possibilitar novas aplicações.

Vamos pensar no exemplo da autonomia veicular: apesar de ainda não estarmos vendo carros autônomos nas ruas, essa conversa é antiga e remete ao contexto fabríl na automação das suas empilhadeiras. Nesse contexto já podemos observar a existência de empilhadeiras autônomas, então a pergunta que fica é: porque isso ainda não foi replicado para carros convencionais?

- A resposta é simples: o ambiente de uma empilhadeira é restrito e controlado se comparado ao mundo real amplo e cheio de imperfeições;
- No caso de uma empilhadeira, é simples definirmos os cenários em que ela pode se encontrar e definir as ações que ela deve tomar nesses casos. Exemplo: "se alguém entrar na frente então parar" ou "se a prateleira estiver vazia então vá para a próxima";
- Porém, quando vamos para o mundo real não é possível utilizar esse modelo condicional pois as situações são infinitas.

A autonomia veicular só pode ser resolvida com previsão.

Como ela funciona?

- Um humano, que classificamos como bem intencionado, dirige um carro e um programa, no passageiro, vai captando informações através de câmeras, radares e sensores e vai aprendendo com os acontecimentos e dados coletados;
- Exemplo: a pessoa identifica um pedestre e para o carro. Quando o sensor identificar o pedestre ele irá, através do seu algoritmo, tentar definir a ação que ele deve tomar. Caso a ação seja a mesma da pessoa, ele aprende que aquilo é correto. Caso sua ação seja diferente da pessoa, ele aprende que errou e retroalimenta o modelo com a informação de qual a ação correta a se tomar naquele cenário.

De início o programa irá cometer vários erros, mas aprende com esses erros e atualiza o programa sempre que prevê de forma errada o que o humano bem intencionado faria. As previsões melhoram até o momento em que o programa fica melhor que o motorista bem intencionado. Neste ponto, o programa pode atuar sozinho.

Por que os carros autônomos ainda não são uma realidade? Dois principais desafios: quantidade enorme de dados a processar e tempo de resposta deve ser baixíssimo.

## :four: IA com Dados Estruturados

Vamos ver um exemplo próximo do dia-a-dia utilizado pelas empresas: a divisão de recursos humanos de uma empresa deseja reduzir o seu turnover já que a perda de colaboradores pode ser muito custosa, seja no sentido financeiro ou até mesmo de ritmo (curva de aprendizagem). Para isso, decidiram contratar uma consultoria para criar um modelo de análise preditiva que determina a probabilidade de um colaborador pedir demissão.

- Turnover nada mais é do que a métrica que avalia o nível de rotatividade dentro de uma empresa.

Para conseguirmos criar um modelo o primeiro de tudo é termos o nosso dataset. O dataset nada mais é do que os dados que serão lidos pelo modelo para determinar a probabilidade de algo acontecer.

- No nosso exemplo, nosso dataset nada mais é do que as informações dos funcionários que estão ou que já saíram da empresa.

  ![Dataset estruturado](Imagens/Dataset%20estruturado.png)

  - Podemos interpretar a imagem acima da seguinte forma: os pontos são cada um dos funcionários. A cor azul identifica os funcionários que permanecem na empresa e o vermelho aqueles que já saíram. Cada um dos funcionários possui diferentes atributos (ou features) que o identificam.

Em posse do dataset, escolhemos uma entre várias ferramentas existentes para modelagem, como as linguagens Python ou R, o Watson da IBM etc. e "jogamos" esses dados dentro dessas ferramentas de modelagem. O resultado dessa ferramenta será o modelo que iremos utilizar para prever qual a chance de um colaborador pedir demissão ou não.

Aqui temos que ter em mente que estamos utilizando um novo paradigma. Usualmente quando construímos algoritmos, nós desenvolvedores definimos é construímos as regras de negócio da aplicação e utilizamos os dados de entrada e saída em testes e produção. No caso da inteligência artificial fazemos o inverso, nós fornecemos para a ferramenta de modelagem os dados de entrada (inputs) e os de saída (target, label ou output) e ela será responsável por definir o modelo que iremos utilizar.

- "*Usando IA, quem cria as condicionais é o computador!*";

- Basicamente estamos informando para a ferramenta exemplos de cenários reais e qual o resultado esperado para eles e de forma iterativa ela vai aprendendo e melhorando de forma que modelo final seja capaz de receber novos cenários, fora daqueles treinados, e seja capaz de definir com precisão a probabilidade de determinada coisa acontecer. Esse é o conceito de Machine Learning;
- Por isso a importância do dataset e do treinamento, pois só assim se pode chegar em um modelo de qualidade.

Esse modelo que tanto falamos é uma equação matemática, onde cada porção dessa equação representa um input (no exemplo, cada uma das informações do usuário) e essas porções recebem pesos, calculados durante a fase de treinamento e baseado nos targets informados.

  ![Modelo com dataset estruturado](Imagens/Modelo%20com%20dataset%20estruturado.png)

Após muito treinamento o modelo gerado pode ser utilizado em produção. Porém, ele não retornará o que deve ser feito para que o funcionário não peça definição e sim apenas a probabilidade disso acontecer. O modelo pode até retornar quais foram as informações que mais influenciaram na sua tomada de decisão, porém, a partir da entrega do dado, cabe a equipe do RH, responsável pelo tema, de trabalhar caso a caso para que o turnover diminua.

- O modelo não trará todas as respostas, ele apenas apontará os cenários de maior probabilidade (uma espécie de facilitador) para que a equipe se concentre nos casos mais críticos;
- O que é mais importante para se atingir a diminuição do turnover: tratar o caso de um funcionário que tem 90% de probabilidade de sair ou de um que tem apenas 12%?

Essa mesma ideia pode ser aplicada em outros contextos. Exemplos:

- Uma faculdade está observando muitos casos de desistência e quer a partir de modelos probabilísticos encontrar o perfil dos alunos que tem maior tendência a isso para que consigam criar um plano de ação com o objetivo de diminuir a incidência;
- Uma empresa de televisão a cabo quer utilizar um modelo probabilístico para prever quais os clientes que tem maior probabilidade de cancelar a assinatura e com isso trabalhar em ações em cima dos casos mais críticos, afim de diminuir o seu churn (métrica que mostra o número de clientes que cancelaram um determinado serviço em um período de tempo).

## :five: IA com Dados Não Estruturados

Quando falamos de dados estruturados estamos falando de imagens, videos, audios, textos etc. Nesses casis é comum que não criemos e executemos modelos com esses dados em nossas máquinas pessoais, visto que eles necessitam de maior poder computacional para serem processados. Nesse caso utilizamos modelos prontos em nuvem  (SaaS) criados por outras pessoas/empresas, como a Google e Azure.

## :six: Qualidade e Explicação de Modelos Preditivos

### :arrow_right: Qualidade

Não existe modelo bom quando os dados de treinamento são ruins, porém, mesmo com dados de qualidade, não necessariamente podemos criar um modelo. A característica desses dados também é fator determinante para definir sua viabilidade ou não.

- Se o modelo não for capaz de diferenciar os dados que compõe o dataset através de seus atributos ele não será viável. Exemplo do Rei Charles e Ozzy Osbourne presente nos slides da aula, ambos apresentam os mesmos atributos, porém, são pessoas completamente diferentes.

- Modelo sempre dá pra criar, agora, se dá pra usar vai depender da capacidade preditiva dele, isto é, quanto ele vai acertar.

Separamos uma parte do dataset para ser utilizado após o treinamento para avaliar sua capacidade de generalização com dados nunca antes vistos por ele.

- A pergunta que queremos responder é: será que o modelo será bom para dados que ele nunca viu?

Para realizar a análise de qualidade do modelo utilizamos uma matriz de confusão:

![Qualidade do Modelo](Imagens/Qualidade%20do%20modelo.png)

No exemplo acima temos a matriz de um modelo que prevê se um cliente, baseado em suas características, irá pagar pela compra realizada. A partir do resultado do modelo a empresa definirá se realizará a venda ou não.

A matriz possui duas linhas e duas colunas:

- O modelo prevê que ele não irá pagar e de fato não pagou (verdadeiro positivo);
- O modelo prevê que ele não irá pagar mas na verdade pagou (falso positivo);
- O modelo prevê que ele irá pagar mas na verdade não pagou (falso negativo);
- O modelo prevê que ele irá pagar e de fato pagou (verdadeiro negativo);

Interpretando a matriz: de 5098 casos analisados, o modelo preveu que 2809 deles os clientes não iriam pagar. Desse número ele acerto 1949 e errou outros 860. Os outros 2289 o modelo previu que os clientes pagariam e obteve acerto em 1816 casos, enquanto outros 473 houve equívoco.

A partir dessa matriz é possível calcular várias métricas de qualidade como sensibilidade, especificidade, acuracidade, precisão etc.

- Comumente avaliamos a qualidade de um modelo a partir de sua acuracidade, porém, essa não é de fato a melhor media. As melhores métricas a se avaliar são a precisão (VPP) e o VPN.

Por que a precisão e VPN são métricas muito melhores do que a acurácia? A acurácia traz apenas a porcentagem de acertos do modelo em relação ao total de predições realizadas, porém, é muito importante que nos atentemos aos casos que o modelo classificou incorretamente.

- O modelo acertou em 69% dos casos que um cliente não pagaria. Isso significa que aproximadamente 3 em cada 10 clientes que deixamos de vender, pagariam pelo produto, o que sinaliza riscos de perda de receita;

- O modelo acertou em 79% dos casos que um cliente pagaria. Isso significa que um a cada cinco clientes que vendemos um produto não irá pagar, sinalizando riscos de inadimplência.

O papel do cientista de dados acaba no cálculo dos coeficientes de qualidade. A interpretação dos resultados, como as apresentadas acima, e a ação que será tomada deve ser decisão da equipe de negócios.

- Não existe um limiar que defina se um modelo é bom ou ruim;
- Existem casos onde 70% de precisão é considerado um bom número, enquanto outros 90% não é o suficiente;
- Tudo depende do contexto onde ela será inserida;
- Por isso a avaliação do modelo deve ser feita pela equipe detentora do negócio.

## :seven: Alguns pontos importantes sobre IA generativa

Você precisa olhar para o chatGPT como se ele fosse o seu assistente, isto é, você pede para ele fazer o trabalho pesado e revisa o resultado.

- Você tem que olhar para ele como um estagiário. Você delega uma atividade para ele mas não a responsabilidade. Ele pode errar, então você sempre precisa revisar.

IA generativa não é um método melhor do que outros.

- Cada um tem seu propósito;
- IA generativa é uma ótima solução para estruturação de dados mas não para modelos de predição;
- É o mesmo que perguntarmos: o que é melhor, um avião ou um foguete? cada um tem uma finalidade diferente.

Devemos tomar muito cuidado com automações que utilizam LLM, pois elas alucinam (isto é, respondem baseadas em informações não verificadas), portanto, necessitam sempre de análise crítica dos humanos que a utilizam e a supervisionam.

## :eight: Regulação, ética, justiça, transparência

Sua obrigação como cientista de dados é criar um modelo que não tenha viés.

- Podemos fazer uma IA que é negacionista ou não;
- Podemos fazer uma IA racista ou que não realiza discriminação.

Isso não está na mão do computador e sim do cientista de dados.

Por isso a inteligência não é artificial e sim do humano que a esta construindo.

Computador não é ético ou justo, ele obedece o que a gente faz.
