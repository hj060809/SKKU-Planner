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
    '^@admin/(.*)$': './apps/admin/src/$1',
    '^@client/(.*)$': './apps/client/src/$1',
    '^@generated$': './apps/@generated',
    '^@libs/prisma$': './libs/prisma/src/index.ts',
    '^@libs/exceptions$': './libs/exceptions/src/index.ts',
    '^@libs/constants$': './libs/constants/src/index.ts'
  },
  projects: [
    './apps/admin',
    './apps/client',
  ],
};
