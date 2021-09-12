module.exports = {
  extends: ['airbnb', 'airbnb-typescript'],
  env: {
    browser: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'arrow-body-style': ['error', 'as-needed'],

    'max-len': ['error', { ignoreComments: true }],
    'operator-linebreak': [2, 'before', { overrides: { '=': 'after' } }],
    'no-multi-str': 'error',
    'func-names': ['error', 'never'],
  },
};
