module.exports = {
   root: true,
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
      project: ['./tsconfig.json'], // nếu dùng TypeScript Project references
      tsconfigRootDir: __dirname,
   },
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   ignorePatterns: [
      'dist',
      'node_modules',
      '*.config.js',
      '*.config.ts',
      '*.slice.ts',
      '.eslintrc.js',
      'additional.d.ts',
   ],
   settings: {
      react: {
         version: 'detect',
      },
      'import/resolver': {
         typescript: {}, // giúp hiểu alias từ tsconfig
      },
   },
   plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import'],
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended', // bao gồm eslint-config-prettier + plugin-prettier
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
      'react/react-in-jsx-scope': 'off', // không cần import React trong React 17+
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
                  pattern: '@PUI/**',
                  group: 'internal',
               },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
            'newlines-between': 'always',
            alphabetize: {
               order: 'asc',
               caseInsensitive: true,
            },
         },
      ],
   },
};
