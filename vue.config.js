module.exports = {
    publicPath: './',
    lintOnSave: false,
    configureWebpack: {
      resolve:{
        extensions:[],
        alias:{
          'assets':'@/assets',
          'common':'@/common',
          'components':'@/components',
          'network':'@/network',
          'views':'@/views',
        }
      }
    }
  }