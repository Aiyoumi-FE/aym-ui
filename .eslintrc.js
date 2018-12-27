// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    // extends: ['standard', 'plugin:vue/base'],
    extends: 'standard',
    // required to lint *.vue files
    "plugins": [
        "vue"
    ],
    // add your custom rules here
    'rules': {
        "space-before-function-paren": [2, "never"],
        "no-useless-escape": 0,
        "no-use-before-define": 0,
        "no-unused-vars": [0, {
            "varsIgnorePattern": "[iI]gnored|rem"
        }],
        "no-new": 0,
        "handle-callback-err": 0,
        "camelcase": [2, { // http://eslint.org/docs/rules/camelcase
            "properties": "never"
        }],
        // enable additional rules
        indent: ['error', 4, {
            SwitchCase: 1,
            "VariableDeclarator": {
                "var": 2,
                "let": 2,
                "const": 3
            },
            outerIIFEBody: 1
        }],
        "linebreak-style": 0, // ["warn", "windows"],
        "quotes": ["error", "single", { "allowTemplateLiterals": true }],
        "semi": ["error", "never"],
        "eqeqeq": [0, "allow-null"],
        "operator-linebreak": [0, "before"],
        //"no-extra-semi": ["error"],
        // override default options for rules from base configurations
        "comma-dangle": ["error", "never"],
        "no-cond-assign": ["error", "always"],
        // allow paren-less arrow functions
        'arrow-parens': 0,
        "arrow-body-style": [0, "always"],
        "prefer-promise-reject-errors": ["error", { "allowEmptyReject": true }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}