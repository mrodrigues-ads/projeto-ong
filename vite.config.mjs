import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
    root: resolve(import.meta.dirname, "html"),

    base: "./",

    build: {
        outDir: resolve(import.meta.dirname, "dist"),
        emptyOutDir: true,

        rollupOptions: {
            input: {
                index: resolve(import.meta.dirname, "html/index.html"),
                projetos: resolve(import.meta.dirname, "html/projetos.html"),
                cadastro: resolve(import.meta.dirname, "html/cadastro.html")
            }
        }
    }
});