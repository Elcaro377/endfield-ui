import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import dts from 'vite-plugin-dts'

const srcDir = fileURLToPath(new URL('./src', import.meta.url))

// 组件库构建配置（library mode）
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      include: ['src'],
      exclude: ['src/demo'],
    }),
  ],
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
    }
  },
  publicDir: false,
  build: {
    lib: {
      entry: path.join(srcDir, 'index.ts'),
      name: 'EndfieldUI',
      fileName: 'endfield-ui',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
})
