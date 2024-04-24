# Fundamentos da Segurança da Informação I

## :one: Introdução

Discutir segurança da informação nos dias de hoje é um tema muito importante, pois estamos cada vez mais vivendo em um mundo conectado (tênis, relógios, óculos, roupas, carros entre outros objetos).

- Até 2025 teremos 22 bilhões de aparelhos IoT (Internet of Things - Internet das Coisas) conectados a rede mundial de computadores.

Várias empresas de grande porte nos últimos tempos apareceram no noticiário por terem sido hackeadas:

- Microsoft (falhas no Azure e Outlook);
- Carro autônomo da Tesla (imagina o perigo de se deixar o controle de um carro autônomo na mão de um hacker e o que ele pode fazer com os passageiros);
- Documentos comerciais da Airbus;
- Imagens do GTA VI da RockStar.

## :two: Princípios

A segurança de um sistema, aplicação ou protocolo é sempre relacionada à:

- Conjunto de propriedades desejadas;
- Um adversário com capacidades específicas.

### :arrow_right: Importância da segurança

- Proteção de patrimônio (em especial: informação);
- Vantagem competitiva (ex. fórmula da Coca-Cola);
- Cumprimento de responsabilidades;
- Continuidade de operação/atividade.

### :arrow_right: O que compõe a Segurança da Informação?

```Segurança
Segurança da Informação = proteção + integridade + disponibilidade + autenticação
```

### :arrow_right: Prática

- Prevenção: instruir os funcionários (essencial), fazer com que eles fiquem a par das politicas da empresa, entender o funcionamento, treinamentos. O ponto mais fraco de qualquer empresa é o ser humano;
- Detecção: comportamentos anormais, métricas de comparação;
- Resposta.

### :arrow_right: Planejamento

Segurança é relativa, pode ser tomada em níveis e deve ser um balaceamento (isto é, se a informação não é tão sensível ou não existem pessoas interessadas em obtê-las, talvez não faça sentido investirmos tanto em segurança):

- Custo da Segurança X Valor do Patrimônio (a formula da coca cola é de extrema importancia pra coca cola então deve investir ao máximo para mantê-la segura);
- Provável x Possível (existem pessoas interessadas na informação?);
- Necessidade de segurança x do negócio.

Todo estudo de implementação de um sistema de segurança se inicia com a **análise de risco**:

- **Identificar e priorizar valores (patrimônio):** o que é mais crítico e necessita de proteção?
- **Identificar vulnerabilidades:** quais são os pontos vuneráveis que a empresa apresenta e que pode promover a integridade desse patrimônio?
- **Identificar ameaças e suas probabilidades:** existem ameaças interessadas em prejudiar meu patrimônio?
- **Identificar contramedidas:** o que podemos fazer contra essas ameaças e para nos prevenir dessas vulnerabilidades?
- **Desenvolver análise de custo-beneficio:** vale a pena o investimento em segurança? A danificação desse patrimônio me trará prejuízos irreparáveis, sendo de interesse implementar medidas de segurança?
- **Planejar políticas e procedimentos de segurança.**

### :arrow_right: Pilares da Segurança da Informação

**Confidencialidade:** proteção da informação contra descoberta ou interceptação não autorizada; privacidade.

- Necessário em áreas sensíveis: instituições governamentais/militares;
- Acesso restrito aqueles que necessitam dela;
- Companhias com projetos proprietários;
- Mecanismo: criptografia (tem que ter cuidado com as chaves!);
- Computação quântica é um ponto de atenção pra criptografia.

**Integridade:** impedir informação/transmissão de ser alterada/danificada de forma não autorizada, imprevista ou acidental.

- Confiança nos dados ou recursos;
- Relacionado à prevenção de mudanças;
- Impróprias ou não autorizadas;
- Integridade dos dados (o conteúdo da informação não foi alterado);
- Aspecto importante: credibilidade;
- Dividido em duas partes: prevenção e detecção

  - Prevenção: manter a integridade pelo bloqueio de qualquer tentativa não autorizada de modificação dos dados ou tentativas de modificar o dado de maneira não autorizada. Exemplos:
    - Usuário tenta mudar dado sem autoridade para tal (intruso mexer nos registros de um contador);
    - Usuario autorizado tenta mudar dado de outras maneiras não correspondentes a sua autorização (contador sonegar impostos);

  - Detecção: alertam que a integridade dos dados não foi preservada.
    - Garantia depende de premissas sobre a fonte e a confiança nesta fonte;
    - Avaliação inclui corretude e confiança do dado: como e de quem foi obtido? O caminho do dado foi protegido? O destino do dado é protegido?

**Disponibilidade:** confiabilidade de redes, sistemas e equipamentos sobre evitar ou se recuperar de interrupções.

- Habilidade de se usar a informação ou recurso desejado;
- Sistema indisponível é tão ruim quanto um sistema inexistente;
- Para um e-commerce um dia de indisponibilidade causa perdas financeiras significativas;
- Exemplo: projetos de sistemas podem assumir um modelo estatístico para analisar padroes de uso esperado

  - Tentativas de bloquear a disponibilidade são dificeis de se detectar: o padrão de acesso incomum é uma anomalia momentânea, uma falha de dispositivo/recurso ou um ataque proposital?
  - O Sisu só recebe altas requisições em períodos de inscrição, fora disso é estranho um alto volume... mas e em um e-commerce?

- DDoS

### :arrow_right: Requisitos de Segurança

**Identificação e Autenticação:** distinguir, determinar e validar a identidade do usuário/entidade (se é quem diz ser);

**Controle de acesso:** limitar/controlar nível de autorizações de usuários/entidades a uma rede, sistema ou informação;

**Não-repúdio:** impedir que seja negada a autoria ou ocorrência de um envio ou recepção de informação.

### :arrow_right: Ameaças e Ataques

**Vulnerabilidade:**

- Fraqueza inerente de um elemento do sistema;
- Brecha: ponto fraco ou falha que pode ser explorado.
- Principais origens:

  - Deficiência de projeto: brecha no hardware/software;
  - Deficiência de implementação: instalação/configuração incorreta, por inexperiência, falta de treinamento ou desleixo;
  - Deficiência de gerenciamento: procedimentos inadequados, verificações e monitoramento insuficiente.

- Exemplos:

  - Instalação física: má proteção física de equipamentos e mídia;
  - Hardware e Software: situações não previstas, limites, bugs no projeto, deixando brechas que podem ser exploradas.

- Humano sempre é o ponto mais fraco de qualquer sistema.

**Ameaça:**

- Qualquer coisa que possa afetar ou atingir o funcionamento, operação, disponibilidade, integridade da rede ou sistema.

**Ataque:**

- Técnica específica usada para explorar uma vulnerabilidade.

- Tipos de ataques:

  ![Tipos de Ameaças](Imagens/Tipos%20de%20Ameaças.png)

  - Esses ataques ainda podem ser classificados entre passivos (interceptação, monitoramento, análise de tráfego) e ativos (adulteração, fraude, reprodução ou imitação e bloqueio).

- Motivações:

  - Dinheiro: venda de dados e extorsão;
  - Poder;
  - Vingança: ciúme;
  - Fama e curiosidade;
  - Oportunidade e dificuldade financeira.

**Contramedidas:**

- Técnicas ou métodos usados para se defender contra ataques, ou para fechar ou compensar vulnerabilidades. Exemplo: Honeypot.
