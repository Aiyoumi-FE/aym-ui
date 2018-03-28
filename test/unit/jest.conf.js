const path = require('path')

module.exports = {
    rootDir: path.resolve(__dirname, '../../'),
    moduleFileExtensions: [
        'js',
        'json',
        'vue'
    ],
    moduleNameMapper: {
        // '^vue$': 'vue/dist/vue.common.js',
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
        '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(picker.)(spec|test).js?(x)'],

    testPathIgnorePatterns: [
        '<rootDir>/test/e2e'
    ],
    snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
    setupFiles: ['<rootDir>/test/unit/setup'],
    // collectCoverage: true,
    coverageDirectory: '<rootDir>/test/unit/coverage',
    collectCoverageFrom: [
        // 'src/**/*.{js,vue}',
        'src/**/*.{vue}',
        '!src/index.js',
        '!src/libs/router.js',
        '!src/router/index.js',
        '!**/node_modules/**'
    ]
}
