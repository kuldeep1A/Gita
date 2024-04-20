import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react({
      include: '**/*.js',
    }),
  ],

  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         if (id.includes('node_modules')) {
  //           return 'nod';
  //         } else if (id.includes('src/components')) {
  //           return 'com';
  //         } else if (id.includes('src/Function')) {
  //           return 'fun';
  //         } else if (id.includes('src/pages')) {
  //           return 'pag';
  //         } else if (id.includes('src/services')) {
  //           return 'ser';
  //         } else if (id.includes('src/Workspace')) {
  //           return 'wor';
  //         } else {
  //           return 'app';
  //         }
  //       },
  //     },
  //   },
  // },
});
