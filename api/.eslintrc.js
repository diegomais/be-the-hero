module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['airbnb-base', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ['prettier', 'jest'],
  rules: {
    // Enable eslint-plugin-prettier that formats content using Prettier
    'prettier/prettier': 'error',
    // Don't enforce that class methods utilize this
    'class-methods-use-this': 'off',
    // Allow reassignment of function parameters (Sequelize needs)
    'no-param-reassign': 'off',
    // Don't require CamelCase
    camelcase: 'off',
    // Allow unused variable for next (Express middlewares needs)
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};
