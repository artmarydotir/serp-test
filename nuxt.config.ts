import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  ssr: false,
  css: [
    '@/assets/main.scss',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@aasaam/noto-font/dist/font-face.modern.css',
  ],
  build: {
    transpile: ['vuetify', /echarts/],
  },
  typescript: {
    strict: true,
    typeCheck: true,
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
    // ts-ignore is required to get around this
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        config.plugins.push(vuetify()),
      );
    },
  ],
});
