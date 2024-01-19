# Módulo Introdutório > Desenvolvimento Backend > Aula 2

## Ambiente Python para desenvolvimento

- Após o download, dentro do [Visual Studio Code](https://code.visualstudio.com/), execute o comando para criar e utilizar o ambiente Python

Comando para criar o ambiente de desenvolvimento:

```Windows
docker-compose build
```

Comando para utilizar o ambiente de desenvolvimento criado:

```Windows
docker-compose up -d
```

## Visual Studio Code

> Caso já tenha o Visual Studio Code instalado em seu sistema operacional, não é necessário seguir os passos abaixo

Aqui estão as instruções para instalar o Visual Studio Code (VSCode) em diferentes sistemas operacionais.

### Windows

1. Acesse o site oficial do VSCode em [https://code.visualstudio.com/](https://code.visualstudio.com/).
2. Clique no botão de download para Windows.
3. Execute o instalador que foi baixado (geralmente chamado VSCodeSetup.exe).
4. Siga as instruções do instalador, aceitando os padrões recomendados, como associação de arquivos, a menos que você tenha preferências específicas.
5. Após a instalação, inicie o Visual Studio Code a partir do menu Iniciar ou do ícone na área de trabalho.

### macOS

1. Acesse o site oficial do VSCode em [https://code.visualstudio.com/](https://code.visualstudio.com/).
2. Clique no botão de download para macOS.
3. Uma vez que o arquivo .dmg for baixado, abra-o.
4. Arraste o ícone do Visual Studio Code para a pasta de "Aplicativos" no seu Mac.
5. Abra o VSCode a partir da pasta de "Aplicativos" ou da Dock.

### linux

1. A forma mais simples de instalar o Visual Studio Code em distribuições Debian/Ubuntu é baixar e instalar o pacote .deb (64 bits)
   [Debian ou Ubunto](https://code.visualstudio.com/download). Caso utilize outra distribuição, [neste link você encontra a documentação oficial com as explicações e passo a passo da instalação](https://code.visualstudio.com/docs/setup/linux).

## Rodando a API Produtos utilizando o framework Django

Acessar o diretório django-produtos

```Linux
cd /referencial/src/django-produtos
```

Criar o ambiente virtual

```Linux
python -m venv ./venv
```

Para ativar o ambiente virtual

```Linux
source venv/bin/activate
```

Instalar o Django

```Linux
pip install django
```

Criar um arquivo txt com as dependências do projeto (boa prática de projetos Python)

```Linux
pip freeze > requirements.txt
```

Para executar o servidor Django

```Linux
python manage.py runserver 127.0.0.1:8000
```

Para criar um app/funcionalidade no Django

```Linux
python  manage.py startapp produto
```

Criar a migração dos modelos Django no banco de dados

- Especificar no produto/models.py a classe que representará a tabela que será criada no banco de dados
- Em setup/settings.py:
  - Na linha 28, definir os hosts liberados para uso em ALLOWED_HOSTS;
  - Na linha 33, em INSTALLED_APPS, definir as funcionalidades que devem ser instaladas no Django;
  - Na linha 107 é possível definir a linguagem do sistema em LANGUAGE_CODE;
  - Na linha 109 é possível definir o timezone do sistema em TIME_ZONE;
- Em produto/admin.py importar a classe Product e registrá-la no site para permitir sua manipulação (criar, editar e excluir)
- O primeiro comando cria a migração e o segundo a submete de fato.

```Linux
python manage.py makemigrations
```

```Linux
python manage.py migrate
```

Criar um super usuário para o Django Admin

- Permite acessar a página /admin para criar, editar ou remover registros dos nossos modelos criados.

```Linux
python manage.py createsuperuser
```

## Rodando a API Produtos utilizando o framework FastAPI

Acessar o diretório fastapi-produtos

```Linux
cd /referencial/src/fastapi-produtos
```

Para instalar os pacotes necessários para rodar o servidor FastAPI

```Linux
pip install fastapi uvicorn
```

Para executar o servidor FastAPI

```Linux
uvicorn app:app --host 0.0.0.0 --port 8080 --reload
```
