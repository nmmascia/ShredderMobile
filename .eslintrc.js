
module.exports = {
  parser: 'babel-eslint',
  env: {
    'react-native/react-native': true,
  },
  plugins: [
    'react',
    'react-native',
    'react-native-a11y',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:react-native-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {
    'class-methods-use-this': [2, {
      exceptMethods: ['render'],
    }],
    'no-use-before-define': [2, {
      functions: true,
      classes: true,
      variables: false,
    }],
  },
  overrides: [{
    files: ['**/*.test.js'],
    env: { jest: true },
  }],
}
