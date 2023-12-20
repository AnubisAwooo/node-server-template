import dotenv from 'dotenv';
import { expand } from 'dotenv-expand';
import path from 'path';
import fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);
const pathsDotenv = resolveApp('env/.env');

dotenv.config({ path: `${pathsDotenv}` });
dotenv.config({ path: `${pathsDotenv}.local` });
dotenv.config({ path: `${pathsDotenv}.${process.env.NODE_ENV ?? 'development'}` });
dotenv.config({ path: `${pathsDotenv}.${process.env.NODE_ENV ?? 'development'}.local` });

expand(dotenv.config());

const config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
};

export default config;
