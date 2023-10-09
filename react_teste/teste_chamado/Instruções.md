Da forma como configurei os arquivos:

- abrir a pasta de backend e a pasta de frontend em vs codes separados

- rodar primeiro o backend: npm run dev
(ele vai abrir na porta 3000)

- rodar depois o front: npm start. ele vai ver que a porta 3000 tá ocupada, você dá "yes" e ele vai abrir na 3001

as rotas são:
backend:
localhost:3000/usuarios
localhost:3000/chamados

frontend:
localhost:3001/usuarios
localhost:3001/chamados


para pode usar o arquivo rest.http para fazer as requisições de teste, precisa instalar a extensão "rest client" no vos code.
