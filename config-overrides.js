const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components'),
    // '@utils': path.resolve(__dirname, 'src/utils'),
    '@img': path.resolve(__dirname, 'src/img'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
  })
);