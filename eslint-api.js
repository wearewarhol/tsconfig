module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser

  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],

  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    project: "./tsconfig.json",
  },

  rules: {
    // Rules for ts
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/object-literal-key-quotes": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",

    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};
