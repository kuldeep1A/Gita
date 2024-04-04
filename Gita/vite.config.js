import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react({
      include: '**/*.js',
    }),
  ],
  define: {
    process_env: {},
  },
});
