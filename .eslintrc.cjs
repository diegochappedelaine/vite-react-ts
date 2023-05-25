module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  overrides: [
    {
      files: ['*.spec.tsx'],
      extends: ['plugin:testing-library/react', 'plugin:vitest/recommended'],
      rules: {
        'vitest/consistent-test-it': ['warn'],
        'vitest/no-test-return-statement': ['warn'],
        'vitest/require-top-level-describe': ['warn'],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['jsx-a11y', 'react-refresh', 'testing-library', 'vitest'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
  settings: {
    react: { version: 'detect' },
  },
};
