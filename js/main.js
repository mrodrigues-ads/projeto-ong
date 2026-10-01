import { 
    carregarInicio, 
    carregarProjetos,
    carregarCadastro
} from "./rotas.js";

const app = document.getElementById("app");
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

// Controle do menu de navegação com suporte a tecnologias assistivas.
menuToggle.addEventListener("click", () => {
    menu.classList.toggle("ativo");

    const menuAberto = menu.classList.contains("ativo");

    menuToggle.setAttribute("aria-expanded", menuAberto);
    menuToggle.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );
});

function rotear() {
    const rota = window.location.hash.substring(1) || "inicio";

    const partes = rota.split("/");

    const rotaPrincipal = partes[0];

    const subrota = partes[1];

    carregarRota(rotaPrincipal); 
    
    if (subrota) {
        const secao = document.getElementById(subrota);
        secao.scrollIntoView({
            behavior: "smooth"
        })
    }
}

rotear()


window.addEventListener("hashchange", rotear);

function carregarRota(rota) {

    app.innerHTML = "";

    if (rota === "inicio") {
        carregarInicio(app);
    } else if (rota === "projetos") {
        carregarProjetos(app);
    } else if (rota === "cadastro") {
        carregarCadastro(app);
    }

}
