module.exports = {
  testMatch: ["**/*.(test|spec).(j|t)s?(x)"],
  moduleFileExtensions: ["js", "json", "node", "ts"],
  testEnvironment: "node",
  transform: {
    "^.+\\.ts?$": "babel-jest",
  },
  testPathIgnorePatterns: ["node_moduels"],
  collectCoverageFrom: ["*.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  verbose: false,
};
