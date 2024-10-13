import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules:{
      "react/jsx-uses-react": "off",
      "react/prop-types": 0,
      "no-unused-vars": "warn",           // Warns on unused variables instead of erroring
      "react/jsx-filename-extension": [1, { extensions: [".jsx", ".js"] }], // Allows JSX in both .js and .jsx files
      "react/react-in-jsx-scope": "off",  // Turns off the rule requiring React to be in scope when using JSX (for React 17+)
      "no-console": "warn",               // Warns when console.log is used
      "no-debugger": "error",             // Errors when debugger is used

   },
  }


];