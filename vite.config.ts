import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000
    },
    define: {
        'process.env': loadEnv(process.env.NODE_ENV, process.cwd())
    }
});