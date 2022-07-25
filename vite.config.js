import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {dirname} from 'path';
import {fileURLToPath} from 'url';


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: new URL('./index.html', import.meta.url).pathname,
                info: new URL('./info.html', import.meta.url).pathname,
            }
        }
    },
})