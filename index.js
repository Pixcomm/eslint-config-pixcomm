module.exports = {
  "env": {
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 6
  },
  "globals": {},
  "rules": {
    "no-bitwise": 0,
    "curly": [
      2,
      "all"
    ],
    "eqeqeq": 2,
    "no-extend-native": 2,
    "block-scoped-var": 2,
    "no-use-before-define": 1,
    "complexity": 0,
    "max-depth": 0,
    "max-params": 0,
    "max-statements": 0,
    "no-caller": 2,
    "no-irregular-whitespace": 2,
    "no-new": 2,
    "no-plusplus": 0,
    "no-extra-parens": 2,
    "strict": [
      2,
      "global"
    ],
    "no-unused-vars": [2, {"args": "none"}],
    "no-var": 0,
    "semi": [
      2,
      "always"
    ],
    "valid-jsdoc": [1, {
        "requireReturn": false
    }],
    "no-cond-assign": 0,
    "no-debugger": 0,
    "no-sparse-arrays": 0,
    "no-eq-null": 2,
    "no-eval": 0,
    "no-unused-expressions": 0,
    "no-iterator": 0,
    "no-loop-func": 0,
    "valid-typeof": 0,
    "no-proto": 0,
    "no-script-url": 0,
    "no-shadow": 2,
    "no-new-func": 0,
    "no-new-wrappers": 0,
    "no-invalid-this": 0,
    "no-with": 0,
    "dot-notation": 0,
    "no-multi-spaces": 2,
    "no-trailing-spaces": 2,
    "no-mixed-spaces-and-tabs": 2,
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "max-len": 0,
    "no-multiple-empty-lines": 2,
    "no-multi-str": 2,
    "quotes": [
      2,
      "single"
    ],
    "no-implicit-coercion": [
      2,
      {
        "number": true,
        "boolean": true
      }
    ],
    "consistent-this": [
      2,
      "_this"
    ],
    "keyword-spacing": [
      2,
      {}
    ],
    "brace-style": 2,
    "one-var": [
      2,
      "never"
    ],
    "newline-after-var": [
      0,
      "always"
    ],
    "semi-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "comma-dangle": [
      2,
      "never"
    ],
    "comma-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      2,
      "last"
    ],
    "space-in-parens": [
      2,
      "never"
    ],
    "wrap-iife": 0,
    "space-infix-ops": 2,
    "space-unary-ops": [
      2,
      {
        "words": false,
        "nonwords": false
      }
    ],
    "operator-linebreak": [
      2,
      "after"
    ],
    "no-nested-ternary": 2,
    "yoda": [
      2,
      "never"
    ],
    "func-style": [
      2,
      "declaration"
    ],
    "no-restricted-syntax": 0,
    "new-cap": [ 2,
    {
    	"newIsCap": true,
    	"capIsNew": false,
    	"properties": false
    }],
    "space-before-function-paren": [
      2,
      "never"
    ],
    "no-spaced-func": 2,
    "no-empty": 0,
    "space-before-blocks": [
      2,
      "always"
    ],
    "padded-blocks": [
      2,
      "never"
    ],
    "key-spacing": [
      2,
      {
        "beforeColon": false,
        "afterColon": true
      }
    ]
  }
};
