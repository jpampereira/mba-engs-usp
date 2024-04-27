# Fundamentos da Segurança da Informação II

## :one: Criptografia

### :arrow_right: Fundamentos

kryptos = oculto + graphos = grafia

"*Arte ou ciência de escrever em cifras (código).*"

A garantia de 100% de segurança é uma falácia, mas é possível trabalhar em direção a 100% de aceitação de riscos.

- "*Um bom sistema criptográfico atinge o equilíbrio entre o que é possível e o que é aceitável.*"

**Criptografia** é o conjunto de técnicas que permitem tornar incompreensível uma mensagem originalmente escrita com clareza, de forma que apenas o destinatário a decifre e a compreenda. A **criptoanálise** vai no caminho inverso, onde é o estudo que tenta realizar a quebra do sistema criptográfico. A junção desses dois termos da via ao campo da **Criptologia**.

As criptografias podem ser classificadas como **fracas** e **fortes**.

- As classificadas como fracas são aquelas que tentam utilizar métodos banais para esconder a informação. Exemplo: criar uma forma de codificação para conseguir se comunicar com o seu colega por bilhete durante a aula sem que outras pessoas descubram o teor da conversa;

- As classificadas como fortes ou de alta complexidade visam manter as informações ocultas mesmo que sob intensa verificação de supercomputadores. Essas podem ser feitas de duas formas: **chaves simétricas** ou **chaves assimétricas**;

- Geralmente a melhor forma de determinar se um algoritmo é forte ou fraco é publicar sua descrição e deixar com que as outras pessoas o discutam.

### :arrow_right: Criptografia Simétrica x Assimétrica

|| Simétrica | Assimétrica |
| :---: |:---: | :---: |
| Funcionamento | Utiliza um algoritmo e **uma** chave para cifrar e decifrar. | Utiliza um algoritmo e **um par** de chaves para cifrar e decifrar. |
| Requisitos de Segurança | A chave tem que ser mantida em segredo. | Uma chave é pública e a outra tem que ser mantida em segredo. |
| Problemas | Como distribuir e armazenar as chave secretas de forma segura? Quantas chaves são necessárias para uma comunicação segura entre n pessoas? | Como garantir que o detentor da chave pública é realmente quem diz ser? Necessidade de ter uma infraestrutura para armazenar as chaves públicas. |

### :arrow_right: Assinatura Digital

Apesar da criptografia também ser utilizada para ocultação de informação, um dos princípios do pilar de **confidencialidade** da Segurança da Informação, ela também pode ser utilizada em outro pilar, para confirmar a **integridade** de uma informação. Nesse caso utilizamos as assinaturas digitais. Esse cenário é muito utilizado em assinatura de contratos e para emissão de certificados digitais de páginas web.

Nesse caso também pode ser aplicada a criptografia simétrica ou assimétrica, mas vamos focar na segunda que é mais utilizada.

Nas assinaturas digitais, a confidencialidade da informação não é uma questão, pois o usuário criptografa o documento, gerando a assinatura, com a sua chave privada. Qualquer pessoa na web que tenha sua chave pública consegue decifrá-lo. Caso a decodificação seja feita com sucesso, a veracidade do documento é comprovada, pois em tese apenas o detentor legítimo da chave privada conseguiria criptografá-lo.

Dependendo do tamanho do documento a ser criptografado, esse processo poderia demorar um tempo muito acima do desejável, sendo assim, os algoritmos de assinatura selecionam uma parte do texto a ser cifrado e utilizam técnicas de sumarização para criar uma cadeia de caractéres de tamanho único, chamada de hash, e essa cadeia é criptografada. Como cada hash é único, a assinatura é feita em cima do hash, pois isso garante a sua veracidade.

No exemplo abaixo, Ana deseja enviar para Bob um documento, porém, está preocupada da integridade desse documento ser respeitada durante o seu trânsito até chegar ao seu destino. Para isso ela utilizará de uma Assinatura Digital:

- **Ponta A:** Ana pega o documento que irá enviar e processa ele junto de um algoritmo de sumarização (neste caso, o MD5), geralmente uma hash. Em posse dessa hash, a processa junto de um algoritmo de criptografia (neste caso, o RSA) e sua chave privada. Como resultado, uma assinatura digital é gerada. Por fim, ela pega o documento e a assinatura digital geradas e as envia para Bob.

  ![Assinatura Digital - Ponta A](Imagens/Assinatura%20Digital%20-%20Ponta%20A.png)

- **Ponta B:** Bob recebe o documento e a assinatura digital enviados por Ana. Para confirmar a veracidade do documento ele precisa realizar duas tarefas:
  
  - Utilizando a chave pública de Ana e o mesmo algoritmo criptográfico (RSA), decifra a assinatura digital e obtem a hash. Esse procedimento confirma a veracidade da assinatura, já que as chaves públicas e privadas tem compatibilidade um-para-um, isto é, para cada chave privada existe apenas uma chave pública capaz de descriptografar uma cifra gerada com ela. O inverso também é verdade.

  - A segunda etapa é confirmar a veracidade do documento. Nesse caso Bob utiliza o mesmo algoritmo de sumarização utilizado por Alice (MD5) para gerar a hash do documento.

  - Nesse momento Bob possui o hash obtido da assinatura digital (resumo original) e o hash calculado pelo documento (resumo calculado). Caso ambos sejam iguais, a veracidade do documento é comprovada. Caso eles não sejam iguais, significa que a integridade do documento foi comprometida durante o seu transporte.

  ![Assinatura Digital - Ponta B](Imagens/Assinatura%20Digital%20-%20Ponta%20B.png)

### :arrow_right: Confidencialidade do Documento

No caso acima ficou claro que a confidencialidade do conteúdo não era um tópico relevante, apenas a sua integridade. Porém, existirão cenários onde a confidencialidade também é necessária. Como ficaria o exemplo anterior se além de nos importarmos com a integridade do um documento, também gostariamos de ocultá-lo?

Portanto, para também aplicar o pilar de confidencialidade ao documento enviado por Ana, ela primeiro realizaria todos os procedimento exatamente como realizou anteriormente e por fim usaria a chave pública de Bob para criptografar o documento. Como, em tese, apenas Bob tem acesso a sua chave privada e as chaves públicas e privadas possuem compatibilidade um-para-um, apenas ele será capaz de decifrar o documento e analisar seu conteúdo. Após decifrar o documento, ele realizará os mesmos procedimentos já descritos para confirmar sua integridade.

Dessa forma a comunicação entre os dois estará atendendo dois dos três pilares da Segurança da Informação, sendo ela muito mais segura.

Vale ressaltar a importância de se manter as chaves privadas armazenadas em local seguro. Caso haja o seu vazamento, será necessário trocar o par para evitar que a segurança seja quebrada por ataques de interceptação.
