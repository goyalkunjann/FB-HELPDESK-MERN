// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use the react plugin, which automatically configures esbuild for JSX
export default defineConfig({
    plugins: [react()],
});