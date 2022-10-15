
# Software Community Open Source (SCOS)

  

Para programadores e profissionais de TI com problemas além de sua capacidade, que desejam encontrar especialistas para solucioná-los, o Software Community Open Source é uma comunidade web que conecta você aos profissionais capazes de resolver seu problema. Ao contrário de fóruns de dúvidas convencionais em que você demora encontrar a solução, nosso produto permite que você se conecte em tempo real com diversos especialistas de nossa comunidade.

  

## 🚀 Começando

  
Para obter uma cópia do projeto e testar em sua máquina local para desenvolvimento, você precisa seguir os passos seguintes.
  

### 📋 Pré-requisitos
Para rodar o projeto você precisa ter o Node.js e o Yarn ou o NPM instalados em sua máquina.

#### Node.js

Node.js é um ambiente de execução JavaScript para servidor que permite executar códigos JavaScript através de um interpretador embutido no Node.js (JavaScript V8).

Você pode baixar o Node.js (versão maior ou igual a 16) no seguinte link:

[https://nodejs.org/en/](https://nodejs.org/en/)

#### Yarn ou NPM


O NPM é o gerenciador de pacotes do Node.js, ou seja, é o gerenciador de dependências que permite organizar todas as dependências de seu projeto que utiliza o Node.js. Uma alternativa para o NPM é o YARN, ambos possuem as mesmas finalidades.

Você pode baixar o yarn ou optar pelo npm que já vem incluso no node.js no link acima.

Caso queira baixar e instalar apenas o yarn, você pode fazê-lo no seguinte link:

[https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)
   

### 🔧 Instalação do Projeto

Para instalar o projeto, você precisa cloná-lo em sua máquina utilizando o git, podendo ser feito através do seguinte código em seu terminal de preferência:

##### SSH
```bash
git clone git@github.com:GabrielNogueiraBR/Software-Community-Open-Source.git
```

##### HTTPS
```bash
git clone https://github.com/GabrielNogueiraBR/Software-Community-Open-Source.git
```

Caso você não possua o git instalado em sua máquina, basta baixar o ZIP do projeto e descompactá-lo no local desejado em sua máquina, através do link:

[Download do .ZIP](https://codeload.github.com/GabrielNogueiraBR/Software-Community-Open-Source/zip/refs/heads/main)

Em seguida, você deve acessar a pasta do projeto através de seu terminal para instalação das dependências do projeto, utilizando o yarn ou npm. Para a instalação dos pacotes basta digitar o seguinte comando:

##### YARN
```bash
yarn install
```

##### NPM
```bash
npm install
```


Por último, o projeto precisa de uma configuração de variáveis ambientes para se conectar a serviços de terceiros, como o Firebase. Para isso, você precisa criar um arquivo `.env` na raiz da pasta de seu projeto e configurar essas variáveis de acordo com o arquivo `.env.schema`.

Um exemplo do arquivo `.env.schema` pode ser visto no seguinte código, sendo necessário copiar esse conteúdo, colar no arquivo `.env` e adicionar os valores para cada uma dessas variáveis ambientes.

```
# Firebase
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

### ⚙️ Executando o projeto 
Para iniciar o projeto basta utilizar o seguinte comando através do terminal:

##### YARN
```bash
yarn dev
```

##### NPM
```bash
npm run dev
```

### 📁 Estrutura de pastas

A estrutura de pastas do nosso projeto está organizado da seguinte forma:

```
.
├── src
│   ├── contexts
│   ├── styles
│   ├── components
│   ├── services
│   ├── types
│   └── pages
│       └── api
├── package.json
└── README.md

```
- `pages` - Contém as páginas da aplicação, cada página criada deve ser criada na raíz dessa pasta;
- `services` - Contém os serviços da aplicação;
- `styles` - Contém os estilos globais da aplicação;
- `components` - Contém os componentes reutilizáveis que podem ser utilizados em qualquer página;
- `contexts` - Contém os contextos, no caso do projeto de exemplo, conterá o Contexto de Menu lateral;
- `types` - Contém os tipos customizados, utilizando Typescript;
- `api` - Contém os arquivos que serão interpretados pelo NextJS para criação de enpoints na API;

## 📦 Implantação
Adicione notas adicionais sobre como implantar isso em um sistema ativo (VITOR)

  

## 🛠️ Construído com

* [ReactJS](https://pt-br.reactjs.org/docs/getting-started.html) - Biblioteca JavaScript para construção de Interfaces
* [NextJS](https://nextjs.org/) - Framework ReactJS  
* [Chakra UI](https://chakra-ui.com/) - Design system ReactJS
* [Axios](https://github.com/axios/axios) - Biblioteca JavaScript para realizar requisições
* [Typescript](https://www.typescriptlang.org/docs/home.html) - Linguagem de tipagem JavaScript
* [Prettier](https://prettier.io/docs/en/index.html) - Biblioteca JavaScript para formatar código
* [Eslint](https://eslint.org/docs/user-guide/getting-started) - Biblioteca JavaScript para identificar e corrigir problemas de código
* [Firebse](https://firebase.google.com) - Plataforma Google para desenvolvimento
* [Firebase Cloud Firestore](https://firebase.google.com/products/firestore) - Plataforma Google para armazenamento de dados

## 🖇️ Colaborando

Ao contribuir com este projeto, certifique-se de seguir os códigos de conduta e padrões de codificação.

### ⌨️ Como contribuir

### ⌨️ Como subir modificações

### ⌨️ Padrões de codificação

### ⌨️ Como revisar um código


### ⌨️ Quando mergear uma nova funcionalidade/Como mergear

## 📌 Ferramentas de conexão

* [Git](https://git-scm.com/doc) - Sistema de controle de versão
* [GitHub](https://github.com/GabrielNogueiraBR/Software-Community-Open-Source) - Repositório de código
* [Vercel App](https://software-community-open-source.vercel.app/) - Hospedagem de site

  

## ✒️ Autores  

-  **Gabriel Nogueira** - _Trabalho Inicial_ - [umdesenvolvedor](https://github.com/linkParaPerfil)

-  **Gabriel Ferraz** - _Documentação_ - [fulanodetal](https://github.com/linkParaPerfil)

-  **Otavio Cordeiro** - _Documentação_ - [fulanodetal](https://github.com/linkParaPerfil)

-  **Vitor Gois** - _Documentação_ - [fulanodetal](https://github.com/linkParaPerfil)

 - **Raul Deaque** - _Documentação_ - [fulanodetal](https://github.com/linkParaPerfil)
  


## 📝 Licença

Este projeto esta sobe a licença MIT. Veja a [LICENÇA](https://opensource.org/licenses/MIT) para saber mais.

Feito com ❤️ por :
- Gabriel Nogueira 👋🏽 [Entre em contato!](https://www.linkedin.com/in/gabrielnogueira7/)
- Gabriel Ferraz 👋🏽 [Entre em contato!](https://www.linkedin.com/in/gabrielnogueira7/)
- Otavio Cordeiro 👋🏽 [Entre em contato!](https://www.linkedin.com/in/gabrielnogueira7/)
- Vitor Gois 👋🏽 [Entre em contato!](https://www.linkedin.com/in/gabrielnogueira7/)
- Raul Deaque 👋🏽 [Entre em contato!](https://www.linkedin.com/in/gabrielnogueira7/)

  

## 🎁 Expressões de gratidão

  

- Conte a outras pessoas sobre este projeto 📢;

- Convide alguém da equipe para uma cerveja 🍺;

- Um agradecimento publicamente 🫂;

- etc.

  

---