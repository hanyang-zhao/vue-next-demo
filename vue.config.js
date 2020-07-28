module.exports = {
  devServer: {
    open: true
  },
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-next-demo' : '/'
}
