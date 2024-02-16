module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },

  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  plugins: ["svg-jsx"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "svg-jsx/camel-case-dash": "error",
    "svg-jsx/camel-case-colon": "error",
    "svg-jsx/no-style-string": "error",
  },
};
