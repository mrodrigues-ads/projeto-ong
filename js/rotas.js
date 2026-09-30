import {
    renderizarFormulario,
    configurarEventosFormulario,
    preencherFormulario
} from "./formulario.js";

import { buscarCadastro } from "./armazenamento.js";

const projetos = [
    {
        titulo: "Campanhas de Doação",
        descricao: `Nossas campanhas são contínuas e visam arrecadar recursos e materiais necessários para manter as atividades de inclusão digital ativas.
         Qualquer contribuição, seja em equipamentos ou em recursos financeiros, nos ajuda a levar a tecnologia mais longe.`,
        rota: "campanhasdedoacao"
    },
    {
        titulo: "Seja Voluntário",
        descricao: `Os voluntários são o coração da Rede Conectar. É através do conhecimento, do tempo e da dedicação de cada pessoa que conseguimos restaurar
         equipamentos, ministrar aulas e oferecer um atendimento humanizado a quem busca oportunidade no mundo digital.`,
        rota: "sejavoluntario"
    },
    {
        titulo: "Como Ajudar",
        descricao: `Ajudar a Rede Conectar é simples e está ao alcance de todos. Não importa o tamanho da sua contribuição - seja doando um aparelho encostado,
         compartilhando seu conhecimento ou divulgando nossa causa -, toda ação impacta diretamente a vida de quem precisa de acesso ao mundo digital.`,
        rota: "comoajudar"
    }
];

function carregarInicio(app) {
    app.innerHTML = `
        <section>
            <h2>Quem Somos e o Nosso Propósito</h2>
            <img src="../imagens/rede-conectar.png" alt="Voluntária da Rede Conectar auxiliando uma mulher idosa a usar um notebook
            em uma sala com computadores e caixas de doação, com faixa do projeto ao fundo">
            <p>A Rede Conectar é uma organização sem fins lucrativos dedicada a combater a desigualdade através da tecnologia.
               Acreditamos que o acesso ao mundo digital não é um luxo, mas um direito fundamental para o desenvolvimento pessoal, educacional e profissional de cada indivíduo.
            </p>

            <p>Nosso objetivo é transformar vidas, aproximando quem precisa de tecnologia de quem faz a diferença. Através do recolhimento, restauração e doação de computadores e 
                dispositivos eletrônicos, garantimos que estudantes e famílias em vulnerabilidade social ganhem as ferramentas necessárias para estudar, trabalhar e
                 se conectar com o futuro.
            </p>
        </section>

        <section>
            <h2>Como Atuamos</h2>
            <p>Nossa atuação é baseada em três pilares fundamentais, que conectam solidariedade, tecnologia e educação para gerar um impacto social real e sustentável
                nas comunidades que atendemos.
            </p>
            <ul>
                <li>Arrecadação e Recuperação de Equipamentos: Recebemos computadores, notebooks e celulares doados por pessoas e empresas, realizando a manutenção 
                    necessária para deixá-los prontos para uso.
                </li>
                <li>Doação e Inclusão Digital: Entregamos os dispositivos recuperados para alunos, famílias e projetos comunitários em situação de vulnerabilidade,
                 garantindo o acesso à internet e ao aprendizado.
                </li>
                <li>Capacitação e Oficinas: Oferecemos treinamentos básicos de informática e uso consciente da tecnologia para que os beneficiários  utilizem os recursos
                 digitais no estudo e na busca por empregos.
                </li>
            </ul>
        </section>

        <section class="projetos">
            <h2>Nossos Projetos</h2>
            <p>Desenvolvemos iniciativas práticas focadas em transformar equipamentos parados em oportunidades reais de aprendizado, trabalho e inclusão social</p>

            <div class="card">
                <article>
                    <h3>Computador para Todos</h3>
                    <p>Projeto focado na coleta, formatação e recuperação de computadores descartados por empresas e pessoas físicas. Após a manutenção, os equipamentos são
                    doados para estudantes de escolas públicas que não possuem recursos para comprar uma máquina própia. 
                    </p>
                </article>

                <article>
                    <h3>Conexão na Periferia</h3>
                    <p>Estruturação de pontos de acesso comunitários à internet e minilabs digitais em centros sociais. A iniciativa garante infraestrutura e conexão 
                    estável para que moradores da região possam realizar pesquisas, estudos e serviços online.
                    </p>
                </article>

                <article>
                    <h3>Primeiro Click</h3>
                    <p>Oficinas presenciais de alfabetização digital voltadas para jovens e idosos. Os alunos aprendem desde o manuseio básico de computadores e navegação 
                    segura, até a elaboração de currículos e uso de ferramentas úteis para o mercado de trabalho.
                    </p>
                </article>
            </div>
        </section>

        <section>
            <h2>Faça Parte da Mudança</h2>
            <p>Sua ajuda é o combustível que nos permite levar tecnologia e conhecimento para quem mais precisa. Seja doando um equipamento que você não usa mais,
                oferecendo seu tempo como voluntário ou contribuindo financeiramente, você faz a diferença direta na vida de diversas famílias.
            </p>

            <a href="#cadastro" class="botao">Quero Participar</a>
            <a href="#projetos" class="botao">Conheça Nossos Projetos</a>
        </section>

        <section class="contato">
            <h2>Dados de Contato</h2>
            <p>Estes são os nossos canais oficiais de comunicação. Entre em contato para tirar dúvidas, agendar a entrega de doações de equipamentos 
                ou saber mais sobre como se tornar um voluntário dos nossos projetos.
            </p>
            <p>E-mail: contato@redeconectar.org.br</p>
            <p>Telefone: (11) 99999-0000</p>
            <p>Endereço: Av. da Tecnologia, 1020, Sala 405 - Centro, São Paulo - SP</p>
            <p>Horário de Atendimento: Segunda a sexta-feira, das 09h às 18h</p>
        </section>


    `
}

function carregarProjetos(app) {
    app.innerHTML = `
        <div id="lista-projetos"></div>

        <section>
            <h2>Quer fazer parte da Rede Conectar?</h2>

            <span class="badge">Participação</span>
            <p>Ao clicar no link abaixo, você será direcionado para a nossa página de cadastro para preencher seus dados e começar a transformar 
                vidas com a gente.
            </p>
            
            <a href="#cadastro" class="botao">Quero Participar</a>
            
        </section>

    `;

    const listaProjetos = document.getElementById("lista-projetos");

    projetos.forEach((projeto) => {
        const html = `
            <section id="${projeto.rota}">
                <h2>${projeto.titulo}</h2>
                <p>${projeto.descricao}</p>
            </section>
        `;

        listaProjetos.innerHTML += html;
    });
}

function carregarCadastro(app) {
    renderizarFormulario(app);

    const form = document.getElementById("form");

    configurarEventosFormulario(form);

    const dadosCadastro = buscarCadastro();

    preencherFormulario(dadosCadastro);
}

export { 
    carregarInicio, 
    carregarProjetos,
    carregarCadastro
};