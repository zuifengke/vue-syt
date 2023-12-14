import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 给src文件设置别名为 @
  resolve: {
    alias: {
     "@": path.resolve(__dirname, 'src')
    }
   }
})
