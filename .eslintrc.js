module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  plugins: ["prettier", "react"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-console": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-param-reassign": 0,
  },
  overrides: [
    {
      files: "**/*.test.js",
      env: {
        jest: true,
      },
    },
  ],
};
