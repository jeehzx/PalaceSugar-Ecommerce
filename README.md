E-commerce (PalaceSugar)
Este é um projeto de e-commerce desenvolvido utilizando Next.js, MongoDB, Cloudinary, DaisyUI, Zustand, Bcrypt.js e NextAuth. O objetivo deste projeto é criar uma plataforma online para venda de produtos de moda e decoração de casa de maneira prática e eficiente.

Tecnologias Utilizadas
Next.js 14: Framework React para renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).
MongoDB: Banco de dados NoSQL para armazenamento de informações de produtos, usuários e pedidos.
Cloudinary: Serviço de hospedagem de imagens e gerenciamento de ativos estáticos.
DaisyUI: Framework CSS para Tailwind CSS que facilita a criação de interfaces responsivas e estilizadas.
Zustand: Biblioteca para gerenciamento de estado global em aplicações React de forma simples e eficiente.
Bcrypt.js: Biblioteca para criptografar senhas de usuário antes de armazená-las no banco de dados.
NextAuth: Biblioteca de autenticação para Next.js que suporta vários provedores de autenticação (OAuth, JWT, etc.).
Funcionalidades Principais
Autenticação de Usuários: Registro e login seguros utilizando NextAuth.
Catálogo de Produtos: Exibição de produtos de moda e decoração com imagens hospedadas no Cloudinary.
Carrinho de Compras: Funcionalidade para adicionar produtos ao carrinho e realizar pedidos.
Gestão de Estado: Utilização do Zustand para gerenciar o estado global da aplicação de forma eficiente.
Segurança: Senhas dos usuários são criptografadas utilizando Bcrypt.js antes de serem armazenadas no MongoDB.

- Como Executar o Projeto
  Pré-requisitos
  Node.js e npm instalados globalmente.
  Conta no MongoDB e Cloudinary para configurar as chaves de acesso.
  Instalação

1. Clone o repositório:
   bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio

2. Instale as dependências:

bash
npm install

3. Configure as variáveis de ambiente:

Renomeie o arquivo .env.example para .env e preencha com suas credenciais do MongoDB e Cloudinary.

4. Executando o Projeto
   bash
   npm run dev

Acesse http://localhost:3000 no seu navegador para visualizar o projeto.

Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias ou correções.
