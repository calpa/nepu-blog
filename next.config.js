const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { NODE_ENV } = process.env;

module.exports = {
  webpack(config) {
    if (NODE_ENV === 'development') {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true,
      }));
    }

    return config;
  },

  assetPrefix: '/nepu-blog',

  exportPathMap() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
    };
  },
};
