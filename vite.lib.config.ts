import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import dts from 'vite-plugin-dts'
import { cssModulesOptions } from './vite.shared.ts'

const srcDir = fileURLToPath(new URL('./src', import.meta.url))

// 组件库构建配置（library mode）
export default defineConfig({
  plugins: [
    react(),
    // 生成 .d.ts 声明，并把 tsconfig paths 别名（@/）改写为相对路径，供消费者直接使用
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
    modules: cssModulesOptions,
  },
  // 库构建不需要 demo 的 public 资源
  publicDir: false,
  build: {
    lib: {
      entry: path.join(srcDir, 'index.ts'),
      name: 'EndfieldUI',
      fileName: 'endfield-ui',
      formats: ['es'],
    },
    rollupOptions: {
      // 外部化 React，避免重复打包
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
})
