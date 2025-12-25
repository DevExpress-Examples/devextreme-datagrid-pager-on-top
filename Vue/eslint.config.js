import spellCheck from 'eslint-config-devextreme/spellCheck';
import vueConfig from 'eslint-config-devextreme/vue';
import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['node_modules/**', 'dist/**', 'eslint.config.js', 'stylelint.config.mjs'],
  },
  ...spellCheck,
  ...vueConfig,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
];
