import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/php-core-notes/",
    plugins: [react()],

    define: {
        __APP_BUILD_ISO__: JSON.stringify(new Date().toISOString()),
    },

    build: {
        sourcemap: false,
        target: "es2019",
    },

    css: {
        devSourcemap: false,
    },
});
