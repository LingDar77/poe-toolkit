const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  pluginOptions: {
    electronBuilder: {
      preload: './src/preload.ts',
      customFileProtocol: './',
      builderOptions:
      {
        win:
        {
          icon: 'public/logo.ico',
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      })
    ]
  },
  publicPath: './'
})
