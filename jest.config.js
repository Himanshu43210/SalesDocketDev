export default {
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/fileMock.js',
    '\\.(css|less)$': '<rootDir>/test/fileMock.js',
    "\\.(scss|css)$": "identity-obj-proxy"
  },
};
