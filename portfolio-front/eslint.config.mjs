import js from "@eslint/js";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";

export default [
  // 1. Global Ignores (must be its own object to apply globally)
  {
    ignores: [".next/**", "out/**", "build/**", "node_modules/**"],
  },

  // 2. Base Javascript & TypeScript Recommended Rules
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 3. React & Next.js Core Web Vitals
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      "@next/next": nextPlugin,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      // Custom rule overrides
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
    settings: {
      react: {
        version: "detect", // Automatically detects your React 19 version
      },
    },
  },

  // 4. Prettier Override (must always be placed last)
  prettierConfig,
];