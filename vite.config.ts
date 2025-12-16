import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8084',
        changeOrigin: true
      }
    }
  },
  build: {
    // 将前端构建输出到后端的static目录
    outDir: path.resolve(__dirname, '../src/main/resources/static'),
    // 确保资源路径正确
    assetsDir: 'assets',
    // 确保index.html中的资源引用正确
    emptyOutDir: true
  }
})
