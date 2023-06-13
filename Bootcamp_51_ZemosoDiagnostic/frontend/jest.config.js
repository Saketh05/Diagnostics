module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.{js,jsx,ts,tsx}",
    "!src/Theme/theme.tsx",
    "!src/App.tsx",
    "!src/index.tsx",
    "!src/Constants.tsx",
    "!src/components/templates/**",
    "!src/components/pages/**",
    "!src/store/Store.tsx",
    "!src/utils/Utils.tsx",
    "!src/api-service/**"
  ],
  transform: {
    ".+\\.(css|scss|png|jpg|svg|webp)$": "jest-transform-stub",
  },
  resetMocks: true,
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/__mocks__/fileMock.ts",
  },
};
