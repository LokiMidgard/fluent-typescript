module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'semi': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'quotes': ['error', 'single'],
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'object-shorthand': ['error', 'always'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': ['error', {
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
      multiline: {
          delimiter: 'none',
          requireLast: true,
      },
    }],
  },
}
