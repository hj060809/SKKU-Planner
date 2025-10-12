module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: './coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@admin/(.*)$': '<rootDir>/apps/backend/apps/admin/src/$1',
    '^@client/(.*)$': '<rootDir>/apps/backend/apps/client/src/$1',
    '^@generated$': '<rootDir>/apps/backend/apps/@generated',
    '^@libs/prisma$': '<rootDir>/apps/backend/libs/prisma/src/index.ts',
    '^@libs/exceptions$': '<rootDir>/apps/backend/libs/exceptions/src/index.ts',
    '^@libs/constants$': '<rootDir>/apps/backend/libs/constants/src/index.ts'
  },
  projects: [
    '<rootDir>/apps/backend/apps/admin',
    '<rootDir>/apps/backend/apps/client',
  ],
};
