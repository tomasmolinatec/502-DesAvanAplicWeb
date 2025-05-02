export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }]
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleNameMapper: {
    '^react$': 'react',
    '^react-dom$': 'react-dom'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // 💡 esto es clave para `toBeInTheDocument`
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
      useESM: true
    }
  }
};
