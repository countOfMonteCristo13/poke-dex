module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "tailwindcss",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "react", "prettier"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "@typescript-eslint/comma-dangle": 0,
    "react/function-component-definition": 0,
    "react/prop-types": 0,
    "@typescript-eslint/lines-between-class-members": 0,
    "no-plusplus": 0,
    "@typescript-eslint/no-explicit-any": 0,
  },
};
