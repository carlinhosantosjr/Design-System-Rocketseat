import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/pages/**/*.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  "addons": [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    "@storybook/addon-interactions",
     "@storybook/addon-a11y",
    "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": '@storybook/react-vite',
    "options": {}
  },
async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.base = '/Design-System-Rocketseat/';
    }
    return config;
  }
};
export default config




