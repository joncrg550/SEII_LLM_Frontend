module.exports = {
    extends: [
      'eslint:recommended', // ESLint recommended rules
      'plugin:prettier/recommended', // Prettier plugin
      'plugin:@typescript-eslint/recommended', // TypeScript recommended rules
      'plugin:angular/recommended' // Angular recommended rules
    ],
    rules: {
      // Add or override rules here to match your preferred style practices
      'no-console': 'warn', // Avoid using console.log in production code
      'no-unused-vars': 'warn', // Highlight unused variables
      'no-undef': 'error', // Report undeclared variables as errors
      'no-unused-expressions': 'error', // Prevent unused expressions
      'no-magic-numbers': ['error', { ignore: [-1, 0, 1, 2] }], // Avoid magic numbers
      'no-constant-condition': 'warn', // Highlight potential constant conditions
      'no-empty': 'error', // Disallow empty blocks
      eqeqeq: 'error', // Require strict equality (=== and !==)
      'prefer-const': 'error', // Prefer using const over let when variables don't reassign
      'arrow-body-style': ['error', 'as-needed'], // Use concise arrow function syntax
      'object-shorthand': 'error', // Use object shorthand notation
      'no-var': 'error' // Avoid using var, use let or const
    },
    parserOptions: {
      ecmaVersion: 2021 // or your preferred ECMAScript version
    }
  };