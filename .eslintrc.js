module.exports = {
  env: {
    browser: true,
    es2021: true,
	node: 1,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
	quotes: ["error", "double"],
	"indent": [2, "tab"],
        "no-tabs": 0
  },
};