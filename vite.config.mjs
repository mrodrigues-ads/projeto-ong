import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
    base: "./",
    
    input: {
        index: resolve(import.meta.dirname, "html/index.html"),
        projetos: resolve(import.meta.dirname, "html/projetos.html"),
        cadastro: resolve(import.meta.dirname, "html/cadastro.html")
    },

    build: {
        outDir: "dist",
        emptyOutDir: true
    }
});