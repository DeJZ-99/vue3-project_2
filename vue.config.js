const { defineConfig } = require('@vue/cli-service')

// vant 按需引入
// const { VantResolver } = require('unplugin-vue-components/resolvers');
// const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //不检测组件引入未使用
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('postcss-pxtorem')({
              rootValue: 37.5,
              propList: ['*']
            }),
          ]
        }
      }
    }
  },
  // vant 按需引入
  // configureWebpack: {
  //   plugins: [
  //     ComponentsPlugin({
  //       resolvers: [VantResolver()],
  //     }),
  //   ],
  // },
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
  }
})
