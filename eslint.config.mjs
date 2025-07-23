import next from 'next/eslint';

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      '@next/next': next,
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
    },
    languageOptions: {
      globals: {
        React: 'readonly',
      },
    },
  },
];

export default eslintConfig;