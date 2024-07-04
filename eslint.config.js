import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import perfectionist from 'eslint-plugin-perfectionist';
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural';

export default [
  js.configs.recommended,
  perfectionistNatural,
  ...eslintPluginAstro.configs.all,
  {
    plugins: {
      perfectionist,
    },
    rules: {
      'astro/no-set-html-directive': 'off',
      'perfectionist/sort-interfaces': 'error',
    },
    settings: {
      tailwindcss: {
        callees: ['cn', 'cva'],
        config: 'tailwind.config.cjs',
      },
    },
  },
];
