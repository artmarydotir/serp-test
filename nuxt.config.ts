import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  css: [
    '@/assets/main.scss',
    '@mdi/font/css/materialdesignicons.min.css',
    '@aasaam/noto-font/dist/font-face.modern.css',
  ],
  build: {
    transpile: ['vuetify', /echarts/],
  },

  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    define: {
      'process.env.DEBUG': 'false',
    },
  },
  modules: [
    // this adds the vuetify vite plugin
    // also produces type errors in the current beta release
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        config.plugins.push(vuetify()),
      );
    },
  ],
});
