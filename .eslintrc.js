module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "next/core-web-vitals",
  ],
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "testing-library"],
  rules: {
    "react/prop-types": 0,
  },
};

/* "paths": {
      "@public/*": ["public/*"],
      "@common/*": ["src/common/*"],
      "@api/*": ["src/common/Api/*"],
      "@components/*": ["src/common/Components/*"],
      "@redux/*": ["src/common/Redux/*"],
      "@styles/*": ["src/common/Styles/*"],
      "@utils/*": ["src/common/Utils/*"],
      "@modules/*": ["src/modules/*"],
      "@pages/*": ["src/pages/*"]
    }, */
