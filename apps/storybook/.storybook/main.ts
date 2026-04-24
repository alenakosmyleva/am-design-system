import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(ts)',
    '../../../libs/core/src/**/*.stories.@(ts)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  staticDirs: [],
  webpackFinal: async (config) => {
    // Ensure SCSS is processed and theme.tokens.scss is available
    config.module?.rules?.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [
                // Allow bare bootstrap imports
                'node_modules',
              ],
            },
          },
        },
      ],
    });
    return config;
  },
};

export default config;
