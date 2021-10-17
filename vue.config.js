module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/cat-shop/'
    : '/',
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'Cat shop';
      return args;
    })
  }
}