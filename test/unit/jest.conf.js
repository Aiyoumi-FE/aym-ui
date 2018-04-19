const path = require('path')

module.exports = {
    // roots: ['<rootDir>/', '<rootDir>/src/', '<rootDir>/test/unit/'],
    roots: ['<rootDir>/', '<rootDir>/test/unit/'],
    rootDir: path.resolve(__dirname, '../../'),
    moduleFileExtensions: [
        'js',
        'json',
        'vue'
    ],
    moduleNameMapper: {
        '^vue$': 'vue/dist/vue.common.js',
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
        '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
    },
    // testMatch: ['**/__tests__/**/*.js?(x)', '**/?(modal.)(spec|test).js?(x)'],

    testPathIgnorePatterns: [
        '<rootDir>/test/e2e'
    ],
    snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
    setupFiles: ['<rootDir>/test/unit/setup'],
    // collectCoverage: true,
    coverageDirectory: '<rootDir>/test/unit/coverage',
    collectCoverageFrom: [
        // 'src/**/*.{js,vue}',
        'src/**/*.{js,vue}',
        '!src/index.js',
        '!src/modules.js',
        '!src/components/**/*.js',
        '!src/libs/router.js',
        '!src/router/index.js',
        '!**/node_modules/**'
    ],

    "globals": {
        "vue-jest": {
            "hideStyleWarn": true,
            "experimentalCSSCompile": true
        }
    }
}
