module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'html', 'pug', 'prettier'],
  settings: {
    'html / indent': 'tab',
    'html / report-bad-indent': 'error',
    'html / javascript-mime-types': ['text/javascript', 'text/jsx'], // also use script tags with a "text/jsx" type attribute
    // 'html/javascript-mime-types': '/^text\\/(javascript|jsx)$/', // same thing
  },
  rules: {
    'prettier/prettier': 'error',
    'arrow-parens': 0,
    'global-require': 1,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/react-in-jsx-scope': 0,
    'react/sort-comp': 0,
    'react/forbid-prop-types': 0,
    'no-class-assign': 0,
    'no-shadow': 1,
    'no-underscore-dangle': 0,
    'no-unused-vars': 1,
    'object-curly-newline': 0,
    'consistent-return': 1,
    'func-names': 0,
    'import/no-unresolved': 0,
    'import/newline-after-import': 1,
    'class-methods-use-this': 1,
    'prefer-object-spread': 1,
    'valid-typeof': 2,
  },
};
