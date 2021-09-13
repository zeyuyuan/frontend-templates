module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // It will slow down the lint performance
    "plugin:promise/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    project: ["./tsconfig.eslint.json"],
    parser: "@typescript-eslint/parser",
    tsconfigRootDir: __dirname,
    extraFileExtensions: [".vue"],
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off", // export default is bad
    "@typescript-eslint/unbound-method": "off", // for useI18n
    "vue/html-button-has-type": "error",
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: false,
      },
    ],
    "vue/custom-event-name-casing": ["error", "camelCase"],
    "vue/valid-define-props": "error",
    "vue/valid-define-emits": "error",
    "vue/v-for-delimiter-style": "error",
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
      },
    },
  },
};
