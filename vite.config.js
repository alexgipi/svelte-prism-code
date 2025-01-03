import { resolve } from 'path'
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  // build: {
  //   lib: {
  //     entry: resolve(__dirname, 'src/lib/main.js'),
  //     name: 'TagsInput',
  //     fileName: 'flexiui-svelte-tags-input',
  //   },
  //   rollupOptions: {
  //     external: ['svelte'],
  //     output: {
  //       globals: {
  //         svelte: 'Svelte',
  //       },
  //     },
  //   },
    
  // },
});