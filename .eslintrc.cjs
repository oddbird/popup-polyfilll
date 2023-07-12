module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  settings: {
    'import/resolver': {
      typescript: true,
    },
  },
  rules: {
    'import/order': 0,
    'simple-import-sort/imports': 1,
    'no-warning-comments': [1, { terms: ['todo', 'fixme', '@@@'] }],
  },
};
