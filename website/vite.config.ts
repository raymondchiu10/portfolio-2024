import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src")
      },
      {
        // this is required for the SCSS modules
        find: /^~(.*)$/,
        replacement: "$1"
      }
    ]
  },
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    strictPort: true,
    port: 8080 // This is the port which we will use in docker
  }
})
