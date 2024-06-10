# Infra As Code (IAC) II

"*Infra As Code só automatiza o processo de criação da infraestrutura, mas por tras ela é a mesma que já conhecemos.*"

## :one: Arquitetura da Infraestrutura

### :arrow_right: Rede Pública x Rede Privada

Quando pensamos em nuvem a primeira aplicação que vem em mente é a disponibilização de um sistema para consumo externo, por exemplo, um e-commerce. Quando estamos nesse contexto, utilizamos uma rede pública (ou VPC pública), que permite que qualquer usuário conectado a internet tenha acesso àquela infraestrutura de nuvem para que consiga alcançar o sistema desejado, desde que o endereço seja de seu conhecimento. O componente que permite o acesso da aplicação ao mundo externo (e vice-versa) é o **Internet Gateway**, destacado na imagem abaixo por uma seta vermelha.

![Rede Pública](Imagens/VPC%20Pública.png)

Porém, a infraestrutura de nuvem não é exclusiva para a criação de aplicações de consumo externo. Existem também as Redes Privadas, muito utilizadas, por exemplo, no contexto corporativo. Como discutido anteriormente, entre uma das principais vantagens do serviço de nuvem está a não necessidade de investimento inicial e pesado em infraestrutura (hardware, ar-condicionado, nobreakers etc.), otimizando recursos financeiros. Nesse caso é uma ótima opção a empresa adotar o uso de uma VPC Privada e disponibilizar os seus sistemas nela, aproveitando todas as vantagens que a provedora oferece. Para isso basta configurar o Internet Gateway para que seja possível acessá-la apenas de dentro da rede privada da empresa.

![Rede Privada](Imagens/VPC%20Privada.png)

Existe também uma opção híbrida, onde utilizamos uma parte da nossa solução na rede pública e outra na rede privada. Um bom exemplo é um sistema de vendas, disponibilizado na rede pública para acesso dos clientes e esse sistema é conectado diretamente com o sistema de ERP da empresa utilizado pela equipe de vendas, que está na rede privada. Uma das principais vantagens dessa arquitetura é que se a demanda aumentar do lado da aplicação de e-commerce consequentemente a ferramenta de ERP também terá aumento de uso de recursos, portanto as duas escalariam em conjunto. Se utilizassemos a ferramenta de ERP em um ambiente On Premisses, poderiamos ter casos onde um aumento no número de vendas impactaria na usabilidade do sistema de ERP, prejudicando o trabalho dos funcionários e impactando o serviço da empresa.

![Rede Híbrida](Imagens/VPC%20Híbrida.png)

É importante deixar claro que o fato de uma VPC ser privada, isso não torna ela mais segura do que uma pública. Tudo vai depender das configurações de segurança de cada rede. É possível sim termos uma rede pública tão segura quanto uma privada.

### :arrow_right: Sincronização Privado/Público

Pensando em cenários onde fazemos a integração da infraestrutura de VPC Pública da nossa aplicação com outra parte que encontra-se em uma VPC Privada, precisamos definir como que será realizada a sincronização dos dados entre elas. Vamos utilizar como exemplo um cenário de um e-commerce, em nuvem, integrado a um sistema de ERP (gestão de catálogo), que é de fato quem irá processar e concretizar a venda.

1. **API:** esse é o método mais comum e utilizado, onde criamos um middleware que permite a interação entre as partes. Por conta da criticidade dos dados do sistema de ERP ser muito maior, é uma boa prática que essa API esteja do lado da nuvem e seja consumida pela intranet para obter as informações necessárias. Um único problema com esse tipo de solução é que a sincronização só irá ocorrer quando os endpoints forem chamados. Se for chamado demais, pode sobrecarregar o sistema, se requisitar de menos, pode haver um gap entre as informações que possa dificultar a experiência do cliente com a plataforma.

2. **S3:** podemos utilizar um serviço de bucket, como o S3 na AWS, onde apenas as VPCs públicas e privadas terão acesso e esse será o ponto de convergência de informações entre elas. Podemos tanto configurar para que nossa aplicação busque as informações no bucket de tempos em tempos e faça processamentos em lotes, o que pode gerar um delay nas informações, ou podemos configurar um evento no bucket para que cada vez que algo de novo entrar, uma notificação seja enviada para o sistema de ERP informando que existem dados novos a serem consumidos, diminuindo o delay de sincronização.

3. **SQS e SNS:** outra solução comum é utilizarmos sistemas de mensageria, como filas e brokers, permitindo a assincronicidade na comunicação. Porém, devemos nos atentar ao fato de que os serviços de mensageria como SQS e o SNS tem seu custo atrelado a quantidade de mensagens mas também ao tamanho dessas mensagens, havendo limites de tamanho da mensagem. Uma alternativa nesse caso poderia ser utilizar uma solução híbrida entre o S3 e esses sistemas de mensageria, onde o SQS, por exemplo, apenas notificaria o worker do sistema de ERP que há um novo lote para ser processado de solicitações e este iria diretamente no S3 para coletar os dados.

![Sincronização Privado/Público](Imagens/Sincronização%20Privado-Público.png)

Além da escolha de arquitetura mais adequada para o seu cenário, devemos sempre nos lembrar que as comunicações devem ser sempre criptografadas e o acesso a elas deve ser restrito a apenas os componentes que de fato formam a comunicação.
