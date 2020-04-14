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
    '_': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'new-cap': 'off',
    'no-unused-vars': 'off',
    'no-new': 'off',
    'max-len': 'off',
    'no-console': 'off',
  },
};
