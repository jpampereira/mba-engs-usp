# Serverless II

## :one: Modelos de Comunicação

### :arrow_right: Modelo Síncrono de Solicitação/Resposta (Request/Response)

![Modelo de Comunicação Request/Response](Imagens/Modelos%20de%20Comunicação%20-%20Request%20e%20Response.png)

Vantagens:

- Baixa latência;
- Simples;
- Falhar rápido.

Desvantagens:

- Falha no receptor;
- Receptor estrangulado.

Cuidar das mensagens de erro, pois pode não ficar claro para o cliente o que deu errado e também pode gerar falhas de segurança caso informações de tecnologia sejam retornadas em casos de erro (exemplo, retornar a stack de erro).

### :arrow_right: Ponto a ponto assíncrono (Fila)

![Modelo de Comunicação Fila](Imagens/Modelos%20de%20Comunicação%20-%20Fila.png)

Vantagens:

- Diminui o acoplamento temporal;
- Resiliente a falhas no receptor;
- Receptor controla taxa de consumo;
- Dead Letter Queue (DLQ) para erros.

Desvantagens:

- Correlação de resposta;
- Tempo de recuperação do backlog;
- Justiça em sistema multilocatórios.

Dentro da AWS existe um serviço específico para implementação de filas simples que é o SQS:

- Fila de mensagens totalmente gerenciadas;
- Escala quase infinitamente;
- API simples e fácil de usar;
- Suporte para Dead Letter Queue (DLQ);
- Opções padrão e FIFO.

  ![Filas na AWS com SQS](Imagens/Filas%20na%20AWS%20com%20SQS.png)

Existem cenários onde as mensagens precisam ser entregues para mais de um destinatário. Neste caso utilizamos as filas que implementam o conceito de Publisher/Subscriber através do serviço SNS da AWS:

![Formas de implementação de filas](Imagens/Formas%20de%20implementação%20de%20filas.png)

Existe um serviço voltado para soluções IoT que é o AWS IoT Core que utiliza o protocolo MQTT para realizar o processo de comunicação utilizando o conceito de Publisher/Subscriber, sendo muito mais barato do que conexões HTTP ou via WebSocket.

No SQS existem duas formas de consumir as mensagens da fila, utilizando o formato padrão e o FIFO. No formato padrão, o SQS tenta manter a ordem dos itens na fila, porém, se um falhar e ele retornar para a fila, pode ser que nesse meio tempo o item seguinte já foi consumido. No modo FIFO, a ordem é religiosamente respeita, porém, nesse caso os itens serão consumidos um a um, o que pode ser inviável dependendo do número de requisições que vc tenha.
