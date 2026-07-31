import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

const srcDir = fileURLToPath(new URL('./src', import.meta.url))

// demo 开发预览配置
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': srcDir,
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: (local: string, path: string) => {
        const dirs = path.split('/');
        const name = dirs.pop()!.replace(/\.module\.css$/, '');
        const folder = dirs.pop()!;

        if (name === 'variables') {
          return `efui-${folder}-variables`;
        }
        if (name === 'variants') {
          return `efui-${folder}--${local}`;
        }
        return `efui-${name}__${local}`;
      },
    },
  },
})
