module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.3' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    // The site copy is Italian and full of apostrophes ("dell'evento").
    // ' and " render fine in JSX text; only > and } are real mistakes
    // (a stray tag end or expression brace), so only those are flagged.
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    // propTypes are runtime checks React 19 removes; this project never
    // used them. Typing props belongs to TypeScript if we add it later.
    'react/prop-types': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
