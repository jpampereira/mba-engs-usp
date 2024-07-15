def soma():
  print(40 + 2)

soma()

def soma_com_argumentos(a, b):
  print(a + b)

soma_com_argumentos(40, 2)
soma_com_argumentos(3, 5)
soma_com_argumentos(13, 6)

def soma_com_argumentos_e_retorno(a, b):
  return a + b

resposta = soma_com_argumentos_e_retorno(40, 2)
print(resposta)