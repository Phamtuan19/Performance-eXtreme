module.exports = {
   extends: ['./config/eslint.base.js'],
   parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: __dirname,
   },
   overrides: [
      {
         files: ['playground/**/*.{ts,tsx,js,jsx}'],
         parserOptions: {
            project: './tsconfig.json',
            tsconfigRootDir: __dirname,
         },
      },
   ],
};
