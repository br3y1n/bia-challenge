import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    setupFiles: "__tests__/setup.ts",
    environment: "jsdom",
    globals: true,
    include: ["__tests__/**/*.test.{ts,tsx,js,jsx}"],
    reporters: ["verbose"],
    coverage: {
      enabled: true,
      provider: "v8",
      all: true,
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/**/*.type.{ts,tsx}",
        "src/**/*.interface.{ts,tsx}",
        "src/**/index.ts",
      ],
      thresholds: {
        lines: 92,
        functions: 92,
        statements: 92,
        branches: 92,
      },
      reporter: ["html", "text", "text-summary"],
    },
  },
});
