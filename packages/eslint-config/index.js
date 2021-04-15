module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: [
    "react",
    "prettier",
    "react-hooks",
    "import",
    "jest",
    "eslint-plugin-import-helpers",
  ],
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    "jest/globals": true,
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always",
      },
    ],
    "react/self-closing-comp": [
      "warn",
      {
        component: true,
        html: true,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "prettier/prettier": "error",
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
      ],
      plugins: ["@typescript-eslint"],
      rules: {
        quotes: ["warn", "single"],
        semi: "warn",
        "react/prop-types": "off",
        "no-shadow": "off",
        "no-multi-assign": "off",
        "no-restricted-syntax": "off",
        "max-len": ["error", { code: 130, tabWidth: 2 }],
        "max-lines": ["error", { max: 350, skipComments: true }],
        "brace-style": [2, "1tbs", { allowSingleLine: true }],
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": ["error", "always"],
        "arrow-spacing": "error",
        "implicit-arrow-linebreak": ["error", "beside"],
        "no-confusing-arrow": "error",
        "import/no-unresolved": "off",
        "import/default": "off",
        "import/order": "off",
        "import-helpers/order-imports": [
          "warn",
          {
            newlinesBetween: "always",
            groups: [
              "/^react$/",
              "/^next//",
              "module",
              "/^~/",
              ["parent", "sibling", "index"],
            ],
            alphabetize: { order: "asc", ignoreCase: false },
          },
        ],
        "padding-line-between-statements": [
          "warn",
          { blankLine: "always", prev: "*", next: "return" },
          { blankLine: "any", prev: "directive", next: "directive" },
          { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
          {
            blankLine: "any",
            prev: ["const", "let", "var"],
            next: ["const", "let", "var"],
          },
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-inferrable-types": 1,
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/naming-convention": [
          "warn",
          {
            selector: "interface",
            format: ["PascalCase"],
            custom: { regex: "(Props)$", match: true },
          },
        ],
      },
    },
  ],
};
