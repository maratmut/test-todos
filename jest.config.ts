import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Используем ts-jest для обработки файлов TypeScript
  },
  testEnvironment: 'jest-environment-jsdom', // Устанавливаем окружение для тестов
};

export default config;
