import dotenv from 'dotenv';
import { ICommandOptions } from './models/command-options';

dotenv.config();

export const config = {
  help: false,
  verbose: process.env.NODE_ENV === 'development',
  port: process.env.LOKI_PORT || 3000,
  cors: process.env.LOKI_CORS || true,
  db: process.env.LOKI_DB || 'rest_easy_loki.db',
  sizeLimit: process.env.LOKI_SIZE_LIMIT || '25mb',
} as ICommandOptions;
