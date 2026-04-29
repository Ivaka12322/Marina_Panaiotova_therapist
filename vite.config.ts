import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'skip-broken-files',
      apply: 'build',
      closeBundle() {
        try {
          const copyFile = path.join(__dirname, 'dist', 'image copy.png');
          if (fs.existsSync(copyFile)) {
            fs.unlinkSync(copyFile);
          }
        } catch (e) {
          // Ignore errors
        }
      },
    },
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
