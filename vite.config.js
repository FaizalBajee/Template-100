// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Set the development server port
    strictPort: true // Exit if the port is already in use, instead of trying the next available port
  },
  preview: {
    port: 8080 // Set the production preview server port
  }
});
