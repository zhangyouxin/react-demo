module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.test.{ts,tsx}'],
}
