# Rede Conectar

## Sobre o projeto

A Rede Conectar é uma organização fictícia sem fins lucrativos criada para um projeto acadêmico de desenvolvimento web. A aplicação tem como objetivo apresentar a organização, seus projetos e disponibilizar um formulário para pessoas interessadas em participar.

O projeto foi desenvolvido de forma incremental ao longo das Experiências Práticas, incorporando recursos de estruturação, interatividade, armazenamento de dados, acessibilidade e versionamento.

## Tecnologias utilizadas

- **HTML5:** estrutura semântica e conteúdo das páginas.
- **CSS3:** estilização, layout, responsividade e recursos visuais de acessibilidade.
- **JavaScript:** interatividade, navegação, validação do formulário e armazenamento local.
- **Vite:** ferramenta de build utilizada para agrupar e otimizar os arquivos da aplicação para produção.
- **Node.js e npm:** utilizados para gerenciamento das dependências e execução dos scripts de build e preview.
- **Git:** controle de versão e organização do histórico de alterações.
- **GitHub:** hospedagem do repositório, gerenciamento de Issues, Milestones e Pull Requests.
- **GitHub Actions:** automação do processo de build e deploy da aplicação.
- **GitHub Pages:** hospedagem da versão de produção da aplicação.
- **SweetAlert2:** exibição de mensagens de confirmação após o cadastro.

## Estrutura do projeto

```text
projeto-ong/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── css/
│   └── style.css
├── html/
│   ├── cadastro.html
│   ├── index.html
│   └── projetos.html
├── imagens/
│   └── rede-conectar.png
├── js/
│   ├── armazenamento.js
│   ├── formulario.js
│   ├── main.js
│   └── rotas.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── vite.config.mjs
```

### Organização dos arquivos

- **.github/workflows/**: contém o workflow responsável pela automação do build e deploy no GitHub Pages.
- **css/**: contém os arquivos de estilização do projeto.
- **html/**: contém as páginas da aplicação.
- **imagens/**: armazena os recursos visuais utilizados.
- **js/**: contém os módulos JavaScript responsáveis pela interatividade, navegação, formulário e armazenamento de dados.
- **.gitignore**: define arquivos e diretórios que não devem ser versionados, como `node_modules/` e `dist/`.
- **package.json**: contém as configurações do projeto e os scripts utilizados pelo npm.
- **package-lock.json**: registra as versões das dependências instaladas.
- **vite.config.mjs**: contém a configuração do Vite para a build de produção.
- **README.md**: documentação técnica do projeto.

## Como executar localmente

### Pré-requisitos

Para executar o projeto localmente, é necessário ter:

- **Visual Studio Code** instalado.
- **Node.js** instalado.
- Um navegador compatível, como o **Microsoft Edge**.

### Instalação

1. Baixe ou clone o repositório do projeto.
2. Abra a pasta `projeto-ong` no Visual Studio Code.
3. Abra o terminal na pasta raiz do projeto.
4. Instale as dependências com:

```bash
npm install
```

### Execução local

Para visualizar a versão de produção da aplicação localmente, execute:

```bash
npm run build

Depois, utilize:

npm run preview

O Vite disponibilizará um endereço local, normalmente:

http://localhost:4173/
```

### Build de produção

Para gerar a versão de produção da aplicação, utilize:

```bash
npm run build
```

A build será criada na pasta `dist/`.

Para visualizar localmente a versão de produção gerada, execute:

```bash
npm run preview
```

O Vite disponibilizará um endereço local, normalmente:

```text
http://localhost:4173/
```

### Deploy

A versão publicada da aplicação utiliza **GitHub Pages**. O processo de build e publicação é automatizado pelo **GitHub Actions** sempre que alterações são enviadas para a branch `main`.

O workflow realiza as seguintes etapas:

1. Obtém o código do repositório.
2. Configura o ambiente Node.js.
3. Instala as dependências com `npm ci`.
4. Executa `npm run build`.
5. Envia a pasta `dist/` como artefato.
6. Publica a build no GitHub Pages.

Dessa forma, a versão publicada é atualizada automaticamente a partir da branch `main`.

## Versionamento e práticas de desenvolvimento

O projeto utiliza o Git para controle de versão e o GitHub para hospedagem do repositório e gerenciamento do desenvolvimento.

Foi adotada uma organização baseada no **GitFlow**, utilizando a branch `main` para a versão estável do projeto e a branch `develop` para o desenvolvimento contínuo.

As novas funcionalidades e alterações são desenvolvidas em branches específicas, seguindo o padrão `feature/`. Após a implementação e validação, as alterações são integradas à branch `develop` por meio de Pull Requests.

### Padrão de commits

Os commits seguem o padrão **Conventional Commits**, utilizando tipos que identificam o objetivo de cada alteração, como:

- `feat`: novas funcionalidades ou melhorias.
- `fix`: correções de problemas.
- `perf`: melhorias de desempenho.
- `docs`: alterações relacionadas à documentação.

Exemplos utilizados no projeto:

- `feat: versão inicial do projeto Rede Conectar`
- `feat: melhora acessibilidade do projeto`
- `perf: otimiza imagem do projeto`
- `docs: documenta suporte a tecnologias assistivas`

Essa organização facilita o acompanhamento da evolução do projeto, a identificação das alterações realizadas e a manutenção do código.

## Acessibilidade

O projeto foi desenvolvido considerando princípios de acessibilidade e critérios da **WCAG 2.1**, buscando facilitar a utilização da aplicação por diferentes usuários e tecnologias assistivas.

Entre as principais melhorias implementadas estão:

- **Navegação por teclado:** os elementos interativos possuem foco visual para facilitar sua identificação durante a navegação.
- **Atributos ARIA:** utilização de atributos como `aria-label`, `aria-expanded`, `aria-controls` e `aria-live` para fornecer informações adicionais às tecnologias assistivas.
- **Menu acessível:** o menu de navegação possui controle por botão e informa seu estado de abertura ou fechamento por meio do atributo `aria-expanded`.
- **Identificação da navegação:** a navegação principal possui uma identificação por meio de `aria-label`.
- **Formulário:** mensagens de validação e feedback são disponibilizadas em uma região com `aria-live`, permitindo que alterações importantes sejam comunicadas às tecnologias assistivas.
- **Foco visível:** links, botões e outros elementos interativos apresentam destaque visual quando recebem foco pelo teclado.
- **Contraste:** foram realizados ajustes nas cores utilizadas pelo projeto para melhorar a legibilidade dos conteúdos.
- **Texto alternativo:** a imagem principal da aplicação possui descrição no atributo `alt`, fornecendo uma alternativa textual para usuários que não conseguem visualizar a imagem.

## Otimização e desempenho

Foram realizadas melhorias para reduzir o tamanho dos recursos utilizados pelo projeto e contribuir para um carregamento mais eficiente da aplicação.

A principal otimização realizada foi a compressão da imagem `rede-conectar.png`, mantendo suas dimensões e qualidade visual praticamente inalteradas.

- **Tamanho original:** aproximadamente 829 KB.
- **Tamanho após a otimização:** aproximadamente 237 KB.
- **Redução aproximada:** 71%.

Essa otimização reduz a quantidade de dados necessários para carregar o recurso, contribuindo para um melhor desempenho da aplicação.

## Funcionalidades

A aplicação Rede Conectar possui as seguintes funcionalidades principais:

- **Navegação entre páginas:** acesso às áreas de início, projetos e cadastro.
- **Navegação por seções:** acesso direto às seções específicas dos projetos por meio das rotas disponíveis no menu.
- **Formulário de cadastro:** permite o preenchimento de dados pessoais, endereço e informações de participação.
- **Validação de formulário:** verifica se os campos obrigatórios e formatos definidos foram preenchidos corretamente.
- **Armazenamento local:** os dados principais do cadastro são armazenados no `localStorage` do navegador.
- **Recuperação de cadastro:** os dados armazenados podem ser recuperados e preenchidos novamente no formulário.
- **Feedback ao usuário:** mensagens informam o resultado da validação e do cadastro realizado.
- **Menu responsivo:** o menu pode ser aberto e fechado por meio de um botão em telas menores.

## Testes e validação

Durante o desenvolvimento do projeto, foram realizados testes manuais e validações para verificar o funcionamento e a qualidade da aplicação.

Entre as verificações realizadas estão:

- **Validação do HTML:** na primeira etapa do projeto, o código HTML foi submetido ao **W3C Markup Validation Service**, apresentando resultado de validação sem erros.
- Funcionamento da navegação entre as páginas e seções.
- Abertura e fechamento do menu de navegação.
- Navegação utilizando o teclado e visualização do foco nos elementos interativos.
- Validação dos campos do formulário.
- Exibição das mensagens de feedback e confirmação do cadastro.
- Salvamento dos dados no `localStorage`.
- Recuperação dos dados armazenados ao acessar novamente o formulário.
- Funcionamento dos recursos de acessibilidade implementados.
- Carregamento da imagem otimizada e demais recursos da aplicação.

## Manutenção do projeto

Para realizar alterações no projeto, recomenda-se seguir as práticas de versionamento adotadas:

1. Atualizar a branch `develop` antes de iniciar uma nova alteração.
2. Criar uma branch específica para a funcionalidade ou correção.
3. Realizar as alterações e testar o funcionamento da aplicação.
4. Registrar as alterações utilizando mensagens de commit seguindo o padrão Conventional Commits.
5. Criar um Pull Request para integrar as alterações à branch `develop`.
6. Verificar as alterações antes da integração.
7. Manter a documentação do `README.md` atualizada quando houver mudanças relevantes no projeto.

Essa organização facilita a manutenção, o acompanhamento das alterações e a evolução do projeto.