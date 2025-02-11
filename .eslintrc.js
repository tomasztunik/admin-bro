module.exports = {
    'parser': '@typescript-eslint/parser',
    'plugins': ['@typescript-eslint'],
    'env': {
        'es6': true,
        'node': true,
        'mocha': true
    },
    'extends': [
        'airbnb',
        'plugin:@typescript-eslint/recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'rules': {
        "react/jsx-filename-extension": 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'import/no-unresolved': 'off',
        'no-underscore-dangle': 'off',
        'guard-for-in': 'off',
        'no-restricted-syntax': 'off',
        'no-await-in-loop': 'off',
        'object-curly-newline': 'off',
        'import/extensions': 'never'
    },
    overrides: [
        {
          files: [
              '*-test.js',
              '*.spec.js',
              '*-test.ts',
              '*.spec.ts',
              '*.spec.tsx',
              '*.factory.ts',
              '*.factory.js'
          ],
          rules: {
            'no-unused-expressions': 'off',
            'func-names': 'off',
            'prefer-arrow-callback': 'off',
            'import/no-extraneous-dependencies': 'off',
          },
        },
        {
            files: ['*.jsx'],
            rules: {
              "@typescript-eslint/explicit-function-return-type": 'off'
            }
        },
        {
            files: ['*.tsx'],
            rules: {
              "react/prop-types": 'off'
            }
        }
    ],
    globals: {
        'expect': true,
        'factory': true,
        'sandbox': true,
        'server': true,
        'window': true,
        'AdminBro': true,
        'flatpickr': true,
        'Quill': true,
        'FormData': true,
    }
}