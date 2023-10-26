import { config } from 'dotenv';
import { resolve } from 'path';

const EnvFilePath = resolve(process.cwd(), '.env');

config({ path: EnvFilePath });

export const getEnvVar = (name: string, fallback?: string): string => {
  const value = process.env[name] ?? fallback;

  if (value === undefined) {
    throw new Error(`Environment variable ${name} is not set.`);
  }

  return value;
};
