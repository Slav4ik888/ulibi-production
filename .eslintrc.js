module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'i18next'],
  overrides: [{
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 0
    }
  }],
  ignorePatterns: ['main.*.css', '**/build/css/*.css'],
  rules: {
    semi: 0,
    indent: [2, 2],
    'comma-dangle': 0,
    'react/jsx-indent': [2, 2],
    'key-spacing': 0,
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }],
    'no-unused-vars': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/order': 0,
    'no-multi-spaces': 0,
    'one-var': 0,
    'no-whitespace-before-property': 0,
    'no-irregular-whitespace': 0,
    'object-curly-newline': 0,
    'no-shadow': 0,
    'no-multiple-empty-lines': ['error', {
      max: 3,
      maxEOF: 1,
      maxBOF: 1
    }],
    'no-unneeded-ternary': 0,
    'arrow-parens': 0,
    'max-len': ['error', {
      code: 110,
      ignoreComments: true
    }],
    'no-restricted-globals': 0,
    'react/display-name': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/type-annotation-spacing': 0,
    '@typescript-eslint/brace-style': 0,
    '@typescript-eslint/func-call-spacing': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-empty-function': 0,
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
    'react/jsx-equals-spacing': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-children-prop': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to']
    }]
  },
  globals: {
    __IS_DEV__: true
  }
};
