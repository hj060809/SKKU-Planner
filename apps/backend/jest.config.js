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
    '^@admin/(.*)$': './apps/backend/apps/admin/src/$1',
    '^@client/(.*)$': './apps/backend/apps/client/src/$1',
    '^@generated$': './apps/backend/apps/@generated',
    '^@libs/prisma$': './apps/backend/libs/prisma/src/index.ts',
    '^@libs/exceptions$': './apps/backend/libs/exceptions/src/index.ts',
    '^@libs/constants$': './apps/backend/libs/constants/src/index.ts'
  },
  projects: [
    './apps/backend/apps/admin',
    './apps/backend/apps/client',
  ],
};
