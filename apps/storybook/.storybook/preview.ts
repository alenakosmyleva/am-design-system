import type { Preview } from '@storybook/angular';

// Import the compiled theme (Bootstrap + design tokens + overrides)
import '../../../libs/theme/src/theme.tokens.scss';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
      ],
    },
  },
  decorators: [],
};

export default preview;
