const env = process.env.NODE_ENV;

module.exports = {
  baseUrl: env === env === 'test' || 'production' ? './' : '/',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
};
