# API Vendas

## Descrição
API para controle de fluxo de caixa, desenvolvida com Node.js e Express.

## Índice
- [Instalação](#instalação)
- [Uso](#uso)
- [Iniciar](#iniciar)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Instalação
Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install
```

## Uso
Essa aplicação é utilizada para o cadastro de vendas e controle de estoque.

## Iniciar
Para iniciar a aplicação:

```bash
npm run dev
```

## Estrutura do Projeto

```
├── controller
│   ├── configuracao
│   │   ├── marca.controller.js
│   │   └── produto.controller.js
│   ├── estoque
│   │   └── estoque.controller.js
│   └── venda
│       └── venda.controller.js
├── database
│   └── database.js
├── functions
│   └── index.js
├── helper
│   ├── configuracao
│   │   ├── marca.helper.js
│   │   └── produto.helper.js
│   ├── estoque
│   │   └── estoque.helper.js
│   └── vendas
│       └── vendas.helper.js
├── routes
│   ├── configuracao
│   │   ├── marca.route.js
│   │   └── produto.route.js
│   ├── estoque
│   │   └── estoque.route.js
│   └── venda
│       └── venda.route.js
├── app.js
├── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

### Diretórios Principais

- **controller/**: Contém os controladores que gerenciam as regras de negócio e processam as requisições da API.
- **database/**: Configurações do banco de dados.
- **functions/**: Funções auxiliares reutilizáveis.
- **helper/**: Contém funções utilitárias específicas para os módulos.
- **routes/**: Define as rotas utilizadas pela API.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais informações.

