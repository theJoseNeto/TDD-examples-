module.exports = {
  roots: ["<rootDir>/src"],
  clearMocks: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    ".+\\.ts$": "ts-jest"
  },
}
