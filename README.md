
# Software Community Open Source (SCOS)

  

Para programadores e profissionais de TI com problemas além de sua capacidade, que desejam encontrar especialistas para solucioná-los, o Software Community Open Source é uma comunidade web que conecta você aos profissionais capazes de resolver seu problema. Ao contrário de fóruns de dúvidas convencionais em que você demora encontrar a solução, nosso produto permite que você se conecte em tempo real com diversos especialistas de nossa comunidade.

  

## 🚀 Começando

  
Para obter uma cópia do projeto e testar em sua máquina local para desenvolvimento, você precisa seguir os passos seguintes.
  

### 📋 Pré-requisitos
Para rodar o projeto você precisa ter o Node.js e o Yarn ou o NPM instalados em sua máquina.

 1. #### Node.js
    

> Node.js é um ambiente de execução JavaScript para servidor que permite executar códigos JavaScript através de um interpretador embutido no Node.js (JavaScript V8). 
> 
> Você pode baixar o Node.js (versão maior ou igual a 16) no seguinte link:
> 
> [https://nodejs.org/en/](https://nodejs.org/en/)

 2. #### Yarn ou NPM
    
    
    

> O NPM é o gerenciador de pacotes do Node.js, ou seja, é o
>     gerenciador de dependências que permite organizar todas as
>     dependências de seu projeto que utiliza o Node.js. Uma alternativa
>     para o NPM é o YARN, ambos possuem as mesmas finalidades.
>     
> Você pode baixar o yarn ou optar pelo npm que já vem incluso no node.js no link acima.
>     
> Caso queira baixar e instalar apenas o yarn, você pode fazê-lo no seguinte link:
>     
> [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

 
  

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

### 🔩 Instalação das dependências

Em seguida, você deve acessar a pasta do projeto através de seu terminal para instalação das dependências do projeto, utilizando o yarn ou npm. 

Para a instalação dos pacotes basta digitar o seguinte comando:

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
- `pages` - Contém as páginas da aplicação, cada página criada deve ser criada na raiz dessa pasta;
- `services` - Contém os serviços da aplicação;
- `styles` - Contém os estilos globais da aplicação;
- `components` - Contém os componentes reutilizáveis que podem ser utilizados em qualquer página;
- `contexts` - Contém os contextos, no caso do projeto de exemplo, conterá o Contexto de Menu lateral;
- `types` - Contém os tipos customizados, utilizando Typescript;
- `api` - Contém os arquivos que serão interpretados pelo NextJS para criação de enpoints na API.

## 📦 Implantação

A implantação da aplicação foi feita através da plataforma Vercel, sendo a versão de produção acessada através do link:

https://software-community-open-source.vercel.app/

### 🚀Vercel
A Vercel é uma plataforma de hospedagem e implantação de aplicações Node.js, React, Vue.js, Next.js, Nuxt.js e static sites. A sua utilização é simples, permitindo facilmente integrar repositórios do GitHub à plataforma e construir mecanismos de deploy automático a partir de eventos.

###  🔨CI/CD
A partir da integração com a plataforma da Vercel, tornou-se possível a construção de workflows através do GitHub Actions, que possibilitam uma integração e entrega contínua (CI/CD) de forma simples, a partir de eventos do ciclo de desenvolvimento, como o push para um branch ou mesmo a aprovação de um PR que gera um incremento na branch principal do repositório.

1. **Deploy em produção:** O deploy em produção é disparado sempre que existir um `push` na branch principal do projeto (`main`). Dessa forma, sempre que uma nova funcionalidade for adicionada ao projeto e passar pelo ciclo padrão de desenvolvimento, ou seja, codificação, revisão e aprovação, no momento em que essa nova funcionalidade for incrementada na branch principal através de uma `pull request`, automaticamente será disparado esse workflow responsável pelo deploy em produção.
2. **Deploy em preview:** O deploy em preview é disparado sempre que existir um `push` para qualquer branch do projeto que não seja a branch principal (`main`). O ambiente de preview é utilizado como nosso ambiente de desenvolvimento em nuvem, sendo gerado um build diferente a cada push realizado. 

	Ao contrário do deploy em produção, que permite uma única instância em nuvem, o deploy de preview trabalha com múltiplas instâncias em nuvem, a partir de uma HASH (criptografia) que é criada no momento do deploy. Essa HASH permite que diversas versões do código continuem acessíveis (na internet) através da plataforma da Vercel, sendo esse um ambiente perfeito para testes e desenvolvimentos.
  

## 🛠️ Construído com

* [ReactJS](https://pt-br.reactjs.org/docs/getting-started.html) - Biblioteca JavaScript para construção de Interfaces
* [NextJS](https://nextjs.org/) - Framework ReactJS  
* [Chakra UI](https://chakra-ui.com/) - Design system ReactJS
* [Axios](https://github.com/axios/axios) - Biblioteca JavaScript para realizar requisições
* [Typescript](https://www.typescriptlang.org/docs/home.html) - Linguagem de tipagem JavaScript
* [Prettier](https://prettier.io/docs/en/index.html) - Biblioteca JavaScript para formatar código
* [Eslint](https://eslint.org/docs/user-guide/getting-started) - Biblioteca JavaScript para identificar e corrigir problemas de código
* [Vercel](https://vercel.com/) - Deploy da aplicação
* [Firebse](https://firebase.google.com) - Plataforma Google para desenvolvimento
* [Firebase Cloud Firestore](https://firebase.google.com/products/firestore) - Plataforma Google para armazenamento de dados

## 🖇️ Colaborando

Ao contribuir com este projeto, certifique-se de seguir os códigos de conduta e padrões de codificação.

### Código de conduta
Os responsáveis pelo **SCOS** se comprometem a fazer de tudo para manter um ambiente acolhedor e inclusivo para todos, incentivando a criatividade e inovação.

Não toleraremos comportamentos que violem esses princípios na aplicação, no código fonte, nas issues, nas respostas, nas mensagens, nos comentários, nas marcações e nas solicitações de pull request.

Os exemplos de comportamentos que contribuem para criar um ambiente positivo incluem:

* Usar linguagem inclusiva e amigável
* Respeitar pontos de vista e experiências diferentes
* Aceitar e fazer críticas construtivas
* Focar no que é melhor para a comunidade
* Mostrar empatia com outros membros da comunidade

Os exemplos de comportamentos inaceitáveis pelos participantes incluem:

* Comentários ofensivos e ataques pessoais
* Discussões nos diversos fóruns do repositório
* Qualquer outra forma de conduta que pode ser razoavelmente considerada inapropriada num ambiente profissional

### ⌨️ Como contribuir
Para realizar contribuições para o projeto, deverá a configuração do projeto em seu ambiente de desenvolvimento, como foi descrito na seção *Começando*.
A partir deste ponto você poderá realizar a criação de _features_ e correção de _bugs_ seguindo os padrãos impostos para este projeto, através do que está descrito neste README.md.

### ⌨️ Como subir modificações
Como parte das boas práticas, deverá ser utilizado mensagens de _commits_ que sejam relevantes, ter _commits_ bem descritivos, isto torna o _commit_ melhor de ser entendido além de facilitar a revisão do código, ajuda a entender o que foi resolvido e porque foi resolvido daquela maneira. Isso também pode ajudar em momentos que for necessário realizar _rollbacks_. Vale ressaltar que os _commits_ devem contar uma história do que foi realizado.
Procure sempre manter as mensagens de _commits_ seguindo o padrão [conventionalcommits](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/).
Após realizado todo o desenvolvimento local, testado e sem anomalias que afetem o código já existente, estará apto a subir para o repositório remoto e abrir uma PR para que os outros desenvolvedores possam realizar o _review_.
Evite subir grandes modificações, pois isso pode afetar negativamente o review lá na frente, se tornando massante e mais suscetível a erros. 

### ⌨️ Padrões de codificação/Políticas de código
O contribuidor deve seguir os padrões de desenvolvimento impostos pelos criados do projeto, e o que a comunidade vem utilizando no mercado para o padrão de desenvolvimento utilizando React e Next.js. Procurando sempre manter um código limpo e apresentável, de tal forma que fique claro o que foi desenvolvido tanto para quem mantém irá manter o código, quanto para quem possa vir a desenvolver novas funcionalidades. Mas, não se prenda a isso, fique a vontade para sugerir novas estruturas/arquiteturas e padrões de códigos que possam ser úteis para o desenvolvimento da comunidade.

### ⌨️ Como revisar um código
Antes de tudo é preciso que a PR esteja bem descrita sobre o que o desenvolvedor almeja entregar, sendo assim, se estiver muito vago a descrição, não ficará claro para aqueles que irão revisar sobre o que se trata aquela PR.
A primeira coisa que precisamos validar é se o código funciona e faz o que ele deveria fazer corretamente. Só então devemos ver se o código é elegante ou fácil de ler. Essa "hierarquia" de importâncias evita ruídos desnecessários e falhas de comunicação dos PRs. 
Não é uma boa idéia jogar a obrigação de garantir que o código funcione para quem está fazendo o review.
- Familiarize-se com o problema. A pessoa perdeu tempo escrevendo um bom PR, portando leia a descrição e entenda o que está sendo feito.
- Não seja grosseiro. Mesmo que tudo esteja ruim, sempre existe a forma educada de falar isso. Entender o contexto ajuda muito.
- Dê sugestões de alteração em vez de ordens. `O que você acha?` ou `Você concorda?` ajudam a mudar o tom.
- Caso não entenda algum ponto, pergunte.
- Reconheça os pontos positivos. Quando identificar algum código ou alguma técnica notável, não deixe de valorizar com elogios.
- Use e abuse dos emojis. `Isso pode ser um problema` será sempre mais frio e distante que um bom `Isso pode ser um problema 🤔` .

### ⌨️ Quando mergear uma nova funcionalidade/Como mergear
Após subir uma feature ou correção para revisão, abrir PR, se deve esperar que todo o pipeline de testes e build rodem sem problemas, caso venha a ter algum erro nesse processo, o responsável pela PR deverá atuar sobre isto ou, se for o caso necessário, acionar algum dos mantenedores para o auxiliar na correção deste.
Com todo o pipeline executado sem erros, o responsável pela PR deverá esperar as aprovações necessárias para que a funcionalidade possa vir a ser mergeada, é uma dessas aprovações é necessária que seja de um dos mantenedores do projeto.


## 📌 Ferramentas de conexão

* [Git](https://git-scm.com/doc) - Sistema de controle de versão
* [GitHub](https://github.com/GabrielNogueiraBR/Software-Community-Open-Source) - Repositório remoto de código
* [Vercel App](https://software-community-open-source.vercel.app/) - Hospedagem de site

  

## ✒️ Autores  

-  **Gabriel Nogueira** - _Programador Líder_ - [gabrielnogueirabr](https://github.com/GabrielNogueiraBR)

-  **Gabriel Ferraz** - _Programador_ - [gaabrielferraz](https://github.com/gaabrielferraz)

-  **Otavio Cordeiro** - _Programador_ - [cordeirootavio](https://github.com/CordeiroOtavio)

-  **Vitor Gois** - _Programador_ - [vitorgois](https://github.com/VitorGois)

 - **Raul Deaque** - _Designer e Programador_ - [ryanraul](https://github.com/ryanraul)
  


## 📝 Licença

Este projeto esta sobe a licença MIT. Veja a [LICENÇA](https://opensource.org/licenses/MIT) para saber mais.

Feito com ❤️ por :
- Gabriel Nogueira 👋🏽 [Entre em contato!](https://www.linkedin.com/in/gabrielnogueira7/)
- Gabriel Ferraz 👋🏽 [Entre em contato!](https://www.linkedin.com/in/gaabrielferraz/)
- Otavio Cordeiro 👋🏽 [Entre em contato!](https://www.linkedin.com/in/otavio-cordeiro-de-freitas/)
- Vitor Gois 👋🏽 [Entre em contato!](https://www.linkedin.com/in/vitorgois/)
- Raul Deaque 👋🏽 [Entre em contato!](https://www.linkedin.com/in/ryanraul/)
