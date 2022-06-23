/* eslint-disable @typescript-eslint/no-var-requires */
const svgr = require('@svgr/rollup');
const url = require('@rollup/plugin-url');
const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');
module.exports = (config) => {
  nrwlConfig(config);
  return {
    ...config,
    plugins: [
      ...config.plugins,
      url(),
      svgr({
        svgo: false,
        ref: true,
        titleProp: true,
      }),
    ],
  };
};
