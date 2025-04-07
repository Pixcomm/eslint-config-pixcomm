module.exports = {
  env: {
    node: true, // Ambiente Node.js
    es2023: true, // Suporte a ES2023 (compatível com Node 20)
  },
  extends: [
    'eslint:recommended', // Regras recomendadas do ESLint
    'plugin:node/recommended', // Regras para Node.js
    'plugin:@typescript-eslint/recommended', // Regras para TypeScript
    'plugin:prettier/recommended', // Integração com Prettier
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest', // ES2023 em 2025
    sourceType: 'module', // ES Modules nativos
  },
  plugins: [
    'node', // Plugin Node.js
    '@typescript-eslint', // Plugin TypeScript
  ],
  rules: {
    // Integração Prettier
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
      },
    ],

    // Regras gerais
    'no-console': 'warn',
    'no-unused-vars': 'off', // Desativado pois @typescript-eslint tem sua própria versão
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'eqeqeq': 'error',
    'curly': 'error',

    // Regras específicas para Node.js 20
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        version: '>=20.0.0',
        ignores: ['modules'],
      },
    ],
    'node/no-missing-import': 'off', // ES Modules nativos
    'no-process-exit': 'off', // Útil em Serverless

    // Regras TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Flexibilidade em Serverless
    '@typescript-eslint/no-explicit-any': 'warn', // Apenas aviso para 'any'

    // Recursos modernos
    'prefer-const': 'error',
    'no-var': 'error',
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
  overrides: [
    {
      // Para arquivos Serverless
      files: ['serverless.yml', 'serverless.*.yml'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      // Para testes
      files: ['*.test.ts', '*.spec.ts'],
      env: {
        jest: true,
      },
      rules: {
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
      },
    },
  ],
};
