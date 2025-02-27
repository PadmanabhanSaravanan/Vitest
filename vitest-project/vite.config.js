/// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
    },
  },
});


// /// vite.config.js
// import { defineConfig } from 'vite';

// export default defineConfig({
//   server: {
//       host: '0.0.0.0'
//   },
//   test: {
//     globals: true
//   },
// });