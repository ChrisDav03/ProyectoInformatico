module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom", // Asegúrate de que jsdom esté configurado aquí
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/components/$1",
  },
  roots: ["<rootDir>/src/_test_"],
};
