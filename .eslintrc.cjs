module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    'global-require': 'off',
    'no-underscore-dangle': 'off',
    'import/extensions': 'off',
    camelcase: 'off',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './']],
        extensions: ['.js', '.jsx', '.vue'],
      },
    },
  },
}
