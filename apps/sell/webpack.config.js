const nrwlConfig = require('@nrwl/react/plugins/webpack.js'); // require the main @nrwl/react/plugins/webpack configuration function.

module.exports = (config, context) => {
  nrwlConfig(config);

  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          use: '@graphql-tools/webpack-loader',
        },
      ],
    },
    node: {
      ...config.node,
      global: true,
    },
  };
};
