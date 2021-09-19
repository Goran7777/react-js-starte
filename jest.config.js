module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  setupFiles: ['raf/polyfill'],
  testRegex: '/__tests__/.*\\.(jsx|js)$',
  moduleNameMapper: {
    '^.+\\.(s?css|jpg|png|svg|gif)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  snapshotSerializers: [],
};
