print('IMC\n')

# Peso / (Altura * Altura)

peso = float(input('Digite o peso (em quilogramas): '))
altura = float(input('Digite a altura (em metros): '))
imc = peso / altura ** 2
imc = round(imc, 2)

print(f'\nO IMC é {imc}')