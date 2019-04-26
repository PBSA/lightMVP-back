module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "legacyDecorators": true
    }
  },
  "extends": ["standard"],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "no-throw-literal": "off",
    "operator-assignment": "off",
    "no-unused-vars": [
      "error", {
        "vars": "all",
        "args": "after-used"
      }
    ],
    "comma-dangle": "error",
    "indent": [
      "error",
      2, {
        "SwitchCase": 1
      }
    ],
    "quotes": [
      "error", "single"
    ],
    "no-console": "off",
    "camelcase": "off",
    "object-curly-spacing": [
      "error", "never"
    ],
    "prefer-const": "off",
    "no-trailing-spaces": "error",
    "no-underscore-dangle": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-useless-escape": "off",
    "no-restricted-properties": "off",
    "consistent-return": "off",
    "guard-for-in": "off",
    "no-loop-func": "off",
    "curly": [
      "error", "all"
    ],
    "brace-style": [
      "error", "1tbs"
    ],
    "default-case": "error",
    "prefer-destructuring": "off",
    "padding-line-between-statements": [
      "error", {
        "blankLine": "always",
        "prev": "*",
        "next": "block-like"
      }, {
        "blankLine": "always",
        "prev": "block-like",
        "next": "*"
      }
    ],
    "max-len": [
      "error", {
        "code": 150
      }
    ],
    "implicit-arrow-linebreak": [
      "error", "beside"
    ],
    "no-control-regex": "off",
    "arrow-parens": ["error", "always"]
  }
}
