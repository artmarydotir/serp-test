import path from 'path';
import { defineConfig } from 'vitest/config';
import { alias } from './alias';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    // environment: 'node',
    deps: {
      inline: ['vuetify', /@nuxt\/test-utils-edge/],
    },

    // setupFiles: ['./.nuxt/imports.d.ts'],

    // setupFiles: 'vuetify.config.js',
    // setupFiles: ['tests/setup.ts'],
  },
  define: {
    // 'process.env': {},
    ssr: { noExternal: ['vuetify'] },
  },

  include: ['**/*.spec.ts'],

  plugins: [vue(), vuetify()],
  // resolve: {
  //   alias: [
  //     {
  //       '~': fileURLToPath(new URL('./', import.meta.url)),
  //     },
  //   ],
  // },

  // resolve: {
  //   alias: [
  //     {
  //       find: '@forward',
  //       replacement: path.resolve(__dirname, 'node_modules/vuetify/lib/styles'),
  //     },
  //   ],
  // },

  resolve: {
    alias,
  },
});
