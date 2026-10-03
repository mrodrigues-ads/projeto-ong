# Rede Conectar

## Sobre o projeto

A Rede Conectar é uma organização fictícia sem fins lucrativos criada para um projeto acadêmico de desenvolvimento web. A aplicação tem como objetivo apresentar a organização, seus projetos e disponibilizar um formulário para pessoas interessadas em participar.

O projeto foi desenvolvido de forma incremental ao longo das Experiências Práticas, incorporando recursos de estruturação, interatividade, armazenamento de dados, acessibilidade e versionamento.

## Tecnologias utilizadas

- **HTML5:** estrutura semântica e conteúdo das páginas.
- **CSS3:** estilização, layout, responsividade e recursos visuais de acessibilidade.
- **JavaScript:** interatividade, navegação, validação do formulário e armazenamento local.
- **Git:** controle de versão e organização do histórico de alterações.
- **GitHub:** hospedagem do repositório, gerenciamento de Issues, Milestones e Pull Requests.
- **SweetAlert2:** exibição de mensagens de confirmação após o cadastro.

## Estrutura do projeto

```text
projeto-ong/
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
└── README.md
```

### Organização dos arquivos

- **css/**: contém os arquivos de estilização do projeto.
- **html/**: contém as páginas da aplicação.
- **imagens/**: armazena os recursos visuais utilizados.
- **js/**: contém os módulos JavaScript responsáveis pela interatividade, navegação, formulário e armazenamento de dados.
- **README.md**: documentação técnica do projeto.

## Como executar localmente

### Pré-requisitos

Para executar o projeto localmente, é necessário ter:

- **Visual Studio Code** instalado.
- Um navegador compatível, como o **Microsoft Edge**.
- A extensão **Live Server** instalada no Visual Studio Code.

### Execução

1. Baixe ou clone o repositório do projeto.
2. Abra a pasta `projeto-ong` no Visual Studio Code.
3. Acesse a pasta `html/`.
4. Abra o arquivo `index.html`.
5. Clique em **Go Live**, disponibilizado pela extensão Live Server.
6. O projeto será aberto no navegador padrão, permitindo navegar pelas páginas e testar suas funcionalidades.

Também é possível utilizar o navegador integrado ao Visual Studio Code para visualizar o projeto durante o desenvolvimento.

### Observação

O projeto é uma aplicação web estática e não possui processo de instalação de dependências ou etapa de build. Os arquivos HTML, CSS e JavaScript são executados diretamente por meio do servidor local.

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