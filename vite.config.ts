import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  clearScreen: false,
  server: {
    strictPort: true,
    port: 3000,
  },
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    target: ['es2021', 'chrome100', 'safari13'],
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
    sourcemap: !!process.env.TAURI_DEBUG,
  },
  plugins: [
    solidPlugin(),
    WindiCSS({
      scan: {
        fileExtensions: ['html', 'js', 'ts', 'jsx', 'tsx'],
      },
    }),
  ],
});
