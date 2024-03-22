module.exports = {
  root: true,
  extends: ['@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}
