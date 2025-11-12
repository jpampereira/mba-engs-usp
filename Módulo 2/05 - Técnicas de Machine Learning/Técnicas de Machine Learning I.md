# Técnicas de Machine Learning I

Machine Learning (ML) pode ser definido como o uso de dados em conjunto de algoritmos para obtenção de informações que serão relevantes para tomada de decisão.

- Data-Driven Decision Making: usar as informações encontradas a partir da análise dos dados para tomar decisões embasadas.

Existe todo um processo por traz que começa com a extração dos dados, seguido do seu tratamento e aplicação (que por trás nada mais são do que métodos estatísticos) e por fim a análise do output (saída) do modelo.

Exemplo: criação de modelos preditivos ou análise de interdependência entre os dados.

## :one: Banco de Dados

A primeira coisa que precisamos definir antes mesmo da modelagem é no banco de dados que armazenará os dados que serão consumidos pelo modelo.

Esses dados são uma amostra, ou em outras palavras, um subconjunto da população do problema que estamos tentando resolver.

- Ela deve ser representativa e não conter viés para que o resultado reflita a realidade;
- É difícil termos a completude dos dados. Quando temos essa totalidade estamos falando dos sensos que temos de tempos em tempos.

O Banco de Dados de um modelo de ML é composto por:

- **Observações:** as unidades que possuem características/atributos (linhas);
- **Variáveis:** características/atributos observados, medidos ou categorizados (colunas).

Exemplo:

![Exemplo de Tabela](./Imagens/Exemplo%20de%20Tabela.png)

- No exemplo acima cada uma das linhas (ou registros) representa uma pessoa da amostra, também conhecidas como observações. Cada uma dessas pessoas contém um conjunto de variáveis que as descrevem: idade, altura, cidade, profissão, renda etc.

Os exemplos práticos dessas aulas serão feitos em Python e suas bibliotecas de modelagem comumente utilizam dados estruturados em tabelas, logo, bancos SQL são mais apropriados nessa situação, isto é, conjunto de dados estruturados em formato de tabelas.

- Nos nossos exemplos serão extraídos dados de planilhas Excel, simulando o que seriam bancos de dados em casos reais.

## :two: Tipos de Variáveis

### :arrow_right: Tipos

Identificar os tipos das variáveis utilizadas nas amostras é fundamental para a escolha da técnica que será utilizada na análise dos dados.

Elas podem ser divididas em:

- **Métricas:** Quantitativas, isto é, apresentam características que podem ser mensuradas ou contada;
- **Não Métricas:** Qualitativas, isto é, não podem ser medidas, mas sim categorizadas.

Utilizando a mesma tabela do exemplo anteriores vamos classificar as variáveis:

![Tipos de Variáveis](./Imagens/Tipos%20de%20Variáveis.png)

- As variáveis "idade", "altura" e "renda", destacadas em vermelho, são classificadas como métricas, enquanto "cidade" e "profissão", destacadas em verde, são qualitativas.

**Atenção:** Apesar de variáveis quantitativas serem representadas por números, não significa que toda variável numérica é do tipo "métrica". Pode ser apenas uma representação numérica de uma categoria para facilitar a análise e manipulação, mas ela não deixa de ser qualitativa.

- Induz ao erro;
- Talvez seja melhor deixar o nome para evitar confusão.

### :arrow_right: Transformações

É possível transformar uma variável originalmente métrica em categórica.

- Exemplo: podemos transformar a variável "renda", que originalmente é do tipo "métrica" para "faixa de renda", onde categorizamos de acordo com a faixa que suas rendas se encaixam. A variável segue tendo o mesmo propósito, porém, será analisada de outra forma.

Por sua vez, o inverso não é possível, isto é, transformar uma variável originalmente qualitativa em métrica.

- Exemplo: seja o caso da escala Likert, muito utilizada em formulários de satisfação (como o de 5 pontos que preenchemos nas avaliações dos docentes da USP-Esalq - Discordo Plenamente, Discordo, Não Concordo nem Discordo, Concordo, Concordo Plenamente). É comum analistas utilizarem representações numéricas, isto é, 1 para "Discordo Plenamente", 2 para "Discordo" e assim em diante até 5 para "Concordo Plenamente" e tirarem medidas como a média para tentar entender o nível de satisfação médio das pessoas, porém, essa representação númerica é um **Erro de Ponderação Arbitrária**. Nós não podemos inferir que o espaçamento numérico entre duas possíveis categorias é de apenas uma unidade, pois cada pessoa interpreta cada um dos possíveis valores de uma forma, as vezes dando um peso muito maior pra um do que outro, logo, a medição será imprecisa e não refletirá o real sentimento do público.

### :arrow_right: Representações

Variáveis categóricas podem ser representadas por meio de tabelas de distribuição de frequências. Exemplo: quantas pessoas vivem em cada estado do Brasil ou quais são as profissões com maior número de profissinais no mercado?

Variáveis quantitativas possuem um maior leque de representações, como medidas de dispersão (variância e desvio padrão) ou posição (média, mediana, quartis).

Isso mostra o quanto é importante identificar o tipo de variável para definir o método estatístico a se utilizar.

### :arrow_right: Outras Características Relevantes

Variáveis Qualitativas podem ser classificadas entre dicotômicas (duas categorias - binário) ou policotômicas (mais de duas categorias) ou nominal e ordinal, onde a segunda indica que as categorias possuem uma relação de grandeza (ou ordem), enquanto a primeira não.

Variáveis Quantitativas podem ser classificadas como discretas (números inteiros) ou contínuas (números reais).

## :three: Modelos Lineares de Regressão Simples e Múltipla

Regressão Linear é um método que procura explicar um fenômeno a partir de uma ou mais variáveis.

O objetivo é estimar modelos/equações com o intuito de elaborar previsões.

- Realizar inferência dos resultados para observações fora da amostra inicial.

Define-se uma relação `Y = f(x)`, onde:

- **Y** é chamada de variável dependente ou variável a ser explicada (*target*);
- **X** são chamadas de variáveis explicativas ou preditoras (*features*).

Como interpretar essa equação:

- Nós propomos que as variáveis X explicam Y;
- Queremos explicar o comportamento Y em função de X.

**Importante:** Esse modelo deve ser aplicado apenas quando a variável dependente é do tipo quantitativa. As variáveis explicativas podem ser tanto métricas quanto categóricas (nesse caso, precisarão de um tratamento prévio).

A diferença entre uma regressão simples e uma múltipla é que a primeira contém apenas uma variável explicativa, enquanto a segunda possui duas ou mais.

### :arrow_right: Modelos Supervisionados

Os modelos supervisionados de Machine Learning são aqueles em que o analista propõe o modelo que deve ser produzido, especificando as variáveis que serão levadas em consideração e que elas tem relação de causa-efeito com o que se deseja provar. Os não supervisionados desejamos utilizar a tecnologia para procurar possíveis relações, ainda desconhecidas, entre as variáveis.

### :arrow_right: Modelo Geral de Regressão Linear

```Modelo Geral de Regressão Linear
Yi = a + b1x1i + b2x2i + ... + bkxki + ui
```

- Y = Variável Dependente Quantitativa;
- a = Constante (Intercepto);
- b = Coeficiente para cada Variável Explicativa (magnitude ou influência da variável no resultado);
- x = Variáveis Explicativas do Modelo;
- u = Erro do Modelo (Resíduo);
- k = Número de variáveis explicativas do modelo;
- i = Observação em análise.

O resíduo do modelo pode ser calculado como a diferença entre o valor real e o valor estimado.

### :arrow_right: Exemplo

No exemplo abaixo temos a representação gráfica de um modelo de regressão linear simples que procura explicar o preço do imóvel em função do seu tamanho (m2), sendo possível concluir que quanto maior o seu tamanho, maior o seu preço, caracterizando uma relação positiva entre as variáveis X e Y:

![Exemplo de Regressão Linear Simples - Parte 1](Imagens/Exemplo%20de%20Regressão%20Linear%20Simples%20-%20Parte%201.png)

Se escolhermos qualquer ponto no eixo x, isto é, o tamanho do imóvel que gostariamos de saber o seu possível preço, traçarmos um pontilhado até o ponto de cruzamento com a reta do gráfico e a partir desse ponto de cruzamento em direção ao eixo y, vamos encontrar o seu valor correspondente:

![Exemplo de Regressão Linear Simples - Parte 2](Imagens/Exemplo%20de%20Regressão%20Linear%20Simples%20-%20Parte%202.png)

O resíduo (ou erro) de uma observação é a distância (diferença) do ponto no gráfico (valor real ou observado) para a reta (valor previsto):

![Exemplo de Regressão Linear Simples - Parte 3](Imagens/Exemplo%20de%20Regressão%20Linear%20Simples%20-%20Parte%203.png)

Se fossemos representar por meio de uma fórmula esse modelo, teriamos:

```Regressão Linear Simples
Preço do Imóvel i = a + b * Tamanho do Imóvel i
```

### :arrow_right: Mínimos Quadrados Ordinários (MQO)

Como podemos observar no gráfico do exemplo anterior, o modelo (reta) não passa em cima de todos os pontos do gráfico (amostras), pois não conseguimos criar um modelo com total exatidão, portanto, é necessário estabelecer algumas condições para escolhermos a melhor reta possível a se traçar nesse gráfico, dadas as infinitas possibilidades.

No caso da Regressão Linear são utilizadas duas condições para estabelecer o melhor modelo:

**1 -** A somatória dos resíduos deve ser igual a zero.

Porém, apenas essa condição não é suficiente, pois ainda existirão várias retas possíveis a serem traçadas.

**2 -** A somatória dos resíduos ao quadrado é a mínima possível.

Isto é, queremos a reta cujos resíduos são os menores possíveis, quando seus quadrados são somados.
