from fastapi import FastAPI
from models.product import Product

app = FastAPI()

# @app.get('/api/{name}')
# def say_hello(name:str):
#   if not name:
#     pass
#   else:
#     return { 'Hello': name }
  
data = [
  Product(id=1, name='Coca-Cola', description='Uma bebida mundialmente conhecida', price=9.98),
  Product(id=2, name='Tenis Nike Air', description='Calçados', price=799.99),
  Product(id=3, name='Iphone', description='Tecnologia', price=3998.99),
  Product(id=4, name='Notebook', description='Tecnologia', price=4980.99),
]

@app.get('/api/products')
def get_products():
  """
  Retorna todos os produtos cadastrados
  """
  return data

@app.get('/api/products/{id}')
def get_product(id:int):
  if id <= len(data) and id > 0:
    return data[id-1]
  else:
    return {}