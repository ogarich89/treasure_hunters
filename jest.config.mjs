export default {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.(js|ts)$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            dynamicImport: true,
          },
          target: 'es2022',
        },
      },
    ],
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^config/(.*)$': '<rootDir>/config/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/config/setup-tests.js'],
  coverageReporters: ['cobertura', 'json-summary'],
};
