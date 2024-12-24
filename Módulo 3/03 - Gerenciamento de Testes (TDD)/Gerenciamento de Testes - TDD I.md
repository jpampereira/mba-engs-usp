# Gerenciamento de Testes (TDD) I

## :one: Definição

- TDD = *Test-Driven Development* (em português, Desenvolvimento Orientado à Testes).

- A ideia do TDD é pensar nos testes antes de escrever o código.

- Arquiteturas de software, como por exemplo, a Arquitetura Limpa, se beneficiam do TDD.

## :two: Funcionamento

- O TDD pode ser explicado através do seu ciclo de vida representado pela imagem abaixo:

  ![Ciclo de Vida TDD](imagens/Ciclo%20de%20Vida%20TDD.png)

  1. **Faça um teste que falhe:** Seja o cenário onde desejamos implementar uma nova funcionalidade para a nossa aplicação. Primeiramente idealizamos essa funcionalidade e como ela deve se comportar. Antes de começar a escrever o seu código em sí, escrevemos um teste que simula um caso de uso dessa mesma funcionalidade. De início ele irá falhar, já que a funcionalidade em questão ainda não foi codificada;
  2. **Faça o teste funcionar:** Após a escrita do teste, devemos escrever o código da funcionalidade até que o teste funcione corretamente. Nesse primeiro momento não é preciso se preocupar com código otimizado, questões de segurança etc, basta que ele funcione;
  3. **Elimine a redundância:** Por último, refatoramos o código para que ele contemple cenários de otimização, segurança etc. No fim, o teste deve continuar tendo o mesmo resultado do final da etapa anterior.

## :three: Objetivos

- Reduzir a incerteza e a ansiedade no desenvolvimento de software. Quanto maior e mais complexo o software, maior o medo dos desenvolvedores de mexer nele e quebrá-lo;
- Aumentar a qualidade e a confiabilidade do código desde as etapas iniciais;
- Promover um desenvolvimento mais ágil e seguro.

## :four: Impacto do Medo no Trabalho

- O medo em excesso leva a programadores hesitantes, com menor proatividade e menos abertura para colaboração;
- Pode afetar a motivação, causando frustração e bloqueando o aprendizado e a criatividade.

## :five: Pirâmide de Testes

![Pirâmide de Testes](imagens/Pirâmide%20de%20Testes.png)

Existem outros tipos de testes como de infraestrutura, estresse etc. e eles não devem ser ignorados.

### :arrow_right: Testes Unitários

Verificam o funcionamento de componentes individuais do código, como funções, métodos ou classes, de forma isolada. Tem como objetivo garantir que cada unidade de código funcione corretamente de maneira independente. Exemplo: Testar os métodos de uma classe, como a validação dos seus atributos.

Vantagens:

- Rapidez na execução, pois testam apenas pequenas partes do código;
- Facilidade de identificação de onde está o problema quando um teste falha, já que cada teste é focado em um único componente.

Ferramentas comuns:

- JUnit (Java);
- NUnit (.NET);
- Jest (JavaScript);
- PyTest (Python).

### :arrow_right: Testes de Integração

Verificam se diferentes módulos ou componentes do sistema funcionam corretamente quando integrados entre si. Tem como objetivo garantir que a interação entre módulos do código ocorra como esperado, testando o funcionamento do sistema em conjunto, geralmente incluindo as dependências entre componentes. Exemplos:

- Interação entre entidades diferentes;
- Interação entre aplicação e banco de dados.

Vantagens:

- Identificação de problemas de integração que testes unitários não conseguem cobrir, como erros de comunicação entre módulos;
- Útil para verificar a compatibilidade entre diferentes partes do sistema que precisam operar juntas.

Ferramentas comuns:

- Spring Test (Java);
- DBUnit (para testar banco de dados);
- Mockito (para simulação de dependências).

### :arrow_right: Testes End-to-End (E2E)

Verificam o funcionamento de uma aplicação em um fluxo completo, como um todo, para assegurar que os componentes integrados fornecem a resposta esperada ao cliente. Tem como objetivo garantir que o sistema funcione como um todo, validando o comportamento do software do ponto de vista do usuário final, testando a aplicação inteira, simulando como sistema responde a operações reais. Exemplo: Testar um endpoint de login, enviando uma requisição de autenticação de usuário e verificando se o sistema responde com sucesso.

Vantagens:

- Confiança de que o sistema está pronto para o usuário final, pois cobre o fluxo completo;
- Capacidade de identificar problemas de integração entre sistemas e fluxos complexos que dependem de múltiplos serviços e componentes.

Ferramentas comuns:

- Postman;
- Cypress;
- Swagger.

## :six: Ciclo de Vida de um Teste

1. **Planejamento e especificação dos testes:** ações que a minha funcionalidade deve fazer e como eu consigo dizer que elas estão funcionando corretamente (definição de *done*);
2. **Desenvolvimento e implementação dos testes**;
3. **Execução e registro dos resultados**;
4. **Análise e acompanhamento de falhas**.

### :arrow_right: Planejamento e Estratégia de Testes

- Definição dos critérios de aceitação (*definition of done*) e cobertura de testes (nem sempre é possível testar tudo então devemos definir as prioridades);
- Planejamento de casos de teste e escopo dos testes;
- Riscos e critérios de priorização de testes;
- Alocação de recursos e estimativa de esforço.

### :arrow_right: Boas Práticas no TDD

- Manter testes independentes e atômicos;
- Nomeação clara e descritiva dos testes;
- Evitar dependências e acoplamento excessivo nos testes;
- Refatorar frequentemente para evitar "*test code smells*".

### :arrow_right: Cobertura de Testes e Métricas

#### O que é Cobertura de Testes?

- Mede o quanto do código é executado durante a execução dos testes;
- Indicador essencial para avaliar a eficácia e amplitude dos testes;
- Ajuda a identificar áreas não cobertas que podem conter defeitos.

#### Métricas de Qualidade para Testes e Análise de Resultados

- **Taxa de Cobertura:** Percentual de cobertura considerado adequado para a aplicação;
- **Métricas de Defeitos:** Número e tipo de defeitos encontrados em áreas cobertas e não cobertas;
- **Indicadores de Efetividade:** Relação entre cobertura e defeitos, mostrando a precisão dos testes em identificar erros;
- **Tendência ao Longo do Tempo:** Análise da evolução da cobertura e qualidade dos testes em cada release.

#### Gerenciamento de Defeitos

- Processo de identificação e categorização de defeitos;
- Ciclo de vida de um defeito: Detecção, análise, correção e verificação;
- Ferramentas de gerenciamento de defeitos (ex.: Jira, Bugzilla);
- Relacionamento entre defeitos e a cobertura de testes.

### :arrow_right: Testes como Documentação do Sistema

- Testes, especialmente os automatizados, oferecem uma visão clara de como o sistema deve se comportar em diferentes cenários;
- Servem como documentação atualizada automaticamente: sempre que o código é alterado, os testes refletem essas mudanças.

### :arrow_right: Vantagens dos Testes como Documentação

- **Especificação Executável:** Os testes mostram como cada funcionalidade deve operar, substituindo descrições manuais;
- **Atualização Contínua:** Cada execução de teste verifica e mantém a documentação funcional do sistema;
- **Entendimento do Comportamento do Sistema:** Testes unitários, de integração e E2E explicam a lógica e interações dos componentes em situações reais.
