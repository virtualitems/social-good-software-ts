module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: 'tests',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/tests/**/*.spec.ts'],
  verbose: true,
};