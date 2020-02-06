import dotenv from 'dotenv';
import { ICommandOptions } from './models/command-options';

dotenv.config();

export const config = {
  help: false,
  public: './public',
  pretty: process.env.LOKI_PRETTY ? process.env.LOKI_PRETTY : true,
  port: process.env.LOKI_PORT || 3000,
  cors: process.env.LOKI_CORS ? process.env.LOKI_CORS : true,
  io: process.env.LOKI_IO ? process.env.LOKI_IO : true,
  db: process.env.LOKI_DB || 'rest_easy_loki.db',
  sizeLimit: process.env.LOKI_SIZE_LIMIT || '25mb',
} as ICommandOptions;
