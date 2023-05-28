// https://nuxt.com/docs/api/configuration/nuxt-config
import StyleLintPlugin from 'vite-plugin-stylelint'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

const styleLintConfig = StyleLintPlugin({
  files: ['src/**/*.{vue,scss}'],
  fix: true,
})

const autoImportConfig = AutoImport({
  resolvers: [ElementPlusResolver()],
})

const componentsConfig = Components({
  resolvers: [ElementPlusResolver()],
})

const svgIconsConfig = createSvgIconsPlugin({
  iconDirs: [path.resolve(process.cwd(), 'assets/icons')],
  symbolId: 'icon-[dir]-[name]',
  inject: 'body-first',
  customDomId: '__svg__icons__dom__',
})

export default defineNuxtConfig({
  modules: ['@element-plus/nuxt', '@nuxtjs/eslint-module'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "assets/styles/index.scss" as *;',
        },
      },
    },
    plugins: [autoImportConfig, componentsConfig, styleLintConfig, svgIconsConfig],
  },
  typescript: {
    strict: true,
  },
})
