# escolha um número aleatório
# entre 1 e 5
# recebe um chute
# se for igual ao número aleatório => Acertou
# senão => Quase, o número secreto era {numero_secreto}
import random

print('Boas vindas ao jogo do número secreto!\n')

numero_secreto = random.randint(1, 5)
numero_chutado = int(input('Escolha um número entre 1 e 5: '))

if numero_chutado == numero_secreto:
  print('Acertou!')
else:
  print(f'Quase... O número secreto era {numero_secreto}')