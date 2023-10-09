Da forma como configurei os arquivos:

clonar o repo:
git clone https://github.com/FocusQuest/FocusQuestAPI
git checkout BackendBDRotas

- abrir a pasta backend_BD_Rotas e a pasta react_teste/teste_chamado (front)
 em vs codes separados

- rodar primeiro o backend:
  npm install
  npm run dev
  (ele vai abrir na porta 3000)

- rodar depois o front:
  npm install
  npm start. ele vai ver que a porta 3000 tá ocupada, você dá "yes" e ele vai abrir na 3001

as rotas são:
backend:
localhost:3000/usuarios
localhost:3000/chamados

frontend:
localhost:3001/usuarios
localhost:3001/chamados


para pode usar o arquivo rest.http para fazer as requisições de teste, precisa instalar a extensão "rest client" no vs code.
