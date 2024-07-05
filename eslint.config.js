"use strict";

// eslint.config.js
const js = require("@eslint/js");
const customPlugin = require("./lib");
const globals = require("globals");

module.exports = [
  js.configs.recommended, // use common recommendation setting
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 12,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      customPlugin,
    },
  },
];
