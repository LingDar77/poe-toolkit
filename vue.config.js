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
      builderOptions:
      {
        appId: "com.LingDar77.app",
        productName: "PoeToolkit",
        copyright: "Copyright © 2022",

        win:
        {
          icon: 'src/assets/logo.ico',
        }, nsis: {
          oneClick: false,
          allowElevation: true,
          allowToChangeInstallationDirectory: true,
          // installerIcon: "./shanqis.ico",
          // uninstallerIcon: "./shanqis.ico",
          // installerHeaderIcon: "./shanqis.ico", 
          createStartMenuShortcut: true,
          createDesktopShortcut: true,
          shortcutName: "PoeToolkit",
        },
        extraResources: {
          from: './public/assets',
          to: './'
        },
        target: [
          {
            target: "nsis",
            arch: [
              "x64"
            ]
          }
        ]
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
      }),
    ]
  },
  publicPath: './',

})
