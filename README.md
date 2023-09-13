<h1>Olá, adianto antes de qualquer situação que não fui capaz de fazer o desafio 04 do Processo Seletivo.</h1>
<p>Para iniciar o projeto indico utilizar os seguintes passos:</p>
<ul>
  <li>
    yarn - para instalação das dependencias
  </li>
  <br/>
  <li>
    criar link para database postgresql, estou utilizando: postgresql://postgres:gabriel@localhost:5432/cognum?schema=public
  </li>
  <br/>
  <li>
    utilizar npx prisma generate - para gerar o PrismaClient
  </li>
  <br/>
  <li>
    yarn dev - para rodar o projeto
  </li>
  <br/>
  <li>
    no seu postman/insomnia - utilize os seguintes endpoints para testar seu código
  </li>
  <br/>
  <li>
    get - http://localhost:3000/v1/hello - para retornar uma mensagem: "Hello, Cognum!"
  </li>
  <br/>
  <li>
    post - http://localhost:3000/v1/employee - em JSON/raw (postman) utilize um código com a estrutura para cadastrar um funcionario:
  </li>
  <br/>
    {
      <br/>
      "name": "john doe",
      <br/>
      "role": "admin"
      <br/>
    }
    <br/>
  <li>
    get - http://localhost:3000/v1/employee - para buscar todos os funcionarios:
  </li>
  <br/>
  <li>
    delete - http://localhost:3000/v1/employee/:id - para deletar um funcionario:
    em path variables preencha a key com "id" e o value com o id desejado (postman)
  </li>
  <br/>
  <li>
    put - http://localhost:3000/v1/employee/:id - para editar um funcionario:
    em path variables preencha a key com "id" e o value com o id desejado (postman)
  </li>
  <br/>
  <li>
    get - http://localhost:3000/v1/populate - para consultar a api e cadastrar 10 funcionarios no banco de dados:
  </li>
  <br/>
</ul>