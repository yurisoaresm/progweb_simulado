# Projeto de API - Simulado do Primeiro Bimestre de Programação Web

Este é um projeto de API desenvolvido em Node.js e TypeScript, criado como parte do simulado do primeiro bimestre da disciplina de Programação Web. A API possui recursos que podem ser usados para realizar várias operações relacionadas ao tema do simulado.

## Configuração Inicial

Para iniciar o servidor localmente, siga os passos abaixo:

### 1. Variáveis de Ambiente

Certifique-se de criar um arquivo `.env` na raiz do projeto e adicionar as variáveis de ambiente necessárias. Você pode usar o arquivo `.env.example` como um modelo para as variáveis de ambiente. Lembre-se de configurar as variáveis corretamente para o ambiente de desenvolvimento.

```shell
DB_URL=URL_DO_BANCO_DE_DADOS
PORT=PORTA_DO_SERVIDOR
```
### 2. Instalação de Dependências

Execute o comando a seguir para instalar as dependências do projeto:

`npm install`

### 3. Migrações do Prisma

Para criar ou atualizar o esquema do banco de dados usando o Prisma, execute o seguinte comando:

`npx prisma migrate`
