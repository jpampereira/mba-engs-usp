# Containers (Kubernetes) II

## :one: Introdução

Na aula anterior vimos o conceito de virtualização de aplicações utilizando contêineres. Esse cenário já é superior ao inicial, onde as aplicações rodavam diretamente no sistema operacional da máquina host ou utilizando máquinas virtuais, porém, ainda é limitada quando estamos falando de ambientes em produção. Vamos ver alguns pontos que os contêineres com Docker tem dificuldade em tratar:

- **Escalabilidade:** A sua aplicação consegue suportar um alto volume de requisições?

- **Requisições de Forma Global:** Caso a sua aplicação seja utilizada em escala global, isto é, acessada de diferentes partes do mundo, ela consegue oferecer uma boa experiência para todos esses usuários? Estamos falando de tempo de resposta (latência), que dependendo da aplicação que estamos tratando pode ser essencial ou não;

- **Variação nas requisições e picos de acesso:** Pensando no cenário de um e-commerce, dependendo da época do ano (como por exemplo, Black Friday, quinto dia útil do mês, promoções) ou até mesmo horário, os acessos podem ocorrer em grandes volumes ou em quantidades baixíssimas, sendo interessante poder expandir os recursos da aplicações nos cenários de alto pico para suportar o alto volumes de usuários e poder diminuí-los em momentos mais tranquilos para também não ocorrerem desperdícios.

Para podermos lidar com essas situações, vamos utilizar o **Kubernetes** (k8s), uma plataforma Open Source, escrita em Go e lançada em junho de 2014, que orquestra contêineres e automatiza implantação, o dimensionamento e a gestão de aplicações que utilizam contêineres.

A palavra Kubernetes vem do grego e significa "comandante" ou "timoneiro", até por isso seu logo é um timão.

Benefícios da utilização do k8s para orquestração de contêineres:

- **Orquestração automatizada:** Implantação, escala e operação;
- **Escalabilidade:** Horizontal e vertical;
- **Desacoplamento de infraestrutura:** Portabilidade em ambientes on-premise e nuvem;
- **Abstração de recursos:** Automação de ciclo de vida da aplicação;
- **Gerenciamento dinâmico de recursos:** Ambiente de desenvolvimento reproduzíveis e CI/CD;
- **Plataforma Open Source:** Grátis.

## :two: Arquitetura do Kubernetes

![Arquitetura do Kubernetes](Imagens/Arquitetura%20Kubernetes.png)

O Kubernetes é formado por:

- **Cliente:** é possível acessar e manipular o Kubernetes de duas formas, através da linha de comando, utilizando o `kubectl` ou através de interface gráfica, que pode ser acessada localmente utilizando um proxy ou caso sua aplicação esteja sendo executada em um ambiente de nuvem, muitas das provedores já oferecem o serviço de k8s nativo que contém um dashboard próprio para gerenciamento dos recursos;

- **Master Node (ou Control Plane):** os Nodes são máquinas apartadas e que podem ser divididas entre nós Master e Workes. No caso de uma máquina Master, ela faz todo o gerenciamento das demais máquinas e garante a integridade de todas elas. Vamos ver algumas das funcionalidades presentes nela:

  - **API Server:** é a interface que permite os usuário através da linha de comando ou interface gráfica interagirem com os contêineres da aplicação. Funcionamento similar a API do Docker Daemon;

  - **Scheduler:** Responsável por definir em qual Worker Node a aplicação será alocada, quando um Pod pode ser inicializado, etc;

  - **Controller - Manager:** Faz o gerenciamento e garante a integridade de todo o ambiente, verifica se os Pods estão saudáveis etc;

  - **etcd:** Banco de dados do tipo chave e valor que armazena metadados relacionados ao ambiente Kubernetes.

- **Worker Node:** Um ambientes (ou Cluster) Kubernetes contém um ou mais nós trabalhadores, que é onde de fato as aplicações ficam alocada e em execução. Vamos ver alguns dos seus componentes:

  - **Kubelet:** Realiza as ações em cima dos Pods (criação, remoção etc);

  - **Pods:** Menor unidade da arquitetura Kubernetes. É o componente onde os contêineres são executados.

## :three: Componentes

Na imagem abaixo temos o exemplo de uma aplicação rodando em um ambiente Kubernetes:

![Exemplo de aplicação em k8s](Imagens/Exemplo%20de%20aplicação%20k8s.png)

Para configurar os componentes que compõe a arquitetura das nossas soluções, vamos utilizar arquivos `.yml`, assim como os que utilizávamos para criar aplicações com múltiplos contêineres com Docker Compose.

Através desses arquivos podemos configurar, entre várias outras coisas:

- Clusters;
- Pods;
- ReplicaSets;
- Deployments;
- Services;
- Ingress;
- Autoscallig (HPA e VPA).

## :four: Cluster Kubernetes

![Cluster Kubernetes](Imagens/Cluster%20Kubernetes.png)

Um Cluster Kubernetes é um ambiente composto por um Master Node e um ou mais Worker Nodes. Esse Cluster pode ser criado tanto de forma local, utilizando o próprio Docker ou ferramentas como Minikube e Kind; quanto em plataformas de nuvem, como Amazon, Google, Azure, IBM, DigitalOcean etc.

Durante a criação de um Cluster é possível dimensionar a quantidade de recursos computacionais que serão disponibilizados para os Nodes, assim evitando desperdícios, principalmente em ambientes de nuvem onde há a cobranças.

## :five: Fluxo para Deploy de Grandes Aplicações

![Fluxo para Deploy de Grandes Aplicações - Parte 1](Imagens/Fluxo%20para%20Deploy%20de%20Grandes%20Aplicações%20-%20Parte%201.png)

![Fluxo para Deploy de Grandes Aplicações - Parte 2](Imagens/Fluxo%20para%20Deploy%20de%20Grandes%20Aplicações%20-%20Parte%202.png)
