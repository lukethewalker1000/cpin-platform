import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
// import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
        defineModel: true,
        // propsDestructure: true,
      },
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['w3m-button', 'w3m-network-button'].includes(tag),
        },
      },
    }),
    vueJsx(),
    svgLoader({
      defaultImport: 'url',
    }),
    /*Components({
      dirs: ['src/components/cards'],
      dts: 'src/unplugin.components.d.ts',
    }),*/
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    include: ['fast-deep-equal'],
  },
});
