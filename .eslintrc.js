module.exports = {
   root: true,
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
      project: ['./tsconfig.base.json'],
      tsconfigRootDir: __dirname,
   },
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   ignorePatterns: [
      'dist/',
      'node_modules/',
      '*.config.js',
      '*.config.ts',
      '*.slice.ts',
      '.eslintrc.js',
      'additional.d.ts',
   ],
   settings: {
      react: { version: 'detect' },
      'import/resolver': {
         typescript: {
            project: ['./tsconfig.base.json'],
         },
      },
   },
   plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import'],
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
   ],
   overrides: [
      {
         files: ['*.js', '*.jsx'],
         parserOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
         },
         extends: ['prettier'],
      },
   ],
   rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      'react/prop-types': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'import/order': [
         'warn',
         {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            pathGroups: [
               {
                  pattern: '@px-ui/**',
                  group: 'internal',
               },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
            'newlines-between': 'always',
            alphabetize: { order: 'asc', caseInsensitive: true },
         },
      ],
      '@typescript-eslint/consistent-type-imports': [
         'error',
         {
            prefer: 'type-imports',
            disallowTypeAnnotations: false,
         },
      ],
   },
};
