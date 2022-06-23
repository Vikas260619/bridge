const graphql = require('@rollup/plugin-graphql');
const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');

module.exports = (config) => {
  nrwlConfig(config);
  return {
    ...config,
    plugins: [...config.plugins, graphql()],
  };
};
