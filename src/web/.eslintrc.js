module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'airbnb-base'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    'jquery': 'readonly',
    'fancytree': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'new-cap': 'warn',
    'no-unused-vars': 'warn',
    'no-new': 'warn',
  },
};
