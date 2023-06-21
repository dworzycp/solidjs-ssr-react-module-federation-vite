import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "remoteApp",
            filename: "remoteEntry.js",
            exposes: {
                './Nav': './src/components/Nav'
            },
            shared: ['react', 'react-dom']
        })
    ],
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false
    }
})
