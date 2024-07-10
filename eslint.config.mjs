import antfu from '@antfu/eslint-config'
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu({ formatters: true, stylistic: true },
  ...tailwind.configs['flat/recommended'],
  {
    name: 'wd/base',
    rules: {
      'antfu/top-level-function': 'off',
      'curly': ['error', 'all'],
      'node/prefer-global/process': 'off',
      'style/function-call-spacing': ['error', 'never'],
      'antfu/consistent-list-newline': 'off',
    },
  },
  {
    name: 'wd/vue',
    files: ['**/*.vue'],
    rules: {
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/html-self-closing': ['warn', {
        html: {
          void: 'always',
          normal: 'never',
        },
      }],
      'vue/max-attributes-per-line': ['error', {
        singleline: { max: 10 },
        multiline: { max: 1 },
      }],
      'vue/multi-word-component-names': 'warn',
      'vue/singleline-html-element-content-newline': 'off',
    },
  },
  {
    name: 'wd/perfectionist',
    rules: {
      'import/order': 'off', // handled by perfectionist
      'sort-imports': 'off', // handled by perfectionist
      'perfectionist/sort-imports': perfectionistNatural.rules['perfectionist/sort-imports'],
      'perfectionist/sort-exports': perfectionistNatural.rules['perfectionist/sort-exports'],
      'perfectionist/sort-named-imports': perfectionistNatural.rules['perfectionist/sort-named-imports'],
      'perfectionist/sort-named-exports': perfectionistNatural.rules['perfectionist/sort-named-exports'],
    },
  },
  {
    name: 'wd/tailwind',
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  },
)
