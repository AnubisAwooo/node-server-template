import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname, `../../env/.env.${process.env.NODE_ENV}`),
});

const config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
};

export default config;
