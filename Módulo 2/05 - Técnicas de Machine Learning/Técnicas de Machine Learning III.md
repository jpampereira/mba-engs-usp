# Técnicas de Machine Learning III

## Exemplo :one: - Prevendo o Lucro de Startup

### Proposta

O objetivo desse primeiro exemplo é criar um modelo de regressão linear que explique (ou preveja) o lucro médio (`Profit`) de uma *startups* americanas levando em consideração os seguintes atributos: investimento em P&D (`RDSpend`), despesas operacionais (`Administration`), despesas com marketing (`MarketingSpend`) e estado dos EUA que a empresa se encontra (`State`).

- Cada observação do dataset são dados de uma startup Norte Americana;

- `Profit`é a variável **dependente** Y enquanto as demais são variáveis **explicativas** X;

- Apenas `State` é variável **categórica** enquanto as demais são dso tipo **métricas**.

As bibliotecas utilizadas são as mesmas já apresentadas no exemplo anterior.

### Estatísticas Descritivas

Na linha 37 são apresentadas algumas estatísticas em cima das variáveis métricas, como média, mínimo, máximo, quartis etc. Na linha 46 é feito o mesmo para a variável categórica, apresentando a tabela de frequências.

Entre as linhas 48 e 58 é feita novamente uma análise estatística em cima da variável categórica `State`, dessa vez para mostrar o lucro médio por estado. Podemos perceber as médias de lucro médio por estado são muito próximas.

### Correlação de Pearson

Entre as linhas 40 e 43 é montada a matriz de correlação de Pearson entre as variáveis métricas do modelo. Vemos que as variáveis `RDSpend` e `MarketingSpend` tem influência positiva sobre o lucro, isto é, quanto maior o investimento em P&D e as despesas em Marketing, maior o lucro da empresa. O `Administration`, por sua vez, não possui influência em cima do lucro médio da startup.

![Exemplo - Modelo para Prever Lucro Médio das Startups - Correlação de Pearson](./Imagens/Exemplo%20-%20Modelo%20para%20Prever%20Lucro%20Médio%20das%20Startups%20-%20Correlação%20de%20Pearson.png)

### Dummização

Como temos uma variável categórica entre as variáveis explicativas, precisamos aplicar o processo de Dummização dela e nisso também definir qual delas será removida do modelo para ficar como referência no intercepto (No caso, foi escolhida a variável `State_NewYork`).

### Geração e Análise do Modelo

Entre as linhas 69 e 70 é gerado o modelo de regressão linear múltiplo que tenta explicar o lucro médio de uma startup americana baseado em fatores como investimento em P&D, despesas operacionais e de marketing e estado de localização.

Analisando o modelo gerado obtemos os seguintes resultados:

![Exemplo - Modelo para Prever Lucro Médio das Startups - Primeira Versão do Modelo](./Imagens/Exemplo%20-%20Modelo%20para%20Prever%20Lucro%20Médio%20das%20Startups%20-%20Primeira%20Versão%20do%20Modelo.png)

- O **P-Valor da Estatística F**, que explica a significância geral do modelo, é menor que 5%, indicando que existe pelo menos uma variável significativa, isto é, estatisticamente diferente de 0. Logo, o modelo é válido.

- O **P-valor da Estatística T**, que explica o nível de significância de cada variável explicativa separadamente, foi menor que 5% apenas no Intecepto e para `RDSpend`, sendo assim, as demais variáveis explicativas são estatisticamente iguais a zero, isto é, não são relevantes para explicar o lucro médio obtido por uma startup.

- O valor positivo do beta da variável `RDSpend` sugere que startups que investem mais em P&D costumam ter mais lucro.

### Remoção das Variáeis Não Significativas (Stepwise)

Por conta da análise do modelo na etapa anterior, identificamos que apenas a variável `RDSpend` é significativa na explicação do lucro médio obtido pelas empresas.

Sendo assim, devemos aplicar o processo de *stepwise* para remover as variáveis explicativas irrelevantes.

- Lembrando que esse processo não pode ser feito manualmente pois quando removemos uma variável explicativa do nosso modelo, isso mexe com a significância das demais, podendo tornar uma anteriormente não significativa em significativa. O algoritmo da biblioteca `stepwise` faz isso testando todas as possibilidades para se chegar no modelo coerente apenas com as variáveis explicativas significantes.

Com isso obtemos o seguinte novo modelo:

![Exemplo - Modelo para Prever Lucro Médio das Startups - Modelo Pós Stepwise](./Imagens/Exemplo%20-%20Modelo%20para%20Prever%20Lucro%20Médio%20das%20Startups%20-%20Modelo%20Pós%20Stepwise.png)

- O valor de R² mudou muito pouco pós o processo de *stepwise*, o que mostra que aquelas variáveis realmente eram irrelevantes para explicar o fenômeno de lucro.

- O modelo, inicialmente uma regressão linear múltipla, virou uma regressão linear simples

### Modelo Resultante

```Modelo de Regressão Linear Múltipla
Profit(i) = 49032.899 + 0.85429 * RDSpend(i)
```

## Exemplo :two: - Modelo de Precificação de Imóveis

Nesse exemplo, a ideia foi construir um modelo de precificação de imóveis baseado nos valores de mercado. Os procedimentos realizados foram semelhantes ao do exemplo anterior, obtendo-se o seguinte resultado:

![Exemplo - Modelo de Precificação de Imóveis](./Imagens/Exemplo%20-%20Modelo%20para%20Precificação%20de%20Imóveis.png)

- Todas as variáveis explicativas possuem P-Valor da estatística T abaixo de 5%, logo, todas elas são significativas, não sendo necessário o processo de *stepwise*;

- Podemos observar que variáveis explicativas como tamanho da casa ou número de quartos apresentam coeficientes negativos, sugerindo uma relação inversa com o preço do imóvel. Mas logicamente, sabemos que casas maiores e com mais quartos tendem a ser mais caras. É aqui que entra o conceito de *ceteris paribus*. Os coeficientes de um modelo de regressão não devem ser interpretados de forma isolada, porque cada variável é estimada mantendo todas as outras constantes. Quando as variáveis explicativas são correlacionadas entre si, elas acabam “competindo” para explicar a variação em Y. Essa interação entre variáveis pode distorcer o sinal do coeficiente, fazendo-o parecer contrário ao que esperaríamos apenas pela lógica intuitiva. Em suma, um coeficiente inesperado não significa necessariamente que a relação real é negativa, mas sim que, *ceteris paribus*, o modelo atribuiu aquele efeito depois de controlar todas as demais variáveis.
