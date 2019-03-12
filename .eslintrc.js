module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential'
    ],
    rules: {
        "vue/require-v-for-key": 'warn',
        "semi": ["error", "never"],
        "quotes": ["error", "single"],
        'space-before-function-paren': [2, 'never'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    }
}