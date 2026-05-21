import { defineConfig, env } from 'prisma/config';
import path from 'path';
import dotenv from 'dotenv';

// Explicitly point to the .env file at the monorepo root
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: env('DATABASE_URL'),
  },
});  