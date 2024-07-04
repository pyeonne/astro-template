/** @type {import("prettier").Config} */
module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  tailwindFunctions: ['cn', 'cva'],
  trailingComma: 'all',
  useTabs: false,
};
