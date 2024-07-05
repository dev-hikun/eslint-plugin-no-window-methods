const { RuleTester } = require("eslint");
const rule = require("../../lib/rules/no-window-methods");

const ruleTester = new RuleTester({
  languageOptions: {
    parserOptions: {
      ecmaVersion: 12,
    },
  },
});

ruleTester.run("no-window-func-vars", rule, {
  valid: ["let myVar = 1;", "const myFunc = () => {};", "var myVar2 = 2;"],
  invalid: [
    {
      code: "let alert = 1;",
      errors: [
        {
          message: "Variable name 'alert' is a function in the window object.",
        },
      ],
    },
    {
      code: "const confirm = () => {};",
      errors: [
        {
          message:
            "Variable name 'confirm' is a function in the window object.",
        },
      ],
    },
  ],
});
