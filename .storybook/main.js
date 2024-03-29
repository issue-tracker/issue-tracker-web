const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['./public'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  staticDirs: ['./public'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },

  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src/');

    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push(
      {
        test: /\.svg/,
        type: 'asset/inline',
        resourceQuery: /inline/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: {
          loader: '@svgr/webpack',
        },
        resourceQuery: { not: [/inline/] },
      },
    );

    return config;
  },
};
